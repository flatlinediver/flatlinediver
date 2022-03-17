// next.config.js
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        "source": "/:path*",
        "headers": [
          {
            "key": "home",
            "value": "true"
          }
        ]
      }
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          "source": "/lab/:lab",
          "destination": "https://www.:lab.flatlinediver.com/",
          "basePath": false
        },
        {
          "source": "/lab/:lab/:resources*",
          "destination": "https://www.:lab.flatlinediver.com/:resources*",
          "basePath": false
        }
      ]
    }
  },
}