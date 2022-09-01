// 服务器文件
// 引入包
const express = require('express');
// 初始化应用程序
const app = express();
// 端口监听
const port = 8080;

app.listen(port, () => console.log(`服务器已经启动,监听端口: ${port}!`));

// 静态资源托管
app.use(express.static('public'));
// 请求解析
app.use(express.urlencoded({
    extended: false
}));

// 引入user路由器
const userRouter = require('./routes/user');
// 引入prd路由器
const prdRouter = require('./routes/prd');
// 加入路由器前缀来区分路由器
app.use('/user', userRouter);
app.use('/prd', prdRouter);