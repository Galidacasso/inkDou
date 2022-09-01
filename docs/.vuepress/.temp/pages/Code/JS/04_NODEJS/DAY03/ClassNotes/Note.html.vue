<template><h1 id="关于nodejs环境的问题" tabindex="-1"><a class="header-anchor" href="#关于nodejs环境的问题" aria-hidden="true">#</a> 关于NodeJs环境的问题</h1>
<h2 id="nodejs运行不成攻的原因" tabindex="-1"><a class="header-anchor" href="#nodejs运行不成攻的原因" aria-hidden="true">#</a> Nodejs运行不成攻的原因:</h2>
<p>1.安装过程中出现问题,使用管理员权限安装NodeJs</p>
<p>2.目前NodeJs没做Win11的兼容,Win11的版本可能存在问题</p>
<p>3.系统缺少可运行的c++运行库或版本过低</p>
<p>4.当前的插件或者其他软件修改了环境变量</p>
<h1 id="express框架" tabindex="-1"><a class="header-anchor" href="#express框架" aria-hidden="true">#</a> express框架</h1>
<h2 id="express中文网" tabindex="-1"><a class="header-anchor" href="#express中文网" aria-hidden="true">#</a> Express中文网</h2>
<p>https://www.expressjs.com.cn/</p>
<h2 id="框架概念" tabindex="-1"><a class="header-anchor" href="#框架概念" aria-hidden="true">#</a> 框架概念</h2>
<p>是可重复使用的设计构件,是开发应用的骨架,实现了一些基础功能的半成品,提供了常用工具的方法,开发人员可以基于框架基础,丰富内容满足各自的任务需求,提高开发效率，简化开发流程。</p>
<h2 id="下载及安装express框架" tabindex="-1"><a class="header-anchor" href="#下载及安装express框架" aria-hidden="true">#</a> 下载及安装express框架</h2>
<p>1.执行 npm init -y 初始化说明书文件</p>
<p>2.执行 npm i express 安装框架</p>
<p>在安装框架时会出现added50 packages 这样的字眼，是因为安装express的同时，需要安装它的依赖包</p>
<h3 id="npm-包管理器" tabindex="-1"><a class="header-anchor" href="#npm-包管理器" aria-hidden="true">#</a> npm 包管理器</h3>
<p>用来下载安装、更新、发布等包管理工具</p>
<p>package-lock.json是用来记录各个包的来源和需求</p>
<h2 id="路由-思想-使用express创建服务器" tabindex="-1"><a class="header-anchor" href="#路由-思想-使用express创建服务器" aria-hidden="true">#</a> 路由(思想) 使用express创建服务器</h2>
<p>express中的路由是 URL到函数的映射关系
浏览器向服务器发起请求，服务器根据url做出响应</p>
<p>例：http://localhost:8080/login
即：有一个“login”的方法</p>
<h3 id="路由三部分-参见app-js" tabindex="-1"><a class="header-anchor" href="#路由三部分-参见app-js" aria-hidden="true">#</a> 路由三部分 参见app.js</h3>
<p>请求路由方法 + 路由路径 + 路由处理方法</p>
<h4 id="路由方法" tabindex="-1"><a class="header-anchor" href="#路由方法" aria-hidden="true">#</a> 路由方法</h4>
<p>.get方法  从浏览器输入url执行(回车)访问就是get
.post方法 需要通过HTML表单发起</p>
<h4 id="请求路径" tabindex="-1"><a class="header-anchor" href="#请求路径" aria-hidden="true">#</a> 请求路径</h4>
<p>是多种多样的，请求不同的路径，可以触发不同的路由
例：'/index' app.get('首页')</p>
<h4 id="路由函数" tabindex="-1"><a class="header-anchor" href="#路由函数" aria-hidden="true">#</a> 路由函数</h4>
<p>(req,res)=&gt;{代码块....} 固定写法</p>
<h2 id="响应对象-res" tabindex="-1"><a class="header-anchor" href="#响应对象-res" aria-hidden="true">#</a> 响应对象 res</h2>
<table>
<thead>
<tr>
<th>对象</th>
<th>内容</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>.send</td>
<td>响应内容至浏览器</td>
<td></td>
</tr>
<tr>
<td>.sendFile</td>
<td>响应文件至浏览器</td>
<td>必须是绝对路径</td>
</tr>
<tr>
<td>.redirect</td>
<td>重定向</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="请求对象-req" tabindex="-1"><a class="header-anchor" href="#请求对象-req" aria-hidden="true">#</a> 请求对象 req</h2>
<table>
<thead>
<tr>
<th>对象</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr>
<td>.URl</td>
<td>获取当前请求的url</td>
</tr>
<tr>
<td>query</td>
<td>获取查询字符串传递的参数</td>
</tr>
<tr>
<td>.params</td>
<td>获取路由传参传递的参数</td>
</tr>
</tbody>
</table>
<h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业" aria-hidden="true">#</a> 作业</h2>
<p>通过路由传参，完成购物车中上屏名称和价格的传递
get /car /三星w22/10086</p>
<h1 id="中间件-middleware" tabindex="-1"><a class="header-anchor" href="#中间件-middleware" aria-hidden="true">#</a> 中间件 middleware</h1>
<ol>
<li>简化和隔离基础设施与业务逻辑间的细节，让开发者更关心业务，提高开发效率</li>
<li>express允许通过中间件来调用第三方库，在浏览器发起请求的时候，拦截内容，最终给路由提供服务</li>
<li>中间件本质上是一个函数</li>
</ol>
<h2 id="内置中间件" tabindex="-1"><a class="header-anchor" href="#内置中间件" aria-hidden="true">#</a> 内置中间件</h2>
<p>在3.x版本之前有很多的内置中间件,但从4.x版本后,都剥离称为单独的npm包,只留下了一个内置中间件</p>
<table>
<thead>
<tr>
<th>对象</th>
<th>内容</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>express.static</td>
<td>静态资源托管</td>
<td>向客户端输出指定目录下的静态资源</td>
</tr>
<tr>
<td>express.urlencoded</td>
<td>解析urlencoded格式的请求体数据</td>
<td></td>
</tr>
<tr>
<td>express.json</td>
<td>解析json格式的请求体数据</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="应用级-自定义-中间件" tabindex="-1"><a class="header-anchor" href="#应用级-自定义-中间件" aria-hidden="true">#</a> 应用级(自定义)中间件</h2>
<h3 id="app-use-url-req-res-next" tabindex="-1"><a class="header-anchor" href="#app-use-url-req-res-next" aria-hidden="true">#</a> app.use(url,(req,res,next)=&gt;{})</h3>
<ol>
<li>url 表示你要拦截的路由</li>
<li>next 代表下一个路由或中间件</li>
<li>函数内容可以通过next()回调,</li>
</ol>
</template>
