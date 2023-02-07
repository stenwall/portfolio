/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@use '@styles/styles' as *;`
  }
};

export default nextConfig;
