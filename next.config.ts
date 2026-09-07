import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["swiper"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fbznbneejbhxdhtdieze.supabase.co",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
    formats: ["image/webp"],
    deviceSizes: [320, 375, 480, 768, 1024, 1440, 1920],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/shared/styles")],
    additionalData: `
      @use "@/shared/styles/variables" as *;
      @use "@/shared/styles/mixins" as *;
    `,
  },
};

export default nextConfig;
