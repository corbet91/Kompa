import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_URL_DEVELOP: process.env.API_URL_DEVELOP,
  },
};

export default nextConfig;
