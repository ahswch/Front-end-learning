# chapter4 队列

- 队列是遵循FIFO（First In First Out 先进先出，又先来先服务）原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。

```javascript
function Queue() {
  let item = [];

  // 向队列尾部添加元素
  this.enqueue = function(element) {
    items.push(element);
  }

  // 移除队列的第一项 返回被移除的元素
  this.dequeue = function(){
    return items.shift()
  }

  // 返回队列中第一个元素
  this.front = function () {
    return items[0];
  }

  // 检查队列是否为空
  this.isEmpty = function () {
    return items.length == 0;
  }

  // 返回队列包含的元素个数
  this.size = function () {
    return items.length;
  }

  // 打印队列元素
  this.print = function() {
    console.log(items.toString());
  }

  // es6
  let Queue2 = (function () {
    const items = new WeakMap();
    class Queue2 {
      constructor () {
        items.set(this, []);
      }
      enqueue(element) {
        let q = item.get(this);
        let r = q.shift();
        return r;
      }
      // 其他方法
    }
  })();
}
```

- 优先队列
- 循环队列（击鼓传花）