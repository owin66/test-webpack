const path = require('path');

module.exports = {
  mode: 'development',
  stats: 'errors-only',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 4444,
    open: true,
  },
};
