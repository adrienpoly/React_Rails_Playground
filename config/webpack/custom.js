const { env } = require('process')
const isProduction = env.NODE_ENV === 'production'

const path = require('path');
// const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob-all');
//
module.exports = {
  plugins: [
    new ExtractTextPlugin('[name].[contenthash].css'),
    // Make sure this is after ExtractTextPlugin!
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      // paths: glob.sync(path.join(__dirname, '../../app/**/*.html.*')),
      paths: glob.sync([
        // path.join(__dirname, '../../**/*.html*')
        path.join(__dirname, '../../app/**/*.j*'),
        // path.join(__dirname, '../../public/**/*.j*'),
        path.join(__dirname, '../../app/**/*.html*')
      ]),
      purifyOptions: {
        minify: true,
        // moduleExtensions: ['html', 'js'],
        // info: true,
        // rejected: true,
        whiteList: ['*show*', '*dropdown*', '*active*', '*collapsing*']
      }
    })
  ]
};
