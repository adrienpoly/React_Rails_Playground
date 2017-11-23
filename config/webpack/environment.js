const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

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

module.exports = environment
