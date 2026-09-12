import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Vazio em repositorio de usuario; o configure-pages preenche em project site.
  basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
