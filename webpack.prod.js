const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new Dotenv({
            path: "./.env.prod",
            safe: true,
            allowEmptyValues: false,
            systemvars: true
        }),
        new CleanWebpackPlugin()
    ]
});