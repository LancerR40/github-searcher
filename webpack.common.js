const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = (env) => {
  /* available environments list */
  const environments = [{ name: 'production', path: './.env' }, { name: 'development', path: './env.development' }]

  /* env mode (production | development) */
  const environment = env.environment

  /* env file path by environment */
  let envPath = environment === environments[0].name ? environments[0].path : environments[1].path

  /* check file is exist */
  const isExist = fs.existsSync(envPath)

  if (!isExist) {
    envPath = fs.existsSync(environments[0].path) ? environments[0].path : ''
  }

  const dotenvPlugin = path ? new Dotenv({ path: envPath, }) : new webpack.DefinePlugin({ process: { env: {} }, })

  return {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
          },
          use: 'ts-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.(png|svg)/,
          type: 'asset/resource'
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
        favicon: path.resolve(__dirname, './public/favicon.ico'),
      }),
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin(),
      dotenvPlugin,
    ],
  }
}