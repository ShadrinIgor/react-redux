var path = require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "./js/bundle.js",
        sourceMapFilename: "./js/bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
}
