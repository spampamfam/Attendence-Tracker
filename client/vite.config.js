import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access from network/any host
    port: 5173,
    strictPort: true,
    allowedHosts: ["nonpejoratively-campanological-leanna.ngrok-free.dev"],
  },
});
