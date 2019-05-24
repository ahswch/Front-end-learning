# chapter3 栈

- 栈数据结构：一种遵循后进先出(LIFO)原则的有序集合。新添加的或待删除的元素都保存在栈的同一端，称为栈项，另一端就叫栈底。在栈里新元素都靠近栈项，旧元素都接近栈底
  - 创建栈（创建一个类来表示栈）

  ```javascript
  function Stack() {
    // 各种属性方法声明

    let itemm = [];

    // 添加一个或几个新元素到栈顶
    this.push = function(element) {
      item.push(element);
    }

    // 移除栈顶的元素， 同时返回被移除的元素
    this.pop = function() {
      return items.pop();
    }

    // 返回栈顶的元素，不对栈做任何修改
    this.peek = function(){
      return items[items.length - 1];
    }

    // 如果栈里没有任何元素就返回true 否则返回false
    this.isEmpty = function() {
      return items.length == 0;
    }

    // 移除栈里的所有元素
    this.clear = function() {
      items = [];
    }

    // 返回栈里的元素个数
    this.size = function() {
      return items.length;
    }

    // 打印栈元素 把栈里的元素输出到控制台
    this.print = function() {
      console.log(items.toString());
    }

  }
  ```

- es6和Stack类
  > es6的类是基于原型的。虽然基于类型的类比基于函数的类更节省内存，也更是个创建多个实例，却不能够声明私有属性（变量）或方法。不能让Stack类用户只访问暴露给类的方法

  ```javascript
   // es6语法
    class Stack {
      constructor () {
        this.items = [];
      }
      push(element) {
        this.items.push(element);
      }
      // 其他方法
    }
  ```

  - 使用es6的限定作用域Symbol实现类（Symbol基本类型，它是不可变的，可以用作对象的属性）

    ```javascript
    let _items = Symbol();
    class Stack {
      constructor () {
        this[_items] = [];
      }
      // 其他方法

      // 这种方法创建了一个假的私有变量。通过es6新增的Object.getOwnPropertySymbols方法能够取到类里面声明的所有Symbol属性 Stack类可以被破坏
    }
    ```

  - 用es6的WeakMap实现类（WeakMap这种数据类型可以确保属性是私有的）

    ```javascript
    const items = new WeakMap();
    class Stack {
      constructor () {
        items.set(this, []);
      }
      push(element) {
        let s = items.get(this);
        s.push(element);
      }
      pop() {
        let s = items.get(this);
        let r = s.pop;
        return r;
      }
      // 其他方法
    }

    // items在Stack类里是私有属性 但items是在类意外声明的 谁都可以访问 试用闭包 把 Stack类包起来
    let Stack = (function () {
      const items = new WeakMap();
      class Stack {
        constructor () {
          items.set(this, []);
        }
        // 其他方法
      }
      return Stack;
    })();
    ```

- 用栈解决问题
  - 进制转换

  ```javascript
  // 十进制转二进制
  function divideBy2(decNumber) {
    var remStack = new Stack(),
    rem,
    binaryString = '';
    while (decNumber > 0) {
      rem = Math.floor(decNumber % 2);
      remStack.push(rem);
      decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.isEmpty()) {
      binaryString += remStack.pop().toString();
    }
    return binaryString();
  }
  ```