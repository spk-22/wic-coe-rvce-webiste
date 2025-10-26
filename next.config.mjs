/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false, // hides top-right build indicator
  webpack: (config, { dev }) => {
    if (dev) {
      // completely remove the dev overlay (:N:) in development
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        Object.keys(entries).forEach((key) => {
          if (entries[key].includes('next/dist/client/dev/noop')) return;
        });
        return entries;
      };
    }
    return config;
  },
};

export default nextConfig;
