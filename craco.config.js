const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  // 配置webpack
  webpack: {
    alias: {
      "@": resolve('src'),
      "utils": resolve('src/utils')
    }
  },
  // 配置less
  plugins: [
    {
      plugin: CracoLessPlugin,
      // 如下是针对antdesign中增加的配置，这里可以不用
      // options: {
      //   lessLoaderOptions: {
      //     lessOptions: {
      //       modifyVars: { "@primary-color": "#1DA57A" },
      //       javascriptEnables: true
      //     }
      //   }
      // }
    }
  ]
}