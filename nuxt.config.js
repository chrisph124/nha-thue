const webpack = require('webpack')
module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Find Your Stay',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans'}
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    {src: 'bulma/css/bulma.css'},
    {src: 'font-awesome/css/font-awesome.css'},
    {src: '~/assets/css/main.css'}
  ],
  performance: {
    gzip: true
  },
  cache: true,
  plugins: ['~/plugins/filters.js', '~/plugins/moment.js', '~/plugins/carousel.js'],
  axios: {
    baseURL: 'http://127.0.0.1:3000/api',
    debug: true
  },
  /*
   ** Add axios globally
   */
  build: {
    vendor: ['axios'],
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        '_': 'lodash'
        // ...etc.
      })
    ],
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
