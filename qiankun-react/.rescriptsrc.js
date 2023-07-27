/*
 * @FilePath: .rescriptsrc.js
 * @Author: leo
 * @Descripttion:
 */
const { name } = require("./package");

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    // config.output.jsonpFunction = `webpackJsonp_${name}`; //此版本不存在jsonpFunction配置
    config.output.globalObject = "window";

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.historyApiFallback = true;
    config.hot = false;
    // config.watchContentBase = false;//此版本不存在watchContentBase配置
    config.liveReload = false;

    return config;
  },
};
