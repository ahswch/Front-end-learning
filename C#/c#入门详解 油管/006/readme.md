# 006 类型、变量与对象详解-上

- 什么是类型
- 类型在 C#语言中的作用
- C#语言的类型系统
- 变量、对象与内存

## 什么是类型（Type）

### 又名数据类型（Data Type）

- A data type is a homogeneous collection of values, effectively presented, equipped with a set of operations which manipulate these value.
- 是数据在内存中存储的“型号”
- 小内存容纳大尺寸数据会丢失精确度、发生错误
- 大内存容纳小尺寸数据会导致浪费
- 编程语言的数据类型与数据的数据类型不完全相同

### 强类型语言与弱类型语言的比较

## 类型在 C#语言中的作用

- 一个 C#类型中所包含的信息有：
  - 存储此类型变量所需的内存空间大小
  - 此类型的值可表示的最大、最小值范围
  - 此类型所包含的成员（如方法、属性、事件等）
  - 此类型由何基类派生而来
  - 程序运行的时候，此类型的变量分配在内存的什么位置
    - Stack 简介（方法调用）
    - Stack overflow
    - Heap 简介（数据对象）
    - 使用 Performance Monitor 查看进程的堆内存使用量
  - 此类型所允许的操作（运算）
