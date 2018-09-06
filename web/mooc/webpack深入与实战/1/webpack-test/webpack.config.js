const path = require('path');

module.exports = {
  entry: './hello.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hello.bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  mode: 'development'
};