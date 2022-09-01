<template><h1 id="数组-数组对象-arrayobject" tabindex="-1"><a class="header-anchor" href="#数组-数组对象-arrayobject" aria-hidden="true">#</a> 数组 (数组对象 ArrayObject)</h1>
<p>数组是JavaScript中<code v-pre>引用类型</code>之一,是一种<code v-pre>数据结构</code>,是元素组成的集合,使用<code v-pre>单独的变量名</code>来<code v-pre>存储一系列的值</code>
把数据和数据之间的关系按照特定的结果来保存</p>
<h2 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h2>
<ul>
<li>数组字面量
<code v-pre>var arr = ['小艺', '小宇', '芹菜'];</code></li>
<li>构造函数
<code v-pre>var arr = new Array('百度', '搜狗', '360');</code></li>
</ul>
<h2 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h2>
<ul>
<li>通过索引下来来完成的,从0开始</li>
<li>访问数组不存在的下标返回undefined</li>
</ul>
<h2 id="增加" tabindex="-1"><a class="header-anchor" href="#增加" aria-hidden="true">#</a> 增加</h2>
<p>给数组不存在的下标赋值就是增加元素内容</p>
<h2 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h2>
<p>给数组已存在的下标重新赋值就是修改元素内容</p>
<p><code v-pre>DEMO</code> 数组的创建/访问/增加/修改</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 索引数组  数组的下标是数字</span>
<span class="token comment">// 1. 创建</span>
<span class="token comment">// 构造函数</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token string">'百度'</span><span class="token punctuation">,</span> <span class="token string">'搜狗'</span><span class="token punctuation">,</span> <span class="token string">'360'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 数组字面量</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'小艺'</span><span class="token punctuation">,</span> <span class="token string">'小宇'</span><span class="token punctuation">,</span> <span class="token string">'芹菜'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 访问 数组[索引]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. 增加   </span>
arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'佟佟'</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'琳琳'</span><span class="token punctuation">;</span>
<span class="token comment">// 当添加的索引下标不连贯时,会产生间隔 xxx empty item</span>
arr<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'小雪'</span><span class="token punctuation">;</span>

<span class="token comment">// 4. 修改</span>
arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'桐桐'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2>
<ul>
<li>通过for循环</li>
<li>通过for...in</li>
</ul>
<p><code v-pre>DEMO </code> 数组的遍历</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 数组字面量</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'小艺'</span><span class="token punctuation">,</span> <span class="token string">'小宇'</span><span class="token punctuation">,</span> <span class="token string">'芹菜'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 遍历</span>
<span class="token comment">// for循环</span>
<span class="token comment">// arr.length 求数组的长度</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// for...in</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><code v-pre>DEMO</code> 声明一个数组 存储3个月薪资, 计算薪资总和</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr_sal <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">700</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr_sal<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> arr_sal<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="关联数组" tabindex="-1"><a class="header-anchor" href="#关联数组" aria-hidden="true">#</a> 关联数组</h2>
<p>不经常用到,使用方法类似对象,遍历方法也使用for...in</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 索引数组 下标是数字</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'小艺'</span><span class="token punctuation">,</span> <span class="token string">'小宇'</span><span class="token punctuation">,</span> <span class="token string">'芹菜'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 关联数组 字符串做下标 name age addr</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr2<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'张三'</span><span class="token punctuation">;</span>
arr2<span class="token punctuation">[</span><span class="token string">'age'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">18</span>
arr2<span class="token punctuation">[</span><span class="token string">'addr'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'海淀区复兴路14号院'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> arr2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h1 id="数组和对象混合使用" tabindex="-1"><a class="header-anchor" href="#数组和对象混合使用" aria-hidden="true">#</a> 数组和对象混合使用</h1>
<ul>
<li><code v-pre>对象</code> 一个事物的属性</li>
<li><code v-pre>数组</code> 一类事物(多个对象的集合)</li>
</ul>
<p><code v-pre>DEMO</code> 数组和对象的混合使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> car <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">'suv'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'黑色'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">brand</span><span class="token operator">:</span> <span class="token string">'bwm'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 一类事物</span>
<span class="token keyword">var</span> arr_car <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">'suv'</span><span class="token punctuation">,</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'黑色'</span><span class="token punctuation">,</span> <span class="token literal-property property">brand</span><span class="token operator">:</span> <span class="token string">'bwm'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">'mpv'</span><span class="token punctuation">,</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'白色'</span><span class="token punctuation">,</span> <span class="token literal-property property">brand</span><span class="token operator">:</span> <span class="token string">'威尔法'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">'轿车'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'红色'</span><span class="token punctuation">,</span><span class="token literal-property property">brand</span><span class="token operator">:</span> <span class="token string">'特斯拉'</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 对象中包含着数组</span>
<span class="token keyword">var</span> stu <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小艺'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">like</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'吃'</span><span class="token punctuation">,</span> <span class="token string">'喝'</span><span class="token punctuation">,</span> <span class="token string">'玩'</span><span class="token punctuation">,</span> <span class="token string">'乐'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h1 id="api函数-数组方法" tabindex="-1"><a class="header-anchor" href="#api函数-数组方法" aria-hidden="true">#</a> API函数(数组方法)</h1>
<ol>
<li><code v-pre>concat</code> 数组拼接</li>
</ol>
<p><code v-pre>DEMO</code> concat</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'小艺'</span><span class="token punctuation">,</span> <span class="token string">'芹菜'</span><span class="token punctuation">,</span> <span class="token string">'小宇'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'北京'</span><span class="token punctuation">,</span> <span class="token string">'南京'</span><span class="token punctuation">,</span> <span class="token string">'杭州'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

consolo<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ['小艺', '芹菜', '小宇', '北京', '南京', '杭州'];</span>
consolo<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">'天津'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ['小艺', '芹菜', '小宇', '天津'];</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2">
<li><code v-pre>toString</code> 数组转字符串
<br></li>
<li><code v-pre>join([sepertor])</code> 自定义<code v-pre>[分割符]</code>转字符串 <code v-pre>,</code>==&gt;<code v-pre>❤</code></li>
</ol>
<p><code v-pre>DEMO</code> toString &amp; join</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>var arr = ['小艺', '芹菜', '小宇'];

console.log(arr.toString());
// 小艺,芹菜,小宇

console.log(arr.join());
// 小艺,芹菜,小宇

console.log(arr.join('-'));
// 小艺-芹菜-小宇
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="4">
<li><code v-pre>reverse()</code> 将数组中元素位置颠倒,并改变数组内容</li>
</ol>
<p><code v-pre>DEMO</code> reverse</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>var arr = [5, 2, 6, 7, 1];
// [5, 2, 6, 7, 1] =&gt; [1, 7, 6, 2, 5] 颠倒反转,没有排序功能
console.log(arr.reverse());
// 可做加密方法 借助reverse
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="5">
<li><code v-pre>sort()</code> 给数组排序(从大到小或从小从大)</li>
</ol>
<ul>
<li>括号内可以使用<code v-pre>比较函数</code>,此函数有2个参数,用来决定排位顺序</li>
<li>固定写法
<ul>
<li>
<p>function (a, b) {
从小到大
return a - b;
从大到小
return b - a;
}</p>
<table>
<thead>
<tr>
<th style="text-align:center">a-b的值</th>
<th style="text-align:center">排序</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">小于0</td>
<td style="text-align:center">a会排在b之前</td>
</tr>
<tr>
<td style="text-align:center">等于0</td>
<td style="text-align:center">位置不变</td>
</tr>
<tr>
<td style="text-align:center">大于0</td>
<td style="text-align:center">b会排在a之前</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
</ul>
<p><code v-pre>DEMO</code> sort</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>var arr = [5, 2, 6, 7, 1];

console.log(arr.sort());
// 1 2 3 4 5 从小到大
console.log(arr.sort().reverse());
// 5 4 3 2 1 从大到小,此方法不适用
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code v-pre>DEMO</code> 双位数排序</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>var arr = [5, 12, 36, 27, 1];
// 从小到大[1, 5, 12, 27, 36] 
// 如果直接使用sort会出现双位数排序问题,
// 需要比较函数来解决
console.log(arr.sort(
    function (a, b) {
        return a - b;
    }
));
// 从大到小
console.log(arr.sort(
    function (a, b) {
        return b - a;
    }
));
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol start="6">
<li><code v-pre>slice()</code> 截取
按照参数截取数组中的内容并返回</li>
</ol>
<ul>
<li>1个参数,即<code v-pre>开始点</code>(索引下标)
<ul>
<li>正数 从<code v-pre>左</code>往<code v-pre>右</code> <code v-pre>寻找</code> 从<code v-pre>左</code>往<code v-pre>右</code> <code v-pre>截取</code> 截取到数组结尾</li>
<li>负数 从<code v-pre>右</code>往<code v-pre>左</code> <code v-pre>寻找</code> 从<code v-pre>左</code>往<code v-pre>右</code> <code v-pre>截取</code> 截取到数组结尾</li>
<li>超出<code v-pre>索引范围</code>
<ul>
<li>正数 返回<code v-pre>空数组</code></li>
<li>负数 返回<code v-pre>全部数组</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<p><code v-pre>DEMO</code> slice 1个参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'e'</span><span class="token punctuation">,</span> <span class="token string">'f'</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//数组索引  0    1    2    3    4    5    6</span>
<span class="token comment">//数组索引  0   -6   -5   -4   -3   -2   -1</span>

<span class="token comment">// 1个参数 正数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ['d', 'e', 'f', 'g'];</span>

<span class="token comment">// 1个参数 负数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ['c', 'd', 'e', 'f', 'g'];</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul>
<li>2个参数,即<code v-pre>开始点</code> 及 <code v-pre>结束点</code>之前
<ul>
<li>全为正数 从<code v-pre>左</code>往<code v-pre>右</code> <code v-pre>寻找</code> 从<code v-pre>左</code>往<code v-pre>右</code> <code v-pre>截取</code> 截取到<code v-pre>结束点</code>之前,不包含<code v-pre>结束点</code></li>
<li>其他组合 <code v-pre>方向</code> 由 <code v-pre>开始点</code> 决定
<ul>
<li>正数则 从<code v-pre>左</code>往<code v-pre>右</code> <code v-pre>寻找</code></li>
<li>负数则 从<code v-pre>右</code>往<code v-pre>左</code> <code v-pre>寻找</code></li>
<li>组合不满足截取条件,则返回 <code v-pre>空数组</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<p><code v-pre>DEMO</code> slice 2个参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'e'</span><span class="token punctuation">,</span> <span class="token string">'f'</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//数组索引  0    1    2    3    4    5    6</span>
<span class="token comment">//数组索引  0   -6   -5   -4   -3   -2   -1</span>

<span class="token comment">// 2个参数 </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ['b', 'c', 'd', 'e'];</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 不满足从左往右截取的条件,返回空数组</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [`b`]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 超出范围 返回空数组</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 超出范围 返回空数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><code v-pre>DEMO</code> slice 练习</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'e'</span><span class="token punctuation">,</span> <span class="token string">'f'</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//数组索引  0    1    2    3    4    5    6</span>
<span class="token comment">//数组索引  0   -6   -5   -4   -3   -2   -1</span>

<span class="token comment">// 2种方法截取出全部内容</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 截取出 "d" 元素内容</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 截取 cde</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="7">
<li>添加/删除 数组元素 (<code v-pre>length</code>)</li>
</ol>
<ul>
<li>
<p>头部添加 <code v-pre>unshift() </code>
将一个或者多个元素添加到数组的开头返回添加后数组的长度,此方法会改变原来的数组</p>
</li>
<li>
<p>尾部添加 <code v-pre>push()</code><br>
将一个或者多个元素添加到数组的结尾入栈,返回添加后数组的长度</p>
</li>
<li>
<p>头部删除 <code v-pre>shift()</code>    返回删除的元素</p>
</li>
<li>
<p>尾部删除 <code v-pre>pop()</code>    出栈,返回删除的元素</p>
</li>
</ul>
<p><code v-pre>DEMO</code> 添加/删除数组元素</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'小艺'</span><span class="token punctuation">,</span> <span class="token string">'小宇'</span><span class="token punctuation">,</span> <span class="token string">'芹菜'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 头部的添加</span>
arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">'申哥'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'unshift-头部添加"申哥" =>'</span><span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 尾部添加(入栈)</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'香菜'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'push-尾部添加"香菜" =>'</span><span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 头部的删除,返回的是删除的元素</span>
arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'shift-头部删除 =>'</span><span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 尾部的删除(出栈)</span>
arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'pop-尾部删除 =>'</span><span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="8">
<li><code v-pre>splice()</code> 截取
删除/添加数组元素,会改变原来的数组,返回的是截取后的结果</li>
</ol>
<ul>
<li>一个参数
<ul>
<li>正数 同slice,但已改变原数组内容</li>
<li>负数 同slice,但已改变原数组内容</li>
</ul>
</li>
<li>两个参数
<ul>
<li>正数
<ul>
<li>第一个参数:开始点 索引值</li>
<li>第二个参数:截取数量</li>
</ul>
</li>
</ul>
</li>
<li>多个参数
<ul>
<li>例如arr.splice(1, 2, '小艺', '小宇', '芹菜')
<ul>
<li>会改变原有元素的索引位置,</li>
<li>删除和添加同时存在</li>
<li>从元素索引下标为1的地方开始删除,删除2个元素,并添加3个元素进去</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><code v-pre>demo</code> splice截取</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'e'</span><span class="token punctuation">,</span> <span class="token string">'f'</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//数组索引  0    1    2    3    4    5    6</span>
<span class="token comment">//数组索引  0   -6   -5   -4   -3   -2   -1</span>

<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'e'</span><span class="token punctuation">,</span> <span class="token string">'f'</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 1个参数 正数</span>
<span class="token comment">// console.log(arr.splice(3));</span>

<span class="token comment">// 1个参数 负数</span>
<span class="token comment">// console.log(arr.splice(-5));</span>

<span class="token comment">// 2个参数 正数</span>
<span class="token comment">// console.log(arr.splice(1, 4));// [ 'b', 'c', 'd', 'e' ]</span>

<span class="token comment">//console.log(arr.splice(1, 2));//[ 'b', 'c' ]</span>
<span class="token comment">// 多个参数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//d</span>
arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'小艺'</span><span class="token punctuation">,</span> <span class="token string">'小宇'</span><span class="token punctuation">,</span> <span class="token string">'芹菜'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//芹菜 原有元素的索引被改变</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><code v-pre>DEMO</code> 将数组中1的数组元素 移动到数组开头,禁止使用排序api</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// [1,2,1,5,1]==>[1,1,1,2,5]</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 遍历数组中的全部内容</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 判断:如果是1就移动到数组开头</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
