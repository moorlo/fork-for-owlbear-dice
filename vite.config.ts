import { defineConfig } from "vite";
// @ts-ignore
import { resolve } from "path";
import react from "@vitejs/plugin-react";

declare var __dirname: string;

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/fork-for-owlbear-dice/" : "/",
  plugins: [react()],
  assetsInclude: ["**/*.glb", "**/*.hdr"],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        popover: resolve(__dirname, "popover.html"),
        background: resolve(__dirname, "background.html"),
      },
    },
  },
}));
