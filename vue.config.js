const path = require("path");
// const conf = require("./src/config");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "./",
  lintOnSave: process.env.NODE_ENV === "development",
  assetsDir: "static",
  devServer: {
    open: false,
    host: "0.0.0.0",
    useLocalIp: true,
    port: 5002,
    https: false,
    hotOnly: false,
    // proxy: {
    //   "/api": {
    //     target: conf.proxyUrl,
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   }
    // },
    before: require("./mock/mock-server")
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("_a", resolve("src/assets"))
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"))
      .set("_v", resolve("src/views"));
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  }
};
