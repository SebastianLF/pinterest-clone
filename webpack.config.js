const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/app/index.js'),
    output: {
        path: __dirname + '/assets',
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.css$/, exclude: /node_modules/, loaders: ["style-loader" ,"css-loader"] },
        { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=public/fonts/[name].[ext]' }
      ]
    },
    devtool: 'source-map'
};
