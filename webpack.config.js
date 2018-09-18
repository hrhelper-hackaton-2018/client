const path = require('path');

module.exports = (env) => {
    const isProduction = env === "production";
    return {
        mode: isProduction ? "production" : "development",
        entry: path.join(__dirname, "src"),
        output: {
            path: path.join(__dirname, "public"),
            filename: "bundle.js"
        },
        resolve: {
            extensions: [".js", ".jsx"]
        },
        devServer: {
            contentBase: path.join(__dirname, "public")
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }
            ]
        }
    };
}