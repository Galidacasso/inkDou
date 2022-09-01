# 日期时间对象
## 创建
```js
var date = new Date('2022/3/25 22:13:23');
var date = new Date(2022, 3, 25, 22, 13, 23);
// 时间戳形式 距离计算机元年(1970) 0点0分0秒的毫秒数
var date = new Date(1674515165155);
// 获取当前时间 东8区
var date = new Date();

console.log(date);
```

## API

| 方法                    | 说明                   | 备注                   |
| :---------------------- | ---------------------- | ---------------------- |
| **.get**                | **获取**               |                        |
| .~~getYear()~~        | 获取年                 | 已弃用                 |
| .getFullYear()        | 获取`年`               | --                     |
| .getMonth()           | 获取`月`               | 0~11                   |
| .getDate()            | 获取`月中的天`         | --                     |
| .getDay()             | 获取`周中的天`         | 0~6,星期日为每周第一天 |
| .getHours()           | 获取`小时`             | 0~24                   |
| .getMinutes()         | 获取`分钟`             | 0~59                   |
| .getSeconds()         | 获取`秒钟`             | 0~59                   |
| .getMilliseconds()    | 获取`毫秒`             | 0~999                  |
| .getTime()            | 获取`时间戳`           | --                     |
| **.toLocale**           | **格式化本地**         |                        |
| .toLocaleDateString() | 格式化本地`日期`       | --                     |
| .toLocaleTimeString() | 格式化本地`时间`       | --                     |
| .toLocaleString()     | 格式化本地`日期和时间` | --                     |
| **.set**                | **设置**               |                        |
| .setFullYear()        | 设置`年`               | --                     |
| .setMonth()           | 设置`月`               | --                     |
| .setDate()            | 设置`月中的天`         | --                     |
| .setHours()           | 设置`时`               | --                     |
| .setMinutes()         | 设置`分`               | --                     |
| .setSeconds()         | 设置`秒`               | --                     |

`DEMO` 日期时间对象的`获取`
```js
var date = new Date();

// 年 getYear被弃用 返回值是不确定的
console.log(date.getFullYear());

// 月 0 ~ 11
console.log(date.getMonth());

// 月中的某一天
console.log(date.getDate());

// 周中的某一天 0 ~ 6 星期日是每周的第一天
console.log(date.getDay());

// 小时 0 ~ 23
console.log(date.getHours());

// 分钟 0 ~ 59
console.log(date.getMinutes());

// 秒钟 0 ~ 59
console.log(date.getSeconds());

// 毫秒 0 ~ 999
console.log(date.getMilliseconds());

// 计算机元年毫秒数
console.log(date.getTime());
```

`DEMO` 日期时间对象的`本地格式化`
```js
var date = new Date();

// 格式化本地日期
console.log(date.toLocaleDateString());

// 格式化本地时间
console.log(date.toLocaleTimeString());

// 格式化本地日期和时间
console.log(date.toLocaleString());
```

`DEMO` 日期时间对象的`设置`
```js
var date = new Date();

date.setFullYear(2000);
console.log(date.toLocaleString());

// 月
date.setMonth(3);
console.log(date.toLocaleString());

// 月中的某一天
date.setDate(3);
console.log(date.toLocaleString());

// 时
date.setHours(0);
console.log(date.toLocaleString());

// 分
date.setMinutes(11);
console.log(date.toLocaleString());

// 秒
date.setSeconds(12);
console.log(date.toLocaleString());
```

## 时间戳
时间戳是指`计算机元`年[格林威治时间1970年01⽉01⽇00时00分00秒(北京时间1970年01⽉01⽇08时00分00秒)]起⾄现在的`总秒数`。

`DEMO` 获取当前时间戳的⽅法
```js
//不推荐使⽤，因为毫秒级别的数值被转化为000 ，不准确！
var timestamp = Date.parse(new Date());

//获取当前毫秒的时间戳，准确！
var timestamp = (new Date()).valueOf();

//返回数值单位是毫秒
var timestamp = new Date(). getTime();
```

`DEMO` 获取`当前时间`的时间戳⽅法
```js
//不推荐使⽤，因为毫秒级别的数值被转化为000 ，不准确！
var timestamp = Date.parse(new Date());

//获取当前毫秒的时间戳，准确！
var timestamp = (new Date()).valueOf();

//返回数值单位是毫秒
var timestamp = new Date(). getTime();
```

`DEMO` 获取`指定时间`的时间戳⽅法
```js
var timestamp = (new Date("2018/06/22 08:00:20")).getTime()/1000;
```

`DEMO` 时间戳转化为时间
```js

var timestamp= new Date(1472025255555)
// 其中注意时间戳⼀定要是int型，否则转换失败。parseInt()
```