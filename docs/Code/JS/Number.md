# Number对象
## 创建
- 构造函数
```js
var num = new Number(1);
var num = Number(1);
```
- 字面量
```js
var num = 1669;
```

## API
`toFixed()`可把 Number 四舍五⼊为指定⼩数位数的数字。

```js
// 保留小数位数
console.log(1.23456.toFixed(2));
console.log(num.toFixed(2));
```