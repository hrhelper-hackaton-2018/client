const path = require('path');

module.exports = env => {
  const isProduction = env === 'production';
  return {
    mode: isProduction ? 'production' : 'development',
    entry: path.join(__dirname, 'src'),
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    devtool: 'cheap-module-eval-source-map'
  };
};
