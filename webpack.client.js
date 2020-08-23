const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const webpack = require('webpack');
const path = require( 'path' );

//console.log("process ",process.env)

module.exports = env =>  {

    console.log("ENV- ",env)
    return {
    context: __dirname,
    entry: './client/index.js',
    //target: 'node',
    output: {
        path: path.resolve( __dirname, 'build' ),
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true
     },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_module/,
                use: 'babel-loader'
            },
            {
                test: /\.css?$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV || 'development'),
            __BROWSER__: true,
            __PWA_ENV__: JSON.stringify("development"),
            __API_URL__: JSON.stringify(env.API_URL)
        }),
        new HtmlWebPackPlugin({
            template: path.resolve( __dirname, 'client/public/index.html' ),
            filename: 'index.html'
        })
    ]
}
};
