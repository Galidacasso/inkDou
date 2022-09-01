# Mysql模块
在Node.js下操作mysql数据库的模块。
```js:no-line-numbers
npm i mysql
```
:::tip
关于数据库的操作，可以参考：
[MySql](../DATA/README.md)
:::

## 连接池
Mysql连接池是一种池化技术，池化技术指的是提前准备一些资源，在需要时可以重复使用这些预先准备的资源。  
建立Mysql连接池  
```js
let pool = mysql.createPool({
    host: '127.0.0.1',    // 主机地址
    port: 3306,    // 端口号
    user: 'root',    // 用户名
    password: '',    // 密码
    database: 'prd',    // 数据库
    connectionLimit: 15    // 连接池数量
});
```
## 操作（含建立流程）
即数据库的增删改查，代码参考：
```js:no-line-numbers
pool.query(sql,[数据信息],(err,result)=>{ });
```
- **`增`** **`删`** **`改`** 返回的是数据表中`受影响的行数`，可以通过`result.affectRows`，对结果进行判断。
- **`查`** 返回的是`数组`，可以通过`result.length`，对结果进行判断。
  - 如果没有查询到，返回的是`空数组`，因此`result.length = 0`





**`DEMO`** Mysql模块操作 增删改查


### 1. 建立express服务器
```js:no-line-numbers
const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => console.log(`服务器已经启动,监听的端口是:${port}!`));
```
### 2. 托管静态资源
```js:no-line-numbers
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));
```
:::tip
`express.urlencoded` 是用于解析 `URL-encoded` 格式请求体数据的。
- `extended`设置为`false`，对`URL-encoded`的数据的解析采用`querystring`库；
- `extended`设置为`true`，采用`querystring`库，并允许将富对象和数组编码为url编码格式，允许使用url编码的json体验。

**`DEMO`** 
当`extended`为`false`时,键值对中的值就为'String'或'Array'形式，  
`bodyParser.urlencoded({extended:false})`的结果为
```js:no-line-numbers
{
  'movie[_id]':'undefined',
  'movie[title]':'机械战警',
  'movie[img]':'(https://r3.ykimg.com/05160000530EEB63675839160D0B79D5)'
}
```

当`extended`为`true`时,则可为任何数据类型，  
`bodyParser.urlencoded({extended:true})`的结果为
```js:no-line-numbers
{
  movie:{
    _id:'undefined',
    title:'机械战警',
    img:'(https://r3.ykimg.com/05160000530EEB63675839160D0B79D5)'
  }
}
```
:::

### 3. 引入mysql模块
```js:no-line-numbers
const mysql = require('mysql');
// 创建mysql连接池的操作(固定写法)
// mysql.createConnection
let pool = mysql.createPool({
    // 主机地址
    host: '127.0.0.1',
    // 端口号
    port: 3306,
    // 用户名
    user: 'root',
    // 密码
    password: '',
    // 数据库
    database: 'prd',
    // 连接池数量
    connectionLimit: 15
});
```
#### 配套数据
```sql
SET NAMES UTF8;

DROP DATABASE IF EXISTS `prd`;
CREATE DATABASE `prd` DEFAULT CHARACTER SET UTF8;
USE `prd`;

-- 创建商品表
CREATE TABLE `product`(
    `id` INT KEY AUTO_INCREMENT,
    `pname` VARCHAR(40),
    `title` VARCHAR(40),
    `price` VARCHAR(40)
)DEFAULT CHARACTER SET UTF8;

INSERT INTO `product` VALUES(NULL,'三星W2022','三星 SAMSUNG 心系天下W22 5G 折叠屏 骁龙888 5G手机 16＋512GB雅瓷黑',23999);
INSERT INTO `product` VALUES(NULL,'小米11','小米11 5G 骁龙888 2K AMOLED四曲面柔性屏 游戏手机 8G+128GB 白色',3799);
INSERT INTO `product` VALUES(NULL,'vivo','vivo X60 5G手机 5nm旗舰芯片蔡司光学镜头vivox60手机 微光 8GB+256GB',2799);
INSERT INTO `product` VALUES(NULL,'华为','华为 Mate40 5G 手机【支持鸿蒙HarmonyOs】 亮黑色 mate40E(8+128G)',4959);
```


### 查
```js:no-line-numbers
// 1. 查询所有的商品信息 get /list
app.get('/list', (req, res) => {
    // 执行sql查询所有用户信息
    let sql = 'SELECT * FROM product';
    pool.query(sql, (err, result) => {
        if (err) throw err;
        // 查询返回的是数组
        res.send(result);
    });
});

// 2. 检索指定的商品信息 id=1 get /list/1
app.get('/list/:id', (req, res) => {
    // 获取路由传递的参数
    let obj = req.params;
    console.log(obj);

    let sql = 'SELECT * FROM product WHERE id = ?';
    pool.query(sql, [obj.id], (err, result) => {
        if (err) throw err;
        console.log(result);
        // 如果数组的长度大于0说明不是空数组
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send('查询的内容不存在');
        }
    });
});
```
#### SQL注入
传递参数可能会造成mysql的二义性，即传递一个参数，但是mysql当作关键字处理了。  
`SELECT * FROM product WHERE id = 1  `

**例如**: SELECT * FROM product WHERE `id = 1 or 1 = 1`  
`id = 1 or 1 = 1 ` 一个判断 1=1 就是真ture 一直则全真    
这样的传递不安全,假设传递的参数是恶意的: 1 or 1 = 1容易造成sql注入导致信息泄露   
 
安全做法: `预处理 `   
先试用，问号`?` 作为占位符  

**防止SQL注入** 使用预处理,即使用`?`作为占位符。  
预处理会进行参数的分析，甄别传参是否需要。  
let sql = `SELECT * FROM product WHERE id = ?`; 

### 增
```js:no-line-numbers
// 3. 添加商品 
app.post('/add', (req, res) => {
    // 获取数据
    let obj = req.body;
    console.log(obj);

    // 执行sql
    let sql = 'INSERT INTO product SET ? ';
    // mysql模块支持使用对象形式添加信息
    pool.query(sql, [obj], (err, result) => {
        if (err) throw err;
        // 插入操作返回的是受影响的行数
        // console.log(result);
        if (result.affectedRows > 0) {
            // 响应结果
            res.send('添加商品成功~~');
        } else {
            res.send('添加商品失败~~');
        }
    });
});
```
### 改
```js:no-line-numbers
// 4. 更新商品
app.post('/update', (req, res) => {
    // 获取数据信息
    let obj = req.body; //10分钟 16:41继续
    // console.log(obj);

    // 执行sql
    let sql = 'UPDATE product SET ? WHERE id = ?';
    pool.query(sql, [obj, obj.id], (err, result) => {
        // 响应内容
        if (err) throw err;
        // console.log(result);
        // 更新操作同样返回的是受影响的行数
        if (result.affectedRows > 0) {
            res.send('更新商品成功~');
        } else {
            res.send('更新商品失败~');
        }
    });
});
```
### 删
```js:no-line-numbers
// 5. 删除商品
app.get('/delete/:id', (req, res) => {
    // 获取数据
    let obj = req.params;
    // console.log(obj);
    // 执行sql
    let sql = 'DELETE FROM product WHERE id = ?';
    pool.query(sql, [obj.id], (err, result) => {
        if (err) throw err;
        // 响应内容
        // 删除操作同样返回的是受影响的行数
        if (result.affectedRows > 0) {
            res.send('删除成功~~~');
        } else {
            res.send('删除失败~~~');
        }
    });
});
```

:::tip 格式化json数据
当前返回的数据基本都是json格式，默认展示样式较为粗糙、混乱，可以使用浏览器插件格式化展示样式。
比如:JSON-handle
:::