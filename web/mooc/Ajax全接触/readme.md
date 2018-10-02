# Ajax全接触

> 慕课网地址：<https://www.imooc.com/learn/250>

## Chapter 1 课程介绍

- Ajax(Asynchronous Javascript and XML)异步的Javascript和XML
  - 一种无需重新加载整个网页的情况之下能够更新部分网页的技术（异步更新、局部更新）

## Chapter 2 概念介绍

### 同步和异步

- 同步(出错只能再次发送请求并等待)

![同步](./img/1.png)

- 异步(把处理数据实时发送到服务端，实时显示返回状态，不用等待。不会阻塞)

  ![异步](./img/2.png)
  - 运用HTML和CSS来实现页面，表达信息
  - 运用XMLHttpRequest和web服务器进行数据的异步交换
  - 根据接受到的数据运用Javascript操作DOM，实现动态局部刷新

### XMLHttpRequest对象的创建

- 实例化XHR对象`var request = new XMLHttpRequest()`

### HTTP请求

- HTTP是计算机通过网络进行通信的规则
  - 浏览器向web服务器请求信息和服务
  - 是一种无状态的协议
    - 不建立持久的连接（服务端不保留连接的相关信息）
- 一个完整的HTTP请求过程，通常7个步骤
  - 建立TCP连接
  - Web浏览器向Web服务器发送请求命令
  - Web浏览器发送请求的头信息
  - Web服务器做出应答
  - Web服务器发送应答头信息
  - Web服务武器向浏览器发送数据
  - Web服务器关闭TCP连接
- 一个HTTP请求一般由四部分组成
  - 请求的方法或动作，比如是GET或是POST请求
  - 正在请求的URL。总得知道请求的地址是什么
  - 请求头，包含一些客户端环境信息，身份验证信息
  - 请求体，也就是请求正文，请求正文中可以包含客户提交的查询字符串信息，表单信息等等。
- GET和POST
  - GET
    - 一般用于信息获取
    - 使用URL传递参数
    - 对所发送信息的数量也有限制，一般在2000个字符
  - POST
    - 一般用于修改服务器上的资源。
    - 对所发送信息的数量无限制
- HTTP响应 一般由三部分组成
  - 一个数字和文字组成的状态码，用来显示请求是成功还是失败
  - 响应头，响应头也和请求头一样包含许多有用的信息，例如服务器类型、日期时间、内容类型和长度等
  - 响应体，也就是响应正文
- HTTP状态码由三位数字构成，其中首位数字定义了状态码的类型
  - 1XX:信息类，表示收到Web浏览器请求，正在进一步的处理中
  - 2XX:成功，表示用户请求被正确接收，理解和处理。例如 200 OK
  - 3XX:重定向，表示请求没有成功，客户必须采取进一步的动作
  - 4XX:客户端错误，表示用户端提交的请求有错误，例如 404 NOT FOUND 意味着请求中所引用的文档不存在
  - 5XX:服务器错误，表示服务器不能完成对请求的处理，如 500
  > 了解状态码的好处：有助于提高Web应用程序调试的效率和准确性

### XMLHttpRequest发送请求

- 一些方法
  - open(method,url,async) async参数指定请求同步/异步,默认异步为true
  - send(string) 把请求发送到服务器 用get string可不填写或none。
  - setRequestHeader写在以上两个方法中间，在post时声明如表单请求样式

### XMLHttpRequest取得响应

- 一些方法
  - responseText:获取字符串形式的响应数据
  - responseXML:获取XML形式的响应数据
  - status和statusText:以数字和文本形式返回HTTP状态码
  - getAllResponseHeader():获取所有的响应报头
- readyState属性：响应返回成功时得到通知
  - 0:请求未初始化，open还没有调用
  - 1:服务器连接已建立，open已经调用了
  - 2:请求已接收，也就是接收到头信息了
  - 3:请求处理中，也就是接收到响应主体了
  - 4:请求已完成，且响应已就绪，也就是响应已完成
  > 通过onreadystatechange事件监听属性值的变化

  ```javascript
  var request = new XMLHttpRequest();
  request.open("GET","get.php",true);
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      // 做一些事 request.responseText
    }
  }
  ```

## Chapter 3 Ajax的简单例子(Ajax + PHP)
