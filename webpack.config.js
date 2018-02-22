const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [ nodeExternals() ],
  entry: {
    'index': './index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ],
  },
};
