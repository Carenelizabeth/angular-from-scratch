const path = require('path');

module.exports = {
    entry: {
        app: './src/app.ts',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
      },
    resolve: {
        extensions: ['.ts', '.js', '.json']
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
};