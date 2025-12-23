import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // GitHub Pages serves projects under: https://<user>.github.io/<repo>/
  // In GitHub Actions, GITHUB_REPOSITORY is set to "owner/repo".
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")?.[1];
  const base = mode === "production" && repoName ? `/${repoName}/` : "/";

  return {
    base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  };
});
