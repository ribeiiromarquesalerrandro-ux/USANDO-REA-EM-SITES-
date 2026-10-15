# Conhecimento — jurado

Pesquisado em 2026-10-15. Leia só quando precisar de detalhe.

1. **STRIDE:** Spoofing (falsificar identidade → autenticação), Tampering (adulterar dados → integridade), Repudiation (negar ação → não repúdio), Information disclosure (vazar dados → confidencialidade), Denial of service (derrubar → disponibilidade), Elevation of privilege (ganhar permissão → autorização).
   Fonte: https://msdn.microsoft.com/en-us/library/ee823878
2. **STRIDE é uma lista de checagem, não uma classificação rígida;** as categorias se sobrepõem.
   Fonte: https://learn.microsoft.com/ja-jp/archive/blogs/larryosterman/threat-modeling-again-stride
3. **Custo de LLM = tokens de entrada × preço + tokens de saída × preço**, cobrados por milhão. Conta da casa (preço oficial, confira antes): haiku-5-5 US$0,10/US$0,50; sonnet-5-5 US$2/US$10 por milhão de tokens de entrada/saída.
   Fonte: https://platform.claude.com/docs/en/about-claude/pricing
4. **Conversa longa reenvia o histórico a cada turno** (custo cresce); a saída costuma pesar mais que a entrada.
   Fonte: https://amnic.com/blogs/anthropic-api-pricing
5. **Cache de prompt e lote (batch) reduzem o custo recorrente.**
   Fonte: https://www.finout.io/blog/anthropic-api-pricing

Conta-modelo: 3 subagentes haiku × ~5 mil tokens de entrada + ~1 mil de saída ≈ 3 × (5k × 0,10 + 1k × 0,50)/1M ≈ US$0,003.
