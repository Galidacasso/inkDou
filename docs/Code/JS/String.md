# String对象
### 创建 [字面量][构造函数]
```js
// 构造函数
var str = new String('小艺'); //对象类型object
var str = String('小艺');
// 字面量
var str = '小艺';
```
2. 访问(`下标`)
```js
console.log(str[1]);
console.log(str[11]);
```
### 转义(`\`)
JavaScript中有些字符具有特殊的含义,因此输出这些字符时,会被程序自动转化成其他状态,需要通过转义符(\)来处理,转义符能将特殊字符转化成普通字符
```js
var url = 'D:\\nay';
console.log(url);
```
|  名称  | 方法 | 备注 |
| :----: | ---- | ---- |
| 换页符 | `\f` |      |
| 换行符 | `\n` | 常用 |
| 制表符 | `\v` | 垂直 |
| 制表符 | `\t` | 水平 |
|  ....  |

### 引号包裹(`'` `"`)
单双引号的问题
- 单引号不能包裹单引号
- 双引号不能包裹双引号,
- 不能包裹其自身,但是可以互相包裹
```js
// 4. 单双引号的包裹问题
// var str = ""小艺""; //报错
// var str = ''小艺''; //报错
var str = '"小艺"'; // "'小艺'"
// 使用转义符\
var str = "\"小艺\"";
```
## 字符串包装对象
字符串属于原始数据类型,将原始数据类型包装成对象后就可以拥有属性和方法
当基础数据类型使用属性或方法的时候,JS引擎会自动将其转化为对象类型

| 方法            | 作用                     |
| :-------------- | ------------------------ |
| `toUpperCase()` | 字符串内容转大写         |
| `toLowerCase()` | 字符串内容转小写         |
| `trim()`        | 去除两边的空格           |
| `charAt()`      | 获取下标对应的字符串内容 |

`DEMO` 字符串包装对象
```js 
var str = ' Hello World ';

// 字符串内容转大写
console.log(str.toUpperCase());
// 字符串内容转小写
console.log(str.toLowerCase());
// 去除两边的空格
console.log(str.trim());

// 获取下标对应的字符串
console.log(str.charAt(2));
```

`练习` 根据身份证信息获取性别
```js
// 根据身份证信息获取性别(2种方法)
// 第17位代表性别 奇数是男 偶数是女
var id = '110000200401014895';

console.log(id.charAt(id.length - 2) % 2 ? '男' : '女');

console.log(id[id.length - 2] % 2 ? '男' : '女');
```

## 字符串API
### indexOf()
寻找字符串第一次出现的位置,找不到返回-1,此方法区分大小写

### lastIndexOf()
寻找字符串最后一次出现的位置,找不到返回-1,此方法区分大小写

### search()
寻找字符串第一次出现的位置,找不到返回-1,此方法区分大小写,支持正则表达式

`DEMO` `indexOf()` `lastIndexOf()` `search()`
```js
var str = 'Aabcdefag';

// 区分大小写
console.log(str.indexOf('a')); // 1
console.log(str.indexOf('A')); // 0

console.log(str.lastIndexOf('a')); // 7

// 区分大小写,支持正则表达式
console.log(str.search('a')); // 1
console.log(str.search('申')); // -1
// 忽略大小写 /i
console.log(str.search(/a/i)); //0,正则表达式
```
### slice()
   按照`下标`进行字符串截取,规则同数组
- 1个参数情况 开始点
    - 正数: 从左往右找位置,从左往右截取,一直截取到结尾
    - 负数: 从右往左找位置,从左往右截取,一直截取到结尾
    - 如果超出索引范围,正数时返回空数组,负数时返回全部内容
    - 正负决定查找`下标`的方向,正往右,负往左(-1开始)

- 2个参数情况 开始点  结束点
    - 全为正数:从左往右找位置,从开始点开始截取,一直截取到结束点,包含开始点内容,不包含结束点内容

```js
var str = 'abcdefghijk';
// 字符串    a   b   c   d   e   f   g   h   i   j   k 
// 下标      0   1   2   3   4   5   9   7   8   9   10
// 负数下标                                 -3  -2  -1

// 截取出jk(2种方法)
console.log(str.slice(9)); //单正数参 往右找 往右截 截到尾
console.log(str.slice(-2));//单负数参 往左找 往右截 截到尾

// 截取出 cdefg
console.log(str.slice(2, 7));//双正数参数
```
### substring()
   截取字符串中介于两个指定`下标`之间的字符
- 如果参数是小于0或者是NaN,都会被当做0处理
- 如果开始点大于结束点,则执行的效果相当于2个参数位置的互换
- 1个参数情况: 开始点
    正数: 从左往右找位置,从左往右截取,一直截取到结尾
    负数: 返回全部
- 2个参数情况: 开始点 结束点(不包含结束点内容)

```js
var str = 'abcdefghijk';
// 字符串    a   b   c   d   e   f   g   h   i   j   k 
// 下标      0   1   2   3   4   5   9   7   8   9   10
// 负数下标                                 -3  -2  -1

// 一个参数
console.log(str.substring(5));//fghijk

// 负数返回全部内容
console.log(str.substring(-2));//abcdefghijk

// 二个参数
console.log(str.substring(1, 5)); //bcde

// 0,5
console.log(str.substring(-7, 5)); //abcde

// 0,5
console.log(str.substring(5, -7)); //abcde

```

`练习` 获取邮箱中的用户名和域名
```js
// 要求:用户名用`slice()`,域名用`substring()`
var arr = [
    'xiaoyi@tedu.cn',
    'xiao@yi@163.cn',
    'donghang@support-mu.cn'
];

function getEmailInfo(arr) {
    for (var i = 0; i < arr.length; i++) {
        // 寻找最后一次@出现的位置
        var index = arr[i].lastIndexOf('@');
        // console.log(index);
        console.log('用户名:', arr[i].slice(0, index));
        console.log('域名:', arr[i].substring(index + 1));
    }
}
getEmailInfo(arr);
```

### replace()
字符串替换,不会改变原来字符串的内容,默认执行一次,可以通过正则表达式来进行全局替换 /g,可以通过/i来忽略大小写
```js
var str = 'fuckduck';

console.log(str.replace('fuck', '****'));

// 正则表达式 实现全局替换
console.log(str.replace(/fuck/g, '****'));
```

7. `split()`
将字符串内容按照一定的格式进行分割,分割后变成数组
```js
var str = 'a-b-c-d-e';

console.log(str.split('-'));
```

`练习` 查询字符串 属性=属性值&属性=属性值&...
```js
// 获取tn和wd的值
var str = 'tn=baidu&wd=web';

// 1. 先按照&符来进行分割
var arr = str.split('&');
console.log(arr); //[ 'tn=baidu', 'wd=web' ]
// 2. 继续分割后并取值
console.log(arr[0].split('=')[1]);
console.log(arr[1].split('=')[1]);
```
```js
var str = 'keyword=机械键盘&enc=utf-8&wq=机械&pvid=d2a0f0eee6ba4d0a9244cca5416aee83';
var arr = str.split('&');
for (var key in arr) {
    console.log(arr[key].split('=')[1]);
}
```

### repeat()
字符串重复
```js
var str = '-';
console.log(str.repeat(3)); //---
```
