const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    static: './dist',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
                // auto: checkPath,
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
};
