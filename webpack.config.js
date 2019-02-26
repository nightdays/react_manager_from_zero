const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/main.js', 'webpack-dev-server/client?http://localhost:8080/'],
    output: {
        // publicPath : '/assets/',
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
                test : /\.less/ , use : ['style-loader','css-loader?modules$localIdentName=[path][name]-[local]-[hash]','postcss-loader','less-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/ , 
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: "images/[name].[ext]"
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new CopyWebpackPlugin([{
        //     from: __dirname + '/src/images',
        //     to: __dirname+'/dist'
        // }])
    ],

}