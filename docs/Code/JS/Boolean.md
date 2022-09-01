# Boolean对象
## 创建
- 构造函数
```js
var bool = new Boolean(false);
var bool = Boolean(true);
```
- 字面量
```js
var bool = false;
```

## API
.toString() 转字符
```js
var bool = false;
console.log(bool.toString()); // false
```

`DEMO` 基础类型布尔值和布尔对象
```js
// 基础类型的false
if (false) {
    console.log('真1');
} else {
    console.log('假1');
}
// 结果为:假1

// 值为false的布尔对象
var bool = new Boolean(false);
if (bool) {
    console.log('真2');
} else {
    console.log('假2');
}
// 结果为:真2
// 判断 是否为 布尔对象,并非为布尔对象的值
```

`延展` 哪些值会被转化为false
|   布尔    | 值                                                |
| :-------: | ------------------------------------------------- |
| **false** | `0` `0.0` `null` `undefined` `NaN` `空字符串("")` |
| **true**  | `空数组` `空对象` `空值字符串(" ")`               |