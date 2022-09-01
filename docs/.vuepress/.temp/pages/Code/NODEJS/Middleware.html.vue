<template><div><h1 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h1>
<p>middleware</p>
<ol>
<li>简化和隔离基础设施与业务逻辑间的细节，让开发者更关心业务，提高开发效率。</li>
<li>express允许通过中间件来调用第三方库，在浏览器发起请求的时候，拦截内容，最终给路由提供服务。</li>
<li>中间件本质上是一个函数。</li>
</ol>
<h2 id="内置中间件" tabindex="-1"><a class="header-anchor" href="#内置中间件" aria-hidden="true">#</a> 内置中间件</h2>
<p>在express 3.x版本之前有很多的内置中间件,但从express 4.x版本后,都剥离成单独的npm包,只留下了一个内置中间件。</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>作用</th>
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
<h2 id="应用级中间件" tabindex="-1"><a class="header-anchor" href="#应用级中间件" aria-hidden="true">#</a> 应用级中间件</h2>
<p>也可称为自定义中间件，是通过 <code v-pre>app.use()</code>或<code v-pre>app.get()</code>或<code v-pre>app.post()</code>绑定到app实例上的中间件。</p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">use</span><span style="color: #EEFFFF">(url</span><span style="color: #89DDFF">,(</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">next</span><span style="color: #89DDFF">)</span><span style="color: #C792EA">=&gt;</span><span style="color: #89DDFF">{}</span><span style="color: #EEFFFF">)</span></span>
<span class="line"></span></code></pre></div><ol>
<li>url 表示你要拦截的路由</li>
<li>next 代表下一个路由或中间件</li>
<li>函数内容可以通过next()回调</li>
</ol>
<p><strong><code v-pre>DEMO</code></strong> 应用级中间件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">//应用级别的全局中间件</span></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">use</span><span style="color: #EEFFFF">(</span><span style="color: #C792EA">function</span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">next</span><span style="color: #89DDFF">){</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">我是全局中间件</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #82AAFF">next</span><span style="color: #F07178">()</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">let</span><span style="color: #EEFFFF"> jubu </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">function</span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">next</span><span style="color: #89DDFF">){</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">我是局部中间件</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #82AAFF">next</span><span style="color: #F07178">()</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #545454; font-style: italic">//应用级别的局部中间件</span></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">get</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">/user</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">jubu</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> res</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">先经过局部中间件才打印我</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">//向客户端发送JSON对象</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">send</span><span style="color: #F07178">(</span><span style="color: #89DDFF">{</span><span style="color: #F07178"> name</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">doraMiu</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> age</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">20</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> gender</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">女</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #F07178">)</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由级中间件" tabindex="-1"><a class="header-anchor" href="#路由级中间件" aria-hidden="true">#</a> 路由级中间件</h2>
<p>路由器是用来管理路由的，可以把功能模块下的所有相关路由挂载到路由器下，再把路由器注册在服务器中。用户通过url访问路由时，会先出发路由器，后再去触发相对的路由。</p>
<h3 id="demo-路由级中间件" tabindex="-1"><a class="header-anchor" href="#demo-路由级中间件" aria-hidden="true">#</a> <strong><code v-pre>DEMO</code></strong> <strong>路由级中间件</strong></h3>
<p>目录结构：</p>
<ul>
<li>文件夹
<ul>
<li>public
<ul>
<li><a href="#reg">reg.html</a></li>
</ul>
</li>
<li>routes
<ul>
<li><a href="#product">product.js</a></li>
<li><a href="#user">user.js</a></li>
</ul>
</li>
<li><a href="#app">app.js</a></li>
</ul>
</li>
</ul>
<h4 id="app" tabindex="-1"><a class="header-anchor" href="#app" aria-hidden="true">#</a> app</h4>
<p>引入user和product路由</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> express </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">express</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> app </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">express</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> port </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">8080</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">listen</span><span style="color: #EEFFFF">(port</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">`</span><span style="color: #C3E88D">Server Started Port:</span><span style="color: #89DDFF">${</span><span style="color: #EEFFFF">port</span><span style="color: #89DDFF">}`</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">use</span><span style="color: #EEFFFF">(express</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">urlencoded</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #F07178">extended</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FF9CAC">false</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">use</span><span style="color: #EEFFFF">(express</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">static</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">public</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 引入路由</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> userRouter </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">./routes/user</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> productRouter </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">./routes/product</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 使用路由器</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 为了区分路由器,添加路由器前缀,访问时需添加前缀</span></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">use</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">/user</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> userRouter)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">use</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">/product</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> productRouter)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="product" tabindex="-1"><a class="header-anchor" href="#product" aria-hidden="true">#</a> product</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 引入包</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> express </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">express</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 创建路由器对象</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> router </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> express</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">Router</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 挂载路由到路由器下</span></span>
<span class="line"><span style="color: #EEFFFF">router</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">get</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">/list</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">send</span><span style="color: #F07178">(</span><span style="color: #89DDFF">`</span><span style="color: #C3E88D">ProductList</span><span style="color: #89DDFF">`</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">//导出路由器对象</span></span>
<span class="line"><span style="color: #89DDFF">module.exports</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> router</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> user</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 用户路由器</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> Router </span><span style="color: #89DDFF">}</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">express</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> express </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">express</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 创建路由器对象</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> router </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> express</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">Router</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> qs </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">querystring</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 挂载路由到路由器下</span></span>
<span class="line"><span style="color: #EEFFFF">router</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">get</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">/list</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">send</span><span style="color: #F07178">(</span><span style="color: #89DDFF">`</span><span style="color: #C3E88D">UserList</span><span style="color: #89DDFF">`</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 用户注册操作</span></span>
<span class="line"><span style="color: #EEFFFF">router</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">post</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">/reg</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,(</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">)</span><span style="color: #C792EA">=&gt;</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">send</span><span style="color: #F07178">(</span><span style="color: #89DDFF">`</span><span style="color: #C3E88D">User:</span><span style="color: #89DDFF">${</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">body</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">uname</span><span style="color: #89DDFF">}`</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">//导出路由器对象</span></span>
<span class="line"><span style="color: #89DDFF">module.exports</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> router</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reg" tabindex="-1"><a class="header-anchor" href="#reg" aria-hidden="true">#</a> reg</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;!</span><span style="color: #F07178">DOCTYPE</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">html</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">html</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">en</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">head</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">meta</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">charset</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">UTF-8</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">meta</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">http-equiv</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">X-UA-Compatible</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">content</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">IE=edge</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">meta</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">viewport</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">content</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">width=device-width, initial-scale=1.0</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">title</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">注册</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">title</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">head</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">body</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h2</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">这里是注册页面</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h2</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">form</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">action</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">/user/reg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">method</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">post</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">  用户名：</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">uname</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">  密码：</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">upwd</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">button</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">注册</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">button</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">form</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">body</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">html</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三方中间件" tabindex="-1"><a class="header-anchor" href="#第三方中间件" aria-hidden="true">#</a> 第三方中间件</h2>
<p>第三方中间件，需要使用npm包管理工具（或其他管理工具）下载。<br>
例如 <strong><code v-pre>compression</code></strong> 中间件，是一种提供节省带宽和加快网站速度简单有效的压缩方法。 它仅与现代浏览器兼容。</p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">npm i compression</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>关于中间件的安装，可以参考:
<RouterLink to="/Code/NODEJS/%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7.html">npm包管理工具</RouterLink></p>
</div>
</div></template>
