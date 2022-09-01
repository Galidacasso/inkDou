# 数组 
数组(ArrayObject)是JavaScript中`引用类型`之一,是一种`数据结构`,是元素组成的集合,使用`单独的变量名`来`存储一系列的值`
把数据和数据之间的关系按照特定的结果来保存

## 创建
- 数组字面量
  `var arr = ['小艺', '小宇', '芹菜'];`
- 构造函数
  `var arr = new Array('百度', '搜狗', '360');`

## 访问
- 通过索引下来来完成的,从0开始
- 访问数组不存在的下标返回undefined

## 增加
给数组不存在的下标赋值就是增加元素内容

## 修改
给数组已存在的下标重新赋值就是修改元素内容

`DEMO` 数组的创建/访问/增加/修改
```js
// 索引数组  数组的下标是数字
// 1. 创建
// 构造函数
var arr = new Array('百度', '搜狗', '360');

// 数组字面量
var arr = ['小艺', '小宇', '芹菜'];

console.log(arr);
console.log(typeof arr);

// 2. 访问 数组[索引]
console.log(arr[0]);
console.log(arr[100]);

// 3. 增加   
arr[3] = '佟佟';
arr[4] = '琳琳';
// 当添加的索引下标不连贯时,会产生间隔 xxx empty item
arr[7] = '小雪';

// 4. 修改
arr[3] = '桐桐';

console.log(arr);
```

## 遍历
- 通过for循环
- 通过for...in
  
`DEMO ` 数组的遍历
```js
// 数组字面量
var arr = ['小艺', '小宇', '芹菜'];

// 遍历
// for循环
// arr.length 求数组的长度
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for...in
for (const key in arr) {
    console.log(arr[key]);
}
```
`DEMO` 声明一个数组 存储3个月薪资, 计算薪资总和
```js
var arr_sal = [500, 600, 700];

for (var i = 0, sum = 0; i < arr_sal.length; i++) {
    sum += arr_sal[i];
}
console.log(sum);
```
## 关联数组
不经常用到,使用方法类似对象,遍历方法也使用for...in

```js
// 索引数组 下标是数字
var arr1 = ['小艺', '小宇', '芹菜'];

// 关联数组 字符串做下标 name age addr
var arr2 = [];
arr2['name'] = '张三';
arr2['age'] = 18
arr2['addr'] = '海淀区复兴路14号院';

console.log(arr1);
console.log(arr2);

for (var key in arr2) {
    console.log(key);
    console.log(arr2[key]);
}
```

## 数组和对象混合使用
- `对象` 一个事物的属性
- `数组` 一类事物(多个对象的集合)

`DEMO` 数组和对象的混合使用

```js
var car = {
    model: 'suv',
    color: '黑色',
    brand: 'bwm'
};

// 一类事物
var arr_car = [
    {id:1,model: 'suv',color: '黑色', brand: 'bwm'}, 
    {id:2,model: 'mpv',color: '白色', brand: '威尔法'}, 
    {id:3,model: '轿车', color: '红色',brand: '特斯拉'}
];

// 对象中包含着数组
var stu = {
    name: '小艺',
    age: 18,
    like: ['吃', '喝', '玩', '乐']
};
```
## API函数(数组方法)
### concat 
数组拼接
  
`DEMO` concat
```js
var arr1 = ['小艺', '芹菜', '小宇'];
var arr2 = ['北京', '南京', '杭州'];

consolo.log(arr1.concat(arr2));
// ['小艺', '芹菜', '小宇', '北京', '南京', '杭州'];
consolo.log(arr1.concat('天津'));
// ['小艺', '芹菜', '小宇', '天津'];
```
### toString
数组转字符串


### join([sepertor])
自定义`[分割符]`转字符串 `,`==>`❤` 
   
`DEMO` toString & join

```js
var arr = ['小艺', '芹菜', '小宇'];

console.log(arr.toString());
// 小艺,芹菜,小宇

console.log(arr.join());
// 小艺,芹菜,小宇

console.log(arr.join('-'));
// 小艺-芹菜-小宇
```

### reverse() 
将数组中元素位置颠倒,并改变数组内容

`DEMO` reverse 
```js
var arr = [5, 2, 6, 7, 1];
// [5, 2, 6, 7, 1] => [1, 7, 6, 2, 5] 颠倒反转,没有排序功能
console.log(arr.reverse());
// 可做加密方法 借助reverse
```

### sort()
给数组排序(从大到小或从小从大)
- 括号内可以使用`比较函数`,此函数有2个参数,用来决定排位顺序
- 固定写法
    - function (a, b) {
        从小到大
        return a - b;
        从大到小
        return b - a;
    }

| a-b的值 |     排序     |
| :-----: | :----------: |
|  小于0  | a会排在b之前 |
|  等于0  |   位置不变   |
|  大于0  | b会排在a之前 |

  
`DEMO` sort 
```js
var arr = [5, 2, 6, 7, 1];

console.log(arr.sort());
// 1 2 3 4 5 从小到大
console.log(arr.sort().reverse());
// 5 4 3 2 1 从大到小,此方法不适用
```

`DEMO` 双位数排序
```js
var arr = [5, 12, 36, 27, 1];
// 从小到大[1, 5, 12, 27, 36] 
// 如果直接使用sort会出现双位数排序问题,
// 需要比较函数来解决
console.log(arr.sort(
    function (a, b) {
        return a - b;
    }
));
// 从大到小
console.log(arr.sort(
    function (a, b) {
        return b - a;
    }
));
```
### slice()
截取，按照参数截取数组中的内容并返回
- 1个参数,即`开始点`(索引下标)
  - 正数 从`左`往`右` `寻找` 从`左`往`右` `截取` 截取到数组结尾
  - 负数 从`右`往`左` `寻找` 从`左`往`右` `截取` 截取到数组结尾
  - 超出`索引范围` 
    - 正数 返回`空数组`
    - 负数 返回`全部数组`

`DEMO` slice 1个参数 
```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
//数组索引  0    1    2    3    4    5    6
//数组索引  0   -6   -5   -4   -3   -2   -1

// 1个参数 正数
console.log(arr.slice(3));
// ['d', 'e', 'f', 'g'];

// 1个参数 负数
console.log(arr.slice(-5));
// ['c', 'd', 'e', 'f', 'g'];
```
- 2个参数,即`开始点` 及 `结束点`之前  
  - 全为正数 从`左`往`右` `寻找` 从`左`往`右` `截取` 截取到`结束点`之前,不包含`结束点`
  - 其他组合 `方向` 由 `开始点` 决定
      - 正数则 从`左`往`右` `寻找`
      - 负数则 从`右`往`左` `寻找`
      - 组合不满足截取条件,则返回 `空数组`          

`DEMO` slice 2个参数
```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
//数组索引  0    1    2    3    4    5    6
//数组索引  0   -6   -5   -4   -3   -2   -1

// 2个参数 
console.log(arr.slice(1,5));
// ['b', 'c', 'd', 'e'];

console.log(arr.slice(-1,-5));
// 不满足从左往右截取的条件,返回空数组

console.log(arr.slice(1,-5));
// [`b`]

console.log(arr.slice(30));
// 超出范围 返回空数组

console.log(arr.slice(-30));
// 超出范围 返回空数组
```

`DEMO` slice 练习
```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
//数组索引  0    1    2    3    4    5    6
//数组索引  0   -6   -5   -4   -3   -2   -1

// 2种方法截取出全部内容
console.log(arr.slice(0));
console.log(arr.slice(-999));

// 截取出 "d" 元素内容
console.log(arr.slice(3, 4));

// 截取 cde
console.log(arr.slice(2, 5));
console.log(arr.slice(-5, 5));
```
### 添加/删除
数组元素 (`length`)
- 头部添加 `unshift()`  
将一个或者多个元素添加到数组的开头返回添加后数组的长度,此方法会改变原来的数组

- 尾部添加 `push()`     
将一个或者多个元素添加到数组的结尾入栈,返回添加后数组的长度

- 头部删除 `shift()`  
 返回删除的元素
- 尾部删除 `pop()`   
出栈,返回删除的元素

`DEMO` 添加/删除数组元素
```js
var arr = ['小艺', '小宇', '芹菜'];
console.log(arr);

// 头部的添加
arr.unshift('申哥');
console.log('unshift-头部添加"申哥" =>',arr);
// 尾部添加(入栈)
arr.push('香菜');
console.log('push-尾部添加"香菜" =>',arr);
// 头部的删除,返回的是删除的元素
arr.shift();
console.log('shift-头部删除 =>',arr);

// 尾部的删除(出栈)
arr.pop();
console.log('pop-尾部删除 =>',arr);
```
### splice()
截取,删除/添加数组元素,会改变原来的数组,返回的是截取后的结果
- 一个参数
  - 正数 同slice,但已改变原数组内容
  - 负数 同slice,但已改变原数组内容
- 两个参数
  - 正数 
    - 第一个参数:开始点 索引值
    - 第二个参数:截取数量
- 多个参数
  - 例如arr.splice(1, 2, '小艺', '小宇', '芹菜')
    - 会改变原有元素的索引位置,
    - 删除和添加同时存在
    - 从元素索引下标为1的地方开始删除,删除2个元素,并添加3个元素进去

`demo` splice截取

```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
//数组索引  0    1    2    3    4    5    6
//数组索引  0   -6   -5   -4   -3   -2   -1

var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// 1个参数 正数
// console.log(arr.splice(3));

// 1个参数 负数
// console.log(arr.splice(-5));

// 2个参数 正数
// console.log(arr.splice(1, 4));// [ 'b', 'c', 'd', 'e' ]

//console.log(arr.splice(1, 2));//[ 'b', 'c' ]
// 多个参数
console.log(arr[3]); //d
arr.splice(1, 2, '小艺', '小宇', '芹菜');

console.log(arr[3]); //芹菜 原有元素的索引被改变
console.log(arr);
```


`DEMO` 将数组中1的数组元素 移动到数组开头,禁止使用排序api
```js
// [1,2,1,5,1]==>[1,1,1,2,5]
var arr = [1, 2, 1, 5, 1];

// 遍历数组中的全部内容
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    // 判断:如果是1就移动到数组开头
    if (arr[i] == 1) {
        arr.unshift(arr[i]);
        arr.splice(i + 1, 1);
    }
}
console.log(arr);
```
