/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cynthiaugwu.com", "i.ibb.co"],
    remotePatterns: ["https://cynthiaugwu.com/*", "https://i.ibb.co/*"],
  },
};

export default nextConfig;
