# 函数
- 函数`function`，也被称为`方法`，是一段预先定义好的而且可以被重复利用的代码段。
- `函数体`中可以包含多条执行语句，一次定义多次调用。

## 无参数的函数
1. 函数的定义与声明
   - 使用function关键字来声明一个函数，大小写敏感的，不能使用关键字
   - `语法`：function `函数名`(){`函数体`(`语句`...)}

2. 函数的调用
   - 函数只有被调用后才能生效
   - `调用方法`：`函数名`();

3. 优缺点
   - `优点`: 一次定义多次调用
   - `不足`: 功能单一
  
**封装一个函数 计算1加100的和** <Badge text="演示" />  
```js
function add1() {
    console.log(1 + 100);
}
add1();
// 对上方的函数分析一波
// 优点: 一次定义多次调用
// 不足:功能单一
// 需求: 函数可以计算1加任意数(变量)的和
// 解决: 让函数带有变量(参数)
```


## 有参数的函数
**`形参`**: 函数定义时，括号内的参数叫做"`形式参数`"(形参) ，其实是变量，名称任意  
**`实参`**: 函数调用时，括号内的内容叫做"`实际参数`"(实参) ，传递`形参`的值

1. 函数 定义与声明
   - 使用function关键字来声明一个函数，大小写敏感的，不能使用关键字
   - function `函数名`(`形参`){`函数体`(`语句`...)}
2. 调用
   - `函数名`(`实参`);
   - 函数中`形参`接受参数的顺序和`调用`传递实参的顺序是一一对应的

**有参数函数** <Badge text="演示" />
```js
function add(b, a) {
    console.log('a:', a); 
    console.log('b:', b);
    console.log(a + b);
}
add(1, 2);   // a:2   b:1    3
add(10, 20); // a:20  b:10   30

add(1); //NaN  形参数目比实参多,会有形参得不到值,undefined
add(10, 20, 50); // 形参数目比实参少,虽然从现在的程序来看,没问题正常运行,但是在实际开发中要禁止
```

## 带有返回值的函数
`返回值`是函数调用后产生的结果,需要这个值,则可以使用`return`返回
 - `return` 语句会终止函数的执行,并且返回一个指定的值
 - `return` 后方代码不执行

**带有返回值的函数** <Badge text="演示" /> 
```js
// 带有返回值的函数
function add(a, b) {
    // 返回值
    return a + b;
   console.log(a + b); //  return下方代码不执行
}
// 可以将add函数产生的返回值赋值给一个变量
var result = add(1, 2);
console.log(result);

// 假设: 需求就是将add函数返回的值和1 作加法运算
console.log(result + 1);
```

## 作用域和提升
**作用域** 函数和变量可以访问的范围就是作用域
- `全局作用域` 无论是函数内还是函数外,都可以访问
- `局部作用域` 只能在局部内使用(函数内) 函数外访问会报错

### 变量的作用域
- 全局变量
  - 在函数外用var声明的变量是全局的
  - `隐式变量` 不使用关键词声明的变量
    - 例如：a = 1
    - 在严格模式下会报错
- 局部变量
  - 在函数内使用`var`声明的变量是局部的

**变量的作用域** <Badge text="演示" />

```js
// 函数外使用var声明变量
var a = 1;

// 函数外不是使用关键字声明变量
// 这种写法要禁止
c = 3;

function fun() {
    // 函数内使用var声明变量
    var b = 2;

    console.log('函数内打印a:', a);
    console.log('函数内打印b:', b);
    console.log('函数内打印c:', c);
}
fun();

console.log('函数外打印a:', a);
console.log('函数外打印c:', c);
console.log('函数外打印b:', b);//报错:  b is not defined(未定义) 因为变量b是局部的
```
### 函数的作用域
- 全局函数:
函数外使用function关键字声明的函数是全局的

- 局部函数:
函数内使用function关键字声明的函数是局部的

**函数的作用域** <Badge text="演示" />
```js
// 函数外使用function关键字声明函数
function f1() {
    console.log(1);
}

function f2() {
    console.log(2);
    // 函数内使用function关键字声明函数
    function f3() {
        console.log(3);
    }
    // 函数内调用f1
    f1();
    // 函数内调用f3
    f3();
}
f1();
f2();
f3();// 报错 f3 is not defined 
```
### 提升
**提升**是一种行为,在执行js代码之前,会先执行`预解析`,`预解析`会解析代码中所有的`声明`,并且使用适合的`作用域`将它们关联起来,`变量`和`函数`的声明会提升到与其对应的作用域的最顶端

#### 变量的提升  
var a = 1 ; 可拆分为3个阶段
- 声明阶段 在内存中开辟空间存储变量 var a
- 初始化赋值阶段 给变量初始化赋值为 undefined  a = undefined
- 真实赋值阶段 a = 1
变量的提升,提升的是声明及初始化赋值阶段,并不会提升真实赋值阶段

**变量的提升** <Badge text="演示" />
```js
console.log(a); // undefined
console.log(b); // b is not defined
var a = 1;
```
#### 函数的提升
使用function关键字创建的函数会被提升,函数的所有阶段全都被提升了
使用函数表达式创建的函数不会被提升

**函数的提升** <Badge text="演示" />  
```js
f1(); // 我是f1
f2(); // f3 is not a function

// 使用function关键字创建的函数会被提升,函数的所有阶段全都被提升了
function f1() {console.log('我是f1');}

// 函数的另外一种写法 函数表达式 没有提升
var f2 = function () { console.log('我是23');}
// f2();
```

### 函数的递归  <Badge text="了解即可"  type="warning" vertical="middle" />
函数内部调用自身
- 递归中每一次递归都会从头开始运行,在递归中使用`return` 可以终止函数体
- 递归的不断调用就是前进的过程,使用`增量`及`终止条件`配合,就可以让递归在恰当的时候停止

**函数的递归** <Badge text="演示" />  

```html{12-21}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>函数的递归</title>
</head>

<body>
    <script>
        // 需求: 当前的函数执行3次之后停止执行
      var total = 10;
      var number = square(5);
      alert(total);
         function square(n){
            total = n*n;
            return total;
         }
    </script>
</body>
</html>
```

### 匿名函数
没有名字的函数,解决全局变量污染的问题  
全局`变量污染`,根源在于`变量名称`的`冲突`,虽然可以使用`函数内`声明的`局部变量`解决,但函数本身也有名字,依然会污染,故使用`匿名函数`来解决污染,并通过`匿名函数自调用`,解决`函数调用`问题,这种匿名`函数的自调用`又被称为`立即调用函数表达式`,即在`定义时立即执行`  

`问题`:如何解决变量污染？
`方案`:把全局变量放入函数里(函数内的变量是局部的)   
-->`新问题`:函数也有名字,有名字就会有污染  
-->`新方案`:让函数没有名字,匿名函数  
---->`新问题`:没有名字如何调用?  
---->`新方案`:匿名函数的自调用又被称为立即调用函数表达式(在定义时立即执行)  

**匿名函数的声明及调用** <Badge text="演示" />  
```js
var add = function () {
    console.log('我其实是匿名函数');
}

// 第二种写法(实际开发中会优化一下(企业开发中使用方法))
(function (a, b) {
    console.log(a + b);
})(1, 2);
```



### 回调函数
把匿名函数用实参的形式传递(非匿名函数调用匿名函数)
某些API函数需要在调用时先传递一个函数,在恰当时调用完成目标任务,即为回调函数

- **生活实例**
小刚去商店购物,但所购物品没货了,小刚留了电话,货到后,商店电话通知到货,小刚取到了货


**把匿名函数用实参的形式传递** <Badge text="演示" /> 

```js
// 非匿名函数fun
function fun(a) {
    console.log(a() + 100);
}
//fun(100); // 函数内部相当于  var a = 100; 100 + 100 = 200

// 函数的参数也可以是匿名函数
fun(function () { return 666});

// fun函数的内部相当于 var  a = function () { return 666} 保存的是一个!!函数!!
// 想要执行函数获取内容, 必须调用函数
```


<Badge text="演示" />
创建一个非匿名函数,调用时传递2个匿名函数作为参数  

```js
// 每一个匿名函数都会返回一个数字,计算这2个数字的和
function getSum(num1, num2) {
    console.log(num1() + num2());
}
getSum(function () {
    return 1
}, function () {
    return 2
});
```

**猜数字游戏** <Badge text="练习" />   
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        // 猜数字游戏
        // 用户在前端输入框中输入数字,判断后提示猜大了还是猜小了,一直到猜对为止
        // 猜对后提示 恭喜解锁猜数字大神成就
        // 声明一个变量保存要猜的数字
        var x = 1000;
        var num = Math.ceil(Math.random()*x);
        // 我们不知道用户猜多少次才会猜中,所以我们需要弹窗次数变成无限次,当用户猜对数字之后才停止弹窗(死循环)
        while (true) {
            // 显示输入框
            var str = prompt('请输入一个数字');
            if (str == num) {
                alert('猜对了,开始猜下一个数字');
                break;
            } else if (str > num) {
                alert('猜大了');
            } else if (str < num) {
                alert('猜小了');
            }
        }
    </script>
</body>

</html>
```