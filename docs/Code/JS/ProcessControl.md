# 流程控制
所有的算法都是通过顺序、分支、循环这三种逻辑实现的

- **顺序** --从 **a** 到 **b**   
- **分支** --根据条件**选择性**的执行  
- **循环** --**重复不断**的执行  

## 分支结构
### IF
```js:no-line-numbers
if(exp){代码块}
```
当(exp)的布尔值结果为true的时候，执行{代码块}，否则不执行

```js:no-line-numbers
if(exp){ 代码块1 } else { 代码块2 }
```
当(exp)的布尔值结果为true的时候，执行{代码块1}，否则执行{代码块2}

```js:no-line-numbers
exp1 ? exp2 : exp3 
```
如果exp1的结果是true 运行exp2，否则运行exp3

:::tip
**`if(exp){代码块}`** 的写法，可以将 **`花括号`** **`{ }`** 省略掉，但会使可读性变差，且存在代隐患。
:::


---   
**if(exp){代码块}** <Badge text="DEMO" />
```js
// 小艺粥坊 : 如果满30减15
var money = 35;
if (money >= 30) {
    money -= 15;
}
console.log('实际付款:', money);
// 实际付款：20
```
---
**促销活动** <Badge text="练习" />  
小艺航空公司机票促销，如果是春季机票8折，原价2000，如果申哥现在买机票应该花多少钱?

```js
// 声明2个变量存储价格和月份 完成判断 
var price = 2000;
var month = 3;

if (month == 3 || month == 4 || month == 5) {
    price *= 0.8;
}

console.log('实付款:', price);
// 实付款:1600
```
---     
**交换变量的值** <Badge text="练习" />   
假设有2个变量a，b，如果a大于b，则交换2个变量的值 ，只可以借助1个第三方变量

```js
// 例如: a = 2  b = 1  交换值 a = 1 b = 2 
var a = 2;
var b = 1;
var tmp;
if (a > b) {
    tmp = a;    // 把较大的a变量的值给tmp
    a = b;      // 把较小的b变量的值给a
    b = tmp;    // 把tmp的值给b
}
```
---
**满减** <Badge text="练习" />   
如果满30减15， 如果不够30 则提示还差xx元可以减15元

```js
var mon = 20; // 声明一个变量为实际付款值

if (mon >= 30) {
    mon -= 15;
} else {
    console.log('还差:' + (30 - mon) + '元可以减15元');
}
console.log('实付款:', mon);
```
---
判断奇偶数 <Badge text="练习" />   
声明变量保存一个数字判断是奇数还是偶数，分别做输出

```js
var num = 5;

// 第一种
if (num % 2 == 0) {
    console.log('偶数');
} else {
    console.log('奇数');
}

// 第二种
if (num % 2 != 0) {
    console.log('奇数');
} else {
    console.log('偶数');
}

// 第三种
if (num%2) {
  console.log(num,'奇数');
} else {
  console.log(num,'偶数');
}

// 第四种 三元(三目)运算符
num % 2 == 0 ? console.log('偶数') : console.log('奇数');
```
---

### IF 嵌套
```js
if(exp){代码块1}else if(exp2){代码块2}...{...}else{语句块n}
```

**订单状态** <Badge text="演示" />   
```js
// 1 未付款  2 未发货  3运输中  其他 状态非法
var sta = 2;

if (sta == 1) {
    console.log('未付款');
} else if (sta == 2) {
    console.log('未发货');
} else if (sta == 3) {
    console.log('运输中');
} else {
    console.log('状态非法');
}
```
### switch case
判断一个表达式的值是否和case匹配，并执行相关联的语句，如果与case的值都不匹配，执行default内容

**订单状态** <Badge text="演示" />   
```js
// 1 未付款  2 未发货  3运输中  其他 状态非法
var sta = 2;

switch (sta) {
    case 1:
        console.log('未付款');
        break;
    case 2:
        console.log('未发货');
        break;
    case 3:
        console.log('运输中');
    default:
        console.log('状态非法');
        break;
}
```

## 循环结构
在表达式为true的前提下，循环执行一段代码块，一直到表达式为false时结束

### while
```js
while(exp){循环体}
```

如果(exp)为**true**，执行循环体，一直到表达式为false时结束循环  
如果(exp)一直是**true**，就会造成死循环，所以while循环体中需要有**增量配合**(exp)  

**循环体** <Badge text="演示" /> 
```js
var i = 1;

while (i < 5) {
    console.log('小艺: Are you think of me ?');
    i++;
}
```
解析↑：

| 循环次数 | i的值 | exp(i < 5) | 是否执行循环体 |  i++  |
| :------: | :---: | :--------: | :------------: | :---: |
|    1     |   1   |     T      |       是       |   2   |
|    2     |   2   |     T      |       是       |   3   |
|    3     |   3   |     T      |       是       |   4   |
|    4     |   4   |     T      |       是       |   5   |
|    5     |   5   |     F      |  否，结束循环   |  --   |

**使用while循环计算1到100的和** <Badge text="练习" /> 
```js
// 友情提示 可以借助一个第三方变量 存储相加后的值
// 1 + 2 + 3 + 4 + 5 + 6 + ... + 100

var i = 1;
var sum = 0;

while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum); // 5050 
// i = 1  sum : 0+1 = 1
// i = 2  sum : 1+2 = 3
// i = 3  sum : 3+3 = 6
// i = 4  sum : 6+4 = 10
// ...
```

### do{}while()
无论条件是否满足都会被无条件的执行一次循环体

<Badge text="演示" />

```js
var i = 0;

do {
    console.log('小艺');
} while (i > 5);
```
### for

```js
for(exp1;exp2;exp3){循环体}
```

#### for循环过程
1. 先会无条件的执行`exp1`，再执行`exp2`，如果满足条件(true)才执行循环体，否则终止循环  
2. 当循环体执行完毕后，会执行`exp3`，进行增量操作，继续执行`exp2` 判断是否满足条件，如果满足(true)则继续执行循环体，如果不满足条件则终止循环 
   

**for循环** <Badge text="演示" />
```js
for (var i = 1; i < 5; i++) {
    console.log('我要回家~');
}
```

#### for循环特殊写法
**for( ; \; ){ }**  
三个表达式为空(死循环)，必须写分号(语法)  
需要有 **`break`** 来终止循环进行  
没有exp3，内部需要有相对应的增量代码    

##### break 终止循环(跳出循环体)
**for特殊写法** <Badge text="演示" />

```js
for (;;) {
    console.log('小艺');
    // 跳出循环体 终止循环作用
    break;
}
```
```js
// 正常
for (var i = 1; i <= 2; i++) {
    console.log('xiaoyi');
}

// 第三个表达式不写，但是还想让for循环执行结果和上方for循环一样
for (var i = 1; i <= 2;) {
    console.log('小艺');
    // 增量
    i++;
}
```
#### for循环嵌套
一个for循环中的循环体又是一个for循环(套娃)

##### 执行过程
1. 先执行`外层循环`， 外层循环先执行`exp1`，再执行`exp2`，如果为`false`则终止整个循环，如果为`true`则进入`内层循环`，`内层循环`也需要按照规则执行`exp1`-->`exp2`-->`循环体`-->`exp3` ...`
   
2. 一旦从`外层循环`进入`内层循环`后，只有等`内层循环`结束后，才会跳出`内层循环`，进入`外层循环`中

3. `外层循环`每进入1次，`内层循环`都会从头开始执行n次(具体执行多少次看内层循环的条件)

4. 以此类推，一直到`外层循环`条件为`false`时才会`终止整个循环`

##### 控制方法
外层控制行，内层控制列，先有行再有列

**绘制等腰三角形** <Badge text="练习" />

```js
var row = 7;
//外层 for() 控制行数， 在exp1里确定r变量为行数，起始值为1
//外层 exp2明确行数关系，r<=row，exp3明确变量r的自增属性
for (var r = 1, str = ''; r <= row; r++) {
  //内层 for() 1控制该行里有多少个空格,变量c1确定了空格的起始数
  //通过exp2明确空格和行数的关系,即空格数量应等于总输出行数减去当前行数
  //通过exp3明确自增属性
  //在循环体中,给变量拼接 '空格'
  for (var c1 = 1; c1 <= row - r; c1++) {
    str += ' ';
  }
  //内层 for() 2控制该行里有多少个星,变量c1确定了星的起始数
  //通过exp2明确星和行数的关系,即星的数量=行数x2-1
  //通过exp3明确自增属性
  //在循环体中,给变量拼接 '*'
  for (var c = 1; c <= r * 2 - 1; c++) {
    str += '*';
  }
  str += '\n';
}
console.log(str);
```
**绘制倒置等腰三角形** <Badge text="练习" />
```js
var gndrow = 7;
for (var sr = gndrow ,str = ''; sr >= 0; sr--) {
// 输出的空格数量等与总行数-当前行数
  for(var sc = 0; sc <= gndrow-sr ; sc++){
    str+=' ';
  }
// 输出星的数量等与当前行数的两倍减1,输出自减
  for (var sc1 = 2*sr-1; sc1 >0; sc1--) {
    str+='*';
  }
    str+='\n';
}
console.log(sstr);
```