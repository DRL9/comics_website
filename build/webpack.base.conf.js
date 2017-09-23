const webpack = require('webpack')
    , path = require('path')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , styleConfig = require('./style.conf')
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
    resolve: {
        alias: {
            //使用基于 ES Module 的完整构建的版本
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [path.resolve('src')],
                options: {
                    loaders: {
                        'css': styleConfig.generateVueStyle()
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve('src')]
            },
            {
                test: /\.css$/,
                use: styleConfig.generateCssStyle()
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
