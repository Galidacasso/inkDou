# **HTTP模块**
在express框架中已经优化了该模块，本身存在大量的底层操作和思想，提供了快捷的方法,用来创建HTTP的一些客户端和服务器端的应用。   
**客户端**：浏览器   
**服务器端**：提供数据和功能

## HTTP
HTTP是一种 `请求`←→`响应` 的协议,指定客户端给服务器端发送信息，服务器端返回信息。     
**请求**：由客户端发送用来出发一个服务器上的动作。  
**响应**：来自服务器的应答。（比如:服务器把天气数据返回给浏览器）  
### 示例
[itboy](http://t.weather.itboy.net/api/weather/city/101030100)    
天津：101030100   
**请求**：通过浏览器请一个城市天气的情况。  
**响应**：服务器把天气数据返回给浏览器。

## General
`Request URL`: 请求网址  
`Request Method`: 请求方法  
`Status Code`: HTTP状态码  

### HTTP状态码
| 代码  |      状态      |        解释        |
| :---: | :------------: | :----------------: |
|  200  |    请求成功    |                    |
|  3**  |
|  301  |   永久重定向   | 网址A被永久的指向B |
|  302  |   临时重定向   | 网址A被临时的指向B |
|  403  | 服务器拒绝执行 |      禁止访问      |
|  404  | 请求资源不存在 |     页面不存在     |
|  500  | 服务器代码错误 |                    |

### 请求对象 Request
缩写成req，会根据请求的内容而变化。

`path`: 请求地址  
`method`: 请求方法   
`Content-Type`: 请求数据内容的类型  


### 响应对象 Response
缩写成res。  
`Content-Type`: 响应数据内容的类型

## 模拟客户端浏览器行为
http模块可以模拟用户使用浏览器向服务器发起请求
```js
// 引入模块
const http = require('http');

// 固定写法
let url = 'http://t.weather.itboy.net/api/weather/city/101030100';

http.get(url, (res) => {
    // res是关于响应对象中的一大坨信息
    // 事件监听(固定的)
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });
});
```
## 创建服务器应用
http模块可以创建服务器应用，向客户端响应数据。  
### **搭建服务器（共3步）**
1.引入模块
```js:no-line-numbers
const http = require('http');
```
2.创建web服务器
```js:no-line-numbers
const app = http.createServer();
```
3.监听端口
```js:no-line-numbers
app.listen(8080, () => {
  console.log('服务器已启动');
});
```
### 事件的监听
通过服务器的搭建、事件的监听，可以检测从浏览器发来请求  
**事件监听**<Badge text="固定写法" />

```js:no-line-numbers
app.on('request',(req,res)=>{
  console.log('有请求从浏览器中飞过来~');

  // 设置响应内容
  res.write('')
  // 结束响应,否则拿不到服务器响应的数据
  res.end();
});
```

**`DEMO`** 创建web服务器
```js
// 引入模块
const http = require('http');

// 创建WEB服务器
const app = http.createServer();

// 监听端口
app.listen(8080, () => {
  console.log('服务器已启动');
});
// 测试地址127.0.0.1:8080 || localhost:8080
// 通过事件监听,监测是否有从浏览器发送来的请求
// 固定写法
app.on('request', (req, res) => {
  console.log('有请求从浏览器中传送过来');
  // 设置响应内容
  //   res.write('hello world')
  //  如果需要响应中文,需要设置响应流
  res.writeHead(200, 'ok', {
    'Content-Type': 'text/html;charset=utf-8'
  });
  res.write('hello world');
  // 结束响应,否则拿不到服务器响应的数据
  res.end();

});
```

:::danger 注意
修改了服务器端代码,必须重启服务器。
:::

## 简易服务器演示
### 目录结构
- 文件夹
  - app.js
  - list.html
### app.js
```js
// 引入模块
const http = require('http');
const fs = require('fs');

// 创建WEB服务器
const app = http.createServer();

// 监听端口
// 在自己的浏览器中输入地址访问测试: http://127.0.0.1:8080/
app.listen(8080, () => {
    console.log('服务器已经启动~');
});

// 通过事件监听,监测是否有从浏览器发送来的请求
// 固定的写法
app.on('request', (req, res) => {
    console.log('有请求流传输过来');
    // 如果想要响应中文,需要单独设置请求头
    res.writeHead(200, 'ok', {
        'Content-Type': 'text/html;charset=utf8'
    });
    // 能不能根据不同的请求返回不同的内容  ==> req请求对象
    console.log(req.url);
    // 如果请求的是首页,响应 "这里是首页"
    if (req.url == '/') {
        res.write('清明节也要');
        res.end();
        // 如果请求的是登录,响应 "这里是登录页"
    } else if (req.url == '/login') {
        res.write('这里是登录页');
        res.end();
        // 请求list返回一个list.html
    } else if (req.url == '/list') {
        // 响应html页面
        // res.write()可以接受string和buffer类型的数据
        let fileBuf = fs.readFileSync('list.html');
        res.write(fileBuf);
        res.end();
    } else {
        res.write('来到了没有申哥的荒原~~');
        res.end();
    }
});
```
### list.html
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
    <ul>
        <li>这里是列表</li>
        <li>这里是列表</li>
        <li>这里是列表</li>
    </ul>
</body>
</html>
```