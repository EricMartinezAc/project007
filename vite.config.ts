import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  envPrefix: "VITE_",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: parseInt(process.env.PORT || "3000"),
    host: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
});
