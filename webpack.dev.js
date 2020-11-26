const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dev-test-site",
    },
    output: {
        filename: "DEV_FlexWebChatExample.js",
        path: path.resolve(__dirname, "dev-test-site"),
    }
});