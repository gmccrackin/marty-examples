module.exports = {
    entry: {
        demo1: './demo1/index.js',
    },
    output: {
        filename: '[name]/bundle.js',
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};
