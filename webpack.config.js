const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/scripts/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash].js', // Places JS in dist/js/
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                "style-loader", // 3. Injects styles into DOM
                "css-loader",   // 2. Turns CSS into CommonJS
                {
                    loader: "sass-loader", // 1. Compiles Sass to CSS
                    options: {
                    // Opt into the modern compiler API for better performance
                    // api: "modern-compiler", 
                    api: "modern", 
                    // Prefer `dart-sass`, even if `sass-embedded` is available
                    implementation: require.resolve("sass"),
                    },
                },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext][query]', // Places images in dist/images/
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        preprocessor: (content, loaderContext) => {
                            return content.replace(/<include src="(.+)"\s*\/?>/gi, (match, src) => {
                                    const filePath = path.resolve(loaderContext.context, src);
                                    loaderContext.dependency(filePath); // Ensure webpack watches the partial for changes
                                return fs.readFileSync(filePath, 'utf-8');
                            });
                        },
                    },
                },
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({ // Create new whenever a page is added
            title: 'Lianne Perol | Dev Env',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html')
        }),
        new HTMLWebpackPlugin({ 
            title: 'About Page',
            filename: 'about.html',
            template: path.resolve(__dirname, 'src/about.html')
        }),
    ],

    


};