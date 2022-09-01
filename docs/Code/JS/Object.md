# 对象
**Object** 的数据类型为**引用类型**，是属性和方法的结合，在Java语言中，**万物皆对象**  
## 规范
- Javarscript使用`对象字面量`或`构造函数`的方法`创建对象`
- 属性和属性值,用`:`分开
- 多组属性之间需要用`,`分开

## 创建
- 对象字面量
  `var obj = {};`
- 构造函数 
  `var obj = new Object();`

## 访问
访问不存在的属性会返回`undefined`
- 点 `.` 静态的
- 方括号`['属性名']` 中内容可以为动态的(遍历对象时可使用)

## 增加
给对象中不存在的属性赋值,即为增加
- `对象.新属性 = 值`

## 修改
给对象中已存在属性赋值从新赋值就是修改
- `对象.属性 = 值`

## 删除
- `delete 对象.属性`

`DEMO` 对象
```js
// 1. 创建
// 构造函数方式
var obj = new Object({
    name: '小宇'
});

// 字面量
var obj = {
    // 属性:属性值
    name: '小艺',
    age: 18,
    'isMarr': true
};
console.log(obj); // { name: '小艺', age: 18, isMarr: true }

// 2. 访问
// 对象.属性
console.log(obj.name); // 小艺
// 对象['属性']
console.log(obj['age']); // 18

// 3. 增加
obj.addr = '海淀区复兴路14号院68号楼';

// 4. 修改
obj.age = 19;

// 5. 删除
delete obj.isMarr;

console.log(obj); // { name: '小艺', age: 19, addr: '...楼' }
```

## 遍历 for...in
不能直接使用`obj.key`来取值,原因是如果是obj.key相当于obj.'key' 没有这个属性,所以会返回undefined

`DEMO` **遍历** **求当前对象中成绩总和**
```js
var obj = {
    cn: 150,
    ma: 140,
    en: 110
};

for (var key in obj) {
    // key其实就是属性名
    console.log(key);
    // console.log(obj.key);// obj.'key'没有这个属性 undefined
    // key每次遍历都会赋值不能的属性名
    console.log(obj[key]); //obj[key] ==> obj['cn']
}
// 求当前对象中成绩总和
var sum = 0;
for (const key in obj) {
    sum += obj[key];
}
console.log(sum);
```

`DEMO` **对象的增改**
```js
// 创建一个关于滑雪的对象 包含雪板的品牌 类型 价格 
var ski = {
    brand: 'NS',
    model: '单板',
    price: 6500
}
console.log(ski);

// 1. 2种方法打印雪板的品牌
console.log(ski.brand);
console.log(ski['brand']);

// 2. 年初大酬宾,雪板的价格打7折
ski.price *= 0.7;

// 3. 天气冷了给雪板加身衣服吧 保护套
ski.coat = '保护套';

// 4. 如果雪板类型时单板则修改为双板
if (ski.model == '单板') {
    ski.model = '双板';
}

// ski.model == '单板' ? ski.model = '双板' : '';

console.log(ski);
```
## 属性检测
检查对象中是否含有该属性

`DEMO` **属性检测**
```js
var obj = {
    cn: 150,
    ma: 140,
    en: 110
};
// 属性检测;

// 1. 利用访问不存在的对象属性会返回undefined
console.log(obj.cn == undefined ? '不存在该属性' : '存在该属性');
console.log(obj.cm == undefined ? '不存在该属性' : '存在该属性');

// 2. in 属性 in 对象
// 判断一个属性存不存在,如果存在返回true,不存在返回false
console.log('cn' in obj);
console.log('cm' in obj);

// 3. 利用API函数
// 判断一个属性存不存在,如果存在返回true,不存在返回false
console.log(obj.hasOwnProperty('cn'));
console.log(obj.hasOwnProperty('cm'));

// JavaScript的技术花活
if (obj.cn) {
    console.log('存在该属性');
} else {
    console.log('不存在该属性');
}
if (!obj.cm) {
    console.log('不存在该属性');
} else {
    console.log('存在该属性');
}
```
### 技术花活
- JS骂人不带脏字
`原理` 提取字符串里面的字母进行拼凑

- 扩展 [CNBLOGS相关介绍](https://www.cnblogs.com/cynthia-wuqian/p/9914492.html)
- 插件 zhuangbility  

:::tip zhuangbility的安装和使用
*安装zhuangbility*
```sh:no-line-numbers
npm i -g zhuangbility
```
*使用zhuangbility*
```sh:no-line-numbers
zhuangbility 'I LOVE CHINA'
```
:::

`DEMO` 利用JS侮辱
```js
console.log((!(~+[]) + {})[--[~+""][+[]] * [~+[]] + ~~!+[]] + ({} + [])[[~!+[]] * ~+[]]);
```
## 对象中的方法
对象的属性值可以是基础数据类型,也可以是方法或者对象或者是其他引用类型

`DEMO` 对象中的方法
```js
var obj = {
    name: '小艺',
    age: 20,
    // 对象中的方法
    say: function () {
        console.log('Are you thinking of me ?');
    },
    life: {
        like: '申哥',
        eat: '******',
    }
}
console.log(obj);
// 记住2个口诀 : 对象.属性  对象.方法
obj.say();

console.log(obj.life.eat);
```

`练习` 计算器
```js
// 声明计算器对象,包含2个数字属性和一个方法,此方法可以完成四则运算
// 调用示例: calc.jsq('*') 乘法

var calc = {
    a: 10,
    b: 2,
    jsq: function (f) {
        switch (f) {
            case '+':
                // 此时this指向的是calc对象
                console.log(this.a + this.b);
                break;
            case '-':
                console.log(this.a - this.b);
                break;
            case '*':
                console.log(this.a * this.b);
                break;
            case '/':
                console.log(this.a / this.b);
                break;
            default:
                console.log('符号非法');
                break;
        }
    }
}
calc.jsq('*');
```