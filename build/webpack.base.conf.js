const webpack = require('webpack')
    , path = require('path')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    ;

module.exports = {
    entry: {
        app: path.resolve('src/app.js')
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [path.resolve('src')]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve('src')]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('src/index.html'),
            filename: 'index.html',
            chunksSortMode: 'dependency'
        })
    ]
}
