/* eslint-disable */
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './app/bootstrap.js',
  output: {
    path: path.join(__dirname, './'),
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ],
      },
      {
        test: /\.css|\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(eot|woff|woff2|ttf)(\?.*$|$)/,
        use: [
          { loader: 'base64-font-loader' },
        ],
      },
      {
        test: /\.(svg|png|jpg)(\?.*$|$)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 30000,
              name: './assert/[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  resolve: {
    modules: [
      path.resolve('./app'),
      path.resolve('./node_modules')
    ],
    extensions: ['.js', '.json']
  },
};
