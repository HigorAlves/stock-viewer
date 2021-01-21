const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@jetpack/store']);


const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ]
  }
}


module.exports = withPlugins([withTM], nextConfig)
