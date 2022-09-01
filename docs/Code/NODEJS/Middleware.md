# 中间件 
middleware  
1. 简化和隔离基础设施与业务逻辑间的细节，让开发者更关心业务，提高开发效率。
2. express允许通过中间件来调用第三方库，在浏览器发起请求的时候，拦截内容，最终给路由提供服务。
3. 中间件本质上是一个函数。

## 内置中间件
在express 3.x版本之前有很多的内置中间件,但从express 4.x版本后,都剥离成单独的npm包,只留下了一个内置中间件。

| 名称               | 作用                           | 备注                             |
| ------------------ | ------------------------------ | -------------------------------- |
| express.static     | 静态资源托管                   | 向客户端输出指定目录下的静态资源 |
| express.urlencoded | 解析urlencoded格式的请求体数据 |                                  |
| express.json       | 解析json格式的请求体数据       |                                  |

## 应用级中间件
也可称为自定义中间件，是通过 `app.use()`或`app.get()`或`app.post()`绑定到app实例上的中间件。
```js:no-line-numbers
app.use(url,(req,res,next)=>{})
```
1. url 表示你要拦截的路由  
2. next 代表下一个路由或中间件  
3. 函数内容可以通过next()回调  

**`DEMO`** 应用级中间件
```js
//应用级别的全局中间件
app.use(function(req,res,next){
	console.log('我是全局中间件')
	next()
})

let jubu = function(req,res,next){
	console.log('我是局部中间件')
	next()
}
//应用级别的局部中间件
app.get('/user',jubu, (req, res) => {
	console.log('先经过局部中间件才打印我')
    //向客户端发送JSON对象
    res.send({ name: 'doraMiu', age: '20', gender: '女' })
})
```

## 路由级中间件
路由器是用来管理路由的，可以把功能模块下的所有相关路由挂载到路由器下，再把路由器注册在服务器中。用户通过url访问路由时，会先出发路由器，后再去触发相对的路由。

### **`DEMO`** **路由级中间件**  

目录结构：
- 文件夹
  - public
    - [reg.html](#reg)
  - routes
    - [product.js](#product)
    - [user.js](#user)
  - [app.js](#app)

#### app
引入user和product路由
```js
const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => console.log(`Server Started Port:${port}`));

app.use(express.urlencoded({
  extended: false
}));

app.use(express.static('public'));

// 引入路由
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')

// 使用路由器
// 为了区分路由器,添加路由器前缀,访问时需添加前缀
app.use('/user', userRouter);
app.use('/product', productRouter);
```

#### product
```js
// 引入包
const express = require('express');

// 创建路由器对象
const router = express.Router();

// 挂载路由到路由器下
router.get('/list', (req,res) => {
    res.send(`ProductList`);
});

//导出路由器对象
module.exports = router;
```
#### user
```js
// 用户路由器
const { Router } = require('express');
const express = require('express');

// 创建路由器对象
const router = express.Router();

const qs = require('querystring')

// 挂载路由到路由器下
router.get('/list', (req,res) => {
    res.send(`UserList`);
});


// 用户注册操作
router.post('/reg',(req,res)=>{
    res.send(`User:${req.body.uname}`);
});

//导出路由器对象
module.exports = router;
```

#### reg 
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>注册</title>
</head>

<body>
  <h2>这里是注册页面</h2>
  <form action="/user/reg" method="post">
  用户名：<input type="text" name="uname"><br>
  密码：<input type="password" name="upwd"><br>
  <br>
    <button>注册</button>
  </form>
</body>

</html>
```

## 第三方中间件
第三方中间件，需要使用npm包管理工具（或其他管理工具）下载。  
例如 **`compression`** 中间件，是一种提供节省带宽和加快网站速度简单有效的压缩方法。 它仅与现代浏览器兼容。
```js:no-line-numbers
npm i compression
```
:::tip
关于中间件的安装，可以参考:
[npm包管理工具](包管理工具.md)
:::
