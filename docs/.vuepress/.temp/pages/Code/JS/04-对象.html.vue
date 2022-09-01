<template><h1 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h1>
<p>引用类型 是属性和方法的结合,<code v-pre>万物皆对象</code>
规范:</p>
<ul>
<li>Jvarscript使用<code v-pre>对象字面量</code>或<code v-pre>构造函数</code>的方法<code v-pre>创建对象</code></li>
<li>属性和属性值,用<code v-pre>:</code>分开</li>
<li>多组属性之间需要用<code v-pre>,</code>分开</li>
</ul>
<h2 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h2>
<ul>
<li>对象字面量
<code v-pre>var obj = {};</code></li>
<li>构造函数
<code v-pre>var obj = new Object();</code></li>
</ul>
<h2 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h2>
<p>访问不存在的属性会返回<code v-pre>undefined</code></p>
<ul>
<li>点 <code v-pre>.</code> 静态的</li>
<li>方括号<code v-pre>['属性名']</code> 中内容可以为动态的(遍历对象时可使用)</li>
</ul>
<h2 id="增加" tabindex="-1"><a class="header-anchor" href="#增加" aria-hidden="true">#</a> 增加</h2>
<p>给对象中不存在的属性赋值,即为增加</p>
<ul>
<li><code v-pre>对象.新属性 = 值</code></li>
</ul>
<h2 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h2>
<p>给对象中已存在属性赋值从新赋值就是修改</p>
<ul>
<li><code v-pre>对象.属性 = 值</code></li>
</ul>
<h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h2>
<ul>
<li><code v-pre>delete 对象.属性</code></li>
</ul>
<p><code v-pre>DEMO</code> 对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 创建</span>
<span class="token comment">// 构造函数方式</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小宇'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 字面量</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 属性:属性值</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小艺'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token string-property property">'isMarr'</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: '小艺', age: 18, isMarr: true }</span>

<span class="token comment">// 2. 访问</span>
<span class="token comment">// 对象.属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 小艺</span>
<span class="token comment">// 对象['属性']</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">'age'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span>

<span class="token comment">// 3. 增加</span>
obj<span class="token punctuation">.</span>addr <span class="token operator">=</span> <span class="token string">'海淀区复兴路14号院68号楼'</span><span class="token punctuation">;</span>

<span class="token comment">// 4. 修改</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">19</span><span class="token punctuation">;</span>

<span class="token comment">// 5. 删除</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>isMarr<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: '小艺', age: 19, addr: '...楼' }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="遍历-for-in" tabindex="-1"><a class="header-anchor" href="#遍历-for-in" aria-hidden="true">#</a> 遍历 for...in</h2>
<p>不能直接使用<code v-pre>obj.key</code>来取值,原因是如果是obj.key相当于obj.'key' 没有这个属性,所以会返回undefined</p>
<p><code v-pre>DEMO</code> 遍历 求当前对象中成绩总和</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">cn</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ma</span><span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span>
    <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token number">110</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// key其实就是属性名</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(obj.key);// obj.'key'没有这个属性 undefined</span>
    <span class="token comment">// key每次遍历都会赋值不能的属性名</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//obj[key] ==> obj['cn']</span>
<span class="token punctuation">}</span>
<span class="token comment">// 求当前对象中成绩总和</span>
<span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><code v-pre>DEMO</code> 对象的增改</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>// 创建一个关于滑雪的对象 包含雪板的品牌 类型 价格 
var ski = {
    brand: 'NS',
    model: '单板',
    price: 6500
}
console.log(ski);

// 1. 2种方法打印雪板的品牌
console.log(ski.brand);
console.log(ski['brand']);

// 2. 年初大酬宾,雪板的价格打7折
ski.price *= 0.7;

// 3. 天气冷了给雪板加身衣服吧 保护套
ski.coat = '保护套';

// 4. 如果雪板类型时单板则修改为双板
if (ski.model == '单板') {
    ski.model = '双板';
}

// ski.model == '单板' ? ski.model = '双板' : '';

console.log(ski);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="属性检测" tabindex="-1"><a class="header-anchor" href="#属性检测" aria-hidden="true">#</a> 属性检测</h2>
<p>检查对象中是否含有该属性</p>
<p><code v-pre>DEMO</code> 属性检测</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">cn</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ma</span><span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span>
    <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token number">110</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 属性检测;</span>

<span class="token comment">// 1. 利用访问不存在的对象属性会返回undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>cn <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token string">'不存在该属性'</span> <span class="token operator">:</span> <span class="token string">'存在该属性'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>cm <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token string">'不存在该属性'</span> <span class="token operator">:</span> <span class="token string">'存在该属性'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. in 属性 in 对象</span>
<span class="token comment">// 判断一个属性存不存在,如果存在返回true,不存在返回false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'cn'</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'cm'</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. 利用API函数</span>
<span class="token comment">// 判断一个属性存不存在,如果存在返回true,不存在返回false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'cn'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'cm'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// JavaScript的技术花活</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>cn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'存在该属性'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'不存在该属性'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">.</span>cm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'不存在该属性'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'存在该属性'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="技术花活" tabindex="-1"><a class="header-anchor" href="#技术花活" aria-hidden="true">#</a> 技术花活</h3>
<ul>
<li>
<p>JS骂人不带脏字
<code v-pre>原理</code> 提取字符串李面的字母进行拼凑</p>
</li>
<li>
<p>扩展 <a href="https://www.cnblogs.com/cynthia-wuqian/p/9914492.html" target="_blank" rel="noopener noreferrer">CNBLOGS相关介绍<ExternalLinkIcon/></a></p>
</li>
<li>
<p>插件 zhuangbility</p>
</li>
</ul>
<div class="language-node ext-node line-numbers-mode"><pre v-pre class="language-node"><code>npm i -g zhuangbility
//然后运行
zhuangbility 'I LOVE CHINA'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code v-pre>DEMO</code> 利用JS侮辱</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">--</span><span class="token punctuation">[</span><span class="token operator">~</span><span class="token operator">+</span><span class="token string">""</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">[</span><span class="token operator">~</span><span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token operator">!</span><span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">~</span><span class="token operator">!</span><span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token operator">~</span><span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="对象中的方法" tabindex="-1"><a class="header-anchor" href="#对象中的方法" aria-hidden="true">#</a> 对象中的方法</h2>
<p>对象的属性值可以是基础数据类型,也可以是方法或者对象或者是其他引用类型</p>
<p><code v-pre>DEMO</code> 对象中的方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小艺'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token comment">// 对象中的方法</span>
    <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Are you thinking of me ?'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">life</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">like</span><span class="token operator">:</span> <span class="token string">'申哥'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">eat</span><span class="token operator">:</span> <span class="token string">'******'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 记住2个口诀 : 对象.属性  对象.方法</span>
obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>life<span class="token punctuation">.</span>eat<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><code v-pre>DEMO</code> 计算器</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 声明计算器对象,包含2个数字属性和一个方法,此方法可以完成四则运算</span>
<span class="token comment">// 调用示例: calc.jsq('*') 乘法</span>

<span class="token keyword">var</span> calc <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token function-variable function">jsq</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">'+'</span><span class="token operator">:</span>
                <span class="token comment">// 此时this指向的是calc对象</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">'-'</span><span class="token operator">:</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">'*'</span><span class="token operator">:</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">'/'</span><span class="token operator">:</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'符号非法'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
calc<span class="token punctuation">.</span><span class="token function">jsq</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></template>
