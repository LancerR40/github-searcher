const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = (env) => merge(common(env), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './public',
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
})