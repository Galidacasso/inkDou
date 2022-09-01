# 面试题

## MySQL
### 手机号如何存储? 
答：VARCHAR

:::tip VARCHAR的应用比较灵活  

- 手机号并非数字，只是看起来像数字  
- 在应用的时候，会将手机号拆分成几个部分，而数字是不可被拆分的  

| 前3位                     | 4-7位            | 8-11位              |
| :-----------------------: | :--------------: | :-----------------: |
| 网络识别号 联通 移动 电信 | 地区编码(归属地) | 用户号号码 随机分配 |

:::

## JavaScript
### 关于js的误差
```js
console.log((0.1 + 0.7) * 10 == 8); //false
console.log((0.2 + 0.6) * 10 == 8); //true
```
:::tip 浮点数的精度问题
- 在计算机中因为浮点数存在精度问题，所以运算时会有一些误差。
- **误差是必然的,只是偶尔体现**
- 比如`1`在计算机存储时为`0.99999`..
:::

### 数组排序
```js
// 普通匿名函数
var arr = [1, 4, 5, 2, 3];

console.log(arr.sort(function (a, b) {
    return b - a;
}));
//箭头函数 简化
console.log(arr.sort((a, b) => b - a));
```
:::tip sort
- 使用sort()方法可以对数组进行排序
- **a-b** 为升序 即：1 2 3 4 5  
- **b-a** 为降序 即：5 4 3 2 1  
- 当数组为字符的时候，仅升序，即英文字母顺序
- 当数组为字符的时候，降序使用reverse()，即英文字母顺序
:::