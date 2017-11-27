const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
const merge = require('webpack-merge')
// Get a pre-configured plugin
environment.plugins.get('ExtractText') // Is an ExtractTextPlugin instance

// Add an additional plugin of your choosing : ProvidePlugin
environment.plugins.set(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    'window.Tether': 'tether',
    Popper: ['popper.js', 'default'],
    ActionCable: 'actioncable',
    // Vue: 'vue',
    // VueResource: 'vue-resource',
  })
)

// const myCssLoaderOptions = {
//   modules: true,
//   sourceMap: true,
//   localIdentName: '[name]__[local]___[hash:base64:5]'
// }
//
// const CSSLoader = environment.loaders.get('style').use.find(el => el.loader === 'css-loader')
//
// CSSLoader.options = merge(CSSLoader.options, myCssLoaderOptions)

module.exports = environment
