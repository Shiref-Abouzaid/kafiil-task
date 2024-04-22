const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
              from: path.resolve(__dirname, 'src/assets/css'), // Adjust the path as necessary
              to: path.resolve(__dirname, 'dist/css') // Target path inside dist
          },
          {
              from: path.resolve(__dirname, 'src/assets/js'), // Adjust the path as necessary
              to: path.resolve(__dirname, 'dist/js') // Target path inside dist
          },
          {
              from: path.resolve(__dirname, 'src/components'), // Adjust the path as necessary
              to: path.resolve(__dirname, 'dist/components') // Target path inside dist
          }
      ]
  })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    open: true, // Automatically open the browser
  },

};
