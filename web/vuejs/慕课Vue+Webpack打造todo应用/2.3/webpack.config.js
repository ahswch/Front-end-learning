const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development' // 判断

const config = {
    target: 'web',  // 
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            { // css预处理器
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
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
if (isDev) {
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

module.exports = config