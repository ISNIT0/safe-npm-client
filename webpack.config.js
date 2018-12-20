const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [path.join(__dirname, "/src/index.tsx")],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {

                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: { path: 'postcss.config.js' }
                        }
                    },
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/octet-stream',
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/src/index.html"),
            filename: "index.html",
            inject: "body"
        })
    ],
    output: {
        publicPath: '/',
        path: path.join(__dirname, "/www/"),
    }
};
