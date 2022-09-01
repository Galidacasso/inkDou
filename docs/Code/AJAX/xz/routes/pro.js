//创建路由器对象
const express=require('express');
//引入连接池
const pool=require('../pool.js');
let router=express.Router();
//1.登录接口
//浏览器访问：http://127.0.0.1:3000/pro/v1/login/dangdang&123456
router.get('/v1/login/:uname&:upwd',(req,res)=>{
    let $uname=req.params.uname;
    let $upwd=req.params.upwd;
    let sql='SELECT * FROM xz_user WHERE uname=? and upwd=?';
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send('1');//登录成功
        }else{
            res.send('0');//登录失败
        }
    });
});

//2.获取用户列表
router.get('/v1/list',(req,res)=>{
    let sql='SELECT * FROM xz_user';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send('没查询到您要的数据！');
        }
    });
});

//3.删除用户
router.delete('/v1/deluser/:uid',(req,res)=>{
    //获取用户id
    let $uid=req.params.uid;
    let sql='DELETE From xz_user WHERE uid=?';
    pool.query(sql,[$uid],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send('1');//删除成功
        }else{
            res.send('0');//删除失败
        }
    });
});

//4.根据uid查询用户信息
router.get('/v1/searchUser/:uid',(req,res)=>{
    let $uid=req.params.uid;
    let sql='SELECT * FROM xz_user WHERE uid=?';
    pool.query(sql,[$uid],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send('0');//没查询到该用户信息！
        }
    });
});

//5.修改用户 put 
router.put('/v1/update',(req,res)=>{
    let obj=req.body;
    let sql='UPDATE xz_user set ? WHERE uid=?';
    pool.query(sql,[obj,obj.uid],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send('1');//修改成功
        }else{
            res.send('0');//修改失败
        }
    });
});
//6.通过uname查询用户信息 响应1用户已被占用，0用户名可用
router.get('/v1/queryUser/:uname',(req,res)=>{
    let $uname=req.params.uname;
    let sql='SELECT * FROM xz_user WHERE uname=?';
    pool.query(sql,[$uname],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send('1');//该用户名已被占用
        }else{
            res.send('0');//该用户名可注册
        }
    });
});

//注册 post
router.post('/v1/reg',(req,res)=>{
    let obj=req.body;
    let sql='INSERT INTO xz_user SET ?';
    pool.query(sql,[obj],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send('1');//注册成功
        }else{
            res.send('0');//注册失败
        }
    })
});

//导出路由器
module.exports=router;