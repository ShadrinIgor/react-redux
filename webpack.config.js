var path = require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "./js/bundle.js"
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
