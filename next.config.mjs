/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.basestudio.app/v1/:path*', // Proxy para a API externa
      },
    ];
  },
};

export default nextConfig;
