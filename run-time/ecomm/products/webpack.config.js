const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'teste.js',
      shared: [
        {
          faker: {
            singleton: true
          }
        }
      ],
      exposes: {
        './ProductsIndex': './src/bootstrap'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
