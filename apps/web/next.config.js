// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   reactStrictMode: true,
// //   async rewrites() {
// //     return [
// //       {
// //         // Caught path: /api/something
// //         source: "/api/:path*",
// //         // Destination: http://localhost:4000/something
// //         destination: "http://localhost:4000/:path*",
// //       },
// //     ];
// //   },
// // };

// // module.exports = nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   // ✅ NEW: Allow Next.js to optimize images from your backend
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '4000', // Your NestJS Backend Port
//         pathname: '/**', // Only allow access to the uploads folder
//       },
//       // Add your production domain here later (e.g., api.civicloop.com)
//     ],
//   },

//   // ✅ EXISTING: Keep your API proxy working
//   async rewrites() {
//     return [
//       {
//         // Caught path: /api/something
//         source: "/api/:path*",
//         // Destination: http://localhost:4000/something
//         destination: "http://localhost:4000/:path*",
//       },
//     ];
//   },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'civicloop.onrender.com',
        pathname: '/**',
      }
    ],
  },

  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;