const { env } = require('process')
const isProduction = env.NODE_ENV === 'production'

const path = require('path');
// const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob-all');

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
  },
  plugins: [
    new ExtractTextPlugin('[name].[contenthash].css'),
    // Make sure this is after ExtractTextPlugin!
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      // paths: glob.sync(path.join(__dirname, '../../app/**/*.html.*')),
      paths: glob.sync([
        path.join(__dirname, '../../app/**/*.html.*'),
        path.join(__dirname, '../../app/**/*.js*'),
        path.join(__dirname, '../../app/**/*.json')
      ]),
      purifyOptions: {
        minify: true,
        info: true,
        rejected: true
      }
    })
  ]


  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ExtractTextPlugin.extract({
  //         // fallback: 'style-loader',
  //         use: ['css-loader']
  //       })
  //     }
  //   ]
  // },
  // plugins: [
  //   new ExtractTextPlugin('[name].[contenthash].css'),
  //   // Make sure this is after ExtractTextPlugin!
  //   new PurifyCSSPlugin({
  //     // Give paths to parse for rules. These should be absolute!
  //     paths: glob.sync(path.join(__dirname, 'app/*.html')),
  //   })
  // ]
};
console.log(__dirname);
