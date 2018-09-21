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
      historyApiFallback: true,
      proxy: {
        '/auth/*': {
          target: 'http://prosto.ai/',
          changeOrigin: true,
          secure: false,
          pathRewrite: { '^/auth': '' }
        },
        '/file/*': {
          target: 'http://prosto.ai/',
          changeOrigin: true,
          secure: false,
          pathRewrite: { '^/file': '' }
        }
      }
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
