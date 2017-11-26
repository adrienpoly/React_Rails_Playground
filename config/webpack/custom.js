const { env } = require('process')
const isProduction = env.NODE_ENV === 'production'

module.exports = {
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
      // vue: 'vue/dist/vue.js',
      React: 'react',
      ReactDOM: 'react-dom',
      // vue_resource: 'vue-resource/dist/vue-resource',
    }
  },


  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules,localIdentName=' +
            (isProduction ?
              '[hash:base64:5]' :
              '[path][name]--[local]--[hash:base64:5]')
        ]
      }
    ]
  }
}
