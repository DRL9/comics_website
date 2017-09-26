const path = require('path')
    , merge = require('webpack-merge')
    , webpackBaseConfig = require('./webpack.base.conf.js')
    ;


const webpackConfig = merge(webpackBaseConfig, {
    devtool: '#inline-sourcemap'
});

delete webpackConfig.entry;

module.exports = webpackConfig;