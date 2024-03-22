/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'img.clerk.com',
      'encrypted-tbn0.gstatic.com',
      'mma.prnewswire.com',
    ],
  },
};

export default nextConfig;
