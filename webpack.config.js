const path = require('path');

module.exports = {
  mode: 'production',
  entry:  [
    path.resolve(__dirname, './code/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"]
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js']
  },
};
