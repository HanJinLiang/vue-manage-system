module.exports = {
    devServer: {
        port: 3336,//设置端口
        open: true,//自动在浏览器打开
        // proxy:{}
    },
    css:{
        loaderOptions:{
            sass:{
                prependData: `@import "@/assets/scss/_variable.scss";`
            }
        }
    }
}