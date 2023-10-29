const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "65.2.56.60"], // Add "13.200.11.37" to the domains array.
    remotePatterns: [
      {
        protocol: "http",
        hostname: "65.2.56.60",
        port: "1337",
        pathname: "/public/**",
      },
    ],
  },
};

module.exports = nextConfig;
