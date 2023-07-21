const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: '/src/index.js',
        styles: './src/index.css'
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
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192, // Opcional: si el archivo es más pequeño que este límite, se embeberá como Data URL
                      name: '[name].[ext]',
                      outputPath: 'img',
                      publicPath: '../img', // Ruta relativa para acceder a las imágenes desde el CSS
                    },
                  },
                ],
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