const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@data': path.resolve(__dirname, './src/data'),
      '@root': path.resolve(__dirname, './src'),
      '@data': path.resolve(__dirname, './src/data'),
      '@data-store': path.resolve(__dirname, './src/data-store'),
    '@components': path.resolve(__dirname, './src/components'),
    },
  },
};