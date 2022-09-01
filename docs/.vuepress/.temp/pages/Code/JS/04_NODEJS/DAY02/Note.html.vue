<template><h1 id="commonjs-规范-模块思想" tabindex="-1"><a class="header-anchor" href="#commonjs-规范-模块思想" aria-hidden="true">#</a> CommonJS 规范(模块思想)</h1>
<p>官网: www.commonjs.org
不是一种单独的开发语言,而是一种作用域JS编程的规范和思想</p>
<h1 id="模块系统" tabindex="-1"><a class="header-anchor" href="#模块系统" aria-hidden="true">#</a> 模块系统</h1>
<h2 id="引入同级目录-参见目录01" tabindex="-1"><a class="header-anchor" href="#引入同级目录-参见目录01" aria-hidden="true">#</a> 引入同级目录  参见目录01</h2>
<ol>
<li>引入同级目录需要添加./</li>
<li>当引入一个目录时,nodejs会自动寻找这个目录下的index.js文件,如果找不到会报错:找不该该模块.但实际开发中不可能每个目录模块下都准备一个index.js,所以需要通过package.json说明书文件来指定加载的文件内容</li>
</ol>
<h1 id="package-json-说明书文件-定义项目所需要的各个模块的配置-是一个json对象-对象中的每一个成员对应的就是当前的配置" tabindex="-1"><a class="header-anchor" href="#package-json-说明书文件-定义项目所需要的各个模块的配置-是一个json对象-对象中的每一个成员对应的就是当前的配置" aria-hidden="true">#</a> package.json 说明书文件 定义项目所需要的各个模块的配置,是一个json对象,对象中的每一个成员对应的就是当前的配置</h1>
<h1 id="内置模块-核心模块-是nodejs中自带的-不需要下载即可使用" tabindex="-1"><a class="header-anchor" href="#内置模块-核心模块-是nodejs中自带的-不需要下载即可使用" aria-hidden="true">#</a> 内置模块(核心模块,是nodejs中自带的,不需要下载即可使用)</h1>
<h2 id="querystring-查询字符串模块-解析和格式化查询字符串-参见demo1-js" tabindex="-1"><a class="header-anchor" href="#querystring-查询字符串模块-解析和格式化查询字符串-参见demo1-js" aria-hidden="true">#</a> querystring(查询字符串模块) 解析和格式化查询字符串  参见Demo1.js</h2>
<ol>
<li>将查询字符串转化为对象  qs.parse()</li>
<li>将对象格式化为查询字符串</li>
</ol>
<h2 id="fs模块-处理文件及目录-读写-删改-有同步和异步2种方式" tabindex="-1"><a class="header-anchor" href="#fs模块-处理文件及目录-读写-删改-有同步和异步2种方式" aria-hidden="true">#</a> fs模块 处理文件及目录(读写/删改) 有同步和异步2种方式</h2>
<h2 id="目录操作-参见demo2-js" tabindex="-1"><a class="header-anchor" href="#目录操作-参见demo2-js" aria-hidden="true">#</a> 目录操作 参见Demo2.js</h2>
<ol>
<li>
<p>创建 fs.mkdir()(异步)  fs.mkdirSync()(同步) 不允许重复创建</p>
</li>
<li>
<p>删除 fs.rmdir()(异步)  fs.rmdirSync()(同步)</p>
</li>
</ol>
<ul>
<li>不允许重复删除</li>
<li>不能删除非空的目录</li>
</ul>
<ol start="3">
<li>读取 fs.readdir()(异步)  fs.readdirSync()(同步)
读取出来的是包含文件及目录名称的数组,但是只能读取一层,子目录是无法读取的,如果想要实现多级目录读取则需要递归操作</li>
</ol>
<h2 id="文件操作-参见demo3-js" tabindex="-1"><a class="header-anchor" href="#文件操作-参见demo3-js" aria-hidden="true">#</a> 文件操作 参见Demo3.js</h2>
<ol>
<li>
<p>内容追加  fs.appendFile  fs.appendFileSync
如果文件不存在会首先创建文件再写入内容,如果文件存在则直接在原有内容的最后方插入内容</p>
</li>
<li>
<p>文件读取 fs.readFile  fs.readFileSync</p>
</li>
<li>
<p>文件删除 fs.unlink  fs.unlinkSync</p>
</li>
<li>
<p>文件复制 fs.copyFile  fs.copyFileSync</p>
</li>
</ol>
<h2 id="http模块-express框架中已经优化了该模块" tabindex="-1"><a class="header-anchor" href="#http模块-express框架中已经优化了该模块" aria-hidden="true">#</a> HTTP模块(express框架中已经优化了该模块)</h2>
<p>本身存在大量的底层操作和思想
提供了快捷的方法,用来创建HTTP的一些客户端和服务器端的应用
itboy</p>
<h3 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h3>
<p>浏览器</p>
<h3 id="服务器端" tabindex="-1"><a class="header-anchor" href="#服务器端" aria-hidden="true">#</a> 服务器端</h3>
<p>提供数据和功能</p>
<h3 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h3>
<p>HTTP是一种简单 请求-响应 的协议,指定了客户端给服务器端发送什么样的信息.服务器端返回什么信息</p>
<h4 id="请求" tabindex="-1"><a class="header-anchor" href="#请求" aria-hidden="true">#</a> 请求</h4>
<p>由客户端发送用来出发一个服务器上的动作(比如:通过浏览器请一个城市天气的情况)</p>
<h4 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h4>
<p>来自服务器的应答(比如:服务器把天气数据返回给浏览器)</p>
<h4 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h4>
<p>http://t.weather.itboy.net/api/weather/city/101030100</p>
<h4 id="general-常规" tabindex="-1"><a class="header-anchor" href="#general-常规" aria-hidden="true">#</a> General(常规)</h4>
<p>Request URL: 请求网址
Request Method: 请求方法
Status Code: HTTP状态码</p>
<table>
<thead>
<tr>
<th style="text-align:center">代码</th>
<th style="text-align:center">状态</th>
<th style="text-align:center">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">200</td>
<td style="text-align:center">请求成功</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">3**</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">301</td>
<td style="text-align:center">永久重定向</td>
<td style="text-align:center">网址A被永久的指向B</td>
</tr>
<tr>
<td style="text-align:center">302</td>
<td style="text-align:center">临时重定向</td>
<td style="text-align:center">网址A被临时的指向B</td>
</tr>
<tr>
<td style="text-align:center">403</td>
<td style="text-align:center">服务器拒绝执行</td>
<td style="text-align:center">禁止访问</td>
</tr>
<tr>
<td style="text-align:center">404</td>
<td style="text-align:center">请求资源不存在</td>
<td style="text-align:center">页面不存在</td>
</tr>
<tr>
<td style="text-align:center">500</td>
<td style="text-align:center">服务器代码错误</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<h4 id="http-请求对象-request-缩写成req-会根据请求的内容而变化" tabindex="-1"><a class="header-anchor" href="#http-请求对象-request-缩写成req-会根据请求的内容而变化" aria-hidden="true">#</a> HTTP - 请求对象 Request (缩写成req)会根据请求的内容而变化</h4>
<p>path: 请求网址
method: 请求方法
Content-Type: 请求数据内容的类型</p>
<h4 id="http-响应对象-response-缩写成res" tabindex="-1"><a class="header-anchor" href="#http-响应对象-response-缩写成res" aria-hidden="true">#</a> HTTP - 响应对象 Response (缩写成res)</h4>
<p>Content-Type: 响应数据内容的类型</p>
<h3 id="http模块可以模拟客户端浏览器行为-模拟用户使用浏览器向服务器发起请求-参见demo5-js" tabindex="-1"><a class="header-anchor" href="#http模块可以模拟客户端浏览器行为-模拟用户使用浏览器向服务器发起请求-参见demo5-js" aria-hidden="true">#</a> HTTP模块可以模拟客户端浏览器行为(模拟用户使用浏览器向服务器发起请求) 参见Demo5.js</h3>
<h3 id="http模块可以创建服务器应用-向客户端响应数据-参见demo6-js" tabindex="-1"><a class="header-anchor" href="#http模块可以创建服务器应用-向客户端响应数据-参见demo6-js" aria-hidden="true">#</a> HTTP模块可以创建服务器应用(向客户端响应数据) 参见Demo6.js</h3>
<h4 id="搭建服务器分三步" tabindex="-1"><a class="header-anchor" href="#搭建服务器分三步" aria-hidden="true">#</a> 搭建服务器分三步</h4>
<p>1.引入模块 const http = require('http');</p>
<p>2.创建WEB服务器const app = http.createServer();</p>
<p>3.监听端口
app.listen(8080, () =&gt; {
console.log('服务器已起飞~');
});</p>
<p>4.通过事件监听,监测是否从浏览器发来的请求(固定写法)
app.on('request',(req,res)=&gt;{
console.log('有请求从浏览器中飞过来~');</p>
<p>// 设置响应内容
res.write('')
// 结束响应,否则拿不到服务器响应的数据
res.end();
});</p>
<h4 id="修啊改了服务器端代码-必须重启服务器" tabindex="-1"><a class="header-anchor" href="#修啊改了服务器端代码-必须重启服务器" aria-hidden="true">#</a> 修啊改了服务器端代码,必须重启服务器</h4>
<h1 id="包" tabindex="-1"><a class="header-anchor" href="#包" aria-hidden="true">#</a> 包</h1>
<p>什么是包? package 是在模块的基础上更深一步的抽象,包是一个目录,包含js和package.json 等内容,将独立的功能封装起来,用来发布或更新等等...,在调用包的时候 node.js会自动去目录中寻找package.json,然后按照配置项去执行内容</p>
<h1 id="node-modules-目录-参见02目录" tabindex="-1"><a class="header-anchor" href="#node-modules-目录-参见02目录" aria-hidden="true">#</a> node_modules 目录  参见02目录</h1>
<p>当模块加载时,nodejs一定会在当前目录内寻找 node_modules 目录, 然后再去这个目录寻找对应的模块内容,找到了就是使用找不到就父级找,一直到找到为止,都找不到才会报错</p>
</template>
