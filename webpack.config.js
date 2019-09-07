const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    plugins: [
        new LiveReloadPlugin()
    ],
};
