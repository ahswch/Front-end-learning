# Chapter 5 歌手页面开发

## 数据接口

- `https://y.qq.com/portal/singer_list.html`通过控制台 network xhr或js找到fcq相关
- 在api下新建singer.js 获取数据
- 设置_normalizeSinger方法格式化接收的数据
- 在common/js下新建singer 设置Singer类
- 组件引入数据js和类js

## listview组件

- 在base下创建listview组件
- 在dom.js中封装获取索引方法
- vue对data和props中的数据添加get和set，用于监听和dom的双向绑定, 在created中创建数据不会被监听
- fix title
- loading