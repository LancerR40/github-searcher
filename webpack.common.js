const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = (env) => {
  /* env mode (production | development) */
  const environment = env.environment

  /* get env file path by env mode */
  const envFilePath = environment === 'development' ? `./.env.${environment}` : './.env'

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
      new Dotenv({
        path: envFilePath,
      }),
    ],
  }
}