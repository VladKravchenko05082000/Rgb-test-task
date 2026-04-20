import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://media2.giphy.com/media/**")],
  },
}

export default nextConfig
