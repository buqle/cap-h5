const path = require('path')
const utils = {
    assetsPath: function (_path) {
        const assetsSubDirectory = process.env.NODE_ENV === 'production'
            // 生产环境下的 static 路径
            ? 'static'
            // 开发环境下的 static 路径
            : 'static'

        return path.posix.join(assetsSubDirectory, _path)
    },
    resolve: function(dir) {
        return path.join(__dirname, '..', dir)
    }
}
module.exports={
    publicPath : './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://acquacap.com/acquacap', //对应自己的接口
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}
