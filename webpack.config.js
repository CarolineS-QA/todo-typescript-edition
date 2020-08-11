module.exports = {
    entry: './src/index.ts',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    }
};