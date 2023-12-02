/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';
const nextConfig = {
  compiler: {
    emotion: true
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]
  }
};

export default withPlaiceholder(nextConfig);
