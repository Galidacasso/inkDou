<template><h1 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h1>
<h2 id="路由器级中间件" tabindex="-1"><a class="header-anchor" href="#路由器级中间件" aria-hidden="true">#</a> 路由器级中间件</h2>
<p>路由器是用来管理路由的,我们可以把一个功能模块下的所有相关的路由挂载到这个路由器下,再把这个路由器注册在服务器中,
用户通过url访问路由的时候,会首先触发路由器,然后再去触发相对应的路由</p>
<h2 id="第三方中间件-需要下载安装" tabindex="-1"><a class="header-anchor" href="#第三方中间件-需要下载安装" aria-hidden="true">#</a> 第三方中间件(需要下载安装)</h2>
<p>npm i compression
compression    请求压缩</p>
<h1 id="mysql模块-需要单独安装的" tabindex="-1"><a class="header-anchor" href="#mysql模块-需要单独安装的" aria-hidden="true">#</a> Mysql模块(需要单独安装的)</h1>
<p>为了和其他内容做一个隔离,所以新建一个新项目
npm i mysql</p>
<h2 id="mysql连接池-池化技术" tabindex="-1"><a class="header-anchor" href="#mysql连接池-池化技术" aria-hidden="true">#</a> mysql连接池 ==&gt; 池化技术</h2>
<p>mysql.createConnection 平常的链接,不推荐使用
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
});</p>
<h2 id="mysql模块操作-增-删-改-查-具体代码参见app-js" tabindex="-1"><a class="header-anchor" href="#mysql模块操作-增-删-改-查-具体代码参见app-js" aria-hidden="true">#</a> mysql模块操作 增 删 改 查(具体代码参见app.js)</h2>
<p>pool.query(sql,[[数据信息]],(err,result)=&gt;{})
增 删 改 操作返回的是受影响的行数 result.affectedRows
查 操作返回的是数组,如果指定的内容没有查询到,则返回空数组 result.length为0</p>
<h2 id="sql-注入" tabindex="-1"><a class="header-anchor" href="#sql-注入" aria-hidden="true">#</a> SQL 注入</h2>
<p>是传递的参数造成了mysql的二义性(传递的是一个参数,但是mysql当做关键字处理了),造成了注入
防止SQL注入的办法是预处理(占位符)</p>
<h1 id="谷歌浏览器插件-格式化json数据" tabindex="-1"><a class="header-anchor" href="#谷歌浏览器插件-格式化json数据" aria-hidden="true">#</a> 谷歌浏览器插件 ==&gt; 格式化json数据</h1>
<p>我们现在返回的数据大多数都是json格式，默认的格式比较丑，而且比较乱，所以可以采用插件用来格式化浏览器中的json文件(插件文件已经添加到笔记中)</p>
<ol>
<li>找到谷歌浏览器中的设置</li>
<li>在设置中找到扩展程序,右上角开启 开发者模式</li>
<li>直接拖拽 JSON-handle_0.5.6.crx 文件到浏览器中或自动安装</li>
<li>安装完成后即可看到效果~~ 丝滑~~</li>
</ol>
</template>
