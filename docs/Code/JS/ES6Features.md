# ES6新特性

### 块级作用域
块作用域由 { } 包括，if语句和for语句里面的{ }也属于块作用域。
- **let** 
  - let声明的变量不能被重复声明,如果需要重新赋值: 变量 = 值
  - let声明一个块级作用域的变量(需要和花括号{}配合,包括函数的、for循环的、if的等等)
  - let也具有提升,let的提升只提升了创建阶段,存在一个"暂时性死区"(在未初始化之前不允许访问)

**DEMO** 块级作用域
```js
let a = 1;
// 不能重复声明
// let a = 2; //报错
console.log(a);

function fun() {
    console.log('函数内打印a:', a);
}
fun();

// 块级作用域   
{
    // 在块级作用域中声明一个在块级作用域外已经声明过的变量(不会报错)
    let a = 2;

    let str = '小艺';

    console.log(str);

    function say() {
        console.log(str + ' miss you');
    }
    say();
}
// 验证str变量是否能够在块级作用域以外的地方访问到
// console.log(str); //ReferenceError: str is not defined

// var 有没有块级作用域? 没有
{
    var bool = true;
}
console.log(bool);
```
- **const** 
常量，常数变量  
常数值是固定不变的，在程序运行的过程中变量的值无法改变,也不能重复声明

## 函数增强
让函数拥有默认值,但默认值不能写在前边  

**DEMO** 函数增强
```js
// 声明一个函数,计算任意数+100的和
function add1(a) {
    console.log(a + 100);
}
add1(100); 

// 如果只提供了1个参数,则计算任意数+100的和,如果提供了2个参数则计算这2个参数的和
function add2(a, b = 100) {
    console.log(a + b);
}
add2(200); /
add2(101, 502); 
```

## 箭头函数
箭头函数，采用的是函数表达式写法，左边是函数参数，右边是函数体，中间使用箭头 => 链接  
箭头函数的语法比函数表达式更加简洁,更适用于需要匿名函数的地方

### 函数无参数
去除function关键字,使用 => 链接函数体  
如果函数体中只有一行代码且是return 则return可以省略不写

```js
// 普通匿名函数
var say1 = function () {
    return '小艺say1';
}
console.log(say1());

// 箭头函数 
// 去除function关键字,使用 => 链接函数体
var say2 = () => {
    return '小艺say2';
}
console.log(say2());

// 如果函数体中只有一行代码且是return 则return可以省略不写
var say3 = () => '小艺say3';
console.log(say3());
```

### 函数有1个参数
去除function关键字,使用 => 链接函数体, 小括号可以省略不写
如果函数体中只有一行代码且是return 则return可以省略不写

```js
var say1 = function (name) {
    return name;
}
console.log(say1('小艺say1'));

// 箭头函数 
// 去除function关键字,使用 => 链接函数体 ,小括号可以不写
var say2 = name => {
    return name;
}
console.log(say2('小艺say2'));

// 如果函数体中只有一行代码且是return 则return可以省略不写
var say3 = name => name;
console.log(say3('小艺say3'));
```

### 函数有多个参数
关键字创建: 原函数中的函数名和function关键字都可以删除,使用 => 链接函数体
函数表达式: 原函数中function关键字可以删除,使用 => 链接函数体

```js
// 关键字创建
function add1(a, b) {
    return a + b;
}
console.log(add1(10, 2));

// 箭头函数简化
(a, b) => a + b;

// 普通匿名函数
var arr = [1, 4, 5, 2, 3];

console.log(arr.sort(function (a, b) {
    return b - a;
}));
//箭头函数 简化
console.log(arr.sort((a, b) => b - a));
```
## 模板化字符串
```js
var str = '小艺';
var age = 19;

// 我是xx,今年xx岁
// 传统写法
console.log('我是:' + str + ',今年:' + age + '岁');

// 模板化字符串
console.log(`我是:${str},今年:${age}岁`);

// 尝试下方内容查询字符串方式使用js拼接
var img1 = '123.png';
var md = 'shenge.png';
var lg = '666.png';

console.log(`
    <li>
        <img src="${img1}" data-md="${md}" data-lg="${lg}">
    </li>
`);

// 最终成果
{
    /* <li>
        <img src="123.png" data-md="shenge.png" data-lg="666.png">
    </li> */
}
```