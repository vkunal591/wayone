// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  trailingSlash: true, // optional for Netlify/GitHub Pages
  images: {
    unoptimized: true, // required if using next/image
  },
};

module.exports = nextConfig;

