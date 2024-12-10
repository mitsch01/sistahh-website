module.exports = {
  async rewrites() {
    return [
      {
        source: "/admin/:path*",
        destination: "https://api.sistahh.de/admin/:path*" // Proxy Strapi Admin
      },
      {
        source: "/@vite/:path*",
        destination: "https://api.sistahh.de/@vite/:path*" // Serve Vite assets
      },
      {
        source: "/.strapi/:path*",
        destination: "https://api.sistahh.de/.strapi/:path*" // Serve Strapi assets
      }
    ]
  }
}
