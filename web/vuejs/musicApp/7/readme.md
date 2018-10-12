# Chapter 7 播放器内核组件

- vuex管理播放器数据
  - state.js配置
    - playing 播放暂停
    - fullScreen全屏 底部
    - playlist 播放列表
    - sequenceList 顺序列表
    - mode播放模式
      - 在common/js中配置config.js 设置模式对应值
    - currentIndex 播放索引
  - getters.js配置
  - mutation-types和mutation配置

## 播放器组件player

- test
  - 安装`npm i create-keyframe-animation lyric-parser`
  - base下创建progress-circle和progress-bar
  - playlist组件
    - base下confirm
    - add-song组件
      - base下search-box search-list switches top-tip
      - suggest组件
        - base下noresult
        - api search config
- App.vue下引入player
- v-show控制显示隐藏 songlist派发事件 musiclist监听到
- 在action.js设置播放动作selectPlay
- normal-player和mini-player基本样式及back open方法
- 播放器切换动画
  - cd图飞入 利用vue的动画钩子
  - 安装js动画库create-keyframe-animation 并引入
- 播放功能audio
  - 播放、暂停
  - 上、下一首
  - play和error事件防止快速多次点击和其他audio错误
  - 播放进度控制
    - audio的timeupdate
    - format函数时间格式化
    - base下新建progress-bar组件
    - 进度条交互
      -利用betterscroll的touch监听
      - 拖动时避免由于歌曲播放引起的进度条移动（在watch pecent时添加额外判断条件）
      - 点击切换进度
      - miniplayer圆形进度条
        - basex下新建progress-circle组件 svg circle
  - 播放模式
    - 在common/js/mixin中设置changeMode方法 iconMode计算属性
    - 在common/js/util.js中设置shuffle方法 打乱数组 resetCurrentIndex方法确保切换模式时当前歌曲不变
    - 在audio的end函数中设置切换到下一首
    - 随机播放全部按钮实现 musiclist组件中

## 歌词获取及使用

- api文件夹下创建song.js devjs修改
- 在common/js/song中调用
- 安装js-base64对base64歌词解码
- 安装lyric-parser对解码后的歌词进行格式化及使用
- 歌词与cd滑动
- 拖动进度歌词同步及其他改进（切换歌曲，循环播放歌词正确显示）
- cd页当前歌词显示
- 底部播放器适配
  - 在common/js中mixin中设置公用js
  - 在需要使用底部播放器组件的地方引入mixin