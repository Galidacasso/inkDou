<template><h1 id="error对象" tabindex="-1"><a class="header-anchor" href="#error对象" aria-hidden="true">#</a> Error对象</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ReferenceError: a is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code v-pre>DEMO</code> SyntaxError 语法错误</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>SyntaxError: Unexpected token '('
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code v-pre>DEMO</code> TypeError 类型错误</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">logg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>TypeError: console.logg is not a function
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="自定义错误并抛出" tabindex="-1"><a class="header-anchor" href="#自定义错误并抛出" aria-hidden="true">#</a> 自定义错误并抛出</h2>
<p><code v-pre>throw()</code> 用来抛出用户自定义的异常(错误error),后续代码不会被执行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">188</span><span class="token punctuation">;</span>

<span class="token comment">// 自定义错误</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">></span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 抛出异常</span>
    <span class="token keyword">throw</span> <span class="token string">"AgeError: 年龄错误"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h2>
<p><code v-pre>try()</code> &amp; <code v-pre>catch()</code> 必须成双成对的出现,处理可预知的异常</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">188</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 抛出异常</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">></span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 抛出异常</span>
        <span class="token keyword">throw</span> <span class="token string">"AgeError: 年龄错误"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 捕获在try抛出的异常并处理</span>
    age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
