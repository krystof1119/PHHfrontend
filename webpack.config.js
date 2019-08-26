const {AngularCompilerPlugin} = require("@ngtools/webpack");
const path = require('path');
let WebpackBeforeBuildPlugin = require('before-build-webpack');
const fs = require('fs');
let {ncp} = require('ncp');
let CopyPlugin = require('copy-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  watchOptions: {
    ignored: path.resolve(__dirname, 'dist'),
    poll: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        exclude: [
          /node_modules/,
          /*'/src/angular/**'*/
        ]
      },
      /*{
        test: /\.ts$/,
        loaders: ['@ngtools/webpack'],
        include: '/src/angular/**'
      }*/
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack'
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1
            }
          },
          "postcss-loader" // has separate config, see postcss.config.js nearby
        ]
      }
    ],
  },
  plugins: [
    new WebpackBeforeBuildPlugin(function (stats, callback) {
      console.log('Compiling...');
      callback();
    }),
    new AngularCompilerPlugin({
      tsConfigPath: 'tsconfig.json',
      /*mainPath: 'src/angular/main.ts',*/
      entryModule: 'src/angular/app/app.module#AppModule',
      sourceMap: true
    }),
    new CopyPlugin([
      { from: 'public', to: '.' }
    ])/*,
    new CleanWebpackPlugin()*/
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
