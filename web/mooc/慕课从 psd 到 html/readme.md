# 慕课从 psd 到 html

## 知识点

- Css和html代码配合
- Css命名和html标签结构应用
- 如何用好Photoshop去审视一个设计稿
- 浏览器兼容性

## 笔记

- 为了兼容性不用html5 语义化标签，class属性注明元素语义
- css分成底层、公共、特有
- 底层css（不同浏览器元素默认样式不同）
  ```css
  /* 重置样式 */
  body, div, dl, dt, ul, li, h1, h2, h3, h4, h5, h6, input, form, a, p, textarea{
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  ol, ul, li{
    list-style: none;
  }
  a{
    text-decoration: none;
    display: block;
    color: #fff;
  }
  img {
    border: none;
    display: block;
  }
  /* 清除浮动 */
  .clearfloat {
    zoom: 1;
  }
  .clearfloat:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }
  ```
  - 为什么要用clearFloat么?
    IE6/7只能通过触发hasLayout属性来实现清除浮动、避免容器高度崩塌，而通过zoom:1可以触发hasLayout。这个是IE老版本浏览器本身的问题。 相关链接:https://www.imooc.com/qadetail/226019
- 设置menu-item时，一行两个食物介绍，中间间隔60px，用margin-right设置60px,每个食物占520px，总共520+520+60+60 = 1160， 超出之前设定的1100px(menu-list类指向的元素还有public-container类，在common.js中设置了宽度),导致一行只显示一个，当然我们可以用item单数设置margin-right 60px。我们可以用更效率的方式，把ul元素宽度设置为1160px,menu-list设置overflow:hidden,这样右侧超出的60px就会隐藏
- ul-item设置color 不然title不显示
- 设置Featured Dishes 的样式时，记得在html代码中添加clearFloat类
- a标签是块级元素
- background no-repeat

- PS 
  - ctrl+alt+z 撤销  F12 恢复到打开时
  - h 抓手 
  - 提取logo 选中 ctrl+c ,ctrl+n,ctrl+v,隐藏背景图层