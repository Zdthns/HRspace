import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import sassDts from "vite-plugin-sass-dts"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles" as common;`,
        importer(arg: unknown) {
          if (arg !== "@/styles") {
            return
          }

          return {
            file: `${path.resolve(__dirname, "./src/assets/styles")}`,
          }
        },
      },
    },
  },
  plugins: [react(), sassDts()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./src/public"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
