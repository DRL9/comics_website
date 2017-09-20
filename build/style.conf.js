const ExtractTextPlugin = require('extract-text-webpack-plugin')
    ;

const isProduction = process.env.NODE_ENV === 'production';

exports.generateVueStyle = function () {
    return isProduction ? ExtractTextPlugin.extract({
        fallback: 'vue-style-loader',
        use: 'css-loader'
    }) :
        ['vue-style-loader', 'css-loader']
}

exports.generateCssStyle = function () {
    return isProduction ? ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
    }) : [
            'style-loader',
            'css-loader'
        ]
}