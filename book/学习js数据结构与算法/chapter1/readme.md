# chapter1 JS简介

- 数组解构
  - 一次初始化多个变量

    ```javascript
    var [x, y] = ['a', 'b'];

    // 等同于
    var x = 'a';
    var y = 'b';

    // 值的交换
    [x, y] = [y, x];
    ```

  - 属性简写
  
    ```javascript
    var [x, y] = ['a', 'b'];
    var obj = {x, y};
    console.log(obj); // { x: "a", y: "b" }
    ```

- 方法属性
  
  ```javascript
  var hello = {
    name: 'abcdef',
    printHello () {
      console.log('Hello');
    }
  }

  // 上面代码可写为下面这样
  var hello = {
    name: 'abcdef',
    printHello: function printHello () {
      console.log('Hello');
    }
  }
  ```

- 使用类进行面向对象编程

  ```javascript
  // 原有声明Book类
  function Book (title, pages, isbn) {
    this.title = title;
    this.pages =pages;
    this.isbn = isbn;
  }
  Book.prototype.printTitle = function () {
    console.log(this.title);
  }

  // 使用class简化
  class Book {
    constructor (title, pages, isbn) {
      this.title = title;
      this.pages =pages;
      this.isbn = isbn;
    }
    printIsbn () {
      console.log(this.isbn);
    }
  }
  ```

  - 继承

  ```javascript
  // 类的继承简化
  class ITBook extends Book {
    constructor (title, pages, isbn, technology) {
      super(title, pages, isbn);
      this.technology = technology;
    }
    printTechnology () {
      console.log(this.technology;)
    }
  }
  ```

  - 使用属性存取器
    - 使用新的类语法可以为属性创建存取器函数。不像其他面向对象语言（封装概念）,类的属性不是私有的，但最好还是遵循一种命名模式。如下例：

    ```javascript
    class Person {
      constructor (name) {
        this._name = name;
      }
      get name () {
        return this._name;
      }
      set name (value) {
        this._name = value;
      }
    }
    ```