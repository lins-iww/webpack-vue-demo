const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { styleLoaders } = require('./utils.js')
const cssLoaders = styleLoaders({
  extract: true,
  usePostCSS: true
})
const resolve = function(dirname) {
  return path.resolve(__dirname, dirname)
}


module.exports = {
  mode: 'development',
  entry: {
    'main': './src/main.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts'],
    alias: {
      '@': path.join(__dirname, '..', '/src'),
      'vue$': 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的
    }
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    hotOnly: true,
    quiet: true
  },
  module: {
    rules: [
      ...cssLoaders,
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: 'ts-loader',
            tsx: 'babel-loader!ts-loader',
          }
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        loader: 'url-loader',
        exclude: /node_modules/
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 0,
      automaticNameDelimiter: '_'
    },
    minimize: true,
    minimizer: [
      // new TerserPlugin({
      //   include: './src',
      //   terserOptions: {
      //     ecma: undefined,
      //     warnings: false,
      //     parse: {},
      //     compress: {
      //       drop_console: true,
      //       drop_debugger: false,
      //       pure_funcs: ['console.log'], // 移除console
      //     },
      //   }
      // })
    ]

  },
  output: {
    path: path.resolve(__dirname, '../dist' ),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new ExtractTextPlugin("[name].css"),
    new webpack.HotModuleReplacementPlugin({}),
    new ESLintPlugin({
      exclude: 'node_modules',
      extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx']
    }),
    new OptimizeCssAssetsWebpackPlugin({}),
    new FriendlyErrorsPlugin(),
  ]
}
