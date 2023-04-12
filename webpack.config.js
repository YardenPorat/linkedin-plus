const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: { main: './src/main.ts', background: './src/background.ts' },
    output: {
        filename: '[name].js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: 'static' }],
        }),
    ],
    devtool: 'source-map',
};
