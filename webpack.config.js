const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: ['./src/main.js', 'webpack-dev-server/client?http://localhost:8080/'],
    output: {
        publicPath : './dist/',
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias : {
            '@' : path.resolve(__dirname, './src')
        }
    },

    module: {
        rules: [
            {
                test: /\.js/, use: 'babel-loader', exclude: /node_modules/
            },
            {
                test : /\.css/ , use: ['style-loader','css-loader'] 
            },
            {
                test : /\.less/ , use : ['style-loader','css-loader','postcss-loader','less-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

}