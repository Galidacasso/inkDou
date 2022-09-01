# express框架
![express](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.pianshen.com%2Fimages%2F868%2F4bf2a0a7fa9956d093b489eae2205484.png&refer=http%3A%2F%2Fwww.pianshen.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886582&t=1fe7e2cc975ff6013516d7a797561a96)

[Express中文网](https://www.expressjs.com.cn/)

Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。使用 Express 可以快速地搭建一个完整功能的网站。  

**Express 框架核心特性**：
- 可以设置中间件来响应 HTTP 请求。
- 定义了路由表用于执行不同的 HTTP 请求动作。
- 可以通过向模板传递参数来动态渲染 HTML 页面。

**下载及安装express框架**
```
npm init -y
npm i express
```
[下载及安装express框架](/Code/NODEJS/包管理工具.md#示例-安装-express)

:::tip 框架概念
是可重复使用的设计构件，是开发应用的骨架，实现了一些基础功能的半成品，提供了常用工具的方法，开发人员可以基于框架基础，丰富内容满足各自的任务需求，提高开发效率，简化开发流程。
:::

## 路由
路由是一个比较广义和抽象的概念,路由的本质就是对应关系。
express中的路由是 URL到函数的映射关系。
浏览器向服务器发起请求，服务器根据url做出响应。

**例**：http://localhost:8080/`login`  
**即**：有一个`login`的方法

### 路由三部分
`路由` 由 `请求方法` + `路由路径` + `处理方法` 三部分组成

### 1.请求方法
| 方法  | 解释                                 |
| ----- | ------------------------------------ |
| .get  | 从浏览器输入url执行(回车)访问就是get |
| .post | 需要通过HTML表单发起                 |

### 2.路由路径
路由请求的路径是多样的，请求不同的路径，可以触发不同的路由
```js:no-line-numbers
例：'/index' app.get('首页')
```

### 3.处理方法
处理方法及路由执行的函数，有固定的写法：
```js:no-line-numbers
  (req,res)=>{代码块....} 
```


#### **`DEMO`** app.js
```js
// 引入包
const express = require('express');

// 创建服务器
const app = express();

// 监听端口
app.listen(8080, () => {
  console.log('服务器已运行');
});

// 响应诶容到浏览器
// 请求路由方法 + 路由路径 + 路由处理方法
app.get('/index', (req, res) => {
  // 响应内容
  res.send('首页');
});

app.get('/login', (req, res) => {
  res.send('登入');
});

app.get('/porn', (req, res) => {
  res.send('您的请求已被墙');
});

app.get('/admin', (req, res) => {
  res.send('后台登入页');
});

app.get('/list', (req, res) => {
  res.sendFile(__dirname +'/list.html');
});

// get / 跳转到index
app.get('/', (req, res) => {
  res.redirect('/index');
});

app.get('/news', (req, res) => {
  res.sendFile(__dirname +'/news.html');
});

app.get('/baidu', (req, res) => {
  res.redirect('http://www.baidu.com');
});
```
#### **`DEMO`** list
```html:{12-16}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul>
        <li>首页</li>
        <li>登入</li>
        <li>列表</li>
    </ul>
</body>

</html>
```
#### **`DEMO`** news
```html:{12-17}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul>
        <li>最新</li>
        <li>热点</li>
        <li>抗疫</li>
        <li>本地</li>
    </ul>
</body>

</html>
```
#### **`DEMO`** reg 
[对应：POST请求](#post请求)
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
  <h2>这里是注册页面</h2>
  <!--
    第一阶段 只能通过表单提单的方式进行数据传递,传输
    表单的作用就是用来提交用户输入信息
    action 提交的地址 将数据提交到服务器端的路由名称
    method 是提交使用的方法 get post
  -->
  <form action="/myReg" method="post">
  <!--
      input可视化表单控件 用户输入信息的地方
      text 文本框
      password 密码框
      前端input表单中的name的属性，可以用来区分传递参数来自哪个输入框
      前端input表单中的name的属性就是express路由中接收参数信息的依据（请求对象）
    -->
  用户名：<input type="text" name="uname"><br>
  密码：<input type="password" name="upwd"><br>
  <br>
    <button>注册</button>
  </form>
</body>
</html>

```

## 响应对象 res

| 对象      | 内容             | 备注           |
| --------- | ---------------- | -------------- |
| .send     | 响应内容至浏览器 |                |
| .sendFile | 响应文件至浏览器 | 必须是绝对路径 |
| .redirect | 重定向           |                |

## 请求对象 req
| 对象    | 内容                     |
| ------- | ------------------------ |
| .URl    | 获取当前请求的url        |
| .query  | 获取查询字符串传递的参数 |
| .params | 获取路由传参传递的参数   |

### 传参
**`DEMO`** **查询字符串传参**及**路由传参**
```js
// 引入包
const express = require('express');

// 创建服务器
const app = express();

// 监听端口
app.listen(8080, () => {
  console.log('服务器已运行');
});

// 查询字符串传参 如百度搜索结果的地址
// http://127.0.0.1:8080/prd?name=iPhone13&price=6777
app.get('/prd',(req,res)=>{
  // 获取擦讯字符串传递的参数
  console.log(req.query.price);
  res.send(`名称：${req.query.name} 价格：￥${req.query.price}`)
});
// http://localhost:8080/av?name=唯井真寻&dvdid=star-927&date=2018.09.17
app.get('/av',(req,res)=>{
  console.log(req.query.price);
  res.send(`女优：${req.query.name} 番号：${req.query.dvdid} 发行日期：${req.query.date}`)
});


// 路由传参
// 单参数
// http://localhost:8080/article/1086
app.get('/article/:id',(req,res)=>{
  // :id是形参    ↑   任何名都可以，尽量要符合传递内容
  console.log(req.params);
  res.send(`当前查看文章的id为：${req.params.id}`)
});

// 多参数
// http://localhost:8080/topic/1086/哈根
app.get('/topic/:id/:name',(req,res)=>{
  // :id是形参    ↑   任何名都可以，尽量要符合传递内容
  console.log(req.params);
  res.send(`id为：${req.params.id} 名称为：${req.params.name}`)
});
```
### POST请求
结合路由部分的`reg.html`  
[reg.html](#demo-reg)  
**`DEMO`** **POST请求**
```js
// 引入包
const express = require('express');

// 创建服务器
const app = express();

// 监听端口
app.listen(8080, () => {
  console.log('服务器已运行');
});

// POST请求(这里的post信息的处理使用的是原生的事件监听,
// 也需要querystring查询字符串模块做配合)
const qs = require('querystring')
// get /reg 响应reg.html页面
app.get('/reg', (req, res) => {
  res.sendFile(__dirname + '/reg.html');
});

// 表单在浏览器中呈现
// 点击提交按钮，发送数据到路由
// 路由解析POST数据，响应内容到浏览器中
app.post('/myReg', (req, res) => {
    req.on('data', (chunk) => {
    res.send(`${qs.parse(chunk.toString()).uname}欢迎`);
  });
});

```

### 练习1 路由传参
通过路由传参，完成购物车中 **商品名称** 和**价格**的传递  
`get` `/car` `/三星w22/10086`  

http://localhost:8080/car/三星w22/10086

```js
app.get('/car/:name/:price',(req,res)=>{
  res.send(`品名：${req.params.name} 价格：${req.params.price}`)
});
```

### 练习2 POST请求
通过`res.send()`实现简易的登入与注册  
文件目录结构：
- 文件夹
  - public
    - login.html
    - reg.html
  - app.js

app.js
```js
// 引入包
const express = require('express');

// 创建应用
const app = express();

// 监听端口
app.listen(8080, () => {
  console.log('SERVER STARTED');
});
// 使用静态资源托管 html js css img media
app.use(express.static('public'));

// post数据解析简化
app.use(express.urlencoded({
  extended: false
}));

app.post('/myReg', (req, res) => {
  // req.body是用来获取post请求数据的
  console.log(req.body);
  res.send(`"${req.body.uname}"已完成注册`)
});

app.post('/login', (req, res) => {
  // req.body是用来获取post请求数据的
  console.log(req.body);
  res.send(`"${req.body.uname}"已登入`)
});

// 应用级(自定义)中间件
// 请求路由之前加一个拦截,验证操作:只有root用户进入后台
app.use('/admin', (req, res, next) => {
  console.log('拦截了admin路由的请求');
  // 做一个权限的验证
  if(req.query.uname!=='root'){
    res.send('禁止访问')
  }else{
    // 执行路由访问
    next(
    
    );
  }
});
app.get('/admin', (req, res) => {
  res.send('后台');
});
```

login.html
```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登入</title>
</head>

<body>
  <h2>登入</h2>
  <form action="/login" method="post">
  用户名：<input type="text" name="uname"><br>
  密码：<input type="password" name="upwd"><br>
  <br>
    <button>Login</button>
  </form>
</body>

</html>
```

reg.html
```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>注册</title>
</head>

<body>
  <h2>登入</h2>
  <form action="/myReg" method="post">
  用户名：<input type="text" name="uname"><br>
  密码：<input type="password" name="upwd"><br>
  <br>
    <button>注册</button>
  </form>
</body>

</html>
```

