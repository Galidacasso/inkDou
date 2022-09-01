<template><div><h1 id="http模块" tabindex="-1"><a class="header-anchor" href="#http模块" aria-hidden="true">#</a> <strong>HTTP模块</strong></h1>
<p>在express框架中已经优化了该模块，本身存在大量的底层操作和思想，提供了快捷的方法,用来创建HTTP的一些客户端和服务器端的应用。<br>
<strong>客户端</strong>：浏览器<br>
<strong>服务器端</strong>：提供数据和功能</p>
<h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2>
<p>HTTP是一种 <code v-pre>请求</code>←→<code v-pre>响应</code> 的协议,指定客户端给服务器端发送信息，服务器端返回信息。<br>
<strong>请求</strong>：由客户端发送用来出发一个服务器上的动作。<br>
<strong>响应</strong>：来自服务器的应答。（比如:服务器把天气数据返回给浏览器）</p>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<p><a href="http://t.weather.itboy.net/api/weather/city/101030100" target="_blank" rel="noopener noreferrer">itboy<ExternalLinkIcon/></a><br>
天津：101030100<br>
<strong>请求</strong>：通过浏览器请一个城市天气的情况。<br>
<strong>响应</strong>：服务器把天气数据返回给浏览器。</p>
<h2 id="general" tabindex="-1"><a class="header-anchor" href="#general" aria-hidden="true">#</a> General</h2>
<p><code v-pre>Request URL</code>: 请求网址<br>
<code v-pre>Request Method</code>: 请求方法<br>
<code v-pre>Status Code</code>: HTTP状态码</p>
<h3 id="http状态码" tabindex="-1"><a class="header-anchor" href="#http状态码" aria-hidden="true">#</a> HTTP状态码</h3>
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
<h3 id="请求对象-request" tabindex="-1"><a class="header-anchor" href="#请求对象-request" aria-hidden="true">#</a> 请求对象 Request</h3>
<p>缩写成req，会根据请求的内容而变化。</p>
<p><code v-pre>path</code>: 请求地址<br>
<code v-pre>method</code>: 请求方法<br>
<code v-pre>Content-Type</code>: 请求数据内容的类型</p>
<h3 id="响应对象-response" tabindex="-1"><a class="header-anchor" href="#响应对象-response" aria-hidden="true">#</a> 响应对象 Response</h3>
<p>缩写成res。<br>
<code v-pre>Content-Type</code>: 响应数据内容的类型</p>
<h2 id="模拟客户端浏览器行为" tabindex="-1"><a class="header-anchor" href="#模拟客户端浏览器行为" aria-hidden="true">#</a> 模拟客户端浏览器行为</h2>
<p>http模块可以模拟用户使用浏览器向服务器发起请求</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 引入模块</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> http </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">http</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 固定写法</span></span>
<span class="line"><span style="color: #C792EA">let</span><span style="color: #EEFFFF"> url </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">http://t.weather.itboy.net/api/weather/city/101030100</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">http</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">get</span><span style="color: #EEFFFF">(url</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// res是关于响应对象中的一大坨信息</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// 事件监听(固定的)</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">on</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">data</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">chunk</span><span style="color: #89DDFF">)</span><span style="color: #F07178"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #F07178"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">chunk</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toString</span><span style="color: #F07178">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">}</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建服务器应用" tabindex="-1"><a class="header-anchor" href="#创建服务器应用" aria-hidden="true">#</a> 创建服务器应用</h2>
<p>http模块可以创建服务器应用，向客户端响应数据。</p>
<h3 id="搭建服务器-共3步" tabindex="-1"><a class="header-anchor" href="#搭建服务器-共3步" aria-hidden="true">#</a> <strong>搭建服务器（共3步）</strong></h3>
<p>1.引入模块</p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> http </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">http</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre></div><p>2.创建web服务器</p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> app </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> http</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">createServer</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre></div><p>3.监听端口</p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">listen</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">8080</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">  </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">服务器已启动</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre></div><h3 id="事件的监听" tabindex="-1"><a class="header-anchor" href="#事件的监听" aria-hidden="true">#</a> 事件的监听</h3>
<p>通过服务器的搭建、事件的监听，可以检测从浏览器发来请求<br>
<strong>事件监听</strong><Badge text="固定写法" /></p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">on</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">request</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,(</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">)</span><span style="color: #C792EA">=&gt;</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">  </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">有请求从浏览器中飞过来~</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">  </span><span style="color: #545454; font-style: italic">// 设置响应内容</span></span>
<span class="line"><span style="color: #F07178">  </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">write</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;&#39;</span><span style="color: #F07178">)</span></span>
<span class="line"><span style="color: #89DDFF">  </span><span style="color: #545454; font-style: italic">// 结束响应,否则拿不到服务器响应的数据</span></span>
<span class="line"><span style="color: #F07178">  </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">end</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre></div><p><strong><code v-pre>DEMO</code></strong> 创建web服务器</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 引入模块</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> http </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">http</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 创建WEB服务器</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> app </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> http</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">createServer</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 监听端口</span></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">listen</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">8080</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">  </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">服务器已启动</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 测试地址127.0.0.1:8080 || localhost:8080</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 通过事件监听,监测是否有从浏览器发送来的请求</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 固定写法</span></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">on</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">request</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> res</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">  </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">有请求从浏览器中传送过来</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">  </span><span style="color: #545454; font-style: italic">// 设置响应内容</span></span>
<span class="line"><span style="color: #89DDFF">  </span><span style="color: #545454; font-style: italic">//   res.write(&#39;hello world&#39;)</span></span>
<span class="line"><span style="color: #89DDFF">  </span><span style="color: #545454; font-style: italic">//  如果需要响应中文,需要设置响应流</span></span>
<span class="line"><span style="color: #F07178">  </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">writeHead</span><span style="color: #F07178">(</span><span style="color: #F78C6C">200</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">ok</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">Content-Type</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">text/html;charset=utf-8</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #F07178">  </span><span style="color: #89DDFF">}</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">  </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">write</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">hello world</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">  </span><span style="color: #545454; font-style: italic">// 结束响应,否则拿不到服务器响应的数据</span></span>
<span class="line"><span style="color: #F07178">  </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">end</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">注意</p>
<p>修改了服务器端代码,必须重启服务器。</p>
</div>
<h2 id="简易服务器演示" tabindex="-1"><a class="header-anchor" href="#简易服务器演示" aria-hidden="true">#</a> 简易服务器演示</h2>
<h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3>
<ul>
<li>文件夹
<ul>
<li>app.js</li>
<li>list.html</li>
</ul>
</li>
</ul>
<h3 id="app-js" tabindex="-1"><a class="header-anchor" href="#app-js" aria-hidden="true">#</a> app.js</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 引入模块</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> http </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">http</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> fs </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">fs</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 创建WEB服务器</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> app </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> http</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">createServer</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 监听端口</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 在自己的浏览器中输入地址访问测试: http://127.0.0.1:8080/</span></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">listen</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">8080</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">服务器已经启动~</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 通过事件监听,监测是否有从浏览器发送来的请求</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 固定的写法</span></span>
<span class="line"><span style="color: #EEFFFF">app</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">on</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">request</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> res</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">有请求流传输过来</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// 如果想要响应中文,需要单独设置请求头</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">writeHead</span><span style="color: #F07178">(</span><span style="color: #F78C6C">200</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">ok</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">Content-Type</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">text/html;charset=utf8</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">}</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// 能不能根据不同的请求返回不同的内容  ==&gt; req请求对象</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">url</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// 如果请求的是首页,响应 &quot;这里是首页&quot;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">url</span><span style="color: #F07178"> </span><span style="color: #89DDFF">==</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">/</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">write</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">清明节也要</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">end</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// 如果请求的是登录,响应 &quot;这里是登录页&quot;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">}</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">else</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">url</span><span style="color: #F07178"> </span><span style="color: #89DDFF">==</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">/login</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">write</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">这里是登录页</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">end</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// 请求list返回一个list.html</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">}</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">else</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">req</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">url</span><span style="color: #F07178"> </span><span style="color: #89DDFF">==</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">/list</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// 响应html页面</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// res.write()可以接受string和buffer类型的数据</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #C792EA">let</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">fileBuf</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">fs</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">readFileSync</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">list.html</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">write</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">fileBuf</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">end</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">}</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">else</span><span style="color: #F07178"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">write</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">来到了没有申哥的荒原~~</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">end</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list-html" tabindex="-1"><a class="header-anchor" href="#list-html" aria-hidden="true">#</a> list.html</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;!</span><span style="color: #F07178">DOCTYPE</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">html</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">html</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">en</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">head</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">meta</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">charset</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">UTF-8</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">meta</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">http-equiv</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">X-UA-Compatible</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">content</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">IE=edge</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">meta</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">viewport</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">content</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">width=device-width, initial-scale=1.0</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">title</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">Document</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">title</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">head</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">body</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">ul</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">li</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">这里是列表</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">li</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">li</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">这里是列表</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">li</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">li</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">这里是列表</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">li</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">ul</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">body</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">html</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
