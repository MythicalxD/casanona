const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "13.200.11.37"], // Add "13.200.11.37" to the domains array.
    remotePatterns: [
      {
        protocol: "http",
        hostname: "13.200.11.37",
        port: "1337",
        pathname: "/public/**",
      },
    ],
  },
};

module.exports = nextConfig;
