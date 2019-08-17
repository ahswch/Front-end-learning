# 表达式、语句详解

- 表达式的定义
- 各类表达式概览
- 语句的定义
- 语句详解

## 表达式的定义

- 什么是表达式
  - Expressions, together with commands and declarations, are one of the _basic components of every programming language_. We can say that expresions are the _essential component of every language_.
  - An expressions is a syntactic entity whose evaluation either _produces a value_ of _fails to terminate_, in which case the expression is undefined.
  - 各种编程语言对表达式的实现不尽相同，但大体上都符合这个定义
- C#语言对表达式的定义
  - An expression is a sequence of one or more operands and zero or more operators that can be evaluated to a single value, object, method, or namespace. Expresions can consist of a literal value, a method invocation, an operator and its operands, or a simple name. Simple names can be the name of a variable, type member, method parameter, namespace or type.
  - 算法逻辑的最基本（最小）单元，表达一定的算法意图
  - 因为操作符有优先级，所以表达式也就有了优先级

## 各类表达式概览

- C#语言中表达式的分类
  - A value. Every value has an associated type.任何能得到值的运算（回顾操作符和结果类型）
  - A variable. Every variable has an associabled type
  - a namespace
  - A type
  - A method group,例如：Console.WriteLine, 这是一组方法，重载决策决定具体调用哪一个
  - A null literal
  - An anonymous function
  - A property acces
  - An event acess
  - An indexer access
  - Nothing
- 复合表达式的求栈
  - 注意操作符的优先级和同优先级操作符的的运算方向
- 参看 C#定义文档
  - 仅作参考，不必深究————学习语言不是实现语言

## 语句的定义

- Wikipedia 对语句的定义
  - In computer programming a statement is the smallest _standalone_ element of an imperative programming language which expresses some _action_ to be carried out. A program written in such a language is formed by a sequence of one or more statements. A statement will have internal components
  - 语句是高级语言的语法————编译语言和机器语言只有指令（高级语言中的表达式对应低级语言中的指令），_语句等价于一个或一组有明显逻辑关联的指令_
- C#语言对语句的定义
  - The _actions_ that a program take are expressed in statements. Common actions include declaring variables, assigning values, calling methods, looping through collections, and branching to one or another block of code, depending on a given condition. The order in which statements are executed in a program is called the _flow of control_ or _flow of execution_. The flow of control may vary every time that a program is run, depending on how the program reacts to input that it receives at run time.
  - C#语言的语句除了能够让程序员“顺利的”（sequentially）表达算法思想，还能通过条件判断、跳转和循环等方法控制逻辑的走向
  - 简而言之：陈述算法思想，控制逻辑走向，完成*有意义*的动作（action）
  - C#语言的语句由分号结尾，但由分号结尾的不一定都是语句
  - 语句一定是出翔在方法体里

## 语句详解

- statement(语句)
  - labeled-statement
  - declaration-statement
  - embedded-statement(嵌入式语句)
- embedded-statement

  - block
  - empty-statement
  - expression-statement
  - selection-statement
  - iteration-statement
  - jump-statement
  - try-statement
  - checked-statement
  - unchecked-statement
  - lock-statement
  - using-statement
  - yield-statement

- 初学熟练
  - 声明语句
  - 表达式语句
  - 块语句（简称“块”）（当成一条语句）
  - 选择（判断、分支）语句
  - 迭代（循环）语句(某个条件下,某段逻辑,即循环体反复执行)
  - 跳转语句(break,continue,goto,return,throw)
  - try...catch...finally 语句
- 相对高级
  - using 语句
  - yield 语句
  - checked/unchecked 语句
  - lock 语句（用于多线程）
  - 标签语句
  - 空语句
