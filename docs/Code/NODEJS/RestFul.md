# Restful
1. REST(表述性状态传递)，是一种软件框架风格，降低开发的复杂性。
2. Restful 一套结构清晰，符合标准，易于理解，扩展方便的结构风格。  
## 设计特点
### 原则条件
在服务器端，把功能分配给各种资源，向客户端公开，所有资源都共享接口。

### 版本要求
例如:   
[IT灯塔 V1](https://www.itdengta.com/api/v1/)  https://www.itdengta.com/api/v1/   
[IT灯塔 V2](https://www.itdengta.com/api/v2/)  https://www.itdengta.com/api/v2/

### 路径
在REST风格中，每个url代表一种资源，在地址中只能使用名词，例如:   
https:/www.itdengta.com/api/v1/`user`/ <Badge text="符合规范" />   
https:/www.itdengta.com/api/v1/`getuser`/ <Badge type="danger" text="不符合规范" />     

### 标准HTTP方法
|     方法     | 对应SQL方法  | 解释               | 备注            |
| :----------: | :----------: | ------------------ | --------------- |
|  **`GET`**   | **`SELECT`** | 从服务器获取资源   |
|  **`POST`**  | **`INSERT`** | 向服务器提交资源   |
|  **`PUT`**   | **`UPDATE`** | 更新服务器资源     | 需要ApiPost调试 |
| **`DELETE`** | **`DELETE`** | 从服务器上删除资源 | 需要ApiPost调试 |

### 状态码
状态码为自定义，不必严格遵循，但应尽量尽量遵循HTTP的状态码。   
**例如**：要求用户名必填，但没填。  
应当返回: **`{ code:400, msg:'用户名不能为空' }`** 
                                              
### 错误处理
当出现错误时候，应该返回错误信息  

### 返回结果
针对不同的操作返回不同的内容   

### 过滤设计
如一次性返回内容数量较多，API需要进行参数过滤(分页)  

## ApiPost
由于浏览器无法调试 `PUT` 和 `DELETE` 方法的接口，故使用API软件进行调试。  
[Apipost下载](https://www.apipost.cn/)

## Restful express模板
模块：`express` `mysql` `body-parser`    
配套数据库：[prd](Mysql模块.md#配套数据)
- 目录结构
  - public
    - [add.html(form)](#add-html)
  - [app.js](#app-js)

### app\.js
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
    database: 'prd',
    connectionLimit: 15
});

// 设置静态资源托管
app.use(express.static('public'));

// 设置请求体解析
app.use(express.urlencoded({
    extended: false
}));

// 以下内容全部遵循RestFul接口规范 
// 1. 获取全部商品的数据 get /v1/prds 
app.get('/v1/prds', (req, res) => {
    // 执行sql
    let sql = 'SELECT * FROM product';
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

// 2. 检索商品的数据(路由传参) get /v1/prds/:id
app.get('/v1/prds/:id', (req, res) => {
    // 获取数据
    let obj = req.params;
    // 执行sql ? 占位符 防止sql注入
    let sql = 'SELECT * FROM product WHERE id = ?';
    pool.query(sql, [obj.id], (err, result) => {
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

// 3. 新增商品(HTML表单传参==>静态资源托管) post /v1/addPrds
app.post('/v1/addPrds', (req, res) => {
    // 获取数据
    let obj = req.body;

    // 执行sql
    let sql = 'INSERT INTO product SET ?';

    pool.query(sql, [obj], (err, result) => {
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
        // 插入操作返回的是受影响的行数
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                msg: '插入成功'
            });
        } else {
            res.send({
                status: 400,
                msg: '插入失败'
            });
        }
    });
});

// 4. 更新商品(路由传参) put /v1/updatePrds
// apipost测试: http://127.0.0.1:8080/v1/updatePrds/7/apipost/傻*一样的apipost/999
// app.put('/v1/updatePrds/:id/:pname/:title/:price', (req, res) => {
// apipost测试: http://127.0.0.1:8080/v1/updatePrds/7&桐桐&上夜班的桐桐&888
app.put('/v1/updatePrds/:id&:pname&:title&:price', (req, res) => {
    // 获取数据
    let obj = req.params;
    console.log(obj);
    // 执行sql
    let sql = 'UPDATE product SET ? WHERE id = ?';
    pool.query(sql, [obj, obj.id], (err, result) => {
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
        // 修改操作返回的是受影响的行数
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                msg: '更新成功'
            });
        } else {
            res.send({
                status: 400,
                msg: '更新失败'
            });
        }
    });
});

// 5. 删除商品(路由传参) delete /v1/deletePrds
// apipost测试: http://127.0.0.1:8080/v1/deletePrds/18
app.delete('/v1/deletePrds/:id', (req, res) => {
    // 获取数据
    let obj = req.params;
    // 执行sql
    let sql = 'DELETE FROM product WHERE id = ?';
    pool.query(sql, [obj.id], (err, result) => {
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
        // 删除操作返回的是受影响的行数
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                msg: '删除成功'
            });
        } else {
            res.send({
                status: 400,
                msg: '删除失败'
            });
        }
    });
});
```

### add\.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>添加商品</title>
</head>

<body>
    <h1>添加商品</h1>
    <form action="/v1/addPrds" method="post" enctype="application/x-www-form-urlencoded">
        商品名称: <input type="text" name="pname"><br>
        商品标题: <input type="text" name="title"><br>
        商品价格: <input type="text" name="price"><br>
        <button>添加</button>
    </form>
</body>

</html>
```