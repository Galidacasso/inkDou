# 模块系统
Nodejs使用模块来划分功能，并提供了一套导入导出的机制，js文件互相调用就可以完成复杂的功能  
## 模块 
在Nodejs中，一个js文件就可以当做一个模块
:::tip 模块思想
不是一种单独的开发语言，而是一种作用域JS编程的规范和思想   
[CommonJS 规范](https://www.commonjs.org)
:::

## 自定义模块 
**无形的构造函数**: 模块中的代码都会被无形的构造函数包裹

|      名称      | 解释                           |
| :------------: | :----------------------------- |
|    require     | 引入对象                       |
|    exports     | 导出对象的别名                 |
| module.exports | 真正的导出对象                 |
|   __diename    | 返回当前模块的绝对路径         |
|   __filename   | 返回当前模块的绝对路径和模块名 |

**`require`** 模块的导入
- `require`用于获取模块向外暴露的接口，其实就是 `exports`对象
- 如果引入同级模块，需要加 `./` ，文件的后缀名可以不写，因为默认后缀为`.js`

**`exports`** 模块的导出 
- 通常，开发中经常会把功能封装在模块内，然后通过`exports`的方法向外公开暴露一个接口，其他开发人员就可以通过模块引入的方式`require`引用这个接口，使用模块的内的功能

### 示例1
**传递2个参数完成这2个参数的和**

- 文件夹
  - 1.js
  - 2.js

**1.js**
```js:no-line-numbers
// 封装计算器函数
function getSum(a, b) {
    return a + b;
}

// 导出模块对象 exports其实是一个空对象
console.log('我是导出之前的exprots:', exports);

// 对象.属性 = 值
exports.getSum = getSum;

console.log('我是导出之后的exprots:', exports);
```
**2.js**
```js:no-line-numbers
// 引入模块
// 如果引入的模块是同级的,需要加 ./ js后缀名可以不要
const obj = require('./1.js');

console.log('我是2.js的obj:', obj);

// 按照要求传递参数 即可完成功能
console.log(obj.getSum(10, 20));
```
### 示例2
封装一个circle模块, 模块中声明2个函数，
函数接受半径计算原的周长和面积， 
在main.js中引入circle模块，传递半径，得到计算结果。

- 文件夹
  - circle.js
  - main.js

**circle.js**
```js:no-line-numbers
// 周长
function getLen(r) {
    return Math.PI * r * 2
}

// 面积
function getArea(r) {
    // Math.pow 幂运算
    return Math.PI * Math.pow(r, 2);
}

// 导出模块
exports.getArea = getArea;
exports.getLen = getLen;
```
**main.js**
```js:no-line-numbers
// 导入模块
const obj = require('./circle');
// toFixed(2) 保留2位小数
console.log(obj.getArea(10).toFixed(2));
console.log(obj.getLen(10).toFixed(2));
```

### 演示3
导出一个对象，在2.js中直接使用obj.name就能获取"小艺"

- 文件夹
  - 1.js
  - 2.js

**1.js**
```js:no-line-numbers
// 第一次:
exports.emp = {
    name: '小艺'
}
{ emp: { name: '小艺' } }
// 原因是 exports就是一个空对象,结果又给了一个对象

// 第二次
exports = {
    name: '小艺'
}
{ name: '小艺' }
console.log('我是1.js中的exports:', exports);
// 上述写法产生空对象的原因:
// 1. 实际上exports并不是真正的导出对象,而是一个替身(别名),  
//    真正的导出对象是 module.exports
// 2. exports中保存的是 module.exports的引用地址信息,
//    而不是真的地址的指针,当exports的地址发生改变的时候,
//    并不会影响 module.exports的原有地址的指向,所以是空对象
// 指针:描述了数据在内存中的位置

// 第三次: 解决方案
module.exports = {
    name: '小艺'
}
```
**2.js**
```js:no-line-numbers
// 引入模块
const obj = require('./1');

console.log('我是2.js的obj:', obj);
console.log(obj.name);
```

## 模块的引入
1. 引入同级目录需要添加`./`。
2. 当引入一个目录时，nodejs会自动寻找这个目录下的index.js文件，如果找不到会报错:找不该该模块。但实际开发中不可能每个目录模块下都准备一个index.js,所以需要通过package.json说明书文件来指定加载的文件内容。

