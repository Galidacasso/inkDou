# Error对象
Error对象在错误发生的时候提示信息(抛出Error对象的实例化对象),其他错误都继承于该类型
ES定义了6个错误类型
| 错误类型       | 说明                     | 备注                                                   |
| -------------- | ------------------------ | ------------------------------------------------------ |
| ReferenceError | 引用错误                 |                                                        |
| SyntaxError    | 语法错误                 |                                                        |
| TypeError      | 类型错误                 |                                                        |
| RangeError     | 范围错误                 | 表示一个在不在正常的范围内(内存溢出时会发生这样的错误) |
| URIError       | 错误的使用了全局URI函数  |                                                        |
| EvalError      | 全局eval()函数有关的错误 | 当前版本的js已经不会再抛出该异常                       |

`DEMO` ReferenceError 引用错误
```js:no-line-numbers
console.log(a);
ReferenceError: a is not defined
```

`DEMO` SyntaxError 语法错误
```js:no-line-numbers
console.log().();
SyntaxError: Unexpected token '('
```

`DEMO` TypeError 类型错误
```js:no-line-numbers
console.logg();
TypeError: console.logg is not a function
```

## 自定义错误并抛出
`throw()` 用来抛出用户自定义的异常(错误error),后续代码不会被执行
```js 
var age = 188;

// 自定义错误
if (age > 19) {
    // 抛出异常
    throw "AgeError: 年龄错误";
}
```
## 错误处理
`try()` & `catch()` 必须成双成对的出现,处理可预知的异常
```js 
var age = 188;

try {
    // 抛出异常
    if (age > 19) {
        // 抛出异常
        throw "AgeError: 年龄错误";
    }
} catch (error) {
    console.log(error);
    // 捕获在try抛出的异常并处理
    age = 18;
}
console.log(age); 
```