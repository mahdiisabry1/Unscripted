import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 5001,
    host: true,
  },
  build: {
    sourcemap: mode === "development",
  },
  base: "./",
}));
