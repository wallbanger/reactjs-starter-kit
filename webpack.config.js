var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'eval',
    entry: [
        './src/app'
    ],
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'frontend.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css$/,
                loaders: ['style', 'css?modules&importLoaders=1']
            }, {
                test: /\.scss$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[local]',
                    // 'resolve-url',
                    'sass?sourceMap'
                ]
            }
        ]
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
};
