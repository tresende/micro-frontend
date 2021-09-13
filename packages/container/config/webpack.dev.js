const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const port = 8080

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${port}/`
  },
  devServer: {
    port,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: packageJson.dependencies,
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        auth: 'auth@http://localhost:8082/remoteEntry.js'
      }
    })
  ]
}

module.exports = merge(commonConfig, devConfig)
