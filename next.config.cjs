/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "via.placeholder.com",
  //       port: "",
  //       pathname: "/600/**",
  //     },
  //   ],
  // },
  images: {
    domains: ["via.placeholder.com"],
  },
};
module.exports = nextConfig;

//https:/via.placeholder.com/600/92c952
