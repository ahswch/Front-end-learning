初始化项目 
```
npm init 
```
安装配置
```
npm i webpack vue vue-loader //按照require再安装别的第三方依赖
```
warn：
![error1](http://paz0grwcr.bkt.clouddn.com/%E6%85%95%E8%AF%BEVue+Webpack%E6%89%93%E9%80%A0todo%E5%BA%94%E7%94%A8error1.png)

如图需要css-loader
```
npm i css-loader
```
- 新建src文件夹
    - 在其内部建app.vue组件
        - app.vue里包含template、script和style
    - 建index.js 作为入口
- 新建webpack.config.js 打包前端资源 作为入口 渲染其它资源
- package.json script加入 "build": "webpack --config webpack.config.js"

运行 npm run build 报错
![error2](http://paz0grwcr.bkt.clouddn.com/%E6%85%95%E8%AF%BEVue+Webpack%E6%89%93%E9%80%A0todo%E5%BA%94%E7%94%A8error2.png)

第一个错误解决连接 ：https://blog.csdn.net/cominglately/article/details/80555210
- 在webpack.config.js中加入 
```
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 为加入内容
module.exports = {
    devtool: "sourcemap",
    entry: './js/entry.js', // 入口文件
    output: {
        filename: 'bundle.js' // 打包出来的wenjian
    },
    plugins: [
        // make sure to include the plugin for the magic plugins为加入内容
        new VueLoaderPlugin()
    ],
    module : {
    ...
}
}
```
第二个错误 安装：
npm i vue-template-compiler

再build 报错
```
Error: [VueLoaderPlugin Error] No matching rule for .vue files found.
Make sure there is at least one root-level rule that matches .vue or .vue.html files.
```

解决方法：https://www.imooc.com/qadetail/261058?t=424087
```
// vue-loader版本过高了，语法结构不一样的，建议换低版本，或者如下面写法，亲测可用
const path = require("path")
const {VueLoaderPlugin } = require("vue-loader")
 
module.exports = {
    entry: path.join(__dirname,"src/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname,"dist")
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.css$/,
                loader: 'css-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
```

github库内只有被编辑的文件 
dist文件夹里的js文件即为打包的js文件，用html引用即可显示abc （src文件夹下的.vue组件设定的）