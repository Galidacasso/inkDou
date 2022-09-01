<template><h1 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h1>
<h2 id="路由级中间件" tabindex="-1"><a class="header-anchor" href="#路由级中间件" aria-hidden="true">#</a> 路由级中间件</h2>
<p>路由器是用来管理路由的，可以把功能模块下的所有相关路由挂载到路由器下，再把路由器注册在服务器中
用户通过url访问路由时，会先出发路由器，后再去触发相对的路由</p>
<h2 id="第三方中间件-需下载安装" tabindex="-1"><a class="header-anchor" href="#第三方中间件-需下载安装" aria-hidden="true">#</a> 第三方中间件(需下载安装)</h2>
<div class="language-nodejs ext-nodejs line-numbers-mode"><pre v-pre class="language-nodejs"><code>npm i compression
compression
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="mysql模块" tabindex="-1"><a class="header-anchor" href="#mysql模块" aria-hidden="true">#</a> Mysql模块</h1>
<div class="language-nodejs ext-nodejs line-numbers-mode"><pre v-pre class="language-nodejs"><code>npm imysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="mysql连接池" tabindex="-1"><a class="header-anchor" href="#mysql连接池" aria-hidden="true">#</a> Mysql连接池</h2>
<p>Mysql连接池是一种池化技术,是提高效率的
mysql.createConnection
创建mysql连接池操作(固定写法)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> pool <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createPool</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'127.0.0.1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">'prd'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">connectionLimit</span><span class="token operator">:</span> <span class="token number">15</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="mysql模块操作-增删改查" tabindex="-1"><a class="header-anchor" href="#mysql模块操作-增删改查" aria-hidden="true">#</a> mysql模块操作 增删改查</h2>
<p>pool.query(sql,[数据信息],(err,result)=&gt;});</p>
<p>增删改 返回的是受影响的行数 result.affectRows
查 返回的是数组,如果内容没有查询到,则返回空数组 ,判断数组的长度 result.length &gt;0</p>
<h2 id="sql注入" tabindex="-1"><a class="header-anchor" href="#sql注入" aria-hidden="true">#</a> SQL注入</h2>
<p>传递参数造成了mysql的二义性(传递一个参数,但是mysql当作关键字处理了)
例如: id = 1 or 1 = 1 这里 一个判断 1=1 就是真ture 一直则全真
防止SQL注入 的办法是使用预处理,即使用?作为占位符
预处理会进行参数的分析,甄别传参是否需要.</p>
</template>
