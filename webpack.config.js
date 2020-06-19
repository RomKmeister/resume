const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use:  [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        loaders: ['pug-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        include: /fonts/,
        use: ['file-loader?name=fonts/[name].[ext]']
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico|xml|webmanifest)$/,
        include: /favicon/,
        use: ['file-loader?name=favicon/[name].[ext]']
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/blocks/**/*.+(png|svg|jpeg|gif)', to: './images', flatten: true }
      ]
    })
  ],
};
