import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-recipe-sass/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/styles/variables.scss' as *; @use '@/styles/mixins.scss' as *; @use '@/styles/shared.scss' as *;`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
