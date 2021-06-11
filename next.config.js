const path = require('path')
module.exports = {
  future: {
    webpack5: true,
  },
  compress: false, //禁止gzip压缩，转移到nginx上
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  generateBuildId: async () => {
    return 'nextssrhntv0' //构建ID
  },
  experimental: {
    scrollRestoration: true,
  },

  async rewrites() {
    return [
      {
        source: '/articles/:id',
        destination: '/m/:id',
      },
      {
        source: '/article/:id',
        destination: '/cmsid/:id',
      },
      {
        source: '/doc/:msgType/:articleId',
        destination: '/dxnews/:articleId',
      },
    ]
  },
}
