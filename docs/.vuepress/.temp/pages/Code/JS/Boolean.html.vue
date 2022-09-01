<template><div><h1 id="boolean对象" tabindex="-1"><a class="header-anchor" href="#boolean对象" aria-hidden="true">#</a> Boolean对象</h1>
<h2 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h2>
<ul>
<li>构造函数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> bool </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Boolean</span><span style="color: #EEFFFF">(</span><span style="color: #FF9CAC">false</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> bool </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Boolean</span><span style="color: #EEFFFF">(</span><span style="color: #FF9CAC">true</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>字面量</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> bool </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p>.toString() 转字符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> bool </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(bool</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toString</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">// false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>DEMO</code> 基础类型布尔值和布尔对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 基础类型的false</span></span>
<span class="line"><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #EEFFFF"> (</span><span style="color: #FF9CAC">false</span><span style="color: #EEFFFF">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">真1</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF; font-style: italic">else</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">假1</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果为:假1</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 值为false的布尔对象</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> bool </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Boolean</span><span style="color: #EEFFFF">(</span><span style="color: #FF9CAC">false</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #EEFFFF"> (bool) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">真2</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF; font-style: italic">else</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">假2</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果为:真2</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 判断 是否为 布尔对象,并非为布尔对象的值</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>延展</code> 哪些值会被转化为false</p>
<table>
<thead>
<tr>
<th style="text-align:center">布尔</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><strong>false</strong></td>
<td><code v-pre>0</code> <code v-pre>0.0</code> <code v-pre>null</code> <code v-pre>undefined</code> <code v-pre>NaN</code> <code v-pre>空字符串(&quot;&quot;)</code></td>
</tr>
<tr>
<td style="text-align:center"><strong>true</strong></td>
<td><code v-pre>空数组</code> <code v-pre>空对象</code> <code v-pre>空值字符串(&quot; &quot;)</code></td>
</tr>
</tbody>
</table>
</div></template>
