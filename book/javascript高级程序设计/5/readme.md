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

## 基本包装类型

为了便于操作基本类型值，ECMAScript 还提供了 3 个特殊的引用类型：Boolean、Number 和String

- 每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，能够调用一些方法来操作这些数据
- 引用类型与基本包装类型的主要区别
  - 使用 new 操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中
  - 自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。不能在运行时为基本类型值添加属性和方法
- Object 构造函数会根据传入值的类型返回相应基本包装类型的实例

### Boolean类型(与布尔值对应的引用类型)

- 要创建 Boolean 对象：

 ```javascript
 var booleanObject = new Boolean(true);
 ```

> Boolean类型的实例重写了valueOf()方法，返回基本类型值true或false；重写了toString()方法，返回字符串"true"和"false"
- 基本类型与引用类型的布尔值区别
  - typeof 操作符对基本类型返回"boolean"，对引用类型返回"object"
  - 由于Boolean对象是Boolean类型的实例，所以使用instanceof操作符测试 Boolean 对象会返回 true，而测试基本类型的布尔值则返回 false
- 建议是永远不要使用 Boolean 对象

### Number类型(与数字值对应的引用类型)

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

### String类型(字符串的对象包装类型)

- 使用 String 构造函数来创建:

 ```javascript
 var stringObject = new String("hello world");
 ```

- 继承的 valueOf()、toLocaleString()和 toString()方法，都返回对象所表示的基本字符串值
- String 类型的每个实例都有一个 length 属性，表示字符串中包含多个字符

#### String 类型提供了很多方法，用于辅助完成对ECMAScript中字符串的解析和操作

- 字符方法(charAt()和 charCodeAt())
  - 用于访问字符串中特定字符
  - 接收一个参数，即基于 0 的字符位置
  - charAt()方法以单字符字符串的形式返回给定位置的那个字符
  - charCodeAt()方法返回给定位置的那个字符的字符编码
  > 另一个访问个别字符的方法-使用方括号加数字索引来访问字符串中的特定字符(像数组访问 maybe)
- 字符串操作方法
  - concat()——将一或多个字符串拼接起来
    - 可以接受任意多个参数（用,隔开）
    - 返回拼接得到的新字符串
    - 不改变原有字符串

  三个基于子字符串创建新字符串的方法：
  > 都会返回被操作字符串的一个子字符串，都接受一或两个参数.第一个参数指定子字符串的开始位置，第二个参数（在指定的情况下）表示子字符串到哪里结束,没有给这些方法传递第二个参数，则将字符串的长度作为结束位置.

  > 不会修改字符串本身的值
  - slice()
    - 第二个参数指定的是子字符串最后一个字符后面的位置
    - 将传入的负值与字符串的长度相加
  - substr()
    - 第二个参数指定的则是返回的字符个数
    - 将负的第一个参数加上字符串的长度，而将负的第二个参数转换为 0
  - substring()
    - 第二个参数指定的是子字符串最后一个字符后面的位置
    - 把所有负值参数都转换为 0
    - 将较小的数作为开始位置
- 字符串位置方法
  > 两个可以从字符串中查找子字符串的方法：indexOf()和 lastIndexOf(),都是从一个字符串中搜索给定的子字符串，然后返子字符串的位置（没找到该子字符串，返回-1）。接收可选的第二个参数，表示从字符串中的哪个位置开始搜索
  - indexOf()——从字符串的开头向后搜索子字符串
  - lastIndexOf()——从字符串的末尾向前搜索子字符串
  - 可以通过循环调用 indexOf()或 lastIndexOf()来找到所有匹配的子字符串
- trim()方法
  > ECMAScript 5为所有字符串定义了 trim()方法
  - 创建一个字符串的副本，删除前置及后缀的所有空格，然后返回结果
  - 原始字符串中的前置及后缀空格会保持不变
  > Firefox 3.5+、Safari 5+ 和 Chrome 8+还支持非标准的 trimLeft()和 trimRight()方法，分别用于删除字符串开头和末尾的空格。
- 字符串大小写转换方法
  - toLowerCase()
  - toUpperCase()
  - toLocaleLowerCase()
  - toLocaleUpperCase()
  > 后两种方法是针对特定地区的实现，对有些地区来说，针对地区的方法与其通用方法得到的结果相同，但少数语言（如土耳其语）会为 Unicode大小写转换应用特殊的规则，这就必须使用针对地区的方法来保证实现正确的转换

  > 在不知道自己的代码将在哪种语言环境中运行的情况下,使用针对地区的方法
- 字符串的模式匹配方法
  - match()方法:本质上与调用 RegExp 的 exec()方法相同
    - 只接受一个参数，正则表达式或 RegExp 对象
  - search()方法
    - 只接受一个参数，正则表达式或 RegExp 对象（由字符串或 RegExp 对象指定的一个正则表达式）
    - 回字符串中第一个匹配项的索引；如果没有找到匹配项，则返回-1
    - 始终是从字符串开头向后查找模式
  - replace()方法
    - 接受两个参数：第一个参数可以是一个 RegExp 对象或者一个字符串（这个字符串不会被转换成正则表达式），第二个参数可以是一个字符串或者一个函数
    - 如果第一个参数是字符串，那么只会替换第一个子字符串。要想替换所有子字符串，办法是提供一个正则表达式，且要指定全局（g）标志
    - 如果第二个参数是字符串，可以使用一些特殊的字符序列，将正则表达式操作得到的值插入到结果字符串中，下表列出了 ECMAScript提供的这些特殊的字符序列：

    |字符序列| <center>替换文本</center> |
    |:--:|:--|
    |$$|$|
    |$&|匹配整个模式的子字符串。与RegExp.lastMatch的值相同|
    |$'|匹配的子字符串之前的子字符串。与RegExp.leftContext的值相同|
    |$`|匹配的子字符串之后的子字符串。与RegExp.rightContext的值相同|
    |$n|匹配第n个捕获组的子字符串，其中n等于0～9。例如，$1是匹配第一个捕获组的子字符串，$2是匹配第二个捕获组的子字符串，以此类推。如果正则表达式中没有定义捕获组，则使用空字符串|
    |$nn|匹配第nn个捕获组的子字符串，其中nn等于01～99。例如，$01是匹配第一个捕获组的子字符串，$02 是匹配第二个捕获组的子字符串，以此类推。如果正则表达式中没有定义捕获组，则使用空字符串|

    例子：

     ```javascript
     var text = "cat, bat, sat, fat";
     result = text.replace(/(.at)/g, "word ($1)");
     alert(result); //word (cat), word (bat), word (sat), word (fat)
     ```

    - 第二个参数是一个函数
    > 在只有一个匹配项（即与模式匹配的字符串）的情况下，会向这个函数传递 3个参数：模式的匹配项、模式匹配项在字符串中的位置和原始字符串。在正则表达式中定义了多个捕获组的情况下，传递给函数的参数依次是模式的匹配项、第一个捕获组的匹配项、第二个捕获组的匹配项……，但最后两个参数仍然分别是模式的匹配项在字符串中的位置和原始字符串。这个函数应该返回一个字符串，表示应该被替换的匹配项。使用函数作为 replace()方法的第二个参数可以实现更加精细的替换操作,例子：

     ```javascript
     function htmlEscape(text){
       return text.replace(/[<>"&]/g, function(match, pos, originalText){
         switch(match){
           case "<":
            return "&lt;";
          case ">":
            return "&gt;";
          case "&":
            return "&amp;";
          case "\"":
            return "&quot;";
         }
       });
     }

     alert(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
     //&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;
     ```

  - split()
    - 基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中
    - 分隔符可以是字符串，也可以是一个 RegExp 对象（这个方法不会将字符串看成正则表达式）
    - 接受可选的第二个参数，用于指定数组的大小,确保返回的数组不会超过既定大小
    - 在使用这种正则表达式时，一定要在各种浏览器下多测试
    例子：

     ```javascript
     var colorText = "red,blue,green,yellow";
     var colors1 = colorText.split(",");  //["red", "blue", "green", "yellow"]
     var colors2 = colorText.split(",", 2); //["red", "blue"]
     var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""]  不明
     ```

- localeCompare()方法
  比较两个字符串，并返回下列值中的一个:
  - 如果字符串在字母表中应该排在字符串参数之前，则返回一个负数（大多数情况下是-1，具体的值要视实现而定）
  - 如果字符串等于字符串参数，则返回 0；
  - 如果字符串在字母表中应该排在字符串参数之后，则返回一个正数（大多数情况下是 1，具体的值同样要视实现而定）。

   ```javascript
   var stringValue = "yellow";
   alert(stringValue.localeCompare("brick")); //1
   ```

  - 实现所支持的地区（国家和语言）决定了这个方法的行为,如美国区分大小写
- fromCharCode()方法
  - 接收一或多个字符编码，然后将它们转换成一个字符串
  - 本质上，这个方法与实例方法 charCodeAt()执行的是相反的操作

   ```javascript
   alert(String.fromCharCode(104, 101, 108, 108, 111)); //"hello"
   ```

- HTML方法
  简化常见 HTML格式化任务的方法:
  > 应该尽量不使用这些方法，因为它们创建的标记通常无法表达语义

  |<center>方法</center>|<center>输出结果</center>|
  |:--|:--|
  |anchor(name)|&lt;a name= "name">string&lt;/a>|
  |big()|&lt;big&gt;string&lt;/big&gt;|
  |bold()|&lt;b&gt;string&lt;/b&gt;|
  |fixed()|&lt;tt&gt;string&lt;/tt&gt;|
  |fontcolor(color)|&lt;font color="color"&gt;string&lt;/font&gt;|
  |fontsize(size)|&lt;font size="size"&gt;string&lt;/font&gt;|
  |italics()|&lt;i>string&lt;/i>|
  |link(url)|&lt;a href="url"&gt;string&lt;/a&gt;|
  |small()|&lt;small&gt;string&lt;/small&gt;|
  |strike()|&lt;strike&gt;string&lt;/strike&gt;|
  |sub()|&lt;sub&gt;string&lt;/sub&gt;|
  |sup()|&lt;sup&gt;string&lt;/sup&gt;|

## 单体内置对象

> ECMA-262对内置对象的定义是：“由ECMAScript实现提供的、不依赖于宿主环境的对象，这些对象在 ECMAScript程序执行之前就已经存在了。”意思就是说，开发人员不必显式地实例化内置对象，因为它们已经实例化了

内置对象：Object、Array 和 String（前面讲过）、Global 和 Math

### Global对象

- 没有全局变量或全局函数（不属于任何其他对象的属性和方法，最终都是它的属性和方法）
- 所有在全局作用域中定义的属性和函数，都是 Global 对象的属性

#### URI编码方法

- Global 对象的 encodeURI()和 encodeURIComponent()方法
  - 可以对 URI（Uniform ResourceIdentifiers，通用资源标识符）进行编码，以便发送给浏览器
  - encodeURI()
    - 主要用于整个 URI（例如，http://www.wrox.com/illegal value.htm）
    - 不会对本身属于 URI 的特殊字符进行编码，例如冒号、正斜杠、问号和井字号
    - 编码后的结果是除了空格之外的其他字符都原封不动，只有空格被替换成了%20
  - encodeURIComponent()
    - 主要用于对 URI中的某一段（例如前面 URI中的 illegal value.htm）进行编码
    - 会对它发现的任何非标准字符进行编码
    - 会使用对应的编码替换所有非字母数字字符
    > 这也正是可以对整个URI使用encodeURI()，而只能对附加在现有URI后面的字符串使用encodeURIComponent()的原因所在

    与 encodeURI()和 encodeURIComponent()方法对应的两个方法分别是 decodeURI()和decodeURIComponent()  对应解码

#### eval()方法

- 只接受一个参数，即要执行的ECMAScript（或 JavaScript）字符串，例子：

 ```javascript
 eval("alert('hi')");
 // 这行代码的作用等价于下面这行代码：
 alert("hi");
 ```

> 当解析器发现代码中调用 eval()方法时，它会将传入的参数当作实际的 ECMAScript语句来解析，然后把执行结果插入到原位置。通过 eval()执行的代码被认为是包含该次调用的执行环境的一部分，因此被执行的代码具有与该执行环境相同的作用域链。这意味着通过 eval()执行的代码可以引用在包含环境中定义的变量

#### Global 对象的属性

> ECMAScript 5明确禁止给 undefined、NaN 和 Infinity 赋值，这样做即使在非严格模式下也会导致错误

|<center>属性</center>|<center>说明</center>|<center>属性</center>|<center>说明</center>|
|:--|:--|:--|:--|
|undefined|特殊值undefined|Date|构造函数Date|
|NaN|特殊值NaN|RegExp|构造函数RegExp|
|Infinity|特殊值Infinity|Error|构造函数Error|
|Object|构造函数Object|EvalError|构造函数EvalError|
|Array|构造函数Array|RangeError|构造函数RangeError|
|Function|构造函数Function|ReferenceError|构造函数ReferenceError|
|Boolean|构造函数Boolean|SyntaxError|构造函数SyntaxError|
|String|构造函数String|TypeError|构造函数TypeError|
|Number|构造函数Number|URIError|构造函数URIError|

#### window 对象

> ECMAScript 虽然没有指出如何直接访问 Global 对象，但 Web 浏览器都是将这个全局对象作为window 对象的一部分加以实现的。因此，在全局作用域中声明的所有变量和函数，就都成为了 window对象的属性
另一种取得 Global 对象的方法是使用以下代码:

 ```javascript
 var global = function(){
   return this;
 }();
 ```

### Math对象

> 为保存数学公式和信息提供了一个公共位置

#### Math 对象的属性

|<center>属性</center>|<center>说明</center>|
|:--|:--|
|Math.E|自然对数的底数，即常量e的值|
|Math.LN10|10的自然对数|
|Math.LN2|2的自然对数|
|Math.LOG2E|以2为底e的对数|
|Math.LOG10E|以10为底e的对数|
|Math.PI|π的值|
|Math.SQRT1_2|1/2的平方根（即2的平方根的倒数）|
|Math.SQRT2|2的平方根|

#### min()和 max()方法

- 用于确定一组数值中的最小值和最大值
- 接收任意多个数值参数 例：

 ```javascript
 var max = Math.max(3, 54, 32, 16);
 alert(max); //54
 ```

- 经常用于避免多余的循环和在 if 语句中确定一组数的最大值
- 要找到数组中的最大或最小值，可以像下面这样使用 apply()方法:

 ```javascript
 var values = [1, 2, 3, 4, 5, 6, 7, 8];
 var max = Math.max.apply(Math, values);
 ```

#### 舍入方法

- Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数；
- Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数；
- Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数（这也是我们在数学课 上学到的舍入规则）。

#### random()方法

- 返回大于等于 0小于 1的一个随机数.
- 套用下面的公式,利用 Math.random()从某个整数范围内随机选择一个值:

 ```
 值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
 ```

#### 其他方法

|<center>方法</center>|<center>说明</center>|<center>方法</center>|<center>说明</center>|
|:--|:--|:--|:--|
|Math.abs(num)|返回num 的绝对值|Math.asin(x)|返回x 的反正弦值|
|Math.exp(num)|返回Math.E 的num 次幂|Math.atan(x)|返回x 的反正切值|
|Math.log(num)|返回num 的自然对数|Math.atan2(y,x)|返回y/x 的反正切值|
|Math.pow(num,power)|返回num 的power 次幂|Math.cos(x)|返回x 的余弦值|
|Math.sqrt(num)|返回num 的平方根|Math.sin(x)|返回x 的正弦值|
|Math.acos(x)|返回x 的反余弦值|Math.tan(x)|返回x 的正切值|

## 小结

对象在 JavaScript 中被称为引用类型的值，而且有一些内置的引用类型可以用来创建特定的对象，简要总结:

- 引用类型与传统面向对象程序设计中的类相似，但实现不同；
- Object 是一个基础类型，其他所有类型都从 Object 继承了基本的行为；
- Array 类型是一组值的有序列表，同时还提供了操作和转换这些值的功能；
- Date 类型提供了有关日期和时间的信息，包括当前日期和时间以及相关的计算功能；
- RegExp 类型是 ECMAScript支持正则表达式的一个接口，提供了最基本的和一些高级的正则表达式功能。

  > 函数实际上是 Function 类型的实例，因此函数也是对象；由于函数是对象，所以函数也拥有方法，可以用来增强其行为。

  有了基本包装类型，所以 JavaScript 中的基本类型值可以被当作对象来访问。三种基本包装类型分别是：Boolean、Number 和 String。它们共同的特征：

  - 每个包装类型都映射到同名的基本类型；
  - 在读取模式下访问基本类型值时，就会创建对应的基本包装类型的一个对象，从而方便了数据操作；
  - 操作基本类型值的语句一经执行完毕，就会立即销毁新创建的包装对象。

- 在所有代码执行之前，作用域中就已经存在两个内置对象：Global 和 Math。在大多数 ECMAScript实现中都不能直接访问 Global 对象。不过，Web 浏览器实现了承担该角色的 window 对象。全局变量和函数都是 Global 对象的属性。Math 对象提供了很多属性和方法，用于辅助完成复杂的数学计算任务。
