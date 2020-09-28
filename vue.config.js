// alias 别名
const path = require("path");
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave:false,
    // proxy服务器代理
    devServer: {
        proxy:{
            // 前端直接 axios.get('/api')
            "/api": {
                target: "http://www.wyyijiaqin.com",
                // 把前端访问的 api 直接清空 直接访问的就是上面的网址
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
            }
        } 
    },
    // 设置别名
    chainWebpack: config=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('$comp', resolve('src/components'))
    }
}
// 只要修改了配置文件 就必须重启服务