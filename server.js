var webpackConfig = require("./webpack.config.js");
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
var compiler = webpack(webpackConfig);
var server = new webpackDevServer(compiler, {
    hot: true,
    /* здесь именно важно использовать имя домена, с которого идет запрос, а не депрекатор '*'  */
    headers: { "Access-Control-Allow-Origin": "http://localhost:8080" },
    publicPath: "http://localhost:8080/build"
});

server.listen(8080);
