# SenacRPG

RPG de fantasia medieval sombria, em português do Brasil, construído com Vite + TypeScript no cliente e Cloudflare Workers + D1 na API.

## O que está jogável

O fluxo principal está completo no navegador: cadastro local, criação de mundos independentes, criação de personagem com 4 classes e 4 raças, taverna, mapa com 3 regiões, rotas, combate por turnos com intenção do inimigo, progresso, XP, níveis, loot, loja, compra/equipamento/consumo e salvamento automático. O modo local permite testar tudo sem credenciais Cloudflare; a API Worker inclui autenticação por cookie HttpOnly, hash de senha, isolamento por usuário e consultas parametrizadas para produção.

Classes: Mago, Berserker, Guerreiro e Arqueiro. Inimigos comuns: Lobo, Bandido, Aranha, Mineiro, Morcego e Esqueleto. Chefes: Bruxa das Cinzas, Golem Ferrúgio e Arauto do Eclipse.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite. O fallback local usa apenas `localStorage` para progresso e preferência de áudio; não guarda senha real. Para validar a produção local:

```bash
npm run build
npm run preview
npm test
```

## Cloudflare D1 + deploy

1. Instale e autentique o Wrangler: `npx wrangler login`.
2. Crie o banco: `npx wrangler d1 create senacrpg-db`.
3. Copie o `database_id` retornado para `wrangler.toml`.
4. Aplique a migration remota: `npx wrangler d1 migrations apply senacrpg-db --remote`.
5. Publique: `npm run deploy`.

Para desenvolvimento da API com D1 local, use `npx wrangler dev` após preencher o ID e aplique `npx wrangler d1 migrations apply senacrpg-db --local`. Segredos não entram no repositório. O arquivo `wrangler.toml` já configura SPA e API na mesma origem.

## Assets e acessibilidade

`public/assets/tavern-cover.png` é uma arte original gerada para a abertura. O favicon é SVG autoral. Os monstros usam ícones/arte vetorial tipográfica autoral como fallback leve, sem links de terceiros; a estrutura `.enemy-art` está pronta para trocar por sprites locais. Há foco visível, contraste, sem dependência exclusiva de cor ou som, layout responsivo para 360 px e respeito a `prefers-reduced-motion`.

## Status de publicação

Não publicado: este workspace não recebeu credenciais Cloudflare nem um destino D1 autorizado. O projeto está preparado para o comando de publicação acima; nenhuma URL pública é inventada.
