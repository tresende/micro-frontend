const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'teste.js',
      exposes: {
        './cartIndex': './src'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
