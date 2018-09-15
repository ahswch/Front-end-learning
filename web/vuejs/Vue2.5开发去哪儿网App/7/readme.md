# 首页开发

## header区域开发

- 安装stylus及其loader `npm i stylus --save` `npm i stylus-loader --save`
- 启动项目 `npm run start`
- 编辑首页Home.vue代码
  - home下新建components文件夹>Header.vue
  - 在Home.vue引入Head组件
- 编辑Header.vue
  - 使用stylus
  - 用scoped限制样式只在此组件有效
  - reset.css中设定的1rem为50px 双倍像素屏 86px写为0.86rem 即53px

## iconfont的使用和代码优化

### iconfont的使用

- iconfont下载
  - 把所需图标添加此项目并下载
  - 在src的assets的styles下新建iconfont文件夹，把下载中的4个字体文件存入其中，把css文件放在styles
  - 改写iconfont.css字体路径并删除无用类名
- 在mian.js中引入css
- 在header文件中用带iconfontd类的span写入图标代码
- 其他样式设置

### 代码优化

- 背景色定为变量，方便主题色修改
  - 在src的assets的styles下新建varibles.styl，在其中定义背景色变量
  - 在Header.vue的style标签中引入并修改背景色为该变量

> 在入口文件中引入其它文件时 地址开头用@符号指的是src目录，如果在上面引入变量文件也采用@，需要在@前加~(波浪线)

- 经常使用styles文件夹下的文件，把其地址定位一个易用值
  - 在build里的`webpack.base.conf.js`中设置resolve里的alias: `'styles': resolve('src/assets/styles')`
  - 更换使用styles的路径
  - 更改webpack设置需要重启服务器

## 首页轮播图

> 创建新分支（网页建新分支》git pull 》git checkout 分支名）做新功能 本文不作分支

- [引用vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)
  - 关闭服务器
  - `npm install vue-awesome-swiper@2.6.7 --save` 最新版本易出错
  - 重启服务器
  - 全局引入插件
- 新建swiper组件
  - 按文档使用swiper
  - 组件data用函数 ES6中可写为

  ```javascript
  data () {
    return {
      swiperOption: {}
    }
  }
  ```

- swiper修改
  - `pagination: '.swiper-pagination'`图片圆点
  - `.wrapper >>> .swiper-pagination-bullet-active`样式穿透
- 图片swiper循环输出

> git上传后 切换到master分支 git merge origin/name

## 图标区域页面布局

- home>components下新建Icons组件，并在home组件引入
- style设置（div标签 宽度不设置，如果是非div，宽度100%）

## 图标区域逻辑实现

- 超过8个可拖动
- 描述字数...
  - 在styles下新建mixins.styl 输入以下代码，在css使用实现字数超过宽度变成...

  ```stylus
  ellipsis()
  overflow: hidden
  white-space: nowrap
  text-overflow: ellipsis
  ```

## 推荐组件开发

- 新建Recommend组件
- 在使用ellipsis()时无效 需要在使用的父组件中写入`min-width: 0`的css样式

## 周末游组件开发

- 创建Weekend组件
- 部分代码注视
  - 依据图片宽高比做适应样式

  ```css
  .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 33.9%
  ```

## Ajax获取首页数据

- Vue中发送Ajax的方式
  - 浏览器自带的fetch
  - vue-resource
  - 第三方axios(跨平台)
- 本项目使用axios
  - `npm i axios --save`
  - 在Home.vue中发送请求
    - 使用生命周期函数mounted
    - 在static下建mock》index.json 作数据源 只有在static下的能在线上访问到
    - 在index.js中设置代理(webpack dev serve 提供) 在本地调试时自动把api路径指向static/mock

## 首页父子组件数据传递

- 父通过属性传
- icon取消自动滚动
  - icon中配置swiper属性并

  ```javascript
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  ```
