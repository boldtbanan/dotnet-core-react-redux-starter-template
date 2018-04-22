const path = require('path');
const webpack = require('webpack');
const projectConfig = require('./config/project.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
  const extractSass = new ExtractTextPlugin({
    filename: 'site.css'
  });

  const clientBundleConfig = {
    entry: { 'main-client': './ClientApp/main-client.js' },
    resolve: { extensions: ['.js', '.jsx'] },
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, projectConfig.directory.dist),
      publicPath: 'dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
    },
    module: {
      rules: [
        { test: /\.(js|jsx)$/, use: 'babel-loader' },
        { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
        {
          test: /\.scss$/,
          use: extractSass.extract({
              use: [{
                  loader: "css-loader"
              }, {
                  loader: "sass-loader"
              }],
              // use style-loader in development
              fallback: "style-loader"
          })
        }
      ]
    },
    devtool: 'source-map',
    plugins: [
      extractSass
    ]
  };

  return [clientBundleConfig];
};