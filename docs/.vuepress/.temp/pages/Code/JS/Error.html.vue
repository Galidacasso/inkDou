<template><div><h1 id="error对象" tabindex="-1"><a class="header-anchor" href="#error对象" aria-hidden="true">#</a> Error对象</h1>
<p>Error对象在错误发生的时候提示信息(抛出Error对象的实例化对象),其他错误都继承于该类型
ES定义了6个错误类型</p>
<table>
<thead>
<tr>
<th>错误类型</th>
<th>说明</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>ReferenceError</td>
<td>引用错误</td>
<td></td>
</tr>
<tr>
<td>SyntaxError</td>
<td>语法错误</td>
<td></td>
</tr>
<tr>
<td>TypeError</td>
<td>类型错误</td>
<td></td>
</tr>
<tr>
<td>RangeError</td>
<td>范围错误</td>
<td>表示一个在不在正常的范围内(内存溢出时会发生这样的错误)</td>
</tr>
<tr>
<td>URIError</td>
<td>错误的使用了全局URI函数</td>
<td></td>
</tr>
<tr>
<td>EvalError</td>
<td>全局eval()函数有关的错误</td>
<td>当前版本的js已经不会再抛出该异常</td>
</tr>
</tbody>
</table>
<p><code v-pre>DEMO</code> ReferenceError 引用错误</p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(a)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #FFCB6B">ReferenceError</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> a is not defined</span></span>
<span class="line"></span></code></pre></div><p><code v-pre>DEMO</code> SyntaxError 语法错误</p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #FFCB6B">SyntaxError</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> Unexpected token </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">(</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"></span></code></pre></div><p><code v-pre>DEMO</code> TypeError 类型错误</p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">logg</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #FFCB6B">TypeError</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> console</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">logg is not a </span><span style="color: #C792EA">function</span></span>
<span class="line"></span></code></pre></div><h2 id="自定义错误并抛出" tabindex="-1"><a class="header-anchor" href="#自定义错误并抛出" aria-hidden="true">#</a> 自定义错误并抛出</h2>
<p><code v-pre>throw()</code> 用来抛出用户自定义的异常(错误error),后续代码不会被执行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> age </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">188</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 自定义错误</span></span>
<span class="line"><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #EEFFFF"> (age </span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">19</span><span style="color: #EEFFFF">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// 抛出异常</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF; font-style: italic">throw</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">AgeError: 年龄错误</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h2>
<p><code v-pre>try()</code> &amp; <code v-pre>catch()</code> 必须成双成对的出现,处理可预知的异常</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> age </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">188</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF; font-style: italic">try</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// 抛出异常</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">age</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&gt;</span><span style="color: #F07178"> </span><span style="color: #F78C6C">19</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// 抛出异常</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #89DDFF; font-style: italic">throw</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">AgeError: 年龄错误</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF; font-style: italic">catch</span><span style="color: #EEFFFF"> (error) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">error</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// 捕获在try抛出的异常并处理</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">age</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #F78C6C">18</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(age)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
