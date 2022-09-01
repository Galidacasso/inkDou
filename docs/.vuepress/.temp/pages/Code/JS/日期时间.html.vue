<template><h1 id="日期时间对象" tabindex="-1"><a class="header-anchor" href="#日期时间对象" aria-hidden="true">#</a> 日期时间对象</h1>
<h2 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> date </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">2022/3/25 22:13:23</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> date </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">2022</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">25</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">22</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">13</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">23</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 时间戳形式 距离计算机元年(1970) 0点0分0秒的毫秒数</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> date </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1674515165155</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 获取当前时间 东8区</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> date </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
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
<td style="text-align:left">.<s>getYear()</s></td>
<td>获取年</td>
<td>已弃用</td>
</tr>
<tr>
<td style="text-align:left">.getFullYear()</td>
<td>获取<code v-pre>年</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left">.getMonth()</td>
<td>获取<code v-pre>月</code></td>
<td>0~11</td>
</tr>
<tr>
<td style="text-align:left">.getDate()</td>
<td>获取<code v-pre>月中的天</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left">.getDay()</td>
<td>获取<code v-pre>周中的天</code></td>
<td>0~6,星期日为每周第一天</td>
</tr>
<tr>
<td style="text-align:left">.getHours()</td>
<td>获取<code v-pre>小时</code></td>
<td>0~24</td>
</tr>
<tr>
<td style="text-align:left">.getMinutes()</td>
<td>获取<code v-pre>分钟</code></td>
<td>0~59</td>
</tr>
<tr>
<td style="text-align:left">.getSeconds()</td>
<td>获取<code v-pre>秒钟</code></td>
<td>0~59</td>
</tr>
<tr>
<td style="text-align:left">.getMilliseconds()</td>
<td>获取<code v-pre>毫秒</code></td>
<td>0~999</td>
</tr>
<tr>
<td style="text-align:left">.getTime()</td>
<td>获取<code v-pre>时间戳</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left"><strong>.toLocale</strong></td>
<td><strong>格式化本地</strong></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">.toLocaleDateString()</td>
<td>格式化本地<code v-pre>日期</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left">.toLocaleTimeString()</td>
<td>格式化本地<code v-pre>时间</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left">.toLocaleString()</td>
<td>格式化本地<code v-pre>日期和时间</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left"><strong>.set</strong></td>
<td><strong>设置</strong></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">.setFullYear()</td>
<td>设置<code v-pre>年</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left">.setMonth()</td>
<td>设置<code v-pre>月</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left">.setDate()</td>
<td>设置<code v-pre>月中的天</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left">.setHours()</td>
<td>设置<code v-pre>时</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left">.setMinutes()</td>
<td>设置<code v-pre>分</code></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:left">.setSeconds()</td>
<td>设置<code v-pre>秒</code></td>
<td>--</td>
</tr>
</tbody>
</table>
<p><code v-pre>DEMO</code> 日期时间对象的<code v-pre>获取</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> date </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 年 getYear被弃用 返回值是不确定的</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">getFullYear</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 月 0 ~ 11</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">getMonth</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 月中的某一天</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">getDate</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 周中的某一天 0 ~ 6 星期日是每周的第一天</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">getDay</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 小时 0 ~ 23</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">getHours</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 分钟 0 ~ 59</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">getMinutes</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 秒钟 0 ~ 59</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">getSeconds</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 毫秒 0 ~ 999</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">getMilliseconds</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 计算机元年毫秒数</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">getTime</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><code v-pre>DEMO</code> 日期时间对象的<code v-pre>本地格式化</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> date </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 格式化本地日期</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toLocaleDateString</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 格式化本地时间</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toLocaleTimeString</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 格式化本地日期和时间</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toLocaleString</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code v-pre>DEMO</code> 日期时间对象的<code v-pre>设置</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> date </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">setFullYear</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">2000</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toLocaleString</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 月</span></span>
<span class="line"><span style="color: #EEFFFF">date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">setMonth</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">3</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toLocaleString</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 月中的某一天</span></span>
<span class="line"><span style="color: #EEFFFF">date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">setDate</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">3</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toLocaleString</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 时</span></span>
<span class="line"><span style="color: #EEFFFF">date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">setHours</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toLocaleString</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 分</span></span>
<span class="line"><span style="color: #EEFFFF">date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">setMinutes</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">11</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toLocaleString</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 秒</span></span>
<span class="line"><span style="color: #EEFFFF">date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">setSeconds</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">12</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toLocaleString</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="时间戳" tabindex="-1"><a class="header-anchor" href="#时间戳" aria-hidden="true">#</a> 时间戳</h2>
<p>时间戳是指<code v-pre>计算机元</code>年[格林威治时间1970年01⽉01⽇00时00分00秒(北京时间1970年01⽉01⽇08时00分00秒)]起⾄现在的<code v-pre>总秒数</code>。</p>
<p><code v-pre>DEMO</code> 获取当前时间戳的⽅法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">//不推荐使⽤，因为毫秒级别的数值被转化为000 ，不准确！</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> timestamp </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">parse</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">//获取当前毫秒的时间戳，准确！</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> timestamp </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> (</span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">valueOf</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">//返回数值单位是毫秒</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> timestamp </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">getTime</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code v-pre>DEMO</code> 获取<code v-pre>当前时间</code>的时间戳⽅法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">//不推荐使⽤，因为毫秒级别的数值被转化为000 ，不准确！</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> timestamp </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">parse</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">//获取当前毫秒的时间戳，准确！</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> timestamp </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> (</span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">valueOf</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">//返回数值单位是毫秒</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> timestamp </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">getTime</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code v-pre>DEMO</code> 获取<code v-pre>指定时间</code>的时间戳⽅法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> timestamp </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> (</span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">2018/06/22 08:00:20</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">getTime</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">/</span><span style="color: #F78C6C">1000</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code v-pre>DEMO</code> 时间戳转化为时间</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> timestamp</span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Date</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1472025255555</span><span style="color: #EEFFFF">)</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 其中注意时间戳⼀定要是int型，否则转换失败。parseInt()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
