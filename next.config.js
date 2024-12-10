module.exports = {
  async rewrites() {
    return [
      {
        source: "/admin/:path*",
        destination: "https://api.sistahh.de/admin/:path*"
      }
    ]
  }
}
