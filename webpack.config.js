const path = require('path');

module.exports = {
    entry: './frontend/src/js/home.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
};