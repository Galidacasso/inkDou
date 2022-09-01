<template><h1 id="number对象" tabindex="-1"><a class="header-anchor" href="#number对象" aria-hidden="true">#</a> Number对象</h1>
<h2 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h2>
<ul>
<li>构造函数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> num </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Number</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> num </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Number</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>字面量</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> num </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1669</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p><code v-pre>toFixed()</code>可把 Number 四舍五⼊为指定⼩数位数的数字。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 保留小数位数</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1.23456</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toFixed</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(num</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toFixed</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
