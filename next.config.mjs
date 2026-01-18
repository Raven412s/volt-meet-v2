/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        port: "",
      },
    ],
  },
  
  // experimental: {
  //   // Define generateStaticParams function to customize static site generation
  //   generateStaticParams: async function () {
  //     // Define static parameters for dynamic routes
  //     return {
  //       '/sign-in/[[...sign-in]]': {}, // Static parameters for sign-in page
  //       '/sign-up/[[...sign-up]]': {}, // Static parameters for sign-up page
  //     };
  //   },
  // },
};
export default nextConfig;
