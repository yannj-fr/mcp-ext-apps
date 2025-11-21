import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Output single HTML file with inlined JS for easy distribution
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
