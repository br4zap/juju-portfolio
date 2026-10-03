import { createMemoryHistory, RouterProvider } from "@tanstack/react-router";
import { cleanup, render, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { createAppRouter } from "@/router";

function renderAt(path) {
  const router = createAppRouter({
    history: createMemoryHistory({ initialEntries: [path] }),
  });
  return render(<RouterProvider router={router} />);
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("Rotas", () => {
  it("renderiza a página inicial", async () => {
    const { container } = renderAt("/");
    await waitFor(() => expect(container.querySelector("#home")).not.toBeNull());
  });

  it("renderiza a página 404", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const { findByText } = renderAt("/rota-que-nao-existe");
    expect(await findByText("404")).toBeTruthy();
  });
});
