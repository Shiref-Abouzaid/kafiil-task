const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry:[
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
          {
              from: path.resolve(__dirname, 'src/assets'), // Adjust the path as necessary
              to: path.resolve(__dirname, 'build/assets') // Target path inside dist
          },

          {
              from: path.resolve(__dirname, 'src/components'), // Adjust the path as necessary
              to: path.resolve(__dirname, 'build/components') // Target path inside dist
          },

          {
              from: path.resolve(__dirname, 'src/pages'), // Adjust the path as necessary
              to: path.resolve(__dirname, 'build/pages') // Target path inside dist
          }
      ]
  })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    host: '0.0.0.0', // Listen on all network interfaces
    port: 8080,       // You can specify a port or use the default
    open: true,       // Automatically open the browser
  },
};
