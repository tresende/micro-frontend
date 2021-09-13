const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
  mode: 'production',
  output: {
    publicPath: '/auth/latest/',
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      shared: packageJson.dependencies,
      exposes: {
        './AuthApp': './src/bootstrap'
      }
    })
  ]
}

module.exports = merge(commonConfig, devConfig)
