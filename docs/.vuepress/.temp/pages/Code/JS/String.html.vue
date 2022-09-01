<template><div><h1 id="string对象" tabindex="-1"><a class="header-anchor" href="#string对象" aria-hidden="true">#</a> String对象</h1>
<h3 id="创建-字面量-构造函数" tabindex="-1"><a class="header-anchor" href="#创建-字面量-构造函数" aria-hidden="true">#</a> 创建 [字面量][构造函数]</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 构造函数</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">String</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//对象类型object</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">String</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 字面量</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>访问(<code v-pre>下标</code>)</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str[</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">])</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str[</span><span style="color: #F78C6C">11</span><span style="color: #EEFFFF">])</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转义" tabindex="-1"><a class="header-anchor" href="#转义" aria-hidden="true">#</a> 转义(<code v-pre>\</code>)</h3>
<p>JavaScript中有些字符具有特殊的含义,因此输出这些字符时,会被程序自动转化成其他状态,需要通过转义符()来处理,转义符能将特殊字符转化成普通字符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> url </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">D:</span><span style="color: #EEFFFF">\\</span><span style="color: #C3E88D">nay</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(url)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th>方法</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">换页符</td>
<td><code v-pre>\f</code></td>
<td></td>
</tr>
<tr>
<td style="text-align:center">换行符</td>
<td><code v-pre>\n</code></td>
<td>常用</td>
</tr>
<tr>
<td style="text-align:center">制表符</td>
<td><code v-pre>\v</code></td>
<td>垂直</td>
</tr>
<tr>
<td style="text-align:center">制表符</td>
<td><code v-pre>\t</code></td>
<td>水平</td>
</tr>
<tr>
<td style="text-align:center">....</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="引号包裹" tabindex="-1"><a class="header-anchor" href="#引号包裹" aria-hidden="true">#</a> 引号包裹(<code v-pre>'</code> <code v-pre>&quot;</code>)</h3>
<p>单双引号的问题</p>
<ul>
<li>单引号不能包裹单引号</li>
<li>双引号不能包裹双引号,</li>
<li>不能包裹其自身,但是可以互相包裹</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 4. 单双引号的包裹问题</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// var str = &quot;&quot;小艺&quot;&quot;; //报错</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// var str = &#39;&#39;小艺&#39;&#39;; //报错</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">&quot;小艺&quot;</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">// &quot;&#39;小艺&#39;&quot;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 使用转义符\</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">\&quot;</span><span style="color: #C3E88D">小艺</span><span style="color: #EEFFFF">\&quot;</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串包装对象" tabindex="-1"><a class="header-anchor" href="#字符串包装对象" aria-hidden="true">#</a> 字符串包装对象</h2>
<p>字符串属于原始数据类型,将原始数据类型包装成对象后就可以拥有属性和方法
当基础数据类型使用属性或方法的时候,JS引擎会自动将其转化为对象类型</p>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>toUpperCase()</code></td>
<td>字符串内容转大写</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>toLowerCase()</code></td>
<td>字符串内容转小写</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>trim()</code></td>
<td>去除两边的空格</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>charAt()</code></td>
<td>获取下标对应的字符串内容</td>
</tr>
</tbody>
</table>
<p><code v-pre>DEMO</code> 字符串包装对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D"> Hello World </span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 字符串内容转大写</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toUpperCase</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 字符串内容转小写</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toLowerCase</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 去除两边的空格</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">trim</span><span style="color: #EEFFFF">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 获取下标对应的字符串</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">charAt</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>练习</code> 根据身份证信息获取性别</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 根据身份证信息获取性别(2种方法)</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 第17位代表性别 奇数是男 偶数是女</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> id </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">110000200401014895</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(id</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">charAt</span><span style="color: #EEFFFF">(id</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">length </span><span style="color: #89DDFF">-</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF">) </span><span style="color: #89DDFF">%</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">?</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">男</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">女</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(id[id</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">length </span><span style="color: #89DDFF">-</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF">] </span><span style="color: #89DDFF">%</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">?</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">男</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">女</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串api" tabindex="-1"><a class="header-anchor" href="#字符串api" aria-hidden="true">#</a> 字符串API</h2>
<h3 id="indexof" tabindex="-1"><a class="header-anchor" href="#indexof" aria-hidden="true">#</a> indexOf()</h3>
<p>寻找字符串第一次出现的位置,找不到返回-1,此方法区分大小写</p>
<h3 id="lastindexof" tabindex="-1"><a class="header-anchor" href="#lastindexof" aria-hidden="true">#</a> lastIndexOf()</h3>
<p>寻找字符串最后一次出现的位置,找不到返回-1,此方法区分大小写</p>
<h3 id="search" tabindex="-1"><a class="header-anchor" href="#search" aria-hidden="true">#</a> search()</h3>
<p>寻找字符串第一次出现的位置,找不到返回-1,此方法区分大小写,支持正则表达式</p>
<p><code v-pre>DEMO</code> <code v-pre>indexOf()</code> <code v-pre>lastIndexOf()</code> <code v-pre>search()</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Aabcdefag</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 区分大小写</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">indexOf</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">a</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">// 1</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">indexOf</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">A</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">lastIndexOf</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">a</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">// 7</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 区分大小写,支持正则表达式</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">search</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">a</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">// 1</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">search</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">申</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">// -1</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 忽略大小写 /i</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">search</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">/</span><span style="color: #C3E88D">a</span><span style="color: #89DDFF">/</span><span style="color: #F78C6C">i</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//0,正则表达式</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slice" tabindex="-1"><a class="header-anchor" href="#slice" aria-hidden="true">#</a> slice()</h3>
<p>按照<code v-pre>下标</code>进行字符串截取,规则同数组</p>
<ul>
<li>
<p>1个参数情况 开始点</p>
<ul>
<li>正数: 从左往右找位置,从左往右截取,一直截取到结尾</li>
<li>负数: 从右往左找位置,从左往右截取,一直截取到结尾</li>
<li>如果超出索引范围,正数时返回空数组,负数时返回全部内容</li>
<li>正负决定查找<code v-pre>下标</code>的方向,正往右,负往左(-1开始)</li>
</ul>
</li>
<li>
<p>2个参数情况 开始点  结束点</p>
<ul>
<li>全为正数:从左往右找位置,从开始点开始截取,一直截取到结束点,包含开始点内容,不包含结束点内容</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">abcdefghijk</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 字符串    a   b   c   d   e   f   g   h   i   j   k </span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 下标      0   1   2   3   4   5   9   7   8   9   10</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 负数下标                                 -3  -2  -1</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 截取出jk(2种方法)</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">slice</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">9</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//单正数参 往右找 往右截 截到尾</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">slice</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">-</span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #545454; font-style: italic">//单负数参 往左找 往右截 截到尾</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 截取出 cdefg</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">slice</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">7</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #545454; font-style: italic">//双正数参数</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="substring" tabindex="-1"><a class="header-anchor" href="#substring" aria-hidden="true">#</a> substring()</h3>
<p>截取字符串中介于两个指定<code v-pre>下标</code>之间的字符</p>
<ul>
<li>如果参数是小于0或者是NaN,都会被当做0处理</li>
<li>如果开始点大于结束点,则执行的效果相当于2个参数位置的互换</li>
<li>1个参数情况: 开始点
正数: 从左往右找位置,从左往右截取,一直截取到结尾
负数: 返回全部</li>
<li>2个参数情况: 开始点 结束点(不包含结束点内容)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">abcdefghijk</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 字符串    a   b   c   d   e   f   g   h   i   j   k </span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 下标      0   1   2   3   4   5   9   7   8   9   10</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 负数下标                                 -3  -2  -1</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 一个参数</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">substring</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">5</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #545454; font-style: italic">//fghijk</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 负数返回全部内容</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">substring</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">-</span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #545454; font-style: italic">//abcdefghijk</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 二个参数</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">substring</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//bcde</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 0,5</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">substring</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">-</span><span style="color: #F78C6C">7</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//abcde</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 0,5</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">substring</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">5</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">-</span><span style="color: #F78C6C">7</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//abcde</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>练习</code> 获取邮箱中的用户名和域名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 要求:用户名用`slice()`,域名用`substring()`</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> arr </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> [</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">xiaoyi@tedu.cn</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">xiao@yi@163.cn</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">donghang@support-mu.cn</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #EEFFFF">]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">function</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">getEmailInfo</span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">arr</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF; font-style: italic">for</span><span style="color: #F07178"> (</span><span style="color: #C792EA">var</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">i</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">i</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">arr</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">length</span><span style="color: #89DDFF">;</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">i</span><span style="color: #89DDFF">++</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// 寻找最后一次@出现的位置</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #C792EA">var</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">index</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">arr</span><span style="color: #F07178">[</span><span style="color: #EEFFFF">i</span><span style="color: #F07178">]</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">lastIndexOf</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">        </span><span style="color: #545454; font-style: italic">// console.log(index);</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">用户名:</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">arr</span><span style="color: #F07178">[</span><span style="color: #EEFFFF">i</span><span style="color: #F07178">]</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">slice</span><span style="color: #F07178">(</span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">index</span><span style="color: #F07178">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">域名:</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">arr</span><span style="color: #F07178">[</span><span style="color: #EEFFFF">i</span><span style="color: #F07178">]</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">substring</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">index</span><span style="color: #F07178"> </span><span style="color: #89DDFF">+</span><span style="color: #F07178"> </span><span style="color: #F78C6C">1</span><span style="color: #F07178">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #82AAFF">getEmailInfo</span><span style="color: #EEFFFF">(arr)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> replace()</h3>
<p>字符串替换,不会改变原来字符串的内容,默认执行一次,可以通过正则表达式来进行全局替换 /g,可以通过/i来忽略大小写</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">fuckduck</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">replace</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">fuck</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">****</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 正则表达式 实现全局替换</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">replace</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">/</span><span style="color: #C3E88D">fuck</span><span style="color: #89DDFF">/</span><span style="color: #F78C6C">g</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">****</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li><code v-pre>split()</code>
将字符串内容按照一定的格式进行分割,分割后变成数组</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">a-b-c-d-e</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">split</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">-</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>练习</code> 查询字符串 属性=属性值&amp;属性=属性值&amp;...</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 获取tn和wd的值</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">tn=baidu&amp;wd=web</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 1. 先按照&amp;符来进行分割</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> arr </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">split</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">&amp;</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(arr)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//[ &#39;tn=baidu&#39;, &#39;wd=web&#39; ]</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 2. 继续分割后并取值</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(arr[</span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF">]</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">split</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">=</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)[</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">])</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(arr[</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">]</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">split</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">=</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)[</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">])</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">keyword=机械键盘&amp;enc=utf-8&amp;wq=机械&amp;pvid=d2a0f0eee6ba4d0a9244cca5416aee83</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> arr </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">split</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">&amp;</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF; font-style: italic">for</span><span style="color: #EEFFFF"> (</span><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> key </span><span style="color: #89DDFF">in</span><span style="color: #EEFFFF"> arr) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">arr</span><span style="color: #F07178">[</span><span style="color: #EEFFFF">key</span><span style="color: #F07178">]</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">split</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">=</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)[</span><span style="color: #F78C6C">1</span><span style="color: #F07178">])</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat" aria-hidden="true">#</a> repeat()</h3>
<p>字符串重复</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">-</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">repeat</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">3</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
