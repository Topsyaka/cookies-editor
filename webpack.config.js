var path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'cookiesWorker.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['es2015']
                    }
                }
            }
        ]
    }
}