<template><h1 id="日期时间对象" tabindex="-1"><a class="header-anchor" href="#日期时间对象" aria-hidden="true">#</a> 日期时间对象</h1>
<p>创建</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022/3/25 22:13:23'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 时间戳形式 距离计算机元年(1970) 0点0分0秒的毫秒数</span>
<span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">1674515165155</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取当前时间 东8区</span>
<span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th>说明</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>.get</strong></td>
<td><strong>获取</strong></td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.~~getYear()~~ </code></td>
<td>获取年</td>
<td>已弃用</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.getFullYear()</code></td>
<td>获取<code v-pre>年</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.getMonth()</code></td>
<td>获取<code v-pre>月</code></td>
<td>0~11</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.getDate()</code></td>
<td>获取<code v-pre>月中的天</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.getDay()</code></td>
<td>获取<code v-pre>周中的天</code></td>
<td>0~6,星期日为每周第一天</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.getHours()</code></td>
<td>获取<code v-pre>小时</code></td>
<td>0~24</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.getMinutes()</code></td>
<td>获取<code v-pre>分钟</code></td>
<td>0~59</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.getSeconds()</code></td>
<td>获取<code v-pre>秒钟</code></td>
<td>0~59</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.getMilliseconds()</code></td>
<td>获取<code v-pre>毫秒</code></td>
<td>0~999</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.getTime() </code></td>
<td>获取<code v-pre>时间戳</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left"><strong>.toLocale</strong></td>
<td><strong>格式化本地</strong></td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.toLocaleDateString()</code></td>
<td>格式化本地<code v-pre>日期</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.toLocaleTimeString()</code></td>
<td>格式化本地<code v-pre>时间</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.toLocaleString()</code></td>
<td>格式化本地<code v-pre>日期和时间</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left"><strong>.set</strong></td>
<td><strong>设置</strong></td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.setFullYear()</code></td>
<td>设置<code v-pre>年</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.setMonth()</code></td>
<td>设置<code v-pre>月</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.setDate()</code></td>
<td>设置<code v-pre>月中的天</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.setHours()</code></td>
<td>设置<code v-pre>时</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.setMinutes()</code></td>
<td>设置<code v-pre>分</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.setSeconds()</code></td>
<td>设置<code v-pre>秒</code></td>
<td>--</td>
</tr>
</tbody>
</table>
<p><code v-pre>DEMO</code> 日期时间对象的<code v-pre>获取</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 年 getYear被弃用 返回值是不确定的</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 月 0 ~ 11</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 月中的某一天</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 周中的某一天 0 ~ 6 星期日是每周的第一天</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 小时 0 ~ 23</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 分钟 0 ~ 59</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 秒钟 0 ~ 59</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 毫秒 0 ~ 999</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getMilliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 计算机元年毫秒数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><code v-pre>DEMO</code> 日期时间对象的<code v-pre>本地格式化</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 格式化本地日期</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 格式化本地时间</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 格式化本地日期和时间</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code v-pre>DEMO</code> 日期时间对象的<code v-pre>设置</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

date<span class="token punctuation">.</span><span class="token function">setFullYear</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 月</span>
date<span class="token punctuation">.</span><span class="token function">setMonth</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 月中的某一天</span>
date<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 时</span>
date<span class="token punctuation">.</span><span class="token function">setHours</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 分</span>
date<span class="token punctuation">.</span><span class="token function">setMinutes</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 秒</span>
date<span class="token punctuation">.</span><span class="token function">setSeconds</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="时间戳" tabindex="-1"><a class="header-anchor" href="#时间戳" aria-hidden="true">#</a> 时间戳</h2>
<p>时间戳是指<code v-pre>计算机元</code>年[格林威治时间1970年01⽉01⽇00时00分00秒(北京时间1970年01⽉01⽇08时00分00秒)]起⾄现在的<code v-pre>总秒数</code>。</p>
<p><code v-pre>DEMO</code> 获取当前时间戳的⽅法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//不推荐使⽤，因为毫秒级别的数值被转化为000 ，不准确！</span>
<span class="token keyword">var</span> timestamp <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//获取当前毫秒的时间戳，准确！</span>
<span class="token keyword">var</span> timestamp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//返回数值单位是毫秒</span>
<span class="token keyword">var</span> timestamp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code v-pre>DEMO</code> 获取<code v-pre>当前时间</code>的时间戳⽅法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//不推荐使⽤，因为毫秒级别的数值被转化为000 ，不准确！</span>
<span class="token keyword">var</span> timestamp <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//获取当前毫秒的时间戳，准确！</span>
<span class="token keyword">var</span> timestamp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//返回数值单位是毫秒</span>
<span class="token keyword">var</span> timestamp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code v-pre>DEMO</code> 获取<code v-pre>指定时间</code>的时间戳⽅法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> timestamp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">"2018/06/22 08:00:20"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code v-pre>DEMO</code> 时间戳转化为时间</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">var</span> timestamp<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">1472025255555</span><span class="token punctuation">)</span>
<span class="token comment">// 其中注意时间戳⼀定要是int型，否则转换失败。parseInt()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
