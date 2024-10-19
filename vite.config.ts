import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/elna-chat-widget.ts",
      name: "@elna/chat-widget1",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [/^lit/],
    },
  },
});
