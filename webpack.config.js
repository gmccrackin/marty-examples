module.exports = {
    entry: {
        demo1: './demo1',
        demo2: './demo2',
        demo3: './demo3',
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
