import { defineConfig } from 'vite'
import path from "path";
import react from "@vitejs/plugin-react";

import { UserConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: "VITE_",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
} as UserConfig);