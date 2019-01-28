const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const chalk = require('chalk');

const config = require('../../webpack.config');

//这个config中不要配置devServer
const exe = webpack(config);

const devServer = {
    publicPath: '/assets/',
    contentBase: path.join(__dirname, '../../dist'),
    clientLogLevel: 'none',
    quiet: true,
    host: 'localhost'
}

const server = new WebpackDevServer(exe, devServer);

server.listen(8080, 'localhost', function (err, stats) {
    if (err) {
        return console.log(error);
    }

    let str =  "Server is running at " + (chalk.rgb(59,142,234)("http://localhost:8080"));

    console.log(str);
})




