'use strict'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const cssLoader = require.resolve('css-loader')

const loader = require.resolve('../../../..')

module.exports = {
  context: path.join(__dirname),
  entry: {
    index: './index.scss'
  },
  output: {
    path: path.join(__dirname, '../../runtime/data-import-issue'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          cssLoader,
          {
            loader,
            options: {
              // should only append to entry file
              data: '@import "./src/theme";'
            }
          }
        ]
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: '[path][name][ext]'
        }
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
}
