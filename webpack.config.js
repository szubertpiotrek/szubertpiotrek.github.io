module.exports = {
    entry: './js/functionalities.js',
    output: {
        path: `${__dirname}/js`,
        filename: 'out.js'
    },
    watch: false,
    mode: 'production',
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                "presets": [
                    ["env", {
                        "targets": {
                            "browsers": ["> 1%"]
                        }
                    }]
                ]
            }
        }],
    }
}