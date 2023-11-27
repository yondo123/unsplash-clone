/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]
  }
};

export default nextConfig;
