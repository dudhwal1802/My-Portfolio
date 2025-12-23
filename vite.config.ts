import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // GitHub Pages serves projects under: https://<user>.github.io/<repo>/
  // In GitHub Actions, GITHUB_REPOSITORY is set to "owner/repo".
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")?.[1];
  // For custom domains, you typically want base = "/".
  // You can override by setting env var VITE_BASE (e.g. "/" or "/My-Portfolio/").
  const viteBaseOverride = process.env.VITE_BASE?.trim();
  const hasCustomDomain = fs.existsSync(path.resolve(__dirname, "public/CNAME"));

  const defaultBase =
    mode === "production"
      ? hasCustomDomain
        ? "/"
        : repoName
          ? `/${repoName}/`
          : "/"
      : "/";

  const base = viteBaseOverride ? viteBaseOverride : defaultBase;

  return {
    base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  };
});
