/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 this makes `next build` emit static HTML suitable for GitHub Pages
  output: 'export',
  trailingSlash: true,          // ensures /about/ resolves without SSR
  // assetPrefix/basePath can stay empty because we’re at the domain root
};

export default nextConfig;
