# Chapter 11 歌曲列表组件

## playlist组件

- playlist组件基本样式
- 在player组件中引入playlist
- 显示隐藏
- 点击播放 以及player的click.stop
- scrollTo滚动到当前歌曲
- 删除歌曲
  - vuex设置
  - 动画
- 播放模式
  - player和playlist通过mixin共享修改模式相关数据方法
- 添加歌曲到列表页面
  - add-song组件
    - search-box引用
    - 与search组件公用mixin
    - switches组件
    - vuex设置播放历史数据
    - 在player ready时save
    - scroll和songlist组件
    - 搜索历史search-list
    - 添加歌曲提示框效果 top-tip组件
    - playlist设置refreshDelay参数传给scroll组件 确保添加歌曲动画及dom加载好 scroll正确计算高度