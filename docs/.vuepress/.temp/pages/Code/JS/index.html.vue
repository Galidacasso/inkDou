<template><div><br>
<div align = "center"><img src="https://pic2.zhimg.com/v2-55fc240f29404fe6032693100f36fcd8_1440w.jpg?source=172ae18b" ></div>
<h1 id="javascript简述" tabindex="-1"><a class="header-anchor" href="#javascript简述" aria-hidden="true">#</a> Javascript简述</h1>
<p>运行在解析器或引擎中的解释型脚本语言，用于特效、数据、DOM的Web页面交互</p>
<h4 id="学习路线" tabindex="-1"><a class="header-anchor" href="#学习路线" aria-hidden="true">#</a> 学习路线</h4>
<p>技术通识 <strong>→</strong> 变量与数据类型 <strong>→</strong> 运算符 <strong>→</strong> 流程控制 <strong>→</strong> 函数对象 <strong>→</strong> 第三方库和框架 <strong>→</strong> 项目实战</p>
<div class="custom-container tip"><p class="custom-container-title">简单的JS规范</p>
<ol>
<li>后缀名为 .js</li>
<li>只能嵌套在HTML或在运行环境中运行</li>
<li>JS中大小写敏感，应区分大小写</li>
</ol>
</div>
<h2 id="变量与赋值" tabindex="-1"><a class="header-anchor" href="#变量与赋值" aria-hidden="true">#</a> 变量与赋值</h2>
<p>在变量名相同的情况下, 后赋值的内容会覆盖先赋值的内容<br>
<code v-pre>typeof</code> 查看变量的数据类型</p>
<p><strong>变量赋值及数据类型</strong><Badge text="DEMO" /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 声明变量及赋值(=)</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// number</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> num </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 打印变量名即可</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(num)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">typeof</span><span style="color: #EEFFFF"> num)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 字符串</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">typeof</span><span style="color: #EEFFFF"> str)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 布尔类型</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> bool </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> bool </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(bool)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">typeof</span><span style="color: #EEFFFF"> bool)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// undefined</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> un</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(un)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2>
<h3 id="原始数据类型" tabindex="-1"><a class="header-anchor" href="#原始数据类型" aria-hidden="true">#</a> 原始数据类型</h3>
<table>
<thead>
<tr>
<th style="text-align:center">序号</th>
<th style="text-align:center">内容</th>
<th>数据名称</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">数字</td>
<td>number</td>
<td>正负整数+小数+0+进制数</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">字符串</td>
<td>string</td>
<td>在引号内的均为字符串类型</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">布尔</td>
<td>boolean</td>
<td>true(真),1/fales(假),0   [除了0都为真]</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">空</td>
<td>null</td>
<td>--</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">未定义</td>
<td>undefined</td>
<td>变量声明但未赋值即为undefined</td>
</tr>
</tbody>
</table>
<h3 id="引用数据" tabindex="-1"><a class="header-anchor" href="#引用数据" aria-hidden="true">#</a> 引用数据</h3>
<table>
<thead>
<tr>
<th style="text-align:center">序号</th>
<th style="text-align:center">内容</th>
<th>数据名称</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">数字</td>
<td>Number</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">字符串</td>
<td>String</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">布尔</td>
<td>Boolean</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">数组</td>
<td>Array</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">对象</td>
<td>Object</td>
</tr>
<tr>
<td style="text-align:center">...</td>
<td style="text-align:center">...</td>
<td>...</td>
</tr>
</tbody>
</table>
<h3 id="数据类型的转化" tabindex="-1"><a class="header-anchor" href="#数据类型的转化" aria-hidden="true">#</a> 数据类型的转化</h3>
<h4 id="自动转化" tabindex="-1"><a class="header-anchor" href="#自动转化" aria-hidden="true">#</a> 自动转化</h4>
<p>数据运算过程中会发生自动转化,又称隐式转化(看不到)</p>
<p><strong>自动转化</strong> <Badge text="DEMO" /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 1. number + number</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">+</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">typeof</span><span style="color: #EEFFFF"> (</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">+</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果2 类型nuber</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 2. number + string = string</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">+</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">2</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//12</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">typeof</span><span style="color: #EEFFFF"> (</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">+</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">2</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果12 类型srting</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 3. number + bool = number</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">+</span><span style="color: #EEFFFF"> </span><span style="color: #FF9CAC">true</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">typeof</span><span style="color: #EEFFFF"> (</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">+</span><span style="color: #EEFFFF"> </span><span style="color: #FF9CAC">true</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果2 类型nuber</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 面试题: 4. number + undefined = NaN(number)</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">+</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">undefined</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">typeof</span><span style="color: #EEFFFF"> (</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">+</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">undefined</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果NaN 类型nuber</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="强制转化" tabindex="-1"><a class="header-anchor" href="#强制转化" aria-hidden="true">#</a> 强制转化</h4>
<p>通过函数(方法)完成.</p>
<h4 id="number-函数" tabindex="-1"><a class="header-anchor" href="#number-函数" aria-hidden="true">#</a> <strong><code v-pre>Number()</code></strong> 函数</h4>
<p>将括号中的内容转为number,如果无法转化则返回NaN</p>
<table>
<thead>
<tr>
<th style="text-align:center">序号</th>
<th style="text-align:center">内容</th>
<th>结果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">纯数字</td>
<td>返回数字内容</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">字符</td>
<td>返回NaN</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">true</td>
<td>返回1</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">fales</td>
<td>返回0</td>
</tr>
</tbody>
</table>
<p><strong>强制转化</strong> <Badge text="DEMO" /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> num1 </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Number</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺miss</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(num1)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果 NaN </span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> num2 </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Number</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">123</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(num2)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果 123  </span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> num3 </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Number</span><span style="color: #EEFFFF">(</span><span style="color: #FF9CAC">false</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(num3)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果 0 </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="parseint-转整数" tabindex="-1"><a class="header-anchor" href="#parseint-转整数" aria-hidden="true">#</a> <strong><code v-pre>parseInt()</code></strong> 转整数</h4>
<p>解析内容,并返回整数,即取整</p>
<table>
<thead>
<tr>
<th style="text-align:center">序号</th>
<th style="text-align:center">内容</th>
<th>结果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">纯数字</td>
<td>取整</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">数字头+字符尾</td>
<td>只取数字部分</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">字符头+数字尾</td>
<td>返回1</td>
</tr>
</tbody>
</table>
<h4 id="parsefloat-转浮点" tabindex="-1"><a class="header-anchor" href="#parsefloat-转浮点" aria-hidden="true">#</a> <strong><code v-pre>parseFloat()</code></strong> 转浮点</h4>
<p>解析内容,返回小数(浮点数)</p>
<p><strong>强制转化</strong> <Badge text="DEMO" /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// parseInt取正</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> num1 </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">parseInt</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">10.23</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(num1)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果 10</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> num2 </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">parseInt</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">123</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(num2)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果 123</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> num3 </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">parseInt</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">123小艺</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(num3)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果 123</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> num4 </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">parseInt</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺123</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(num4)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果 NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> num5 </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">parseFloat</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">1.23</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(num5)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果 1.23 </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tosrting-转字符" tabindex="-1"><a class="header-anchor" href="#tosrting-转字符" aria-hidden="true">#</a> <strong><code v-pre>toSrting()</code></strong> 转字符</h4>
<p><strong><code v-pre>转字符</code></strong> <Badge text="DEMO" /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> num </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> num</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toString</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">typeof</span><span style="color: #EEFFFF"> str)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果 1 string</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> bool </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Boolean</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(bool)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">typeof</span><span style="color: #EEFFFF"> bool)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果 true boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> bool2 </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Boolean</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(bool2)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">typeof</span><span style="color: #EEFFFF"> bool2)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果 false boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> bool3 </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Boolean</span><span style="color: #EEFFFF">(</span><span style="color: #FF9CAC">false</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(bool3)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">typeof</span><span style="color: #EEFFFF"> bool3)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 结果 false boolean</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2>
<h3 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符" aria-hidden="true">#</a> 算数运算符</h3>
<table>
<thead>
<tr>
<th style="text-align:center">序号</th>
<th style="text-align:center">内容</th>
<th style="text-align:center">运算符</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">加</td>
<td style="text-align:center">+</td>
<td>加法和拼接</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">减</td>
<td style="text-align:center">-</td>
<td>减法和负号(负数) -1 -2</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">乘</td>
<td style="text-align:center">*</td>
<td>乘法</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">除</td>
<td style="text-align:center">/</td>
<td>除法</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">模</td>
<td style="text-align:center">%</td>
<td>求余</td>
</tr>
</tbody>
</table>
<p><strong><code v-pre>算数运算符</code></strong>  <Badge text="DEMO" /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> a </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">10</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> b </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(a </span><span style="color: #89DDFF">+</span><span style="color: #EEFFFF"> b)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(a </span><span style="color: #89DDFF">-</span><span style="color: #EEFFFF"> b)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(a </span><span style="color: #89DDFF">*</span><span style="color: #EEFFFF"> b)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(a </span><span style="color: #89DDFF">/</span><span style="color: #EEFFFF"> b)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 求余/求模</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(a </span><span style="color: #89DDFF">%</span><span style="color: #EEFFFF"> b)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">// 余数为1  不整除</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">10</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">%</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//余数为0  整除</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自增-自减" tabindex="-1"><a class="header-anchor" href="#自增-自减" aria-hidden="true">#</a> 自增/自减</h3>
<p>自增 <strong><code v-pre>++</code></strong> 与自减 <strong><code v-pre>--</code></strong> ，每次步长为1</p>
<table>
<thead>
<tr>
<th style="text-align:center">内容</th>
<th style="text-align:center">符号</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">前缀自增</td>
<td style="text-align:center">++x</td>
<td>先自增后赋值</td>
</tr>
<tr>
<td style="text-align:center">后缀自增</td>
<td style="text-align:center">x++</td>
<td>先赋值后自增</td>
</tr>
<tr>
<td style="text-align:center">前缀自减</td>
<td style="text-align:center">--x</td>
<td>先自减后赋值</td>
</tr>
<tr>
<td style="text-align:center">后缀自减</td>
<td style="text-align:center">x--</td>
<td>先赋值后自减</td>
</tr>
</tbody>
</table>
<p><strong><code v-pre>前缀和后缀自增</code></strong> <Badge text="DEMO" /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> a </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 前缀自增</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> b </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">++</span><span style="color: #EEFFFF">a</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(b)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//2</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> x </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 后缀自增</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> y </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> x</span><span style="color: #89DDFF">++;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(y)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h3>
<p><strong><code v-pre>=</code></strong> <strong><code v-pre>+=</code></strong> <strong><code v-pre>-=</code></strong> <strong><code v-pre>*=</code></strong>
...</p>
<p><strong><code v-pre>赋值运算</code></strong> <Badge text="DEMO" /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> x </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> y </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// x = x + y; ==&gt; x = 1 + 2 = 3;</span></span>
<span class="line"><span style="color: #EEFFFF">x </span><span style="color: #89DDFF">+=</span><span style="color: #EEFFFF"> y</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(x)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//3</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> a </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> b </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// b = b - a; 5 - 2 =3</span></span>
<span class="line"><span style="color: #EEFFFF">b </span><span style="color: #89DDFF">-=</span><span style="color: #EEFFFF"> a</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(b)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h3>
<ul>
<li>比较运算返回布尔值,JavaScript总会尝试toNumber动作，</li>
<li>如果是字符串之间的比较,则比较字符的unicode码值。</li>
<li>不同数据之间的比较会出发隐式转换。</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">内容</th>
<th style="text-align:center">符号</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">大于</td>
<td style="text-align:center"><strong><code v-pre>&gt;</code></strong></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:center">小于</td>
<td style="text-align:center"><strong><code v-pre>&lt;</code></strong></td>
<td>--</td>
</tr>
<tr>
<td style="text-align:center">等于</td>
<td style="text-align:center"><strong><code v-pre>==</code></strong></td>
<td>松散比较，只比较值，如果数据类型发生转换后的值一样，<br> 就会返回true，反之返回false</td>
</tr>
<tr>
<td style="text-align:center">全等</td>
<td style="text-align:center"><strong><code v-pre>===</code></strong></td>
<td>严格比较，同时比较值和数据类型，如果都一致则返回true，<br> 否则返回false</td>
</tr>
<tr>
<td style="text-align:center">不等</td>
<td style="text-align:center"><strong><code v-pre>!=</code></strong></td>
<td>松散比较，只比较值，如果值不一致，<br> 就会返回true，反之返回false</td>
</tr>
</tbody>
</table>
<p><strong><code v-pre>比较运算1</code></strong> <Badge text="DEMO" /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//false</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">3</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&lt;</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">10</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 字符串与字符串之间比较(坑)</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">3</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&lt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">10</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//flase</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 数据类型在比较时发生自动转换(坑)</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">3</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&lt;</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">10</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//true</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>比较运算2</code></strong> <Badge text="DEMO" /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> a </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> b </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> c </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 等等 ==</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(a </span><span style="color: #89DDFF">==</span><span style="color: #EEFFFF"> b)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//T </span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(a </span><span style="color: #89DDFF">==</span><span style="color: #EEFFFF"> c)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//F</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 全等 ===</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(a </span><span style="color: #89DDFF">===</span><span style="color: #EEFFFF"> b)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//F</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">===</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//T</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 不等 !=</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(b </span><span style="color: #89DDFF">!=</span><span style="color: #EEFFFF"> c)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">// T</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑运算符-返回布尔值" tabindex="-1"><a class="header-anchor" href="#逻辑运算符-返回布尔值" aria-hidden="true">#</a> 逻辑运算符(返回布尔值)</h3>
<table>
<thead>
<tr>
<th style="text-align:center">序号</th>
<th style="text-align:center">逻辑</th>
<th style="text-align:center">符号</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">与</td>
<td style="text-align:center">&amp;&amp;</td>
<td>且的关系,必须满足所有的表达式才是true<br>一假俱假,全是真才是真</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">或</td>
<td style="text-align:center">||</td>
<td>或者的关系,<br>有一个真就是真,全假才是假</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">非</td>
<td style="text-align:center">!</td>
<td>true ==&gt; false<br>false ==&gt; true</td>
</tr>
</tbody>
</table>
<p><strong><code v-pre>逻辑运算</code></strong> <Badge text="DEMO" /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> a </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> b </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// false || false   false</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(a </span><span style="color: #89DDFF">==</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">||</span><span style="color: #EEFFFF"> b </span><span style="color: #89DDFF">==</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// false || true  true</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(a </span><span style="color: #89DDFF">!=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">||</span><span style="color: #EEFFFF"> b </span><span style="color: #89DDFF">==</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// true || 不执行  true</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(a </span><span style="color: #89DDFF">==</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">||</span><span style="color: #EEFFFF"> b </span><span style="color: #89DDFF">==</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 逻辑非</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> bool1 </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">!</span><span style="color: #EEFFFF">bool1)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF">  </span><span style="color: #545454; font-style: italic">//false</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> bool2 </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">-</span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">!</span><span style="color: #EEFFFF">bool2)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF">  </span><span style="color: #545454; font-style: italic">//false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="短路求值" tabindex="-1"><a class="header-anchor" href="#短路求值" aria-hidden="true">#</a> 短路求值</h3>
<p>当第一个表达式的结果能够确定整个表达式结果时,后面的表达式不执行,这种情况被称之为短路求值</p>
<ul>
<li>逻辑<code v-pre>与</code>第一个表达式为false的时候</li>
<li>逻辑<code v-pre>或</code>第一个表达式为true的时候</li>
</ul>
<p><strong><code v-pre>短路求值</code></strong> <Badge text="DEMO" /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> a </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> b </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 验证短路求值</span></span>
<span class="line"><span style="color: #EEFFFF">a </span><span style="color: #89DDFF">==</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">||</span><span style="color: #EEFFFF"> console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(b)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
