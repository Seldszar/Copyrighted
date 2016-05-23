var webpack = require('webpack');

module.exports = [
  {
    entry: './src/app.js',
    output: {
      path: './dist',
      filename: 'copyrighted.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' },
        { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader!autoprefixer-loader' }
      ]
    },
    devtool: '#hidden-source-map'
  },
  {
    entry: './src/app.js',
    output: {
      path: './dist',
      filename: 'copyrighted.min.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' },
        { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader!autoprefixer-loader' }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        }
      })
    ],
    devtool: '#hidden-source-map'
  }
];
