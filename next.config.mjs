/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // Helps Vercel with optimized builds
    reactStrictMode: true, // Enables strict mode for React
    trailingSlash: false, // Adjust if you want URLs to end with slashes
    experimental: {
      appDir: true, // Ensures the use of the /app directory routing
    },
  };
  
  export default nextConfig;
  
