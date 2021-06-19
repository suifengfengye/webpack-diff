const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        filename: '[name].[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    module: {
        rules: [   
            {
                test: /\.js|jsx$/,
                use: [
                        {
                            loader: 'babel-loader',
                        },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
    ],
}