import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
import process from "node:process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [
        path.resolve(process.cwd(), "src/assets/images/icons/sm"),
        path.resolve(process.cwd(), "src/assets/images/icons/lg"),
      ],
      symbolId: "icon-[dir]-[name]",
      inject: "body-last",
      customDomId: "__svg__icons__dom__",
      svgoOptions: {
        plugins: [
          { name: "removeDimensions", active: true },
          { name: "removeAttrs", params: { attrs: "(stroke|fill)" } },
          { name: "cleanupIDs", params: { remove: true, prefix: "" } },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@styles": path.resolve(__dirname, "src/assets/styles"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@components": path.resolve(__dirname, "src/components"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
      "@icons": path.resolve(__dirname, "src/components/images/icons"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/index.scss" as *;`,
      },
    },
  },
});
