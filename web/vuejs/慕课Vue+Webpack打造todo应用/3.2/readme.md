安装webpack-dev-server
```
npm i webpack-dev-server
```
在package。json中添加dev命令
```
"dev": "webpack-dev-server --config webpack.config.js"
```

修改webpack.config.js以适应webpack-dev-server的开发模式
```
module.exports = {
    target: 'web',  // 
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
```

在配置文件里作判断（区分开发环境和正式环境）
    - 安装依赖
    ```
    npm i cross-env
    ```
    - 在package.json中修改配置
    ```
    webpack.config.js",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js"
    ```
    - webpack.config.js修改
    ```
    const path = require('path')
    const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
            new VueLoaderPlugin()
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
        config.devServer = {
            port: 8000,
            host: '0.0.0.0',  // 设置成这样：通过local host 127.0.0.1来进行访问 也可以通过本机的内网ip进行访问（别人的电脑上可以访问到，比如调试手机页面）
            overlay: {
                errors: true, // 网页显示错误
            }
        }
    }

    module.exports = config
    ```
    - 为了html显示，增加组件
    ```
    npm i html-webpack-plugin
    // 报错 Unexpected end of JSON input while parsing near '...n-css-3.4.8.tgz"},"en'
    // 运行npm cache clean --force  终端变为node 卡住 等待运行结束 再安装html-webpack-plugin
    ```
    - webpack.config.js修改
    ```
    const HTMLPlugin = require('html-webpack-plugin') // 添加
    plugins: [ // 修改
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ],
    ```
     npm run dev报错 ReferenceError: webpack is not defined 
     webpack.config.js添加 
     ```
     const webpack = require('webpack')
     ```
     增加hot： true （修改组件时不重新加载整个页面，只更新修改的那个组件 ）

     ```
        if (isDev) {
        config.devtool = '#cheap-module-eval-source-map'  // 浏览器可调试
        config.devServer = {
            port: 8000,
            host: '0.0.0.0',  // 设置成这样：通过local host 127.0.0.1来进行访问 也可以通过本机的内网ip进行访问（别人的电脑上可以访问到，比如调试手机页面）
            overlay: {
                errors: true, // 网页显示错误
            },
            hot: true // 热加载 修改组件时不重新加载整个页面，只更新修改的那个组件 
            // open: true  // 启动webpck server后自动打开浏览器  
        }
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        )

## 3.2

安装依赖,安装前在根目录下创建.babelrc（演示vue的render方法及支持jsx）和postcss.config.js
```
npm i postcss-loader autoprefixer babel-loader babel-core
```

postcss.config.js配置
```
const autoprefixer = require('autoprefixer')
/* stylus文件编译成css后用postcss优化css，用到autoprefixer组件优化（给需要加浏览器前缀的css加上前缀，兼容各浏览器）*/
module.exports = {
  plugins: [
    autoprefixer()
  ]
}
```

.babelrc配置(需要安装对应依赖： npm i babel-preset-env babel-plugin-transform-vue-jsx,根据warn提示安装npm i babel-helper-vue-jsx-merge-props 视频中还提示安装npm i babel-plugin-syntax-jsx)
```
{
  "presets": [
    "env"
  ],
  "plugins": [
    "transform-vue-jsx"
  ]
}
```

webpack.config.js配置
```
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
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true, //使用stylus生成的sourceMap，不用自己生成提升效率
                        }
                    },
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
```

  ## github库内只保存更新的文件，无依赖等文件
