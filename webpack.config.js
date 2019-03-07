{
  module: {
    rules: [{
      test: /\.ohm$/,
      loader: 'ohm-loader'
    }]
  }
}
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.ohm$/,
        loader: 'ohm-loader'
      }
    ]
  }
};