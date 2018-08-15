

## 4.2 webpack区分打包类库代码及hash优化

为什么把vue或其他一些第三方包的代码单独打包？
这类框架的代码稳定性比较高，我们的业务代码是经常要更新迭代的，我们希望使用浏览器尽可能长的时间去缓存静态文件如果把类库代码和业务代码打包在一起，整个js文件都会跟着业务代码更新而更新，这样我们的类库代码不能很长时间在浏览器缓存，我们希望利用浏览器缓存减少服务器流量，这样用户加载速度更快，所以把它们单独拆分出来打包。

- 修改webpack.config.js相关代码run build报错
```
Error: webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
```
替换后报错
```
TypeError: Cannot read property 'splitChunks' of undefined
```
网上解决：  https://www.imooc.com/qadetail/251317
在config.plugins.push语句之后添加：（去掉视频中要加的new webpack.optimize.CommonsChunkPlugin相关代码）
```
config.optimization = {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2, maxInitialRequests: 5,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true
        }
      }
    },
    runtimeChunk: true
  }
```
成功build 连后续的runtime也出来了 
end
