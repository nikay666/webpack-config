const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin  = require('copy-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'

module.exports  = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main:'./index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },  
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        hot: isDev,
        open: true,
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader' ,'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf| woff|woff2|eot)$/,
                use: ['file-loader']
            },
        ]
    }

}