const path = require('path');
let WebpackBeforeBuildPlugin = require('before-build-webpack');
const fs = require('fs');
let {ncp} = require('ncp');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new WebpackBeforeBuildPlugin(function (stats, callback) {
      fs.rmdir(path.resolve(__dirname, 'dist'), () => {
        ncp(path.resolve(__dirname, 'public'), path.resolve(__dirname, 'dist'), (err) => {
          if (err) throw err;
          callback();
        })
      })
    }),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
