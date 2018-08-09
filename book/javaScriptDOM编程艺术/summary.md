## 第三章 DOM

一份文档就是一颗节点树

- JavaScript语言里的对象可分为三类：
    - 用户定义对象
    - 内建对象（内建在JavaScript语言里的对象，如Array、Math和Date等）
    - 宿主对象（由浏览器提供的对象）
- 节点
    - 元素节点
    - 文本节点
    - 属性节点
- 获取元素
    - getElementById():通过元素id获取元素节点，返回一个对应着文档里一个特定元素节点的对象(document对象特有函数)
  ```
  document.getElementById("idName");
  ```
    - getElementByTagName():通过标签名字获取一组特定元素节点，返回对象数组
  ```
  element.getElementByTagName("tagName");
  ```
    - getElementByClassName():通过类名获取一组特定元素节点，返回对象数组
  ```
  element.getElementByClassName("className");
  ```
- 获取和设置属性（不属于document对象，只能通过元素节点对象调用）
    - getAttribute()：获取对象对应属性值
  ```
  object.getAttribute("attributeName");
  ```
    - setAttribute()：设置对象对应属性值
  ```
  object.setAttribute("attributeName",value);
  ```

## 第4章 案例：JavaScript图片库

- childNodes属性：用来获取任何一个元素的所有子元素，是一个包含这个元素全部子元素的数组。
  ```
  element.childNodes
  ```
- nodeType:每个节点都有nodeType属性
  ```
  node.nodeType
  ```
  nodeType共有12种可取值，其中3种有实用价值：
    - 元素节点的nodeType属性值是1
    - 属性节点的nodeType属性值是2
    - 文本节点的nodeType属性值是3
- nodeValue：用来改变一个节点的值
  ```
  node.nodeValue
  ```
- firstChild：返回指定节点的首个子节点
  ```
  node.firstChild //等价于 node.childNodes[0]
  ```
- lastChild:返回指定节点的最后一个子节点
  ```
  node.lastChild //等价于 node.childNodes[node.childNotes.lenth-1]
  ```
- parentNode:父节点
- nextSibling:下一个兄弟节点
- previousSibling:上一个兄弟节点

## 第5章 最佳实践

- 确保网页在没有JavaScript的情况下也能正常工作
- 分离JavaScript
- 向后兼容性
- 性能
  - 尽量少访问DOM（把访问结果保存在变量里）和减少标记（不必要的标记去掉，减少遍历DOM树的时间）
  - 合并和放置脚本（最好放在文档末尾，&lt;/body&gt;标记前）
  - 压缩脚本（把脚本文件中不必要的字节，如空格和注释，删除）

## 第6章 图片库改进

- windows.onload:网页加载完毕触发的事件
- windos.onload需要运行多个函数时，可使用下面的函数进行函数添加：
  
  ```javascript
  function addLoadEvent(func){
    var oldonload = window.onload;//把现有的windows.onload事件处理函数的值存入变量oldonload
    if(typeof window.onload != "function"){//如果在这个处理函数上还没有绑定任何函数，把新函数添加给它
        window.onload = func;
    }
    else{//如果在这个处理函数上已经绑定了一些函数，把新函数追加到现有指令的末尾
        window.onload = function(){
            oldonload();
            func();
        }
    }
  }
  addLoadEvent(fristFuncion);
  addLoadEvent(secondFunction);//两个函数都会在页面加载完成后运行
  ```
  
## 第7章 动态创建标记

- 传统技术：document.write和innerHTML
- 深入剖析DOM方法：createElement(元素节点)、createTextNode(文本节点)、appendChild(为元素添加子节点))和insertBefore(把新元素添加到某元素前面))
  - 自制“把新元素添加到某元素后面”
  
  ```javascript
  function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
  }
  ```

## 第8章 充实文档的内容

- 一个为文档创建“缩略语列表”的函数
- 一个为文档创建“文献来源链接”的函数
- 一个为文档创建“快捷清单”的函数
- 两项原则
  - 渐进增强：总是从最核心的部分，即内容开始。根据内容使用标记实现良好的结构，然后再逐步加强这些内容。
  - 平稳退化：缺乏必要的CSS和DOM支持的访问者可以访问到你的核心内容。
- JavaScript脚本只应该用来充实文档内容，不应用来创建核心内容。

## 第9章 CSS-DOM
- 三位一体的网页：
  - 结构层（HTML）
  - 表示层（CSS）
  - 行为层（DOM和JavaScript）
- styleu属性（文档的每个元素节点都有一个style属性）

  ```
  element.style.property
  //引用一个中间带减号的CSS属性时，DOM要求使用驼峰命名法
  element.style.fontFamliy
  //只有把CSS style属性插入到标记里，才可以用DOM style属性去查询那些信息，来自外部文件的style.css和html中style标签里的样式不能用DOM style属性检索出来。可以先用DOM设置样式，再检索
  ```

- 一些只读的DOM属性：
  - previoudSibling
  - nextSibling
  - parentNode
  - firstChild
  - lastChild
- style对象的各个属性可读写
  ```
  element.style.propert = value//属性值永远是一个字符串,必须放在引号里
  ```
- 在使用CSS不方便的场合，可以利用DOM对文档做一些增强
- 函数抽象化，变得更通用

## 第10章 用JavaScript实现动画效果

- position属性合法值
  - static：默认值，按照它们在标记里出现顺序排列
  - fixed
  - relative：与static相似，但可以从文档的正常显示顺序中脱离出来（应用float属性）
  - absolute：可以把它摆放到容纳它的“容器”的任何位置。这个容器要么时文档本身，要么是一个有着fixed或absolute属性的父元素（显示位置由top、right、bottom、left等属性决定）
  
## 第11章 HTML5

- HTML简介，不作总结

## 第12章 综合实例

- 由于ajax的跨域问题，不作ajax部分，提交完整表单后直接进入感谢界面
- 在 https://closure-compiler.appspot.com/home 上对js代码进行压缩
- 保证任何人都能无障碍地使用它，是一个最基本的原则

做一个完整网站时，多个页面的基本框架不变，使用同一js作行为层时，要合理利用判断语句，让js中不同函数能适应不同页面，如：控制图片展示页的函数在表格页不会报错，

```javascript
function prepareGallery(){
    if(!document.getElementsByTagName) {
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementById("imagegallery")){
        return false;
    }
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i=0;i<links.length;i++){
        links[i].onclick = function(){
            // showPic(this);
            return !showPic(this);
        }
    }
}
```
这个函数的第3个if语句，就能够使函数在除图片展示页外的其它页面不会报错,保证了相对的平稳退化

- 使用有意义的标记来构建页面结构
- 把表现性的信息分离到CSS样式表中
- 使用合理JavaScript来应用行为增强,同时确保平稳退化

至此，本书一周目基本完成，ajax部分由于跨域问题暂跳过。