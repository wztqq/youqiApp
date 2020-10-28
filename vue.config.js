// alias 别名
const path = require("path");
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
	// publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	// outputDir:"mengenergy-appvue",
	lintOnSave:false,
	publicPath: "./",
    // proxy服务器代理
    devServer: {
		proxy:{
		    // 前端直接 axios.get('/api')
		    "/": {
		        target: "http://210.73.216.32:8081/",
		        // target: "http://172.16.72.48:8080/",
		        // 把前端访问的 api 直接清空 直接访问的就是上面的网址
		        pathRewrite: { '^/': '' },
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