const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js',
    },
    module: {
        loaders: [
          { test: /\.ts(x?)$/, loader: 'ts-loader' },
          { test: /\.json$/, loader: 'json-loader' }
        ]
      },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'})
        ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
};