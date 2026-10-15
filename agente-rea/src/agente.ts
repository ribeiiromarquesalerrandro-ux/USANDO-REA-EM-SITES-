import Anthropic from "@anthropic-ai/sdk";
import { reaAjuda, reaExecutar } from "./ferramentas.js";

const SISTEMA = `Você é um agente que usa a CLI do REA (pacote oficial rea-agents) para entender
aplicações JavaScript e sites. Use as ferramentas para rodar o REA de verdade; não invente resultados.
Se não souber os argumentos de um comando, consulte rea_ajuda primeiro.
Se uma ferramenta falhar (rede bloqueada, ferramenta ausente, caminho inexistente), diga exatamente o que falhou.
Responda em português, de forma direta.`;

async function executar(pedido: string) {
  // Sem argumentos: usa ANTHROPIC_API_KEY ou o perfil salvo pelo `ant auth login`.
  const client = new Anthropic();

  const runner = client.beta.messages.toolRunner({
    model: "claude-opus-5-5",
    max_tokens: 16000,
    thinking: { type: "adaptive" },
    output_config: { effort: "medium" },
    // Se o modelo recusar o pedido, a API tenta de novo num modelo de reserva escolhido por ela.
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    max_iterations: 20,
    system: SISTEMA,
    tools: [reaAjuda, reaExecutar],
    messages: [{ role: "user", content: pedido }],
  });

  // Cada iteração é uma resposta do modelo; mostra quais ferramentas ele chamou.
  for await (const mensagem of runner) {
    for (const bloco of mensagem.content) {
      if (bloco.type === "tool_use") {
        console.error(`→ ${bloco.name} ${JSON.stringify(bloco.input)}`);
      }
    }
  }

  const final = await runner.done();

  if (final.stop_reason === "refusal") {
    console.error("O modelo recusou o pedido:", final.stop_details?.explanation ?? final.stop_details);
    process.exit(2);
  }
  if (final.stop_reason === "tool_use") {
    console.error("Parou no limite de iterações antes de terminar.");
  }
  if (final.stop_reason === "max_tokens") {
    console.error("A resposta foi cortada no limite de max_tokens.");
  }

  for (const bloco of final.content) {
    if (bloco.type === "text") console.log(bloco.text);
  }
}

const pedido = process.argv.slice(2).join(" ").trim();
if (!pedido) {
  console.error('Uso: npm run agente -- "o que você quer que o agente faça"');
  process.exit(1);
}

try {
  await executar(pedido);
} catch (falha) {
  if (falha instanceof Anthropic.AuthenticationError || String(falha).includes("authentication method")) {
    console.error(
      "Sem credenciais da API do Claude. Defina ANTHROPIC_API_KEY ou rode `ant auth login` e tente de novo.",
    );
    process.exit(1);
  }
  throw falha;
}
