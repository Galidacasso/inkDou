// mysql连接池文件
const mysql = require('mysql');

// 创建mysql连接池
const pool = mysql.createPool({
    // 主机地址
    host: '127.0.0.1',
    // 端口号
    port: 3306,
    // 用户名
    user: 'root',
    // 密码
    password: '',
    // 数据库
    database: 'xz',
    // 连接池数量
    connectionLimit: 15
});

console.log('数据库链接成功~~');

// 导出连接池对象
module.exports = pool;