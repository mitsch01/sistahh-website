module.exports = {
  async rewrites() {
    return [
      {
        source: "/admin/:path*",
        destination: "https://sistahh.de/:path*" 
      }
    ]
  }
}
