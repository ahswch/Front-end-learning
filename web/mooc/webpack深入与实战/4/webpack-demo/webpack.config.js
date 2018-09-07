const path = require('path');
// 使用对象entry必须修改filename，不能一个固定出口
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'development',
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules')
        // exclude: /(node_modules|bower_components)/
        // exclude: /node_modules/,
        // include: /src/
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.tpl$/,
        use: 'ejs-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader:'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 5 versions']
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 5 versions']
                })
              ]
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 5 versions']
                })
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
              name: 'assets/[name]-[hash:5].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              // bypassOnDebug: true,
              // disable: false
            }
          }
        ]
      }
    ]
  }
}