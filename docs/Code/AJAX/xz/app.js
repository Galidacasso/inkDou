//创建web服务器
const express=require('express');
//引入body-parser
const bodyParser=require('body-parser');
//引入路由器
const proRouter=require('./routes/pro.js');

//创建服务
var app=express();
app.listen(3000);

//托管静态资源
app.use(express.static('pro'));

//使用body-parser中间件
app.use(bodyParser.urlencoded({
   extended:false
}));

//挂载路由
app.use('/pro',proRouter);