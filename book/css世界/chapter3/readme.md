# chapter 3 流、元素与基本尺寸

## 块级元素(block-level element)

> 常见：div、li、table

- 块级元素和`display: block;`的元素不是一个概念
  - li 元素默认`display: list-item;`，table 元素默认`display: table;`
- 基本特征：一个水平流上只能单独显示一个元素，多个块级元素则换行显示。
- 由换行特性，理论上都可以配合 clear 属性来清除浮动带来的影响。如下

```css
.clear:after {
  content: "";
  display: table; // 也可以是block或list-item
  clear: both;
}
// 实际开发中不适用list-item 字母多、有圆点符号、ie伪元素不支持
// list-item元素的项目符号在标记盒子（附加盒子） ie下伪元素无法创建标记盒子
```

- 每个元素都有两个盒子（外在和内在）
  - 外在盒子控制元素是否换行显示
  - 内在（容器）盒子控制元素宽高、内容呈现
  - `display`
    - `block` 外在块级盒子，内在块级容器盒子
    - `inline-block` 外在内联盒子，内在块级容器盒子
    - `inline` 内外内敛盒子

## width/height 作用的具体细节

### `width:auto;`

- 外部尺寸与流体特性
  - 正常流宽度：block 容器铺满父元素
  - 格式化宽度（绝对定位）对立（上下、左右）同时存在 如上下同时存在
- 内部尺寸与流体特性
  - 包裹性（inline-block）
  - 首选最小宽度
  - 最大宽度

> 书籍风格实在不适合我 不作笔记了
