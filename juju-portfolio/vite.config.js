import fs from "node:fs";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Copia index.html para 404.html: hospedagens estáticas sem regra de rewrite
// (ex.: GitHub Pages) passam a servir o app também em rotas internas.
function spaFallback() {
  let outDir = "dist";
  return {
    name: "spa-fallback-404",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const index = path.join(outDir, "index.html");
      if (fs.existsSync(index)) fs.copyFileSync(index, path.join(outDir, "404.html"));
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // Raiz do domínio por padrão. Para hospedar em subpasta (ex.: GitHub Pages),
    // rode:  VITE_BASE=/nome-do-repo/ npm run build
    base: env.VITE_BASE || "/",
    plugins: [react(), tailwindcss(), spaFallback()],
    resolve: {
      alias: { "@": path.resolve(import.meta.dirname, "./src") },
    },
    build: {
      outDir: "dist",
      sourcemap: false,
    },
  };
});
