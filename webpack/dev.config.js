
import path                                                from 'path';
import webpack                                             from 'webpack';
import nib                                                 from 'nib';

import {webpackHost, webpackPort}                          from '../config/env';

const DevWebpackConfig = {
  devtool: 'cheap-eval-source-map',

  entry: {
    main: [
      'react-hot-loader/patch',
      `webpack-hot-middleware/client?path=http://${webpackHost}:${webpackPort}/__webpack_hmr&timeout=20000`,
      path.resolve(__dirname, '../src/client.js')
    ]
  },

  output: {
    path: path.resolve(__dirname, '../public/build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: `http://${webpackHost}:${webpackPort}/build/`
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader:'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [['latest', {'es2015': {'modules': false}}], 'stage-0', 'react'],
              plugins: [
                'transform-runtime',
                'transform-decorators-legacy',
                'transform-class-properties',
                'react-hot-loader/babel'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {importLoaders: 1}
          },
          {
            loader: 'postcss-loader',
            options: {
              config: path.resolve(__dirname, './postcss.config.js')
            }
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {importLoaders: 1}
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              config: path.resolve(__dirname, './postcss.config.js')
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: path.resolve(__dirname, './postcss.config.js')
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              use: [nib()],
              import: ['~nib/lib/nib/index.styl']
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 35000
            }
          },
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2?|ttf|eot|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            query: {
              name: '[name].[ext]?[hash:8]'
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.NamedModulesPlugin()
  ]
};

export default DevWebpackConfig;
