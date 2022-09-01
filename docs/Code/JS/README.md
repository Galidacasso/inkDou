---
lang: zh-CN
title: JS基础
description: JavaScript资料
---
<br>
<div align = "center"><img src="https://pic2.zhimg.com/v2-55fc240f29404fe6032693100f36fcd8_1440w.jpg?source=172ae18b" ></div>

# Javascript简述
运行在解析器或引擎中的解释型脚本语言，用于特效、数据、DOM的Web页面交互

#### 学习路线
技术通识 **→** 变量与数据类型 **→** 运算符 **→** 流程控制 **→** 函数对象 **→** 第三方库和框架 **→** 项目实战

:::tip 简单的JS规范
1. 后缀名为 .js  
2. 只能嵌套在HTML或在运行环境中运行  
3. JS中大小写敏感，应区分大小写  
:::

## 变量与赋值
在变量名相同的情况下, 后赋值的内容会覆盖先赋值的内容  
`typeof` 查看变量的数据类型

**变量赋值及数据类型**<Badge text="DEMO" /> 
```js
// 声明变量及赋值(=)
// number
var num = 1;
// 打印变量名即可
console.log(num);
console.log(typeof num);

// 字符串
var str = '小艺';
console.log(str);
console.log(typeof str);

// 布尔类型
var bool = true;
var bool = false;
console.log(bool);
console.log(typeof bool);

// undefined
var un;
console.log(un);
```
  
## 数据类型


### 原始数据类型  
| 序号  |  内容  | 数据名称  | 备注                                   |
| :---: | :----: | --------- | -------------------------------------- |
|   1   |  数字  | number    | 正负整数+小数+0+进制数                 |
|   2   | 字符串 | string    | 在引号内的均为字符串类型               |
|   3   |  布尔  | boolean   | true(真),1/fales(假),0   [除了0都为真] |
|   4   |   空   | null      | --                                     |
|   5   | 未定义 | undefined | 变量声明但未赋值即为undefined          |

### 引用数据
| 序号  |  内容  | 数据名称 |
| :---: | :----: | -------- |
|   1   |  数字  | Number   |
|   2   | 字符串 | String   |
|   3   |  布尔  | Boolean  |
|   4   |  数组  | Array    |
|   5   |  对象  | Object   |
|  ...  |  ...   | ...      |

### 数据类型的转化

#### 自动转化
数据运算过程中会发生自动转化,又称隐式转化(看不到)

**自动转化** <Badge text="DEMO" /> 
```js
// 1. number + number
console.log(1 + 1); 
console.log(typeof (1 + 1)); 
// 结果2 类型nuber

// 2. number + string = string
console.log(1 + '2'); //12
console.log(typeof (1 + '2'));
// 结果12 类型srting

// 3. number + bool = number
console.log(1 + true);
console.log(typeof (1 + true));
// 结果2 类型nuber

// 面试题: 4. number + undefined = NaN(number)
console.log(1 + undefined);
console.log(typeof (1 + undefined));
// 结果NaN 类型nuber
```
#### 强制转化
通过函数(方法)完成.

#### **`Number()`** 函数
将括号中的内容转为number,如果无法转化则返回NaN

| 序号  |  内容  | 结果         |
| :---: | :----: | ------------ |
|   1   | 纯数字 | 返回数字内容 |
|   2   |  字符  | 返回NaN      |
|   3   |  true  | 返回1        |
|   4   | fales  | 返回0        |

**强制转化** <Badge text="DEMO" /> 
```js
var num1 = Number('小艺miss');
console.log(num1);
// 结果 NaN 

var num2 = Number('123');
console.log(num2);
// 结果 123  
var num3 = Number(false);
console.log(num3);
// 结果 0 
```

#### **`parseInt()`** 转整数
解析内容,并返回整数,即取整

| 序号  |     内容      | 结果         |
| :---: | :-----------: | ------------ |
|   1   |    纯数字     | 取整         |
|   2   | 数字头+字符尾 | 只取数字部分 |
|   3   | 字符头+数字尾 | 返回1        |

#### **`parseFloat()`** 转浮点
解析内容,返回小数(浮点数)

**强制转化** <Badge text="DEMO" /> 
```js
// parseInt取正
var num1 = parseInt(10.23);
console.log(num1);
// 结果 10

var num2 = parseInt('123');
console.log(num2);
// 结果 123

var num3 = parseInt('123小艺');
console.log(num3);
// 结果 123

var num4 = parseInt('小艺123');
console.log(num4);
// 结果 NaN

var num5 = parseFloat('1.23');
console.log(num5);
// 结果 1.23 
```

#### **`toSrting()`** 转字符


**`转字符`** <Badge text="DEMO" /> 
```js
var num = 1;
var str = num.toString();

console.log(str);
console.log(typeof str);
// 结果 1 string

var bool = Boolean(1);
console.log(bool);
console.log(typeof bool);
// 结果 true boolean

var bool2 = Boolean(0);
console.log(bool2);
console.log(typeof bool2);
// 结果 false boolean

var bool3 = Boolean(false);
console.log(bool3);
console.log(typeof bool3);
// 结果 false boolean
```

## 运算符
### 算数运算符
| 序号  | 内容  | 运算符 | 备注                   |
| :---: | :---: | :----: | ---------------------- |
|   1   |  加   |   +    | 加法和拼接             |
|   2   |  减   |   -    | 减法和负号(负数) -1 -2 |
|   3   |  乘   |   *    | 乘法                   |
|   4   |  除   |   /    | 除法                   |
|   5   |  模   |   %    | 求余                   |

**`算数运算符`**  <Badge text="DEMO" /> 
```js
var a = 10;
var b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// 求余/求模
console.log(a % b); // 余数为1  不整除
console.log(10 % 2); //余数为0  整除
```

### 自增/自减
自增 **`++`** 与自减 **`--`** ，每次步长为1

|   内容   | 符号  | 备注         |
| :------: | :---: | ------------ |
| 前缀自增 |  ++x  | 先自增后赋值 |
| 后缀自增 |  x++  | 先赋值后自增 |
| 前缀自减 |  --x  | 先自减后赋值 |
| 后缀自减 |  x--  | 先赋值后自减 |

**`前缀和后缀自增`** <Badge text="DEMO" /> 

```js
var a = 1;
// 前缀自增
var b = ++a;
console.log(b); //2

var x = 1;
// 后缀自增
var y = x++;
console.log(y); //1
```
### 赋值运算符
**`=`** **`+=`** **`-=`** **`*=`**
...

**`赋值运算`** <Badge text="DEMO" /> 

```js
var x = 1;
var y = 2;

// x = x + y; ==> x = 1 + 2 = 3;
x += y;
console.log(x); //3

var a = 2;
var b = 5;

// b = b - a; 5 - 2 =3
b -= a;
console.log(b);
```

### 比较运算符
- 比较运算返回布尔值,JavaScript总会尝试toNumber动作，
- 如果是字符串之间的比较,则比较字符的unicode码值。  
- 不同数据之间的比较会出发隐式转换。

| 内容  |   符号    | 备注                                                                         |
| :---: | :-------: | ---------------------------------------------------------------------------- |
| 大于  |  **`>`**  | --                                                                           |
| 小于  |  **`<`**  | --                                                                           |
| 等于  | **`==`**  | 松散比较，只比较值，如果数据类型发生转换后的值一样，<br> 就会返回true，反之返回false |
| 全等  | **`===`** | 严格比较，同时比较值和数据类型，如果都一致则返回true，<br> 否则返回false             |
| 不等  | **`!=`**  | 松散比较，只比较值，如果值不一致，<br> 就会返回true，反之返回false                   |

**`比较运算1`** <Badge text="DEMO" /> 
```js
console.log(1 > 2); //false
console.log(3 < 10); // true

// 字符串与字符串之间比较(坑)
console.log('3' < '10'); //flase

// 数据类型在比较时发生自动转换(坑)
console.log('3' < 10); //true

```
**`比较运算2`** <Badge text="DEMO" /> 
```js
var a = 1;
var b = true;
var c = false;

// 等等 ==
console.log(a == b); //T 
console.log(a == c); //F

// 全等 ===
console.log(a === b); //F
console.log(1 === 1); //T

// 不等 !=
console.log(b != c); // T
```

### 逻辑运算符(返回布尔值)

| 序号  | 逻辑  | 符号  | 备注                                                           |
| :---: | :---: | :---: | -------------------------------------------------------------- |
|   1   |  与   |  &&   | 且的关系,必须满足所有的表达式才是true<br>一假俱假,全是真才是真 |
|   2   |  或   | \|\|  | 或者的关系,<br>有一个真就是真,全假才是假                       |
|   3   |  非   |   !   | true ==> false<br>false ==> true                               |

**`逻辑运算`** <Badge text="DEMO" />

```js
var a = 0;
var b = 1;

// false || false   false
console.log(a == 1 || b == 0);

// false || true  true
console.log(a != 0 || b == 1);

// true || 不执行  true
console.log(a == 0 || b == 0);

// 逻辑非
var bool1 = true;
console.log(!bool1);  //false

var bool2 = -1;
console.log(!bool2);  //false
```

### 短路求值
当第一个表达式的结果能够确定整个表达式结果时,后面的表达式不执行,这种情况被称之为短路求值
- 逻辑`与`第一个表达式为false的时候
- 逻辑`或`第一个表达式为true的时候

**`短路求值`** <Badge text="DEMO" />

```js
var a = 0;
var b = 1;

// 验证短路求值
a == 0 || console.log(b);
```