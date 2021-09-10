// craco.config.js
const path = require(`path`);
module.exports = {
    style: {
      postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer')
        ],
      }
    },
    webpack: {
        alias: {
          '@Components': path.resolve(__dirname, 'src/views/components'),
          '@Views': path.resolve(__dirname, 'src/views'),
          '@Layouts': path.resolve(__dirname, 'src/views/layout'),
          '@Libs': path.resolve(__dirname, 'src/libs'),
          '@Assets': path.resolve(__dirname, 'src/assets'),
          '@Utils': path.resolve(__dirname, 'src/utils'),
          '@Redux': path.resolve(__dirname, 'src/redux'),
        }
    },
  }
