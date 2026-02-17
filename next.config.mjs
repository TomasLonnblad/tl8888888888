/** @type {import('next').NextConfig} */
const nextConfig = {

  
images:{domains: ["images.remotePatterns", "https://tomaslonnblad.github.io/", "https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
// images.unsplash.com
]},
  reactCompiler: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/default",
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
