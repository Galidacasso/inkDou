// 商品路由器文件
// 引入包
const express = require('express');
const pool = require('../pool');

// 创建路由器对象
const router = express.Router();

// 挂载路由到路由器下
// 1. 商品模糊查询 直返回标题和价格
router.get('/search', (req, res) => {
    // 获取数据
    let obj = req.query;
    console.log(obj);
    // 数据验证
    if (!obj.title) {
        res.send({
            code: 401,
            msg: '关键字或标题不能为空'
        });
        return;
    }
    // 执行sql响应内容
    // 拼接模糊查询     利用下课时间下载并安装git软件(傻瓜式安装) 15:17继续
    obj.title = `%${obj.title}%`;
    let sql = 'SELECT title,price FROM xz_laptop WHERE title LIKE ?';
    pool.query(sql, [obj.title], (err, result) => {
        if (err) {
            res.send({
                code: 500,
                msg: 'server error'
            });
            return;
        }
        if (result.length > 0) {
            res.send({
                code: 200,
                data: result
            });
        } else {
            res.send({
                code: 400,
                msg: 'is empty please cheange the keywords'
            });
        }
    });
});

// 导出路由器对象
module.exports = router;