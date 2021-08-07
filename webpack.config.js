const path = require('path');

module.exports = {
    entry: { main: './src/main.ts', background: './src/background.ts' },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: (pathData) => {
            return pathData.chunk.name === 'background'
                ? '../[name].js'
                : '[name].js';
        },
    },
    devtool: 'cheap-module-source-map',
};
