const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@data': path.resolve(__dirname, './src/data'),
      '@root': path.resolve(__dirname, './src'),
    '@components': path.resolve(__dirname, './src/components'),
    },
  },
};