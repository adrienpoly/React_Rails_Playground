// const { env } = require('process')
// const isProduction = env.NODE_ENV === 'production'
//
// const path = require('path');
// // const glob = require('glob');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// // const PurifyCSSPlugin = require('purifycss-webpack');
// // const glob = require('glob-all');
//
// module.exports = {
//   resolve: {
//     alias: {
//       jquery: 'jquery/src/jquery',
//       // vue: 'vue/dist/vue.js',
//       React: 'react',
//       ReactDOM: 'react-dom',
//       // vue_resource: 'vue-resource/dist/vue-resource',
//     }
//   },
//   module: {
//     rules: [{
//       // SCSS
//       test: /\.(scss|css)$/,
//       use: isProduction ? ExtractTextPlugin.extract({
//         publicPath: '',
//         fallback: 'style-loader?sourceMap',
//         use: [
//           {
//             loader: 'css-loader',
//             options: {
//               sourceMap: true,
//               minimize: {
//                 discardComments: {
//                   removeAll: true
//                 }
//               }
//             }
//           }, {
//             loader: 'postcss-loader',
//             options: {
//               sourceMap: true,
//               ident: 'postcss',
//               plugins: (loader) => [
//                 require('autoprefixer')()
//               ]
//             }
//           },
//           'sass-loader?sourceMap'
//         ]
//       }) : [
//         'style-loader?sourceMap',
//         'css-loader?sourceMap',
//         'sass-loader?sourceMap'
//       ]
//     }]
//   },
//   plugins: [
//     // new ExtractTextPlugin('[name].[contenthash].css'),
//     // // Make sure this is after ExtractTextPlugin!
//     // new PurifyCSSPlugin({
//     //   // Give paths to parse for rules. These should be absolute!
//     //   // paths: glob.sync(path.join(__dirname, '../../app/**/*.html.*')),
//     //   paths: glob.sync([
//     //     // path.join(__dirname, '../../**/*.html*')
//     //     // path.join(__dirname, '../../**/*.j*')
//     //     // path.join(__dirname, '../../public/**/*.j*'),
//     //     path.join(__dirname, '../../app/**/*.html*')
//     //   ]),
//     //   purifyOptions: {
//     //     // minify: true,
//     //     moduleExtensions: ['html', 'js'],
//     //     // info: true,
//     //     // rejected: true,
//     //     whiteList: ['*.show*', '*.dropdown*', '*.active*', '.collapsing']
//     //   }
//     // })
//   ]
//
//
//   // module: {
//   //   rules: [
//   //     {
//   //       test: /\.css$/,
//   //       use: ExtractTextPlugin.extract({
//   //         // fallback: 'style-loader',
//   //         use: ['css-loader']
//   //       })
//   //     }
//   //   ]
//   // },
//   // plugins: [
//   //   new ExtractTextPlugin('[name].[contenthash].css'),
//   //   // Make sure this is after ExtractTextPlugin!
//   //   new PurifyCSSPlugin({
//   //     // Give paths to parse for rules. These should be absolute!
//   //     paths: glob.sync(path.join(__dirname, 'app/*.html')),
//   //   })
//   // ]
// };
