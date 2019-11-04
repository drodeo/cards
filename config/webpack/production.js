process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()
//var MiniCssExtractPlugin = require('mini-css-extract-plugin')

//var ManifestPlugin = require('webpack-manifest-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin")
/*
module.exports = {

    module: {
        rules: [
            // ... other rules omitted
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'vue-style-loader'
                })
            }
        ],
        loaders: [{
            test:    /\.(gif|png|jpe?g|svg)$/i,
            loaders: ['file?name=images/[name]-[hash].[ext]', 'image-webpack']
        }]
    },
    output: {
        chunkFilename: 'javascripts/chunk.[id]-[hash].js',
        filename:      'javascripts/[name]-[hash].js',
        path:          'public/assets',
        publicPath:    '/packs/'
    },
    plugins: [
        // ... Vue Loader plugin omitted
        new ExtractTextPlugin("style.css")
    ]
/!*    plugins: [
        new ManifestPlugin()
    ]*!/
};

/!*
module.exports = {
    module: {
        loaders: [{
            test:    /\.(gif|png|jpe?g|svg)$/i,
            loaders: ['file?name=images/[name]-[hash].[ext]', 'image-webpack']
        }, {
            test:    /\.scss$/,
            loader:  ExtractTextPlugin.extract(['css?sourceMap', 'resolve-url', 'sass?sourceMap'])
        }]
    },

    output: {
        chunkFilename: 'javascripts/chunk.[id]-[hash].js',
        filename:      'javascripts/[name]-[hash].js',
        //path:          path.join('/', 'public', 'assets'),
        publicPath:    '/assets/'
    },

    plugins: [
        // Extract CSS to its own file(s)
        //new ExtractTextPlugin('stylesheets/[name]-[hash].css'),

        // Create the manifest.json file so Rails can find the assets
       // new RailsManifestPlugin()
    ],
};*!/
*/
