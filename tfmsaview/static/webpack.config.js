var path = require('path');
var webpack = require('webpack');

var envPlugin = new webpack.DefinePlugin({
    __API_SERVER__: JSON.stringify(process.env.API_SERVER)
});

module.exports = {
    entry: {
        TensorMSA: './js/app.js',
        playground: './ts/playground.ts'
    }, // Multiple Entry
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: './../static/dist/[name].js' // Output for the multiple entry
    },
    module: {
        loaders: [
            { 
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/, 
                loader: "babel", 
                query:
                {
                    presets:['es2015','react']
                }
            },
            {
                // test: A condition that must be met <-> exclude
                test: /\.ts$/,
                exclude: /node_modules/,  
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [envPlugin]
};