const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    // chunkFilename: './[name]/[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    library: 'bg-ui-kit',
    publicPath: '/',
    libraryTarget: 'umd',
  },
  devServer: {
    static: './dist',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    react: 'react',
  },
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     chunks: 'all',
  //     maxInitialRequests: Infinity,
  //     minSize: 0,
  //   },
  // },
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
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'styles', to: 'styles' }],
    }),
  ],
};
