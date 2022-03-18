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
        },
        {
          "source": "/demos/73360-react-router-motion-demo/:path*",
          "destination": "https://73360-react-router-motion-demo.vercel-support.app/:path*",
          // "basePath": false
        },
        {
          "source": "/demos/73360-create-react-app/:path*",
          "destination": "https://73360-create-react-app.vercel-support.app/:path*",
          "basePath": false
        },
        {
          "source": "/g/:path*",
          "destination": "https://bbi.studio",
          // "basePath": false
        }
      ]
    }
  },
}