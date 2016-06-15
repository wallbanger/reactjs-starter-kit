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
            { test: /\.jsx?/, loaders: ['babel'], include: path.join(__dirname, 'src') },
            { test: /\.css$/, loaders: ['style', 'css?modules&importLoaders=1', 'postcss-loader'] },
            { test: /\.scss$/, loaders: ['style', 'css!sass?indentedSyntax=true&sourceMap=true'] }
        ]
    },
    postcss: [
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-custom-properties')
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
};
