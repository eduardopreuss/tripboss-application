/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/flights',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
