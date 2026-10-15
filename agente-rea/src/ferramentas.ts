import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { betaZodTool } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";

// Pacote oficial, sempre rodado via npx: nada é instalado nem registrado no agente.
const PACOTE_REA = "rea-agents@latest";

// Só comandos que leem ou analisam. Ficam de fora os que mudam o sistema
// (setup, uninstall, update, install-adb-package, push-adb-file...) e os que
// executam código arbitrário (debug-with-gdb, instrument-with-frida...).
export const COMANDOS_PERMITIDOS = [
  "doctor",
  "capabilities",
  "analyze",
  "inspect",
  "inspect-artifact",
  "analyze-javascript-application",
  "analyze-web-bundle",
  "export-web-scripts",
  "recover-javascript-sources",
  "inspect-analysis-view",
  "trace-javascript-semantics",
  "trace-application-feature",
  "compare-application-versions",
  "inspect-web-page",
  "capture-web-screenshot",
  "compare-web-screenshots",
  "discover-webmcp-tools",
  "list-browser-targets",
  "inspect-web-network-capture",
  "trace-web-module-imports",
  "search",
  "trace",
] as const;

// Limite do texto devolvido ao modelo, para um JSON enorme não lotar o contexto.
const MAX_CARACTERES = 60_000;
const TEMPO_LIMITE_MS = 10 * 60 * 1000;

// Fim do stderr guardado para diagnosticar falhas (o REA escreve progresso lá).
const MAX_STDERR = 4_000;
// A saída completa vai para arquivos aqui; uma análise grande passa de centenas de MB.
const PASTA_SAIDAS = path.join(os.tmpdir(), "agente-rea");

interface Resultado {
  codigo: number | null;
  arquivo: string;
  bytes: number;
  inicio: string;
  erro: string;
}

async function rodarRea(args: string[]): Promise<Resultado> {
  await fs.promises.mkdir(PASTA_SAIDAS, { recursive: true });
  const arquivo = path.join(PASTA_SAIDAS, `rea-${Date.now()}-${args[0]}.json`);
  const destino = fs.createWriteStream(arquivo);

  return new Promise((resolve) => {
    // spawn sem shell: os argumentos chegam ao REA literalmente.
    const filho = spawn("npx", ["-y", PACOTE_REA, ...args], { timeout: TEMPO_LIMITE_MS });
    let inicio = "";
    let bytes = 0;
    let erro = "";

    filho.stdout.on("data", (pedaco: Buffer) => {
      bytes += pedaco.length;
      if (inicio.length < MAX_CARACTERES) inicio += pedaco.toString("utf8");
    });
    filho.stdout.pipe(destino);
    filho.stderr.on("data", (pedaco: Buffer) => {
      erro = (erro + pedaco.toString("utf8")).slice(-MAX_STDERR);
    });

    let terminou = false;
    const fim = (codigo: number | null, motivo?: string) => {
      if (terminou) return;
      terminou = true;
      const erroFinal = motivo ? `${motivo}\n${erro}` : erro;
      destino.end(() => resolve({ codigo, arquivo, bytes, inicio, erro: erroFinal }));
    };
    filho.on("error", (falha) => fim(null, `não foi possível iniciar o npx: ${falha.message}`));
    filho.on("close", (codigo, sinal) =>
      fim(codigo, sinal ? `processo encerrado pelo sinal ${sinal} (tempo limite?)` : undefined),
    );
  });
}

function formatar({ codigo, arquivo, bytes, inicio, erro }: Resultado): string {
  const partes = [`código de saída: ${codigo}`];
  if (bytes === 0) {
    partes.push("(sem saída)");
  } else if (bytes <= MAX_CARACTERES) {
    partes.push(inicio.trim());
  } else {
    partes.push(
      inicio.slice(0, MAX_CARACTERES),
      `[saída cortada: ${bytes} bytes no total, salva em ${arquivo}. ` +
        "Repita o comando com --filter-output <chaves> ou --token-limit <n> para ver só a parte que interessa.]",
    );
  }
  // O stderr só interessa quando algo falhou.
  if (codigo !== 0 && erro.trim()) partes.push(`final do stderr:\n${erro.trim()}`);
  return partes.join("\n\n");
}

export const reaAjuda = betaZodTool({
  name: "rea_ajuda",
  description:
    "Mostra a ajuda da CLI do REA (rea-agents). Sem 'comando', lista todos os comandos; " +
    "com 'comando', mostra os argumentos e opções daquele comando. Use antes de rodar um comando que você não conhece.",
  inputSchema: z.object({
    comando: z.enum(COMANDOS_PERMITIDOS).optional().describe("Comando do REA cuja ajuda você quer ver"),
  }),
  run: async ({ comando }) => formatar(await rodarRea(comando ? [comando, "--help"] : ["--help"])),
});

export const reaExecutar = betaZodTool({
  name: "rea_executar",
  description:
    "Executa um comando de análise do REA (rea-agents) e devolve a saída em JSON. " +
    "Exemplo: comando 'analyze-javascript-application' com argumentos ['./minha-app']. " +
    "Saídas longas são cortadas; para focar, passe em 'argumentos' por exemplo " +
    "['--filter-output', 'normalized_result.summary,normalized_result.statistics'] ou ['--token-limit', '20000']. " +
    "Comandos que capturam páginas precisam de um navegador acessível pelo REA.",
  inputSchema: z.object({
    comando: z.enum(COMANDOS_PERMITIDOS).describe("Comando do REA a executar"),
    argumentos: z
      .array(z.string())
      .default([])
      .describe("Argumentos e opções do comando, um item por argumento (sem aspas de shell)"),
  }),
  run: async ({ comando, argumentos }) => {
    const args = [comando, ...argumentos];
    if (!argumentos.includes("--format")) args.push("--format", "json");
    return formatar(await rodarRea(args));
  },
});
