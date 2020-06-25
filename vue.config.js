const path = require("path");
const conf = require("./package-lock.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "./",
  lintOnSave: process.env.NODE_ENV === "development",
  assetsDir: "static",
  devServer: {
    open: true,
    host: "0.0.0.0",
    useLocalIp: true,
    port: 5002,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3002",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  configureWebpack: {
    externals: {},
    output: {
      filename: `js/[name].${conf.version}.js`
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `css/[name].${conf.version}.css`
      })
    ]
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
