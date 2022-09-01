<template><h1 id="复杂选择器" tabindex="-1"><a class="header-anchor" href="#复杂选择器" aria-hidden="true">#</a> 复杂选择器</h1>
<p>复杂选择器是建立在基础选择器之上的对基础选择器进行组合的形式。</p>
<h2 id="兄弟选择器" tabindex="-1"><a class="header-anchor" href="#兄弟选择器" aria-hidden="true">#</a> 兄弟选择器</h2>
<p>具备同一个父元素的平级元素之间，称为兄弟元素。<br>
兄弟选择器，就是依托兄弟元素进行选择的一种方式，只能通过哥哥找弟弟，往后找，不能往前找。</p>
<h3 id="相邻兄弟选择器" tabindex="-1"><a class="header-anchor" href="#相邻兄弟选择器" aria-hidden="true">#</a> 相邻兄弟选择器</h3>
<p>紧挨着选择器1，符合选择器2的兄弟</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">选择器1</span><span style="color: #89DDFF">+</span><span style="color: #EEFFFF">选择器2</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="通用兄弟选择器" tabindex="-1"><a class="header-anchor" href="#通用兄弟选择器" aria-hidden="true">#</a> 通用兄弟选择器</h3>
<p>选择器1后，所有符合选择器2的兄弟</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">选择器1</span><span style="color: #89DDFF">~</span><span style="color: #EEFFFF">选择器2</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="应用场合" tabindex="-1"><a class="header-anchor" href="#应用场合" aria-hidden="true">#</a> 应用场合</h3>
<p>多用于除了第一个元素以外，其他兄弟都要使用的样式。<br>
相邻兄弟选择器效率更高。</p>
<h2 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h2>
<p>选择含有某属性的元素</p>
<h3 id="匹配具备attr属性的元素" tabindex="-1"><a class="header-anchor" href="#匹配具备attr属性的元素" aria-hidden="true">#</a> 匹配具备attr属性的元素</h3>
<p>如&lt;a <strong><code v-pre>href</code></strong>=&quot;www.baidu.com&quot;&gt;中的 <strong><code v-pre>href</code></strong> 属性。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">href</span><span style="color: #89DDFF">]{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="匹配同时具备attr1-attr2-的元素" tabindex="-1"><a class="header-anchor" href="#匹配同时具备attr1-attr2-的元素" aria-hidden="true">#</a> 匹配同时具备attr1,attr2...的元素</h3>
<p>如&lt;a <strong><code v-pre>href</code></strong>=&quot;www.baidu.com&quot; <strong><code v-pre>target</code></strong>=&quot;_blank&quot;&gt;</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">href</span><span style="color: #89DDFF">][</span><span style="color: #C792EA">target</span><span style="color: #89DDFF">]</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="匹配同时具备attr1-attr2-的elem元素" tabindex="-1"><a class="header-anchor" href="#匹配同时具备attr1-attr2-的elem元素" aria-hidden="true">#</a> 匹配同时具备attr1,attr2...的elem元素</h3>
<p>如&lt;a <strong><code v-pre>href</code></strong>=&quot;www.baidu.com&quot; <strong><code v-pre>target</code></strong>=&quot;_blank&quot;&gt;</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">a</span><span style="color: #89DDFF">[</span><span style="color: #C792EA">href</span><span style="color: #89DDFF">][</span><span style="color: #C792EA">target</span><span style="color: #89DDFF">]{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="匹配具有attr并且值为value的元素" tabindex="-1"><a class="header-anchor" href="#匹配具有attr并且值为value的元素" aria-hidden="true">#</a> 匹配具有attr并且值为value的元素</h3>
<p>如&lt;a <strong><code v-pre>href</code></strong>=&quot;www.baidu.com&quot; <strong><code v-pre>target</code></strong>=&quot;_blank&quot;&gt;</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">www.baidu.com</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">www.baidu.com</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">][</span><span style="color: #C792EA">target</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">_blank</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #FFCB6B">a</span><span style="color: #89DDFF">[</span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">www.baidu.com</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">][</span><span style="color: #C792EA">target</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">_blank</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="匹配value模糊查询" tabindex="-1"><a class="header-anchor" href="#匹配value模糊查询" aria-hidden="true">#</a> 匹配value模糊查询</h3>
<p>利用正则表达式对值进行模糊查询。</p>
<ul>
<li><strong><code v-pre>attr</code></strong> 的值以 <strong><code v-pre>value</code></strong> 开头的元素</li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">attr</span><span style="color: #89DDFF">^=</span><span style="color: #C3E88D">value</span><span style="color: #89DDFF">]{}</span></span>
<span class="line"></span></code></pre></div><ul>
<li><strong><code v-pre>attr</code></strong> 的值以 <strong><code v-pre>value</code></strong> 结尾的元素</li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">attr</span><span style="color: #89DDFF">$=</span><span style="color: #C3E88D">value</span><span style="color: #89DDFF">]{}</span></span>
<span class="line"></span></code></pre></div><ul>
<li><strong><code v-pre>attr</code></strong> 的值中含有 <strong><code v-pre>value</code></strong> 的元素</li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">attr</span><span style="color: #89DDFF">*=</span><span style="color: #C3E88D">value</span><span style="color: #89DDFF">]{}</span></span>
<span class="line"></span></code></pre></div><ul>
<li><strong><code v-pre>attr</code></strong> 的值中含有 <strong><code v-pre>value</code></strong> 这个<strong>单词</strong>的元素</li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">attr</span><span style="color: #89DDFF">~=</span><span style="color: #C3E88D">value</span><span style="color: #89DDFF">]{}</span></span>
<span class="line"></span></code></pre></div><h2 id="伪类选择器" tabindex="-1"><a class="header-anchor" href="#伪类选择器" aria-hidden="true">#</a> 伪类选择器</h2>
<h3 id="目标伪类" tabindex="-1"><a class="header-anchor" href="#目标伪类" aria-hidden="true">#</a> 目标伪类</h3>
<p>用于匹配元素在不同状态下的样式。</p>
<table>
<thead>
<tr>
<th style="text-align:left">选择器</th>
<th style="text-align:left">匹配状态</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">:link{}</td>
<td style="text-align:left">未访问时的状态</td>
</tr>
<tr>
<td style="text-align:left">:visited{}</td>
<td style="text-align:left">访问后的状态</td>
</tr>
<tr>
<td style="text-align:left">:hover{}</td>
<td style="text-align:left">鼠标悬停时的状态</td>
</tr>
<tr>
<td style="text-align:left">:active{}</td>
<td style="text-align:left">激活状态</td>
</tr>
</tbody>
</table>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">a</span><span style="color: #89DDFF">:</span><span style="color: #C792EA">hover</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="结构伪类" tabindex="-1"><a class="header-anchor" href="#结构伪类" aria-hidden="true">#</a> 结构伪类</h3>
<p>通过父子关系匹配元素</p>
<table>
<thead>
<tr>
<th style="text-align:left">选择器</th>
<th style="text-align:left">匹配状态</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">:first-child{}</td>
<td style="text-align:left">匹配父元素的第一个子元素</td>
</tr>
<tr>
<td style="text-align:left">:last-child{}</td>
<td style="text-align:left">匹配父元素的最后一个子元素</td>
</tr>
<tr>
<td style="text-align:left">:nth-child(<code v-pre>n</code>){}</td>
<td style="text-align:left">匹配父元素的第n个子元素</td>
</tr>
</tbody>
</table>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">div</span><span style="color: #89DDFF">:</span><span style="color: #C792EA">first-child</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #FFCB6B">li</span><span style="color: #89DDFF">:</span><span style="color: #C792EA">first-child</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #FFCB6B">li</span><span style="color: #89DDFF">:</span><span style="color: #C792EA">first-child</span><span style="color: #EEFFFF">(3)</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="empty" tabindex="-1"><a class="header-anchor" href="#empty" aria-hidden="true">#</a> empty</h3>
<p>匹配内部没有任何元素的标签，又称为 <code v-pre>丁克元素</code>
内部无标签、无文本、无文字、无空格、无回车</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">a</span><span style="color: #89DDFF">:</span><span style="color: #C792EA">empty</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="only-child" tabindex="-1"><a class="header-anchor" href="#only-child" aria-hidden="true">#</a> only-child</h3>
<p>匹配唯一子元素，又成为 <code v-pre>独生子元素</code><br>
只计算元素，文本/回车/空格不计算在内</p>
<ol>
<li>冒号前面的选择器是匹配子元素的，</li>
<li>子元素只能是唯一标签，但可以放普通文本与子元素平级</li>
</ol>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">span</span><span style="color: #89DDFF">:</span><span style="color: #C792EA">only-child</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #B2CCD6">color</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">red</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="not-selector" tabindex="-1"><a class="header-anchor" href="#not-selector" aria-hidden="true">#</a> not(selector)</h3>
<p>否定伪类，匹配不符合selector的元素。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">/*否定伪类:除了第一列以外，其他文本都斜体显示*/</span></span>
<span class="line"><span style="color: #FFCB6B">td</span><span style="color: #89DDFF">:</span><span style="color: #C792EA">not</span><span style="color: #89DDFF">(:</span><span style="color: #C792EA">first-child</span><span style="color: #89DDFF">){</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #B2CCD6">font-style</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> italic</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h2 id="伪元素选择器" tabindex="-1"><a class="header-anchor" href="#伪元素选择器" aria-hidden="true">#</a> 伪元素选择器</h2>
<p>伪元素，是用于设置元素制定部分的样式，可以用于设置元素的首字母、首行的样式，在元素的内容之前或之后插入内容。</p>
<h3 id="内容生成" tabindex="-1"><a class="header-anchor" href="#内容生成" aria-hidden="true">#</a> 内容生成</h3>
<p>使用css，给html添加元素，称之为伪元素内容生成。</p>
<h3 id="before-after" tabindex="-1"><a class="header-anchor" href="#before-after" aria-hidden="true">#</a> before &amp; after</h3>
<p><code v-pre>:before</code> | <code v-pre>::before</code> 在当前内容区域的起始处，添加一个伪元素，该伪元素属于当前元素的子元素，新添加的元素默认为行内元素，可以使用<code v-pre>display</code>修改。</p>
<p><code v-pre>:after</code> | <code v-pre>::after</code> 在当前内容区域的结束处，添加一个伪元素，该伪元素属于当前元素的子元素，可以使用<code v-pre>display</code>修改。</p>
<div class="language-html ext-html"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 忽略html结构 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">style</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">con1</span><span style="color: #89DDFF">::</span><span style="color: #C792EA">before</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #B2CCD6">content</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">con1的before伪元素</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #B2CCD6">color</span><span style="color: #89DDFF">:#</span><span style="color: #EEFFFF">3eaf7c</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">con2</span><span style="color: #89DDFF">::</span><span style="color: #C792EA">before</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #B2CCD6">content</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">con2的before伪元素</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #B2CCD6">color</span><span style="color: #89DDFF">:#</span><span style="color: #EEFFFF">990000</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">con2</span><span style="color: #89DDFF">::</span><span style="color: #C792EA">after</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #B2CCD6">content</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">con2的after伪元素</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #B2CCD6">display</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> block</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #B2CCD6">color</span><span style="color: #89DDFF">:#</span><span style="color: #EEFFFF">3a5169</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">style</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">class</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">con1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">con1的内容</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">class</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">con2</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">con2的内容</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre></div><blockquote>
<p><strong>输出</strong></p>
<p class="con1">con1的内容</p>
<p class="con2">con2的内容</p>
</blockquote>
<h3 id="解决高度坍塌" tabindex="-1"><a class="header-anchor" href="#解决高度坍塌" aria-hidden="true">#</a> 解决高度坍塌</h3>
<p>使用伪元素内容生成，可以解决高度坍塌问题</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">#</span><span style="color: #F78C6C">parent</span><span style="color: #89DDFF">:</span><span style="color: #C792EA">after</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #545454; font-style: italic">/*空的，块级，clear：both*/</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">content</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">display</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">block</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">clear</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">both</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="选择器权值" tabindex="-1"><a class="header-anchor" href="#选择器权值" aria-hidden="true">#</a> 选择器权值</h2>
<p><strong>权值</strong>，表示当前选择器的重要程度，权值越大，优先级越高。</p>
<table>
<thead>
<tr>
<th style="text-align:right">内容</th>
<th style="text-align:right">权值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">!important</td>
<td style="text-align:right">&gt;1000</td>
</tr>
<tr>
<td style="text-align:right">内联样式</td>
<td style="text-align:right">1000</td>
</tr>
<tr>
<td style="text-align:right">id选择器</td>
<td style="text-align:right">100</td>
</tr>
<tr>
<td style="text-align:right">类/伪类</td>
<td style="text-align:right">10</td>
</tr>
<tr>
<td style="text-align:right">元素选择器</td>
<td style="text-align:right">1</td>
</tr>
<tr>
<td style="text-align:right">通用选择器</td>
<td style="text-align:right">0</td>
</tr>
<tr>
<td style="text-align:right">继承的样式</td>
<td style="text-align:right">--</td>
</tr>
</tbody>
</table>
<h3 id="权值特点" tabindex="-1"><a class="header-anchor" href="#权值特点" aria-hidden="true">#</a> 权值特点</h3>
<ol>
<li>当一个选择器，包含多个选择器时，需要将所有的选择器权值进行相加，结果大的优先显示。</li>
<li>权值相同，使用就近原则。</li>
<li>群组选择器的权值，单独计算，不能相加。</li>
<li>如果样式后添加了!important，直接获得最高优先级。</li>
<li>选择器权值的计算，不会超过本身权值的最大数量级。（100个1权值选择器也不会大于10权值的选择器）</li>
</ol>
</template>

<style scoped>
.con1::before{
    content:"con1的before伪元素: ";
    color:#3eaf7c;
    font-weight: bolder
}
.con2::before{
    content: "con2的before伪元素: ";
    color:#4e6e8e;
    font-weight: bolder
}
.con2::after{
    content: "con2的after伪元素";
    color:#3a5169;
    display: block;
    font-weight: bolder
}
</style>
