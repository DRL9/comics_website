const path = require('path')
    , webpack = require('webpack')
    , merge = require('webpack-merge')
    , webpackBaseConfig = require('./webpack.base.conf')
    ;

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true&timeout=10000';

Object.keys(webpackBaseConfig.entry).forEach((name) => {
    webpackBaseConfig.entry[name] = [hotMiddlewareScript, webpackBaseConfig.entry[name]]
});

module.exports = merge(webpackBaseConfig, {
    devtool: 'cheap-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});
