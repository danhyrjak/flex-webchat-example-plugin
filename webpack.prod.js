const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    optimization: {
        usedExports: true
    },
    plugins: [
        new Dotenv({
            path: "./.env.prod",
            safe: true,
            allowEmptyValues: false,
            systemvars: true
        }),
        new CleanWebpackPlugin(),
        new CompressionPlugin(),
        new BundleAnalyzerPlugin()
    ]
});