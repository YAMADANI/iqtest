import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/iqtest",
  assetPrefix: "/iqtest/",
  reactStrictMode: true,
  trailingSlash: true
};

export default nextConfig;
