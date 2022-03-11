// next.config.js
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          "source": "/demos/:demo",
          "destination": "https://www.:demo.flatlinediver.com/",
          "basePath": false
        },
        {
          "source": "/demos/:demo/:resources*",
          "destination": "https://www.:demo.flatlinediver.com/:resources*",
          "basePath": false
        }
      ]
    }
  },
}