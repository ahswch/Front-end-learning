## 4.1 webpack配置css单独分离打包

```
npm run build
```
把css打包成单独文件，安装工具
```
npm i extract-text-webpack-plugin
```
安装完在webpack.config.js添加
```
const ExtractPlugin = require('extract-text-webpack-plugin') // 把非js代码单独打包成静态资源文件
```
去掉webpack.config.js对css文件的处理代码（未用到css文件）
对styl文件处理代码需单独区分环境来做处理  处理完报错
```
Error: Chunk.entrypoints: Use Chunks.groupsIterable and filter by instanceof Entrypoint instead
```
安装npm install --save-dev extract-text-webpack-plugin@next
再run build 报错
```
Error: Path variable [contentHash:8] not implemented in this context: styles.[contentHash:8].css
```

修改webpack.config.js (https://www.imooc.com/qadetail/256415)
```
config.plugins.push(
        new ExtractPlugin('styles.[hash:8].css') // 指定输出静态文件名 contentHash会根据输出的css文件内容进行hash，得到一个单独的值
    ) // 这样配置会把.vue文件里面的css也打包进来的  好像webpack 4.5.0 不支持 extract-text-webpack-plugin 插件，换4.2.0版本以下 暂未解决  
```
试试这个 https://blog.csdn.net/harsima/article/details/80819747  失败 那就全部打包