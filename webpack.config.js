const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: '/src/index.js',
        styles: './src/css/index.css'
    },
    module: {
        rules: [
            {
            test: /\.html$/i,
            loader: "html-loader",
            },
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    })],
    // no incluir un polyfill para el módulo crypto. Esto para poder incluir bcryptjs
    resolve: {
        fallback: {
          "crypto": false
        }
    }
}