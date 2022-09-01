// 用户路由器
// 引入包
const express = require('express');
const pool = require('../pool');

// 创建路由器对象
const router = express.Router();

// 挂载路由到路由器下
// 1. 用户注册 post /register
router.post('/register', (req, res) => {
    // 获取参数
    let obj = req.body;
    console.log(obj);
    // 数据验证
    // 如果html表单中没有填写信息, 提交时会导致obj对象中的某个属性的属性值为空
    // 如果obj某个属性为空, 则if判断时为false,无法执行语法体,所以加入!进行取反!false ==> true
    // if (!obj.uname) {res.send({code: 401,msg: '用户名不能为空'});
    //     // 终止代码执行       
    //     return;    
    // }
    // 上述方法过于冗杂,需要简化
    // 规律: 401  402  403  404  ==>    400+1   400+2 
    //       用户名不能为空 密码不能为空 == > xxx不能为空 
    let i = 400;
    for (const key in obj) {
        i++;
        if (!obj[key]) {
            res.send({
                code: i,
                msg: key + '不能为空'
            });
            // 终止代码执行
            return;
        }
    }

    // 执行sql响应内容
    let sql = 'INSERT INTO xz_user SET ?';
    pool.query(sql, [obj], (err, result) => {
        // 如果有错误响应错误提示
        if (err) {
            res.send({
                code: 500,
                msg: 'server error'
            });
            return;
        }
        // 如果没问题响应内容
        // 插入操作返回的是受影响的行数,如果行数大于0说明插入成功
        if (result.affectedRows > 0) {
            res.send({
                code: 200,
                msg: 'register suc'
            });
        } else {
            res.send({
                code: 100,
                msg: 'register fail'
            });
        }
    });
});

// 2. 用户登录 post /login
router.post('/login', (req, res) => {
    // 获取数据
    let obj = req.body;
    console.log(obj);
    // 数据验证
    if (!obj.uname) {
        res.send({
            code: 401,
            msg: '用户名不能为空'
        });
        return;
    }
    if (!obj.upwd) {
        res.send({
            code: 402,
            msg: '用户名密码不能为空'
        });
        return;
    }
    // 执行sql 响应内容
    let sql = 'SELECT * FROM xz_user WHERE uname = ? AND upwd = ?';
    pool.query(sql, [obj.uname, obj.upwd], (err, result) => {
        // 如果有错误响应错误提示
        if (err) {
            res.send({
                code: 500,
                msg: 'server error'
            });
            return;
        }
        // 如果没问题响应内容
        // 查询操作返回的是一个数组,如果没查到内容则返回空数组
        if (result.length > 0) {
            res.send({
                code: 200,
                msg: 'login suc'
            });
        } else {
            res.send({
                code: 301,
                msg: '用户名或密码错误'
            });
        }
    });
});
// 3. 用户检索 get /detail  
router.get('/detail', (req, res) => {
    // 获取数据
    let obj = req.query;
    console.log(obj);
    // 数据验证
    if (!obj.uid) {
        res.send({
            code: 401,
            msg: '用户名不能为空'
        });
        return;
    }
    // 执行sql,响应内容
    let sql = 'SELECT * FROM xz_user WHERE uid = ?';
    pool.query(sql, [obj.uid], (err, result) => {
        if (err) {
            res.send({
                code: 500,
                msg: 'server error'
            });
            return;
        }
        // 查询操作返回的是一个数组,如果没有查到内容则是一个空数组
        if (result.length > 0) {
            res.send({
                code: 200,
                msg: 'ok',
                data: result[0]
            });
        } else {
            res.send({
                code: 301,
                msg: '未检索到用户'
            });
        }
    });
});

// 4. 用户删除 get /delete  
router.get('/delete', (req, res) => {
    // 获取数据
    let obj = req.query;
    console.log(obj);
    // 数据验证
    if (!obj.uid) {
        res.send({
            code: 401,
            msg: '用户名不能为空'
        });
        return;
    }
    // 执行sql
    let sql = 'DELETE FROM xz_user WHERE uid = ?';
    pool.query(sql, [obj.uid], (err, result) => {
        if (err) {
            res.send({
                code: 500,
                msg: 'server error'
            });
            return;
        }
        // 删除操作返回的是受影响的行数
        if (result.affectedRows > 0) {
            res.send({
                code: 200,
                msg: 'delete suc'
            });
        } else {
            res.send({
                code: 301,
                msg: 'delete error'
            });
        }
    });
});

// 5. 用户修改 post /update
router.post('/update', (req, res) => {
    // 获取数据
    let obj = req.body;
    // 数据验证
    let i = 400;
    for (const key in obj) {
        i++;
        if (!obj[key]) {
            res.send({
                code: i,
                msg: key + '不能为空'
            });
            return;
        }
    }
    // 执行sql响应内容
    let sql = 'UPDATE xz_user SET ? WHERE uid = ?';
    pool.query(sql, [obj, obj.uid], (err, result) => {
        if (err) {
            res.send({
                code: 500,
                msg: 'server error'
            });
            return;
        }
        // 更新操作返回的受影响的行数
        if (result.affectedRows > 0) {
            res.send({
                code: 200,
                msg: 'update suc'
            });
        } else {
            res.send({
                code: 301,
                msg: 'update error'
            });
        }
    });
});

// 6. 用户列表 get /list
// 需求:
// 1. 如果直接访问路由,则返回全部内容
// 2. 如果是通过user_list.html访问,在不输入任何信息的情况下,默认返回前5条
// 3. 如果是通过user_list.html访问,输入相关的信息情况下,返回指定的内容
router.get('/list', (req, res) => {
    // 难点: 如何分辨是直接路由访问还是html访问呢?
    let obj = req.query;
    console.log('接受到的参数信息:', obj);
    // 如果是直接路由访问, 则req.query是空对象
    // 如果是通过html访问, 则req.query包含前端表单信息中的name属性的信息
    // 判断属性在不在obj内,如果在则执行分页查询,如果不在则执行全部查询
    // obj.hasOwnProperty('count') 判断属性在不在obj内 如果存在返回true,反之返回false
    if (obj.hasOwnProperty('pno') || obj.hasOwnProperty('count')) {
        // 执行分页操作
        // 啥样的情况下才去执行默认的返回前5条的操作?
        // 如果obj对象中的属性没有值是空的则应该给默认值
        // pno代表分页的第一个参数,即索引位置 ,默认从0开始
        !obj.pno ? obj.pno = 0 : obj.pno;
        // count代表分页中的第二个参数,即返回数据的数量
        !obj.count ? obj.count = 5 : obj.count;
        console.log('已经判断后赋值的参数信息:', obj);

        // 因为前端表单传递参数的数据类型是string, 而sql中limit分页需要数值数字类型,需要数据类型的转化
        // 回顾内容写了2种
        let pno = parseInt(obj.pno);
        let count = Math.floor(obj.count);
        // 分页分析：假设一页5条数据
        // 第一页: id=1开始 id=5结束   ==> limit 0,5
        // 第二页: id=6开始 id=10结束   ==> limit 5,5
        // 第三页: id=11开始 id=15结束   ==> limit 10,5
        // ...
        let start = (pno - 1) * count;

        // 执行sql返回内容
        let sql = 'SELECT * FROM xz_user LIMIT ?,?';
        pool.query(sql, [start, count], (err, result) => {
            if (err) {
                res.send({
                    code: 500,
                    msg: 'server error'
                });
                return;
            }
            // 查询返回的是一个数组
            if (result.length > 0) {
                res.send({
                    code: 200,
                    msg: 'ok',
                    data: result
                });
            } else {
                res.send({
                    code: 404,
                    msg: 'is empty'
                });
            }
        });
    } else {
        // 否则执行查询全部内容
        // 执行sql返回内容
        let sql = 'SELECT * FROM xz_user';
        pool.query(sql, (err, result) => {
            if (err) {
                res.send({
                    code: 500,
                    msg: 'server error'
                });
                return;
            }
            // 查询返回的是一个数组
            if (result.length > 0) {
                res.send({
                    code: 200,
                    msg: '用户信息',
                    data: result
                });
            } else {
                res.send({
                    code: 404,
                    msg: '未检索到用户'
                });
            }
        });
    }
});


// 导出路由器对象
module.exports = router;