<template><div><h1 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h1>
<p><strong>J</strong>ava<strong>S</strong>cript <strong>O</strong>bject <strong>N</strong>otation，即JS对象表现方式，是一种轻量级,用于数据交互的格式,取代笨重的XML。
JSON是以js对象或数组形式表现出来的字符串，简称JSON串。<br>
AJAX请求url后,响应的数据是JSON格式。<br>
<code v-pre>JSON.parse</code>可以将json格式的数据转化为<code v-pre>对象形式</code>。<br>
当服务器操作数据库之后，得到的result，在传递给前端之后自动就变成一个JSON。</p>
<h2 id="json解析" tabindex="-1"><a class="header-anchor" href="#json解析" aria-hidden="true">#</a> JSON解析</h2>
<p>把json字符串转换成js对象/js对象数组，这个行为就叫json解析<br>
做json解析的目的，因为要对数据，使用js的api进行处理</p>
<h2 id="json字符串的格式" tabindex="-1"><a class="header-anchor" href="#json字符串的格式" aria-hidden="true">#</a> JSON字符串的格式</h2>
<p>1.json中用一对{}来表示一个对象。<br>
2.json中所有的属性名称，必须使用双引号括起来，使用单引号，不会发生错误，但是建议使用双引号。<br>
3.json中的属性值，如果是字符串，也要带双引号。<br>
4.整个json是一个字符串，所以最外层要是用单引号包裹。</p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">{“uid”:123}</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> arr</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">[</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">{</span><span style="color: #F07178">“</span><span style="color: #EEFFFF">eid</span><span style="color: #F07178">”:</span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span><span style="color: #F07178">”</span><span style="color: #EEFFFF">ename</span><span style="color: #F07178">”:”</span><span style="color: #EEFFFF">TOM</span><span style="color: #F07178">”</span><span style="color: #89DDFF">,</span><span style="color: #F07178">”</span><span style="color: #EEFFFF">aget</span><span style="color: #F07178">”:</span><span style="color: #F78C6C">19</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">{</span><span style="color: #F07178">“</span><span style="color: #EEFFFF">eid</span><span style="color: #F07178">”:</span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span><span style="color: #F07178">”</span><span style="color: #EEFFFF">ename</span><span style="color: #F07178">”:”</span><span style="color: #EEFFFF">TOM</span><span style="color: #F07178">”</span><span style="color: #89DDFF">,</span><span style="color: #F07178">”</span><span style="color: #EEFFFF">aget</span><span style="color: #F07178">”:</span><span style="color: #F78C6C">19</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">]</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">;</span></span>
<span class="line"></span></code></pre></div><h2 id="语法解析" tabindex="-1"><a class="header-anchor" href="#语法解析" aria-hidden="true">#</a> 语法解析</h2>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> arr</span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF">JSON</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">parse</span><span style="color: #EEFFFF">(result)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre></div><p>arr就是一个js的对象数组，可以使用js的数组操作模式了</p>
</div></template>
