import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";

import { ErrorFallback, NotFound } from "./components/route-fallbacks";
import Home from "./pages/Home";

const rootRoute = createRootRoute({
  component: Outlet,
  notFoundComponent: NotFound,
  errorComponent: ErrorFallback,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const routeTree = rootRoute.addChildren([indexRoute]);

// Quando o site for hospedado em uma subpasta (ex.: GitHub Pages em /meu-repo/),
// o Vite define BASE_URL a partir de VITE_BASE (veja vite.config.js).
const basepath = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export function createAppRouter(options = {}) {
  return createRouter({
    routeTree,
    basepath,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    ...options,
  });
}
