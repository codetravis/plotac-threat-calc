/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  distDir: 'docs',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  compiler: {
    removeConsole: false,
  },
}

export default nextConfig
