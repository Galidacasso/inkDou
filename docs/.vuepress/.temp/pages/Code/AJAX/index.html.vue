<template><div><h1 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> AJAX</h1>
<h2 id="http技术通识" tabindex="-1"><a class="header-anchor" href="#http技术通识" aria-hidden="true">#</a> HTTP技术通识</h2>
<table>
    <tr>
        <td colspan="4" align="center">URL结构</td>
        <td>协议+主机名称+目录结构+文件名+[锚点]</td>
    </tr>
    <tr>
        <td colspan="4" align="center">HTTP协议</td>
        <td>超文本传输协议 规范了数据是如何打包和传递的,是万维网的数据通信基础</td>
    </tr>
    <tr>
        <td rowspan="25" align="center" style="writing-mode: tb-rl;">请求和响应</td>
        <td rowspan="12" align="center" style="writing-mode: tb-rl;">请求 Request Message</td>
        <td colspan="3">客户端发送至服务器端的请求消息</td>
    </tr>
    <tr>
        <td rowspan="5" align="center" style="writing-mode: tb-rl;">请求起始行</td>
        <td rowspan="3">请求方法</td>
        <td>get post put delete option(预请求) 通过Restfu规范做了原生请求的统一</td>
    </tr>
    <tr>
        <td>get/delete 没有请求体</td>
    </tr>
    <tr>
        <td>post/put 有请求体，formdata</td>
    </tr>
    <tr>
        <td>HTTP版本号</td>
        <td>99.99% 均为 1.1</td>
    </tr>
    <tr>
        <td>请求URL</td>
        <td>根据请求内容发生变化</td>
    </tr>
    <tr>
        <td rowspan="5" align="center" style="writing-mode: tb-rl;">请求头信息</td>
        <td>Host</td>
        <td>服务器查找主机端口</td>
    </tr>
    <tr>
        <td>Accept-Encoding</td>
        <td>可接受的压缩格式</td>
    </tr>
    <tr>
        <td>Accept-Language</td>
        <td>可接受的自然语言</td>
    </tr>
    <tr>
        <td>Connection: keep-alive</td>
        <td>持久链接，重用TCP链接发送和接受多个请求，是客户端和服务器端的约定</td>
    </tr>
    <tr>
        <td>User-Agent</td>
        <td>用户代理信息</td>
    </tr>
    <tr>
        <td align="center">请求<br>主体</td>
        <td>formdata</td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="13" style="writing-mode: tb-rl;">响应 Response Message</td>
        <td colspan="3">服务器端发送给客户端的响应消息</td>
    </tr>
    <tr>
        <td rowspan="3" align="center" style="writing-mode: tb-rl;">响应起始行</td>
        <td>HTTP版本号</td>
        <td>99.99% 均为 1.1</td>
    </tr>
    <tr>
        <td>响应的状态码</td>
        <td></td>
    </tr>
    <tr>
        <td>原因短句</td>
        <td>对状态码的解释</td>
    </tr>
    <tr>
        <td rowspan="8" align="center" style="writing-mode: tb-rl;">响应头信息</td>
        <td>Access-Control-Allow-Origin</td>
        <td>跨域有关</td>
    </tr>
    <tr>
        <td rowspan="7">Content-Type</td>
        <td>响应主体的数据类型(非常多)</td>
    </tr>
    <tr>
        <td>text/html &nbsp;响应内容是html </td>
    </tr>
    <tr>
        <td>text/css &nbsp; 响应内容是css</td>
    </tr>
    <tr>
        <td>application/javascript &nbsp;响应内容是js</td>
    </tr>
    <tr>
        <td>image/* &nbsp; &nbsp;响应内容是图片 </td>
    </tr>
    <tr>
        <td>application/json &nbsp;响应内容是json字符串</td>
    </tr>
    <tr>
        <td>...</td>
    </tr>
    <tr>
        <td >响应主体</td>
        <td colspan="2"></td>
    </tr>
</table>
<h2 id="ajax简述" tabindex="-1"><a class="header-anchor" href="#ajax简述" aria-hidden="true">#</a> AJAX简述</h2>
<p>即无表单的请求。</p>
<ol>
<li><strong>A</strong>synchronous <strong>J</strong>avaScript <strong>A</strong>nd <strong>X</strong>ML 是异步的Javascript和XML</li>
<li>是一种标准的<strong>新方法</strong>,并非一门新语言</li>
<li><strong>特点</strong>：与服务器交互更新页面中的部分内容,而不需要刷新整个页面</li>
<li>AJAX请求不需要表单(<strong>from</strong>)</li>
</ol>
<h3 id="what-ajax是什么" tabindex="-1"><a class="header-anchor" href="#what-ajax是什么" aria-hidden="true">#</a> WHAT AJAX是什么</h3>
<p>即JavaScript提供的异步对象,通过异步对象完成数据的交互</p>
<h3 id="why-为什么学习-使用-ajax" tabindex="-1"><a class="header-anchor" href="#why-为什么学习-使用-ajax" aria-hidden="true">#</a> WHY 为什么学习/使用 AJAX</h3>
<ul>
<li>局部刷新网页数据的交互技术</li>
<li>通过异步方式完成交互</li>
<li>可在同页面执行多个工作/程序/功能</li>
</ul>
<h3 id="when-什么时候使用ajax" tabindex="-1"><a class="header-anchor" href="#when-什么时候使用ajax" aria-hidden="true">#</a> WHEN 什么时候使用AJAX</h3>
<p>需要只更新部分数据,或者需要同时执行多个任务时</p>
<h3 id="how-如何使用ajax" tabindex="-1"><a class="header-anchor" href="#how-如何使用ajax" aria-hidden="true">#</a> HOW 如何使用AJAX</h3>
<ol>
<li>创建异步对象</li>
<li>绑定监听(原顺序为4),从监听事件中获得结果数据</li>
<li>创建请求,打开与服务器之间的链接</li>
<li>发送请求</li>
</ol>
<h2 id="核心技术" tabindex="-1"><a class="header-anchor" href="#核心技术" aria-hidden="true">#</a> 核心技术</h2>
<ol>
<li>使用 <strong>DOM模型交互</strong> 和 <strong>动态显示</strong></li>
<li>使用 <strong>XMLHttpRequest</strong> 和服务器进行 <strong>异步通信</strong></li>
<li><strong>AJAX的核心</strong> 就是 <strong>XMLHttpRequest对象</strong> ,不同的浏览器方法可能存在不同(例如ie8以下版本)</li>
<li>使用JavaScript来绑定和调用</li>
</ol>
<h2 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程" aria-hidden="true">#</a> 工作流程</h2>
<ol>
<li>有HTML元素触发事件,创建XHR对象</li>
<li>通过XHR对象向服务器发送异步的HTTP请求</li>
<li>服务器收到请求并处理,把结果返回给XHR对象</li>
<li>XHR对象接收服务器响应的结果,通过JS来刷新页面的元素,响应的数据类型一般为JSON或XML</li>
</ol>
<h2 id="状态值" tabindex="-1"><a class="header-anchor" href="#状态值" aria-hidden="true">#</a> 状态值</h2>
<p>即AJAX所经历的几种状态,在AJAX运行中,是经历多种状态完成的</p>
<table>
<thead>
<tr>
<th style="text-align:center">值</th>
<th style="text-align:center">名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">0</td>
<td style="text-align:center">未初始化</td>
<td>尚未调用send方法</td>
</tr>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">载入</td>
<td>已调用send方法,正发送请求</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">载入完成</td>
<td>send方法已执行完毕</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">交互</td>
<td>正在解析响应内容</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">完成</td>
<td>响应内容解析完成,可以在客户端调用</td>
</tr>
</tbody>
</table>
<h2 id="请求4步" tabindex="-1"><a class="header-anchor" href="#请求4步" aria-hidden="true">#</a> 请求4步</h2>
<ul>
<li><strong><code v-pre>第1步</code></strong> 创建XHR异步对象
<ul>
<li>常见浏览器: <code v-pre>var xhr = new XMLHttpRequest();</code></li>
<li>ie(8以下)浏览器: ActiveX对象 <code v-pre>var xhr = new ActiveXObject(Microsoft.XMLHTTP);</code></li>
</ul>
</li>
<li><strong><code v-pre>第2步</code></strong> 创建请求
<ul>
<li><code v-pre>xhr.open</code>(<code v-pre>请求方法</code>,<code v-pre>请求url(路由/接口/地址)</code>,<code v-pre>是否异步</code>);`</li>
<li><code v-pre>xhr.open</code>(<code v-pre>'get'</code>,<code v-pre>'/user'</code>,<code v-pre>true</code>);`</li>
<li>如果<code v-pre>是否异步</code>为true,则需要一个回调函数,即<code v-pre>xhr.onreadystatechange</code>,该属性返回一个匿名函数<code v-pre>xhr.onreadystatechange = () =&gt; {}</code></li>
</ul>
</li>
<li><strong><code v-pre>第4步</code></strong> 接收响应数据(实际开发中会将此步提前)</li>
<li><strong><code v-pre>第3步</code></strong> 发送请求
<ul>
<li><code v-pre>xhr.send</code></li>
</ul>
</li>
</ul>
<p><code v-pre>DEMO</code> AJAX4步 响应学子商城user列表,需要express框架支持<br>
<RouterLink to="/Code/PROJECT/%E5%AD%A6%E5%AD%90%E5%95%86%E5%9F%8E.html#%E6%95%B0%E6%8D%AE%E5%BA%93%E6%96%87%E4%BB%B6">学子商城数据库</RouterLink></p>
<p>文件目录：<br>
xy</p>
<ul>
<li>public
<ul>
<li>ajax.html</li>
</ul>
</li>
<li>app.js</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h1</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">此处是ajax页面</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h1</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">button</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">onclick</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #82AAFF">getUser</span><span style="color: #C3E88D">()</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">点击触发ajax</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">button</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">div</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">d1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;/</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #C792EA">function</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">getUser</span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">ajax被触发了~</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// ajax四步走</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// 1. 创建XHR异步对象</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #C792EA">var</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">xhr</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF">new</span><span style="color: #F07178"> </span><span style="color: #82AAFF">XMLHttpRequest</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">xhr</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// 2. 创建请求</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// xhr.open(请求方法,请求url,是否异步)</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">xhr</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">open</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">get</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">/user</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">true</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// 3. 发送请求</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">xhr</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">send</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// 4. 接受响应数据</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// 当readySate属性发生变化时就调用该函数</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">xhr</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">onreadystatechange</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF">()</span><span style="color: #F07178"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #F07178"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">            </span><span style="color: #545454; font-style: italic">// 响应信息保存在xhr.responseText</span></span>
<span class="line"><span style="color: #F07178">            </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">xhr</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">responseText</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> express </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">express</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> mysql </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">mysql</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> app </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">express</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> port </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">8080</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">listen</span><span style="color: #EEFFFF">(port</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">`</span><span style="color: #C3E88D">服务器已启动,监听端口: </span><span style="color: #89DDFF">${</span><span style="color: #EEFFFF">port</span><span style="color: #89DDFF">}</span><span style="color: #C3E88D">!</span><span style="color: #89DDFF">`</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 创建数据库连接池</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> pool </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> mysql</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">createPool</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #F07178">host</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">127.0.0.1</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #F07178">port</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3306</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #F07178">user</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">root</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #F07178">password</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #F07178">database</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">xz</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #F07178">connectionLimit</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">15</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 设置静态资源托管</span></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">use</span><span style="color: #EEFFFF">(express</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">static</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">public</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 设置请求体解析</span></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">use</span><span style="color: #EEFFFF">(express</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">urlencoded</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #F07178">extended</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FF9CAC">false</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 以下内容全部遵循RestFul接口规范 </span></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">get</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">/user</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> res</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// 执行sql</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #C792EA">let</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">sql</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">SELECT * FROM xz_user</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">pool</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">query</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">sql</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">err</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">result</span><span style="color: #89DDFF">)</span><span style="color: #F07178"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #F07178"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// 如果有错误,响应错误</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">err</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">            </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">send</span><span style="color: #F07178">(</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">                status</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #F78C6C">500</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #F07178">                msg</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">server error</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #F07178">            </span><span style="color: #89DDFF">}</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">            </span><span style="color: #545454; font-style: italic">// 终止代码继续执行</span></span>
<span class="line"><span style="color: #F07178">            </span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// 没有错误响应内容</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">result</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">length</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&gt;</span><span style="color: #F07178"> </span><span style="color: #F78C6C">0</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">            </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">send</span><span style="color: #F07178">(</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">                status</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #F78C6C">200</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #F07178">                msg</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">ok</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #F07178">                data</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">result</span></span>
<span class="line"><span style="color: #F07178">            </span><span style="color: #89DDFF">}</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #89DDFF">}</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">else</span><span style="color: #F07178"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">            </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">send</span><span style="color: #F07178">(</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">                status</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #F78C6C">400</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #F07178">                msg</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">未查到数据信息</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #F07178">            </span><span style="color: #89DDFF">}</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">}</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2>
<h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3>
<ol>
<li>无刷新更新数据</li>
<li>异步通信</li>
<li>前后端负载平衡</li>
<li>基于标准的广泛使用
...</li>
</ol>
<h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3>
<ol>
<li>网络延迟</li>
<li>动态数据下,浏览器无法返回上步数据
...</li>
</ol>
</div></template>
