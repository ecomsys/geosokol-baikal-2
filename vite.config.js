import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import handlebars from "vite-plugin-handlebars";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: [path.resolve(__dirname, "src/html")],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
    fs: {
      strict: false, // разрешаем доступ к файловой системе
    },
    host: true, // разрешаем все хосты
    strictPort: true,
  },
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        contacts: path.resolve(__dirname, "contacts.html"),
        about: path.resolve(__dirname, "about.html"),
        services: path.resolve(__dirname, "purchase.html"),
      },
    },
  },
});
