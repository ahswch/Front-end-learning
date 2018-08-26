# 第5章 引用类型

- 使用对象
- 创建并操作数组
- 理解基本的JavaScript类型
- 使用基本类型和基本包装类型

> 对象是某个特定引用类型的实例
> 
> 新对象- 使用new 操作符后跟一个构造函数来创建的
> 
> 构造函数本身就是一个函数,出于创建新对象的目的而定义的

## Object 类型

- 创建 Object 实例的方式
  - 使用 new 操作符后跟 Object 构造函数```var person = new Object();```
  - 使用对象字面量表示法（在考虑对象属性名的可读性时使用）
  ```javascript
  var person = {
  name : "Nicholas", age : 29
  };
  //或
  var person = {};//与 new Object()相同
  ```
> 在通过对象字面量定义对象时，实际上不会调用 Object构造函数

  - 访问对象属性方式
    - 点表示法
    - 方括号语法(可以通过变量来访问属性)
    ```javascript
    alert(person["name"]);
    alert(person.name);
    ```
    > 如果属性名中包含会导致语法错误的字符，或者属性名使用的是关键字或保留字，也可以使用方括号表示法

    > person["first name"] = "Nicholas";

    > 除非必须使用变量来访问属性，否则我们建议使用点表示法。

## Array 类型

ECMAScript 数组的每一项可以保存任何类型的数据

- 创建数组的基本方式
  - Array 构造函数（可以省略 new 操作符）
  ```javascript
  var colors = new Array();
  var colors = new Array(20); // 指定数组长度
  var colors = new Array("red", "blue", "green"); //指定数组项
  ```
  - 数组字面量表示法

  ```javascript
    // 数组字面量由一对包含数组项的方括号表 示，多个数组项之间以逗号隔开
    var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
    var names = [];// 创建一个空数组
    var values = [1,2,];// 不要这样！这样会创建一个包含 2 或 3 项的数组
    var options = [,,,,,];// 不要这样！这样会创建一个包含 5 或 6 项的数组
  ```
  > 与对象一样，在使用数组字面量表示法时,也不会调用Array构造函数

- 读取和设置数组的值
  - 要使用方括号并提供相应值的基于0的数字索引
  - 数组的 length 属性不是只读的,通过设置这个属性，可以从数组的末尾移除项或向数组中添加新项(移除或新加的为undefined)

### 检测数组

- Array.isArray()方法：这个方法的目的是最终确定某 个值到底是不是数组，而不管它是在哪个全局执行环境中创建的
```javascript
if (Array.isArray(value)){ 
  //对数组执行某些操作
}
```

### 转换方法

> 所有对象都具有 toLocaleString()、toString()和 valueOf()方法

- 调用数组的 toString()方法会返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串
- 调用 valueOf()返回的还是数组
- 当调用数组的 toLocaleString()方法时，它也会创建一个数组值的以逗号分隔的字符 串。而与前两个方法唯一的不同之处在于调用的是每一项的toLocaleString()方法，而不是 toString()方法
- join()方法可以使用不同的分隔符来构建这个字符串.
  - 则可以使用不同的分隔符来构建这个字符串。join()方 法只接收一个参数，即用作分隔符的字符串，然后返回包含所有数组项的字符串
  - 不给 join()方法传入任何值，或者给它传入 undefined，则使用逗号作为分隔符

  > 如果数组中的某一项的值是 null 或者 undefined，那么该值在 join()、 toLocaleString()、toString()和valueOf()方法返回的结果中以空字符串表示

### 栈方法

- 数组可以表 现得就像栈一样,一种可以限制插入和删除项的数据结构

> 栈是一种 LIFO（Last-In-First-Out，后进先出）的数据结构，最新添加的项最早被移除,栈中项的插入（叫做推入）和移除（叫做弹出），只发生在一个位置——栈的顶部

- push()方法
  - 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度

- pop()方法
  - 从数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项

### 队列方法

> 栈数据结构的访问规则是 LIFO（后进先出），而队列数据结构的访问规则是 FIFO（First-In-First-Out，先进先出）

> 队列在列表的末端添加项，从列表的前端移除项

> 结合使用 shift()和 push()方法可以像使用队列一样使用数组

> 同时使用 unshift()和 pop()方法，可以从相反的方向来模拟队列，即在数组的前端添加项，从数组末端移除项

- push()方法
- shift()方法
  - 移除数组中的第一个项并返回该项，同时将数组长度减 1
- unshift()方法
  - 在数组前端添加任意个项并返回新数组的长度

栈——队列方法对比

| 方法  | 作用  | 返回值 |
| :---: | :---: |:--:|
|push()方法|接收任意数量的参数,添加到数组末尾|修改后数组的长度|
|unshift()方法|在数组前端添加任意个项|新数组的长度|
|pop()方法|从数组末尾移除最后一项，减少数组的 length 值|移除的项|
|shift()方法|移除数组中的第一个项,将数组长度减 1|移除的项|

### 重排序方法

> 数组中已经存在两个可以直接用来重排序的方法：reverse()和 sort()

- reverse()方法
  - 反转数组项的顺序
- sort()方法
  - 默认情况下，sort()方法按升序排列数组项
  > 为了实现排序，sort()方法会调用每个数组项的 toString()转型方法，然后比较得到的字符串，以确定如何排序。即使数组中的每一项都是数值，sort()方法比较的也是字符串,如：在进行字符串比较时，"10"则位于"5"的前面,不能完成正确排序
  - 方法可以接收一个比较函数作为参数，指定哪个值位于哪个值的前面
  > 比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等 则返回 0，如果第一个参数应该位于第二个之后则返回一个正数,如：
  ```javascript
  function compare(value1, value2) {
    if (value1 < value2) { 
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0; }
   }
  var values = [0, 1, 5, 10, 15];
  values.sort(compare);
  alert(values); //0,1,5,10,15

  // 一个更简单的比较函数
  function compare(value1, value2){
    return value2 - value1;
  }
  ```

  > reverse()和 sort()方法的返回值是经过排序之后的数组

### 操作方法

- concat()方法:基于当前数组中的所有项创建一个新数组
  - 创建当前数组一个副本
  - 将接收到的参数添加到这个副本的末尾
  - 返回新构建的数组
  > 在没有给 concat()方法传递参数时，复制当前数组并返回副本

  > 如果传递给 concat()方法的是一或多个数组,则该方法会将这些数组中的每一项都添加到结果数组中

  > 如果传递的值不是数组，这些值就会被简单地添加到结果数组的末尾
  - 例子

  ```javascript
  var colors = ["red", "green", "blue"];
  var colors2 = colors.concat("yellow", ["black", "brown"]);
  alert(colors);//red,green,blue
  alert(colors2); //red,green,blue,yellow,black,brown
  ```

- slice()方法：基于当前数组中的一或多个项创建一个新数组
  - 接受一或两个参数，即要返回项的起始和结束位置
  - 只有一个参数的情况下，slice()方法返回从该参数指定位置开始到当前数组末尾的所有项
  - 两个参数，该方法返回起始和结束位置之间的项—不包括结束位置的
  - 不会影响原始数组
  > 参数中有一个负数,用数组长度加上该数来确定相应的位置
- splice()方法:主要用途是向数组的中部插入项
  使用方式：
  - 删除：删除任意数量的项，指定 2 个参数：要删除的第一项的位置和要删除的项数
  - 插入：向指定位置插入任意数量的项，提供 3个参数：起始位置、0（要删除的项数）和要插入的项。
  - 替换：向指定位置插入任意数量的项，且同时删除任意数量的项，指定 3 个参数，起始位置、要删除的项数和要插入的任意数量的项

  > 返回一个数组，该数组中包含从原始数组中删除的项（如果没有删除任何项，则返回一个空数组）

### 位置方法

- indexOf()方法
  - 接收两个参数:要查找的项和（可选的）表示查找起点位置的索引
  - 从数组的开头（位置 0）开始向后查找
  - 返回要查找的项在数组中的位置,在没找到的情况下返回-1
  - 比较第一个参数时，会使用全等操作符
- lastIndexOf()方法
  - 接收两个参数:要查找的项和（可选的）表示查找起点位置的索引
  - 从数组的末尾开始向前查找
  - 返回要查找的项在数组中的位置,在没找到的情况下返回-1
  - 比较第一个参数时，会使用全等操作符

  > 在有第二个参数：查找起点位置的索引  时，从参数表示索引开始找目标在数组的索引，如：
  ```javascript
  var fruits=["Banana","Orange","Apple","Mango","Banana","Orange","Apple","Mango"];
  var a=fruits.indexOf("Apple",4)
  // a的值为6，倒数第二个位置的apple 索引是6
  ```

### 迭代方法

> 5个迭代方法。每个方法都接收两个参数：要在每一项上运行的函数和（可选的）运行该函数的作用域对象——影响 this 的值

> 传入这些方法中的函数会接收三个参数：数组项的值、该项在数组中的位置和数组对象本身

- every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true。
- filter()：对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
- forEach()：对数组中的每一项运行给定函数。没有返回值。(本质上与使用 for 循环迭代数组一样)
- map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
- some()：对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true。

> 以上方法都不会修改数组中的包含的值。

### 归并方法

> 这两个方法都会迭代数组的所有项，构建一个最终返回的值
- reduce()方法
  - 从数组的第一项开始，逐个遍历到最后
- reduceRight()方法
  - 从数组的最后一项开始，向前遍历到第一项
> 两个方法都接收两个参数：一个在每一项上调用的函数和（可选的）作为归并基础的初始值

> 传给 reduce()和 reduceRight()的函数接收 4 个参数：前一个值、当前值、项的索引和数组对象

> 个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项

## Date 类型

> Date类型使用自 UTC（Coordinated Universal Time，国际协调时间）1970年 1月 1日午夜（零时）开始经过 的毫秒数来保存日期。在使用这种数据存储格式的条件下，Date 类型保存的日期能够精确到 1970年 1 月 1日之前或之后的 285 616年
- 要创建一个日期对象，使用 new 操作符和 Date 构造函数:
```javascript
var now = new Date();
```

- Date.parse()方法:接收一个表示日期的字符串参数，然后尝试根据这个字符串返回相应日期的毫秒数(如果传入 Date.parse()方法的字符串不能表示日期，那么它会返回 NaN)

- Date.UTC()方法同样也返回表示日期的毫秒数,不同：Date.UTC()的参数分别是年份、基于 0的月份（一月是 0，二月是 1，以此类推）、月中的哪一天（1 到 31）、小时数（0 到 23）、分钟、秒以及毫秒数，不填的参数默认0
- Data.now()方法返回表示调用这个方法时的日期和时间的毫秒数

### 继承的方法

- toLocaleString()方法
  - 方法会按照与浏览器 设置的地区相适应的格式返回日期和时间
- toString()方法
  - 方法则通常返回带有时区信息的日期和时间，其中时间一般以军用时间（即小时的范围是 0 到 23）表示
- valueOf()方法
  - 根本不返回字符串，返回日期的毫秒表示，

### 日期格式化方法

- toDateString()——以特定于实现的格式显示星期几、月、日和年；
- toTimeString()——以特定于实现的格式显示时、分、秒和时区；
- toLocaleDateString()——以特定于地区的格式显示星期几、月、日和年；
- toLocaleTimeString()——以特定于实现的格式显示时、分、秒；
- toUTCString()——以特定于实现的格式完整的 UTC日期。

### 日期/时间组件方法

> UTC日期指的是在没有时区偏差的情况下（将日期转换为GMT时间）的日期值

具体方法如下：

|方法|说明|
|:--|:--|
|getTime()|返回表示日期的毫秒数；与valueOf()方法返回的值相同|
|setTime(毫秒)|以毫秒数设置日期，会改变整个日期|
|getFullYear()|取得4位数的年份（如2007而非仅07）|
|getUTCFullYear()|返回UTC日期的4位数年份|
|setFullYear(年)|设置日期的年份。传入的年份值必须是4位数字（如2007而非仅07）|
|setUTCFullYear(年)|设置UTC日期的年份。传入的年份值必须是4位数字（如2007而非仅07）|
|getMonth()|返回日期中的月份，其中0表示一月，11表示十二月|
|getUTCMonth()|返回UTC日期中的月份，其中0表示一月，11表示十二月|
|setMonth(月)|设置日期的月份。传入的月份值必须大于0，超过11则增加年份|
|setUTCMonth(月)|设置UTC日期的月份。传入的月份值必须大于0，超过11则增加年份|
|getDate()|返回日期月份中的天数（1到31）|
|getUTCDate()|返回UTC日期月份中的天数（1到31）|
|setDate(日)|设置日期月份中的天数。如果传入的值超过了该月中应有的天数，则增加月份|
|setUTCDate(日)|设置UTC日期月份中的天数。如果传入的值超过了该月中应有的天数，则增加月份|
|getDay()|返回日期中星期的星期几（其中0表示星期日，6表示星期六）|
|getUTCDay()|返回UTC日期中星期的星期几（其中0表示星期日，6表示星期六）|
|getHours()|返回日期中的小时数（0到23）|
|getUTCHours()|返回UTC日期中的小时数（0到23）|
|setHours(时)|设置日期中的小时数。传入的值超过了23则增加月份中的天数|
|setUTCHours(时)|设置UTC日期中的小时数。传入的值超过了23则增加月份中的天数|
|getMinutes()|返回日期中的分钟数（0到59）|
|getUTCMinutes()|返回UTC日期中的分钟数（0到59）|
|setMinutes(分)|设置日期中的分钟数。传入的值超过59则增加小时数|
|setUTCMinutes(分)|设置UTC日期中的分钟数。传入的值超过59则增加小时数|
|getSeconds()|返回日期中的秒数（0到59）|
|getUTCSeconds()|返回UTC日期中的秒数（0到59）|
|setSeconds(秒)|设置日期中的秒数。传入的值超过了59会增加分钟数|
|setUTCSeconds(秒)|设置UTC日期中的秒数。传入的值超过了59会增加分钟数|
|getMilliseconds()|返回日期中的毫秒数|
|getUTCMilliseconds()|返回UTC日期中的毫秒数|
|setMilliseconds(毫秒)|设置日期中的毫秒数|
|setUTCMilliseconds(毫秒)|设置UTC日期中的毫秒数|
|getTimezoneOffset()|返回本地时间与UTC时间相差的分钟数。例如，美国东部标准时间返回300。在某 地进入夏令时的情况下，这个值会有所变化|

### RegExp 类型

ECMAScript 通过 RegExp 类型来支持正则表达式,使用下面类似 Perl 的语法，创建一个正则表达式:

 ```javascript
 var expression = / pattern / flags ;
 ```

- 其中模式（pattern）部分可以是任何简单或复杂的正则表达式，可以包含字符类、限定符、分组、向前查找以及反向引用
- 每个正则表达式都可带有一或多个标志（flags），用以标明正则表达式的行为
- 正则表达式的匹配模式支持下列 3个标志：
  - g：表示全局（global）模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止
  - i：表示不区分大小写（case-insensitive）模式，即在确定匹配项时忽略模式与字符串的大小写；
  - m：表示多行（multiline）模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模 式匹配的项

 一个正则表达式就是一个模式与上述 3个标志的组合体。不同组合产生不同结果,如：

  ```javascript
  /* * 匹配字符串中所有"at"的实例 */
  var pattern1 = /at/g;

  /* * 匹配第一个"bat"或"cat"，不区分大小写 */
  var pattern2 = /[bc]at/i;

  /* * 匹配所有以"at"结尾的 3 个字符的组合，不区分大小写 */
  var pattern3 = /.at/gi;
  ```

与其他语言中的正则表达式类似，模式中使用的所有元字符都必须转义。正则表达式中的元字符包括：

 `( [ { \ ^ $ | ) ? * + .]}`

这些元字符在正则表达式中都有一或多种特殊用途，因此如果想要匹配字符串中包含的这些字符，就必须对它们进行转义,如：

 ```javascript
 /* * 匹配第一个"bat"或"cat"，不区分大小写 */
 var pattern1 = /[bc]at/i;

 /* * 匹配第一个" [bc]at"，不区分大小写 */
  var pattern2 = /\[bc\]at/i;

  /* * 匹配所有以"at"结尾的 3 个字符的组合，不区分大小写 */
  var pattern3 = /.at/gi;

  /* * 匹配所有".at"，不区分大小写 */
  var pattern4 = /\.at/gi;
 ```

前面举的这些例子都是以字面量形式来定义的正则表达式,另一种创建正则表达式的方式是使用RegExp构造函数,它接收两个参数：一个是要匹配的字符串模式，另一个是可选的标志字符串。可以使用字面量定义的任何表达式，都可以使用构造函数来定义,如： (pattern1 和 pattern2 是两个完全等价的正则表达式)

 ```javascript
  /* * 匹配第一个"bat"或"cat"，不区分大小写 */
  var pattern1 = /[bc]at/i;

  /* * 与 pattern1 相同，只不过是使用构造函数创建的 */
  var pattern2 = new RegExp("[bc]at", "i");
 ```

注意：传递给 RegExp 构造函数的两个参数都是字符串（不能把正则表达式字面量传递给 RegExp 构造函数）

> 由于 RegExp 构造 函数的模式参数是字符串，所以在某些情况下要对字符进行双重转义,所有元字符都必须双重转义
下表给出了一些模式: (左边是这些模式的字面量形式，右边是使用 RegExp 构造函数定义相同模式时使用的字符串)

|字面量模式|等价的字符串|
|:--|:--|
|/\\[bc\\]at/|"\\\\[bc\\\\]at"|
|/\\\.at/|"\\\\.at"|
|/name\\/age/|"name\\\\/age"|
|/\d.\d{1,2}/|"\\\\d.\\\\d{1,2}"|
|/\w\\\hello\\\123/|"\\\\w\\\\\\\\hello\\\\\\\\123"|

#### 使用正则表达式字面量和使用 RegExp 构造函数创建的正则表达式不一样(ES5开始已经一样。忽略部分)))

> 在 ECMAScript 3中，正则表达式字面量始终会共享同一个 RegExp 实例，而使用构造函数创建的每一个新 RegExp 实例都是一个新实例,如：

 ```javascript
  var re = null, i;
  for (i=0; i < 10; i++){
  re = /cat/g;
  re.test("catastrophe");
  }
  for (i=0; i < 10; i++){
  re = new RegExp("cat", "g");
  re.test("catastrophe");
  }
 ```

> 第一个循环中，即使是循环体中指定的,实际上只为/cat/创建了一个 RegExp 实例。由于实例属性不会重置，所以在循环中再次调用 test()方法会失败。这是因为第一次调用 test()找到了"cat"，但第二次调用是从索引为 3 的字符（上一次匹配的末尾）开始的，所以就找不到它了。由于会测试到字符串末尾，所以下一次再调用 test()就又从开头开始了

> 第二个循环使用 RegExp 构造函数在每次循环中创建正则表达式。因为每次迭代都会创建一个新的RegExp 实例，所以每次调用 test()都会返回 true 

ECMAScript 5明确规定，使用正则表达式字面量必须像直接调用 RegExp 构造函数一样，每次都创建新的 RegExp实例

### RegExp实例属性

RegExp 的每个实例都具有下列属性，通过这些属性可以取得有关模式的各种信息

- global：布尔值，表示是否设置了 g 标志
- ignoreCase：布尔值，表示是否设置了 i 标志
- lastIndex：整数，表示开始搜索下一个匹配项的字符位置，从 0算起
- multiline：布尔值，表示是否设置了 m 标志
- source：正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回

### RegExp实例方法

- exec()方法- 主要方法，是专门为捕获组而设计的
  - 接受一个参数，即要应用模式的字符串，然后返回包含第一个匹配项信息的数组；或者在没有匹配项的情况下返回 null
  - 返回的数组是 Array 的实例，包含两个额外的属性：index 和 input
    - index 表示匹配项在字符串中的位置
    - input 表示应用正则表达式的字符串
    - 数组中，第一项是与整个模式匹配的字符串，其他项是与模式中的捕获组匹配的字符串（如果模式中没有捕获组，则该数组只包含一项）
    例子：

     ```javascript
     var text = "mom and dad and baby";
     var pattern = /mom( and dad( and baby)?)?/gi;

     var matches = pattern.exec(text);
     alert(matches.index); //0
     alert(matches.input); // "mom and dad and baby"
     alert(matches[0]); // "mom and dad and baby"
     alert(matches[1]); // " and dad and baby"
     alert(matches[2]); // " and baby"
     ```
  - 即使在模式中设置了全局标志（g），它每次也只会返回一个匹配项
    - 在不设置全局标志的情况下，在同一个字符串上多次调用 exec()将始终返回第一个匹配项的信息
    - 在设置全局标志的情况下，每次调用exec()则都会在字符串中继续查找新匹配项
    例子：

     ```javascript
      var text = "cat, bat, sat, fat";
      var pattern1 = /.at/;

      var matches = pattern1.exec(text);
      alert(matches.index); //0
      alert(matches[0]); //cat
      alert(pattern1.lastIndex); //0

      matches = pattern1.exec(text);
      alert(matches.index); //0
      alert(matches[0]); //cat
      alert(pattern1.lastIndex); //0

      var pattern2 = /.at/g;

      var matches = pattern2.exec(text);
      alert(matches.index); //0
      alert(matches[0]); //cat
      alert(pattern2.lastIndex); //3

      matches = pattern2.exec(text);
      alert(matches.index); //5
      alert(matches[0]); //bat
      alert(pattern2.lastIndex); //8
     ```

     > 这个例子中的第一个模式 pattern1 不是全局模式，因此每次调用 exec()返回的都是第一个匹配项（"cat"）。而第二个模式 pattern2 是全局模式，因此每次调用 exec()都会返回字符串中的下一个匹配项，直至搜索到字符串末尾为止。此外，还应该注意模式的 lastIndex 属性的变化情况。在全局 匹配模式下，lastIndex 的值在每次调用 exec()后都会增加，而在非全局模式下则始终保持不变

- test()方法
  - 它接受一个字符串参数。在模式与该参数匹配的情况下返回true；否则，返回 false
  - 在只想知道目标字符串与某个模式是否匹配，但不需要知道其文本内容的情况下，使用这个方法非常方便。因此，test()方法经常被用在 if 语句中,如：

   ```javascript
    var text = "000-00-0000";
    var pattern = /\d{3}-\d{2}-\d{4}/;
    if (pattern.test(text)){
      alert("The pattern was matched.");
    }
   ```

  - RegExp 实例继承的 toLocaleString()和 toString()方法都会返回正则表达式的字面量，与创建正则表达式的方式无关
  - 正则表达式的 valueOf()方法返回正则表达式本身

### RegExp构造函数属性

> RegExp 构造函数包含一些属性,适用于作用域中的所有正则表达式，并且基于所执行的最近一次正则表达式操作而变化
两种方式访问它们(属性分别有一个长属性名和一个短属性名):

|长属性名|短属性名|说明|
|:--|:--:|:--|
|input|$_|最近一次要匹配的字符串。Opera未实现此属性|
|lastMatch|$&|最近一次的匹配项。Opera未实现此属性|
|lastParen|$+|最近一次匹配的捕获组。Opera未实现此属性|
|leftContext|$`|input字符串中lastMatch之前的文本|
|multiline|$*|布尔值，表示是否所有表达式都使用多行模式。IE和Opera未实现此属性|
|rightContext|$'|Input字符串中lastMatch之后的文本|

- 使用这些属性可以从 exec()或 test()执行的操作中提取出更具体的信息

   ```javascript
   RegExp.input //长属性名方式
   RegExp.$_ //段属性名方式 必须通过方括号语法来访问
   ```

- 其他：
  - RegExp.$1、RegExp.$2…RegExp.$9，分别用于存储第一、第二……第九个匹配的捕获组，调用 exec()或 test()方法时，这些属性会被自动填充，如：

   ```javascript
    var text = "this has been a short summer";
    var pattern = /(..)or(.)/g;
    if (pattern.test(text)){
      alert(RegExp.$1); //sh
      alert(RegExp.$2); //t
    }
   ```

### 模式的局限性

ECMAScript 正则表达式不支持的特性:

- 匹配字符串开始和结尾的\A 和\Z 锚 <sup>①
- 向后查找（lookbehind）<sup>②
- 并集和交集类
- 原子组（atomic grouping）
- Unicode支持（单个字符除外，如\uFFFF）
- 命名的捕获组<sup>③
- s（single，单行）和 x（free-spacing，无间隔）匹配模式
- 条件匹配
- 正则表达式注释

①但支持以插入符号（^）和美元符号（$）来匹配字符串的开始和结尾

②但完全支持向前查找（lookahead）

③但支持编号的捕获组

## Function 类型

> 函数实际上是对象。每个函数都是 Function 类型的实例，与其他引用类型一样具有属性和方法

> 函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定

- 函数通常是使用函数声明语法定义的:

  ```javascript
  function sum (num1, num2) {
    return num1 + num2;
  }
  ```

- 使用函数表达式定义函数:

   ```javascript
    var sum = function(num1, num2){
      return num1 + num2;
    }; //声明变量需要分号
   ```

> 使用不带圆括号的函数名是访问函数指针，而非调用函数

### 没有重载（深入理解）

- 两个同名函数，后面的函数覆盖了前面的函数

### 函数声明与函数表达式

- 函数声明，解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）
- 函数表达式，必须等到解析器执行到它所在的代码行，才会真正被解释执行。请看下面的例子
具体例子：

 ```javascript
  alert(sum(10,10));
  function sum(num1, num2){
    return num1 + num2;
  }
  // 以上代码完全可以正常运行。因为在代码开始执行之前，解析器就已经通过一个名为函数声明提升（function declaration hoisting）的过程，读取并将函数声明添加到执行环境中

  alert(sum(10,10));
  var sum = function(num1, num2){
    return num1 + num2;
  }
  // 以上代码之所以会在运行期间产生错误，原因在于函数位于一个初始化语句中，而不是一个函数声明。换句话说，在执行到函数所在的语句之前，变量 sum 中不会保存有对函数的引用；而且，由于第一行代码就会导致“unexpected identifier”（意外标识符）错误，实际上也不会执行到下一行
 ```

### 作为值的函数

- 因为 ECMAScript中的函数名本身就是变量，所以函数也可以作为值来使用，即不仅可以像传递参数一样把一个函数传递给另一个函数，而且可以将一个函数作为另一个函数的结果返回

> 要访问函数的指针而不执行函数的话，必须去掉函数名后面的那对圆括号

### 函数内部属性

在函数内部，有两个特殊的对象：arguments 和 this

- arguments:一个类数组对象，包含着传入函数中的所有参数
  - 这个对象有一个 callee 的属性,该属性是一个指针，指向拥有这个 arguments 对象的函数
  - 经典的阶乘函数例子

   ```javascript
    function factorial(num){
      if (num <=1) {
        return 1;
      } else {
        return num * factorial(num-1)
      }
    }
    // 定义阶乘函数一般都要用到递归算法。如上所示，在函数有名字，而且名字以后也不会变的情况下，这样定义没有问题，但是这个函数的执行与函数名 factorial 紧紧耦合在了一起。为消除这种紧密耦合的现象，可以像下面这样使用 arguments.callee
    function factorial(num){
      if (num <=1) {
        return 1;
      } else {
        return num * arguments.callee(num-1)
      }
    }
    // 重写后的factorial()函数的函数体内，没有再引用函数名 factorial。无论引用函数时使用的是什么名字，都可以保证正常完成递归调用，如：（接上代码）
    var trueFactorial = factorial;
    factorial = function(){
      return 0;
    }；
    alert(trueFactorial(5)); //120
    alert(factorial(5)); //0
    // 解除了函数体内的代码与函数名的耦合状态之后，trueFactorial()仍然能够正常地计算阶乘
   ```

- this
  - this引用的是函数据以执行的环境对象——this 值（在网页的全局作用域中调用函数时，this 对象引用的就是 window）
- caller（ECMAScript 5规范化了这一个函数对象的属性）
  - 这个属性中保存着调用当前函数的函数的引用（在全局作用域中调用当前函数，它的值为 null）
  - 为了实现更松散的耦合，也可以通过 arguments.callee.caller来访问相同的信息
  - ECMAScript 5 还定义了arguments.caller 属性，但在严格模式下访问它也会导致错误，而在非严格模式下这个属性始终是undefined。定义这个属性是为了分清 arguments.caller 和函数的 caller 属性

### 函数属性和方法

> ECMAScript 中的函数是对象，因此函数也有属性和方法

#### 每个函数都包含两个属性：length 和 prototype

- length
  - 表示函数希望接收的命名参数的个数
- prototype
  - 对于ECMAScript 中的引用类型而言，prototype 是保存它们所有实例方法的真正所在，即：toString()和 valueOf()等方法都保存在 prototype 名下，通过各自对象的实例进行访问
  - prototype 属性是不可枚举的，因此使用 for-in 无法发现(在 ECMAScript 5中)

#### 每个函数都包含两个非继承而来的方法：apply()和 call()

- 用途:在特定的作用域中调用函数,实际上等于设置函数体内 this 对象的值
- apply()方法
  - 接收两个参数：一个是在其中运行函数的作用域，另一个是参数数组，第二个参数可以是 Array 的实例，也可以是arguments 对象
- call()方法
  - 它与apply()方法的区别仅在于接收参数的方式不同，第一个参数是 this 值不变，变化的是其余参数都直接传递给函数
  
- 这两个方法强大的地方是：能够扩充函数赖以运行的作用域，如：

 ```javascript
  window.color = "red";
  var o = { color: "blue" };
  function sayColor(){
    alert(this.color);
  }
  sayColor(); //red
  sayColor.call(this); //red
  sayColor.call(window); //red
  sayColor.call(o); //blue
 ```

- 使用 call()（或 apply()）来扩充作用域的最大好处是对象不需要与方法有任何耦合关系
- bind()方法
  - 创建一个函数的实例，其 this 值会被绑定到传给 bind()函数的值

- 每个函数继承的 toLocaleString()和 toString()方法始终都返回函数的代码，另外一个继承的valueOf()方法同样也只返回函数代码

### 基本包装类型

为了便于操作基本类型值，ECMAScript 还提供了 3 个特殊的引用类型：Boolean、Number 和String

- 每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，能够调用一些方法来操作这些数据
- 引用类型与基本包装类型的主要区别
  - 使用 new 操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中
  - 自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。不能在运行时为基本类型值添加属性和方法
- Object 构造函数会根据传入值的类型返回相应基本包装类型的实例

#### Boolean类型(与布尔值对应的引用类型)

- 要创建 Boolean 对象：

 ```javascript
 var booleanObject = new Boolean(true);
 ```

> Boolean类型的实例重写了valueOf()方法，返回基本类型值true或false；重写了toString()方法，返回字符串"true"和"false"
- 基本类型与引用类型的布尔值区别
  - typeof 操作符对基本类型返回"boolean"，对引用类型返回"object"
  - 由于Boolean对象是Boolean类型的实例，所以使用instanceof操作符测试 Boolean 对象会返回 true，而测试基本类型的布尔值则返回 false
- 建议是永远不要使用 Boolean 对象

#### Number类型(与数字值对应的引用类型)

- 创建 Number 对象

 ```javascript
  var numberObject = new Number(10);
 ```

> Number 类型也重写了 valueOf()、toLocaleString()和 toString()方法。重写后的 valueOf()方法返回对象表示的基本类型的数值，另外两个方法则返回字符串形式的数值

- 为 toString()方法传递一个表示基数的参数，告诉它返回几进制 数值的字符串形式
- toFixed()方法会按照指定的小数位返回数值的字符串表示(四舍五入)
- toExponential()方法返回以指数表示法（也称 e表示法）表示的数值的字符串形式，接收一个参数，指定输出结果中的小数位数(四舍五入)
- toPrecision()方法可能会返回固定大小（fixed）格式，也可能返回指数（exponential）格式；具体规则是看哪种格式最合适。接收一个参数，即表示数值的所有数字的位数（不包括指数部分）(四舍五入)
- 不建议直接实例化 Number 类型

#### String类型

- 
