import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1"],
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "raw.githubusercontent.com",
      "seeklogo.com",
      "react-hook-form.com",
      "avatars.githubusercontent.com",
      "www.vectorlogo.zone",
    ],
  },
};

export default nextConfig;
