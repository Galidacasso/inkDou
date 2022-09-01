<template><h1 id="string对象" tabindex="-1"><a class="header-anchor" href="#string对象" aria-hidden="true">#</a> String对象</h1>
<ol>
<li>创建 [字面量][构造函数]</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 构造函数</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">'小艺'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//对象类型object</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token string">'小艺'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 字面量</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'小艺'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2">
<li>访问(<code v-pre>下标</code>)</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3">
<li>转义(<code v-pre>\</code>)
JavaScript中有些字符具有特殊的含义,因此输出这些字符时,会被程序自动转化成其他状态,需要通过转义符()来处理,转义符能将特殊字符转化成普通字符</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">'D:\\nay'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><table>
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
<ol start="4">
<li>引号包裹(<code v-pre>'</code> <code v-pre>&quot;</code>)
单双引号的问题</li>
</ol>
<ul>
<li>单引号不能包裹单引号</li>
<li>双引号不能包裹双引号,</li>
<li>不能包裹其自身,但是可以互相包裹</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 4. 单双引号的包裹问题</span>
<span class="token comment">// var str = ""小艺""; //报错</span>
<span class="token comment">// var str = ''小艺''; //报错</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'"小艺"'</span><span class="token punctuation">;</span> <span class="token comment">// "'小艺'"</span>
<span class="token comment">// 使用转义符\</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"\"小艺\""</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="字符串包装对象" tabindex="-1"><a class="header-anchor" href="#字符串包装对象" aria-hidden="true">#</a> 字符串包装对象</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">' Hello World '</span><span class="token punctuation">;</span>

<span class="token comment">// 字符串内容转大写</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 字符串内容转小写</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 去除两边的空格</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取下标对应的字符串</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code v-pre>练习</code> 根据身份证信息获取性别</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 根据身份证信息获取性别(2种方法)</span>
<span class="token comment">// 第17位代表性别 奇数是男 偶数是女</span>
<span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token string">'110000200401014895'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">'男'</span> <span class="token operator">:</span> <span class="token string">'女'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">[</span>id<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">'男'</span> <span class="token operator">:</span> <span class="token string">'女'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="字符串api" tabindex="-1"><a class="header-anchor" href="#字符串api" aria-hidden="true">#</a> 字符串API</h2>
<ol>
<li>
<p><code v-pre>indexOf()</code>
寻找字符串第一次出现的位置,找不到返回-1,此方法区分大小写</p>
</li>
<li>
<p><code v-pre>lastIndexOf()</code>
寻找字符串最后一次出现的位置,找不到返回-1,此方法区分大小写</p>
</li>
<li>
<p><code v-pre>search()</code>
寻找字符串第一次出现的位置,找不到返回-1,此方法区分大小写,支持正则表达式</p>
</li>
</ol>
<p><code v-pre>DEMO</code> <code v-pre>indexOf()</code> <code v-pre>lastIndexOf()</code> <code v-pre>search()</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'Aabcdefag'</span><span class="token punctuation">;</span>

<span class="token comment">// 区分大小写</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 7</span>

<span class="token comment">// 区分大小写,支持正则表达式</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">'申'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>
<span class="token comment">// 忽略大小写 /i</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0,正则表达式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="4">
<li><code v-pre>slice()</code>
按照<code v-pre>下标</code>进行字符串截取,规则同数组</li>
</ol>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'abcdefghijk'</span><span class="token punctuation">;</span>
<span class="token comment">// 字符串    a   b   c   d   e   f   g   h   i   j   k </span>
<span class="token comment">// 下标      0   1   2   3   4   5   9   7   8   9   10</span>
<span class="token comment">// 负数下标                                 -3  -2  -1</span>

<span class="token comment">// 截取出jk(2种方法)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//单正数参 往右找 往右截 截到尾</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//单负数参 往左找 往右截 截到尾</span>

<span class="token comment">// 截取出 cdefg</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//双正数参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="5">
<li><code v-pre>substring()</code>
截取字符串中介于两个指定<code v-pre>下标</code>之间的字符</li>
</ol>
<ul>
<li>如果参数是小于0或者是NaN,都会被当做0处理</li>
<li>如果开始点大于结束点,则执行的效果相当于2个参数位置的互换</li>
<li>1个参数情况: 开始点
正数: 从左往右找位置,从左往右截取,一直截取到结尾
负数: 返回全部</li>
<li>2个参数情况: 开始点 结束点(不包含结束点内容)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'abcdefghijk'</span><span class="token punctuation">;</span>
<span class="token comment">// 字符串    a   b   c   d   e   f   g   h   i   j   k </span>
<span class="token comment">// 下标      0   1   2   3   4   5   9   7   8   9   10</span>
<span class="token comment">// 负数下标                                 -3  -2  -1</span>

<span class="token comment">// 一个参数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//fghijk</span>

<span class="token comment">// 负数返回全部内容</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//abcdefghijk</span>

<span class="token comment">// 二个参数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//bcde</span>

<span class="token comment">// 0,5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//abcde</span>

<span class="token comment">// 0,5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//abcde</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><code v-pre>练习</code> 获取邮箱中的用户名和域名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 要求:用户名用`slice()`,域名用`substring()`</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">'xiaoyi@tedu.cn'</span><span class="token punctuation">,</span>
    <span class="token string">'xiao@yi@163.cn'</span><span class="token punctuation">,</span>
    <span class="token string">'donghang@support-mu.cn'</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getEmailInfo</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 寻找最后一次@出现的位置</span>
        <span class="token keyword">var</span> index <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">'@'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// console.log(index);</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'用户名:'</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'域名:'</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">getEmailInfo</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="6">
<li><code v-pre>replace()</code>
字符串替换,不会改变原来字符串的内容,默认执行一次,可以通过正则表达式来进行全局替换 /g,可以通过/i来忽略大小写</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'fuckduck'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'fuck'</span><span class="token punctuation">,</span> <span class="token string">'****'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 正则表达式 实现全局替换</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">fuck</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">'****'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="7">
<li><code v-pre>split()</code>
将字符串内容按照一定的格式进行分割,分割后变成数组</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'a-b-c-d-e'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code v-pre>练习</code> 查询字符串 属性=属性值&amp;属性=属性值&amp;...</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取tn和wd的值</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'tn=baidu&amp;wd=web'</span><span class="token punctuation">;</span>

<span class="token comment">// 1. 先按照&amp;符来进行分割</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'&amp;'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[ 'tn=baidu', 'wd=web' ]</span>
<span class="token comment">// 2. 继续分割后并取值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'keyword=机械键盘&amp;enc=utf-8&amp;wq=机械&amp;pvid=d2a0f0eee6ba4d0a9244cca5416aee83'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'&amp;'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="8">
<li><code v-pre>repeat()</code>
字符串重复</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'-'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
