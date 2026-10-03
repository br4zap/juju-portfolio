# Juju Braz — Portfólio

Landing page de portfólio feita com **React + Vite + Tailwind CSS v4** em JavaScript (JSX).

## Rodando localmente

Requer Node.js 20.19 ou superior.

```sh
npm install
npm run dev      # servidor de desenvolvimento
npm test         # testes
npm run lint     # lint
```

## Build de produção

```sh
npm run build    # gera a pasta dist/
npm run preview  # testa o build localmente
```

A pasta `dist/` é um site estático e pode ser enviada para qualquer hospedagem.

## Hospedagem

| Serviço              | Como fazer                                                                                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Netlify**          | Conecte o repositório (já existe `netlify.toml`) ou arraste a pasta `dist/` no painel.                                                          |
| **Vercel**           | Importe o repositório (já existe `vercel.json`).                                                                                                |
| **Cloudflare Pages** | Build command `npm run build`, output directory `dist`.                                                                                         |
| **GitHub Pages**     | Rode `VITE_BASE=/nome-do-repo/ npm run build` e publique o conteúdo de `dist/`. Se usar `usuario.github.io` direto, não precisa de `VITE_BASE`. |

O build também gera `dist/404.html` (cópia do `index.html`) e `public/_redirects`/`vercel.json`/`netlify.toml`
garantem que rotas internas abram o app em vez de dar erro 404.

## Estrutura

```
index.html            título, meta tags (SEO), fontes e favicon
public/               arquivos estáticos (favicon.svg, robots.txt)
src/main.jsx          ponto de entrada
src/router.jsx        rotas (TanStack Router)
src/pages/Home.jsx    página principal — edite projetos, textos e links aqui
src/components/ui/    componentes shadcn/ui
src/styles.css        tema (cores, fontes, utilitários)
```

Para adicionar imagens aos projetos, coloque os arquivos em `src/assets/`, importe em `src/pages/Home.jsx`
e use no campo `image` de cada projeto.
