# Chapter 11-13

## Chapter 11 编译打包

- `npm run build` 生成打包文件dist
- build下build.js解析
- 启动http server
  - 不能使用静态server，因为有后端api接口
  - 在根目录新建`prod.server.js` 小型服务端 (需要在config/index.js中设置端口)
  - `node prod.server.js`

## Chapter 12 项目总结

## Chapter 13 vue1.0升级到2.0

- 本项目已是vue 2.0开发
  - Package.json
  - Build
  - Config
