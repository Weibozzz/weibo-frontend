module.exports = {
  // 关闭 eslint 校验
  lintOnSave: false,
  devServer: {
    // 代理设置
    proxy: {
      "/mxnzp": {
        target: "https://www.mxnzp.com",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/mxnzp": ""
        },
      },
      "/api": {
        target: "http://www.liuweibo.cn:7654",
        ws: true,
        changOrigin: true,
        pathRewrite: {
        },
      },
    }
  },
}
