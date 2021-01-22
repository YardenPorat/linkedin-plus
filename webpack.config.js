const path = require('path');

module.exports = {
  entry: './src/popup.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'popup.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
