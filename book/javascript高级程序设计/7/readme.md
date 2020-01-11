# Chapter 7 函数表达式

- 函数表达式的特征
- 使用函数实现递归
- 使用闭包定义私有变量

## 函数表达式的特征

- 函数定义两种方式
  - 函数声明
    - 函数声明提升：在执行代码之前会先读取函数声明。可以把函数声明放在调用它的语句后面
  - 函数表达式：创建一个函数并将它赋值给变量，创建的函数叫做匿名函数，因为 function 关键字后面没有标识符
    - 在使用前必须先赋值（不会提升）
    - 不要在判断语句中使用函数声明，可以使用函数表达式

## 递归

> 一个函数通过名字调用自身

```javascript
// 递归阶乘函数
function factorial(num){
  if (num <= 1){
    return 1;
  } else {
    return num * factorial(num-1);
  }
}

// 下面的代码出错
var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial(4)); //出错 在执行anotherFactorial(4)时，里面的factorial 已经不再是函数
// 解决 使用 arguments.callee
function factorial(num){
  if (num <= 1){
    return 1;
  } else {
    return num * arguments.callee(num-1);
  }
}
// 严格模式下，不能通过脚本访问 arguments.callee，会出错 使用命名函数表达式来达成相同的结果
var factorial = (function f(num) {
  if (num <= 1){
    return 1;
  } else {
    return num * f(num-1);
  }
}
// 这种方式在严格模式和非严格模式下都能用
```

- 在编写递归函数时，使用 arguments.callee 总比使用函数名更保险

## 闭包

- 指有权访问另一个函数作用域中的变量的函数
- 创建闭包的常见方式：在一个函数内部创建另一个函数

```javascript
// 第五章排序对象数组的函数
function createComparisonFunction(propertyName) {
  return function(object1, object2) {
    var value1 = object1[propertyName]; // 1
    var value2 = object2[propertyName]; // 1
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
}
// 作标识的两行代码访问了外部函数中的变量 propertyName，即使这个内部函数被返回了，而且是在其他地方被调用了，但它仍然可以访问变量 propertyName，因为内部函数的作用域链中包含createComparisonFunction()的作用域

// 在另一个函数内部定义的函数会将包含函数（即外部函数）的活动对象添加到它的作用域链中
var compare = createComparisonFunction('name'); // 创建
var result = compare({ name: 'Nicholas' }, { name: 'Greg' }); // 调用
// 在匿名函数从 createComparisonFunction()中被返回后，它的作用域链被初始化为包含createComparisonFunction()函数的活动对象和全局变量对象，匿名函数就可以访问在createComparisonFunction()中定义的所有变量，createComparisonFunction()函数在执行完毕后，其活动对象也不会被销毁，因为匿名函数的作用域链仍然在引用这个活动对象，直到匿名函数被销毁
compareNames = null; //解除对匿名函数的引用（以便释放内存）
```

### 闭包与变量

- 闭包只能取得包含函数中任何变量的最后一个值。闭包所保存的是整个变量对象，而不是某个特殊的变量，如下所示

```javascript
function createFunctions() {
  var result = new Array();
  for (var i = 0; i < 10; i++) {
    result[i] = function() {
      return i;
    };
  }
  return result;
}
// 表面上看，似乎每个函数都应该返自己的索引值，即位置 0的函数返回 0，位置 1的函数返回 1，以此类推。但实际上，每个函数都返回 10,因为每个函数的作用域链中都保存着 createFunctions()函数的活动对象，所以它们引用的都是同一个变量 i
// 可以通过创建另一个匿名函数强制让闭包的行为符合预期
function createFunctions() {
  var result = new Array();
  for (var i = 0; i < 10; i++) {
    result[i] = (function(num) {
      return function() {
        return num;
      };
    })(i);
  }
  return result;
}
```

### this 对象

- 在闭包中使用 this 对象也可能会导致一些问题
- this 对象是在运行时基于函数的执行环境绑定的：在全局函数中，this 等于 window，而当函数被作为某个对象的方法调用时，this 等于那个对象。匿名函数的执行环境具有全局性，因此其 this 对象通常指向 window，由于编写闭包的方式不同，这一点可能不会那么明显

```javascript
var name = 'The Window';
var object = {
  name: 'My Object',
  getNameFunc: function() {
    return function() {
      return this.name;
    };
  }
};
alert(object.getNameFunc()()); //"The Window"（在非严格模式下）
// 每个函数在被调用时都会自动取得两个特殊变量：this 和 arguments。内部函数在搜索这两个变量时，只会搜索到其活动对象为止，因此永远不可能直接访问外部函数中的这两个变量。不过，把外部作用域中的 this 对象保存在一个闭包能够访问到的变量里，就可以让闭包访问该对象了（arguments 也这样），如下
var name = 'The Window';
var object = {
  name: 'My Object',
  getNameFunc: function() {
    var that = this;
    return function() {
      return that.name;
    };
  }
};
alert(object.getNameFunc()()); //"My Object"
```

### 内存泄漏

- IE 中 P202

### 模仿块级作用域

- JavaScript 没有块级作用域的概念，意味着在块语句中定义的变量，实际上是在包含数中而非语句中创建的，如下

```javascript
function outputNumbers(count) {
  for (var i = 0; i < count; i++) {
    alert(i);
  }
  alert(i); // 计数
}
// 变量 i是定义在 ouputNumbers()的活动对象中的，因此从它有定义开始，就可以在函数内部随处访问它，匿名函数可以用来模仿块级作用域并避免这个问题
// 用作块级作用域（通常称为私有作用域）的匿名函数的语法如下
(function() {
  //这里是块级作用域
})();
// 函数声明后面不能跟圆括号。然而，函数表达式的后面可以跟圆括号。要将函数声明转换成函数表达式，加上一对圆括号即可
// 无论在什么地方，只要临时需要一些变量，就可以使用私有作用域
```

- 这种技术经常在全局作用域中被用在函数外部，从而限制向全局作用域中添加过多的变量和函数。

## 私有变量

- 任何函数中定义的变量(不能再函数的外部访问),包括
  - 函数的参数
  - 局部变量
  - 函数内部定义的其他函数
- 有权访问私有变量和私有函数的公有方法称为特权方法(privileged method), 两种在对象上创建特权方法的方式
  - 在构造函数中定义
  - 在私有作用域中定义

### 静态私有变量

- 通过在私有作用域中定义私有变量或函数, 来创建特权方法
- 私有变量和函数是由实例共享的

### 模块模式

- 前面的模式是用于为自定义类型创建私有变量和特权方法的
- 模块模式是为单例创建私有变量和特权方法
  - 单例: 只有一个实例的对象
  - JS 是以对象字面量的方式来创建单例对象的
