let webpack = require("webpack");
let path = require("path");

let DIST_DIR = path.resolve(__dirname, "../djwebpack");
let SRC_DIR = path.resolve(__dirname, "../djwebpack");

let config = {
   mode: 'development',
   entry: SRC_DIR + "/djwapp/static/js/index.js",
   output: {
      path: DIST_DIR + "/dist",
      filename: "bundle.js",
   },
   module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
   devtool: 'source-map'
};

module.exports = config;