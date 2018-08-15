const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin') // 把非js代码单独打包成静态资源文件 webpack4.0报错 使用下一行
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development' // 判断

const config = {
    target: 'web',  // 
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.[hash:8].js', // 开发环境使用这种,千万不能用chunkhash 在正式环境使用trunkhash
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({  // 判断 开发环境使用的如错提示在production环境再使用会降低性能，判断环境 作出选择
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            /*{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, 未用到css文件 去掉*/
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]-aaa.[ext]'
                        }
                    }
                ]
            }
        ]
    }
}
//
if (isDev) { //开发环境
    config.module.rules.push(
        { // css预处理器
            test: /\.styl/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true, //使用stylus生成的sourceMap，不用自己生成提升效率
                    }
                },
                'stylus-loader'
            ]
        }
    )
    config.devtool = '#cheap-module-eval-source-map'  // 浏览器可调试
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',  // 设置成这样：通过local host 127.0.0.1来进行访问 也可以通过本机的内网ip进行访问（别人的电脑上可以访问到，比如调试手机页面）
        overlay: {
            errors: true, // 网页显示错误
        },
        hot: true // 修改组件时不重新加载整个页面，只更新修改的那个组件 
        // open: true  // 启动webpck server后自动打开浏览器  
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}
else {
    config.output.filename = '[name].[chunkhash:8].js' 
    config.module.rules.push(
        { // css预处理器
            test: /\.styl/,
            use: ExtractPlugin.extract({
                fallback: 'style-loader',
                use: [
                    // 'style-loader', 样式是写到单独css文件，用css-loader即可 style-loader是把css-loader处理出来的内容在其外面加了一层js代码，这个js代码把css写成html的style标签，这部分代码在css文件里没用 所以删去此loader
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true, //使用stylus生成的sourceMap，不用自己生成提升效率
                        }
                    },
                    'stylus-loader'
                ]
            })
        }
    )
    config.plugins.push(
        new ExtractPlugin('styles.[hash:8].css') // 指定输出静态文件名 contentHash会根据输出的css文件内容进行hash，得到一个单独的值
    )
}

module.exports = config