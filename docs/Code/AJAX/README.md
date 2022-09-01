# AJAX

## HTTP技术通识
<table>
    <tr>
        <td colspan="4" align="center">URL结构</td>
        <td>协议+主机名称+目录结构+文件名+[锚点]</td>
    </tr>
    <tr>
        <td colspan="4" align="center">HTTP协议</td>
        <td>超文本传输协议 规范了数据是如何打包和传递的,是万维网的数据通信基础</td>
    </tr>
    <tr>
        <td rowspan="25" align="center" style="writing-mode: tb-rl;">请求和响应</td>
        <td rowspan="12" align="center" style="writing-mode: tb-rl;">请求 Request Message</td>
        <td colspan="3">客户端发送至服务器端的请求消息</td>
    </tr>
    <tr>
        <td rowspan="5" align="center" style="writing-mode: tb-rl;">请求起始行</td>
        <td rowspan="3">请求方法</td>
        <td>get post put delete option(预请求) 通过Restfu规范做了原生请求的统一</td>
    </tr>
    <tr>
        <td>get/delete 没有请求体</td>
    </tr>
    <tr>
        <td>post/put 有请求体，formdata</td>
    </tr>
    <tr>
        <td>HTTP版本号</td>
        <td>99.99% 均为 1.1</td>
    </tr>
    <tr>
        <td>请求URL</td>
        <td>根据请求内容发生变化</td>
    </tr>
    <tr>
        <td rowspan="5" align="center" style="writing-mode: tb-rl;">请求头信息</td>
        <td>Host</td>
        <td>服务器查找主机端口</td>
    </tr>
    <tr>
        <td>Accept-Encoding</td>
        <td>可接受的压缩格式</td>
    </tr>
    <tr>
        <td>Accept-Language</td>
        <td>可接受的自然语言</td>
    </tr>
    <tr>
        <td>Connection: keep-alive</td>
        <td>持久链接，重用TCP链接发送和接受多个请求，是客户端和服务器端的约定</td>
    </tr>
    <tr>
        <td>User-Agent</td>
        <td>用户代理信息</td>
    </tr>
    <tr>
        <td align="center">请求<br>主体</td>
        <td>formdata</td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="13" style="writing-mode: tb-rl;">响应 Response Message</td>
        <td colspan="3">服务器端发送给客户端的响应消息</td>
    </tr>
    <tr>
        <td rowspan="3" align="center" style="writing-mode: tb-rl;">响应起始行</td>
        <td>HTTP版本号</td>
        <td>99.99% 均为 1.1</td>
    </tr>
    <tr>
        <td>响应的状态码</td>
        <td></td>
    </tr>
    <tr>
        <td>原因短句</td>
        <td>对状态码的解释</td>
    </tr>
    <tr>
        <td rowspan="8" align="center" style="writing-mode: tb-rl;">响应头信息</td>
        <td>Access-Control-Allow-Origin</td>
        <td>跨域有关</td>
    </tr>
    <tr>
        <td rowspan="7">Content-Type</td>
        <td>响应主体的数据类型(非常多)</td>
    </tr>
    <tr>
        <td>text/html &nbsp;响应内容是html </td>
    </tr>
    <tr>
        <td>text/css &nbsp; 响应内容是css</td>
    </tr>
    <tr>
        <td>application/javascript &nbsp;响应内容是js</td>
    </tr>
    <tr>
        <td>image/* &nbsp; &nbsp;响应内容是图片 </td>
    </tr>
    <tr>
        <td>application/json &nbsp;响应内容是json字符串</td>
    </tr>
    <tr>
        <td>...</td>
    </tr>
    <tr>
        <td >响应主体</td>
        <td colspan="2"></td>
    </tr>
</table>

## AJAX简述
即无表单的请求。
1. **A**synchronous **J**avaScript **A**nd **X**ML 是异步的Javascript和XML
2. 是一种标准的**新方法**,并非一门新语言
3. **特点**：与服务器交互更新页面中的部分内容,而不需要刷新整个页面
4. AJAX请求不需要表单(**from**)

### WHAT AJAX是什么
即JavaScript提供的异步对象,通过异步对象完成数据的交互

### WHY 为什么学习/使用 AJAX 
- 局部刷新网页数据的交互技术
- 通过异步方式完成交互
- 可在同页面执行多个工作/程序/功能

### WHEN 什么时候使用AJAX
需要只更新部分数据,或者需要同时执行多个任务时

### HOW 如何使用AJAX
1. 创建异步对象
2. 绑定监听(原顺序为4),从监听事件中获得结果数据
3. 创建请求,打开与服务器之间的链接
4. 发送请求

## 核心技术
1. 使用 **DOM模型交互** 和 **动态显示**
2. 使用 **XMLHttpRequest** 和服务器进行 **异步通信**
3. **AJAX的核心** 就是 **XMLHttpRequest对象** ,不同的浏览器方法可能存在不同(例如ie8以下版本)
4. 使用JavaScript来绑定和调用

## 工作流程
1. 有HTML元素触发事件,创建XHR对象
2. 通过XHR对象向服务器发送异步的HTTP请求
3. 服务器收到请求并处理,把结果返回给XHR对象
4. XHR对象接收服务器响应的结果,通过JS来刷新页面的元素,响应的数据类型一般为JSON或XML

## 状态值
即AJAX所经历的几种状态,在AJAX运行中,是经历多种状态完成的

|  值   |   名称   | 说明                              |
| :---: | :------: | --------------------------------- |
|   0   | 未初始化 | 尚未调用send方法                  |
|   1   |   载入   | 已调用send方法,正发送请求         |
|   2   | 载入完成 | send方法已执行完毕                |
|   3   |   交互   | 正在解析响应内容                  |
|   4   |   完成   | 响应内容解析完成,可以在客户端调用 |

## 请求4步
- **`第1步`** 创建XHR异步对象
  - 常见浏览器: `var xhr = new XMLHttpRequest();`
  - ie(8以下)浏览器: ActiveX对象 `var xhr = new ActiveXObject(Microsoft.XMLHTTP);`
- **`第2步`** 创建请求
  - `xhr.open`(`请求方法`,`请求url(路由/接口/地址)`,`是否异步`);`
  - `xhr.open`(`'get'`,`'/user'`,`true`);`
  - 如果`是否异步`为true,则需要一个回调函数,即`xhr.onreadystatechange`,该属性返回一个匿名函数`xhr.onreadystatechange = () => {}`
- **`第4步`** 接收响应数据(实际开发中会将此步提前)
- **`第3步`** 发送请求
  - `xhr.send`

`DEMO` AJAX4步 响应学子商城user列表,需要express框架支持  
[学子商城数据库](/Code/PROJECT/学子商城.md#数据库文件)

文件目录：  
xy
- public
  - ajax.html
- app.js

```html
<h1>此处是ajax页面</h1>
<button onclick="getUser()">点击触发ajax</button>
<div id="d1"></div>
<script>
    function getUser() {
        console.log('ajax被触发了~');
        // ajax四步走
        // 1. 创建XHR异步对象
        var xhr = new XMLHttpRequest();
        console.log(xhr);
        // 2. 创建请求
        // xhr.open(请求方法,请求url,是否异步)
        xhr.open('get', '/user', true);
        // 3. 发送请求
        xhr.send();
        // 4. 接受响应数据
        // 当readySate属性发生变化时就调用该函数
        xhr.onreadystatechange = () => {
            // 响应信息保存在xhr.responseText
            console.log(xhr.responseText);
        }
    }
</script>
```
```js
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8080;

app.listen(port, () => console.log(`服务器已启动,监听端口: ${port}!`));

// 创建数据库连接池
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'xz',
    connectionLimit: 15
});

// 设置静态资源托管
app.use(express.static('public'));

// 设置请求体解析
app.use(express.urlencoded({
    extended: false
}));

// 以下内容全部遵循RestFul接口规范 
app.get('/user', (req, res) => {
    // 执行sql
    let sql = 'SELECT * FROM xz_user';
    pool.query(sql, (err, result) => {
        // 如果有错误,响应错误
        if (err) {
            res.send({
                status: 500,
                msg: 'server error'
            });

            // 终止代码继续执行
            return;
        }

        // 没有错误响应内容
        if (result.length > 0) {
            res.send({
                status: 200,
                msg: 'ok',
                data: result
            });
        } else {
            res.send({
                status: 400,
                msg: '未查到数据信息'
            });
        }
    });
});
```

## 优缺点
### 优点
1. 无刷新更新数据
2. 异步通信
3. 前后端负载平衡
4. 基于标准的广泛使用
...

### 缺点
1. 网络延迟
2. 动态数据下,浏览器无法返回上步数据
... 