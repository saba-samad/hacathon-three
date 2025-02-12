// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {

//         domains: ["cdn.sanity.io"], // Allow Sanity's image CDN
//       },


// };

// export default nextConfig;

// //////
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // ✅ Correct approach
      },
    ],
  },
};

export default nextConfig;


