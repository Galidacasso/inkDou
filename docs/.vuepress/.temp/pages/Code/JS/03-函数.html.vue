<template><h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h1>
<ul>
<li>函数<code v-pre>function</code>,也被称为<code v-pre>方法</code>,是一段预先定义好的而且可以被重复利用的代码段。</li>
<li><code v-pre>函数体</code>中可以包含多条执行语句,一次定义多次调用。</li>
</ul>
<h2 id="无参数的函数" tabindex="-1"><a class="header-anchor" href="#无参数的函数" aria-hidden="true">#</a> 无参数的函数</h2>
<ol>
<li>
<p>函数的定义与声明</p>
<ul>
<li>
<p>使用function关键字来声明一个函数,大小写敏感的,不能使用关键字</p>
</li>
<li>
<p><code v-pre>语法</code>：function <code v-pre>函数名</code>(){<code v-pre>函数体</code>(<code v-pre>语句</code>...)}</p>
</li>
</ul>
</li>
<li>
<p>函数的调用</p>
<ul>
<li>函数只有被调用后才能生效</li>
<li><code v-pre>调用方法</code>：<code v-pre>函数名</code>();</li>
</ul>
</li>
<li>
<p>优缺点</p>
<ul>
<li><code v-pre>优点</code>: 一次定义多次调用</li>
<li><code v-pre>不足</code>: 功能单一</li>
</ul>
</li>
</ol>
<p><code v-pre>DEMO</code> 封装一个函数 计算1加100的和</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">add1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 对上方的函数分析一波</span>
<span class="token comment">// 优点: 一次定义多次调用</span>
<span class="token comment">// 不足:功能单一</span>
<span class="token comment">// 需求: 函数可以计算1加任意数(变量)的和</span>
<span class="token comment">// 解决: 让函数带有变量(参数)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="有参数的函数" tabindex="-1"><a class="header-anchor" href="#有参数的函数" aria-hidden="true">#</a> 有参数的函数</h2>
<p><code v-pre>形参</code>: 函数定义时,括号内的参数叫做&quot;<code v-pre>形式参数</code>&quot;(形参) ,其实是变量,名称任意
<code v-pre>实参</code>: 函数调用时,括号内的内容叫做&quot;<code v-pre>实际参数</code>&quot;(实参) ,传递<code v-pre>形参</code>的值</p>
<ol>
<li>函数 定义与声明
<ul>
<li>使用function关键字来声明一个函数,大小写敏感的,不能使用关键字</li>
<li>function <code v-pre>函数名</code>(<code v-pre>形参</code>){<code v-pre>函数体</code>(<code v-pre>语句</code>...)}</li>
</ul>
</li>
<li>调用
<ul>
<li><code v-pre>函数名</code>(<code v-pre>实参</code>);</li>
<li>函数中<code v-pre>形参</code>接受参数的顺序和<code v-pre>调用</code>传递实参的顺序是一一对应的</li>
</ul>
</li>
</ol>
<p><code v-pre>DEMO</code> 有参数函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">b<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a:'</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'b:'</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// a:2   b:1    3</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a:20  b:10   30</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//NaN  形参数目比实参多,会有形参得不到值,undefined</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 形参数目比实参少,虽然从现在的程序来看,没问题正常运行,但是在实际开发中要禁止</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="带有返回值的函数" tabindex="-1"><a class="header-anchor" href="#带有返回值的函数" aria-hidden="true">#</a> 带有返回值的函数</h2>
<p><code v-pre>返回值</code>是函数调用后产生的结果,需要这个值,则可以使用<code v-pre>return</code>返回</p>
<ul>
<li><code v-pre>return</code> 语句会终止函数的执行,并且返回一个指定的值</li>
<li><code v-pre>return</code> 后方代码不执行</li>
</ul>
<p><code v-pre>DEMO</code> 带有返回值的函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 带有返回值的函数</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 返回值</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  return下方代码不执行</span>
<span class="token punctuation">}</span>
<span class="token comment">// 可以将add函数产生的返回值赋值给一个变量</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 假设: 需求就是将add函数返回的值和1 作加法运算</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="作用域和提升" tabindex="-1"><a class="header-anchor" href="#作用域和提升" aria-hidden="true">#</a> 作用域和提升</h2>
<h3 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h3>
<p>函数和变量可以访问的范围就是作用域</p>
<ul>
<li><code v-pre>全局作用域</code> 无论是函数内还是函数外,都可以访问</li>
<li><code v-pre>局部作用域</code> 只能在局部内使用(函数内) 函数外访问会报错</li>
</ul>
<h4 id="变量的作用域" tabindex="-1"><a class="header-anchor" href="#变量的作用域" aria-hidden="true">#</a> 变量的作用域</h4>
<ul>
<li>全局变量
<ul>
<li>在函数外用var声明的变量是全局的</li>
<li><code v-pre>隐式变量</code> 不使用关键词声明的变量
<ul>
<li>例如：a = 1</li>
<li>在严格模式下会报错</li>
</ul>
</li>
</ul>
</li>
<li>局部变量
<ul>
<li>在函数内使用<code v-pre>var</code>声明的变量是局部的、</li>
</ul>
</li>
</ul>
<p><code v-pre>DEMO</code> 变量的作用域</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 函数外使用var声明变量</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// 函数外不是使用关键字声明变量</span>
<span class="token comment">// 这种写法要禁止</span>
c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 函数内使用var声明变量</span>
    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'函数内打印a:'</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'函数内打印b:'</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'函数内打印c:'</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'函数外打印a:'</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'函数外打印c:'</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'函数外打印b:'</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//报错:  b is not defined(未定义) 因为变量b是局部的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="函数的作用域" tabindex="-1"><a class="header-anchor" href="#函数的作用域" aria-hidden="true">#</a> 函数的作用域</h4>
<ul>
<li>
<p>全局函数:
函数外使用function关键字声明的函数是全局的</p>
</li>
<li>
<p>局部函数:
函数内使用function关键字声明的函数是局部的</p>
</li>
</ul>
<p><code v-pre>DEMO</code> 函数的作用域</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 函数外使用function关键字声明函数</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 函数内使用function关键字声明函数</span>
    <span class="token keyword">function</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 函数内调用f1</span>
    <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 函数内调用f3</span>
    <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 报错 f3 is not defined </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="提升" tabindex="-1"><a class="header-anchor" href="#提升" aria-hidden="true">#</a> 提升</h3>
<p>提升是一种行为,在执行js代码之前,会先执行<code v-pre>预解析</code>,<code v-pre>预解析</code>会解析代码中所有的<code v-pre>声明</code>,并且使用适合的<code v-pre>作用域</code>将它们关联起来,<code v-pre>变量</code>和<code v-pre>函数</code>的声明会提升到与其对应的作用域的最顶端</p>
<ol>
<li>变量的提升
var a = 1 ; 可拆分为3个阶段</li>
</ol>
<ul>
<li>声明阶段 在内存中开辟空间存储变量 var a</li>
<li>初始化赋值阶段 给变量初始化赋值为 undefined  a = undefined</li>
<li>真实赋值阶段 a = 1
变量的提升,提升的是声明及初始化赋值阶段,并不会提升真实赋值阶段</li>
</ul>
<p><code v-pre>DEMO</code> 变量的提升</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b is not defined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2">
<li>函数的提升
使用function关键字创建的函数会被提升,函数的所有阶段全都被提升了
使用函数表达式创建的函数不会被提升</li>
</ol>
<p><code v-pre>DEMO</code> 函数的提升</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 我是f1</span>
<span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// f3 is not a function</span>

<span class="token comment">// 使用function关键字创建的函数会被提升,函数的所有阶段全都被提升了</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是f1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

<span class="token comment">// 函数的另外一种写法 函数表达式 没有提升</span>
<span class="token keyword">var</span> <span class="token function-variable function">f2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是23'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">// f2();</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="函数的递归-了解即可" tabindex="-1"><a class="header-anchor" href="#函数的递归-了解即可" aria-hidden="true">#</a> 函数的递归[了解即可]</h3>
<p>函数内部调用自身</p>
<ul>
<li>递归中每一次递归都会从头开始运行,在递归中使用<code v-pre>return</code> 可以终止函数体</li>
<li>递归的不断调用就是前进的过程,使用<code v-pre>增量</code>及<code v-pre>终止条件</code>配合,就可以让递归在恰当的时候停止
DEMO 函数的递归</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>函数的递归<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 需求: 当前的函数执行3次之后停止执行</span>
      <span class="token keyword">var</span> total <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            total <span class="token operator">=</span> n<span class="token operator">*</span>n<span class="token punctuation">;</span>
            <span class="token keyword">return</span> total<span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数" aria-hidden="true">#</a> 匿名函数</h3>
<p>没有名字的函数,解决全局变量污染的问题
全局<code v-pre>变量污染</code>,根源在于<code v-pre>变量名称</code>的<code v-pre>冲突</code>,虽然可以使用<code v-pre>函数内</code>声明的<code v-pre>局部变量</code>解决,但函数本身也有名字,依然会污染,故使用<code v-pre>匿名函数</code>来解决污染,并通过<code v-pre>匿名函数自调用</code>,解决<code v-pre>函数调用</code>问题,这种匿名<code v-pre>函数的自调用</code>又被称为<code v-pre>立即调用函数表达式</code>,即在<code v-pre>定义时立即执行</code>
<code v-pre>问题</code>:
<code v-pre>方案</code>:把全局变量放入函数里(函数内的变量是局部的)
--&gt;<code v-pre>新问题</code>:函数也有名字,有名字就会有污染
--&gt;<code v-pre>新方案</code>:让函数没有名字,匿名函数
----&gt;<code v-pre>新问题</code>:没有名字如何调用?
----&gt;<code v-pre>新方案</code>:匿名函数的自调用又被称为立即调用函数表达式(在定义时立即执行)</p>
<p><code v-pre>DEMO</code> 匿名函数的声明及调用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我其实是匿名函数'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第二种写法(实际开发中会优化一下(企业开发中使用方法))</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数" aria-hidden="true">#</a> 回调函数</h3>
<p>把匿名函数用实参的形式传递(非匿名函数调用匿名函数)
某些API函数需要在调用时先传递一个函数,在恰当时调用完成目标任务,即为回调函数</p>
<ul>
<li>生活实例
小刚去商店购物,但所购物品没货了,小刚留了电话,货到后,商店电话通知到货,小刚取到了货</li>
</ul>
<div class="language-mermaid ext-mermaid line-numbers-mode"><pre v-pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
购物<span class="token arrow operator">--></span><span class="token label property">|实现任务|</span>无货<span class="token arrow operator">--></span><span class="token label property">|声明回调函数|</span>留电话<span class="token arrow operator">--></span><span class="token label property">|调用回调|</span>电话通知到货<span class="token arrow operator">--></span><span class="token label property">|响应回调|</span>取货
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code v-pre>DEMO</code> 把匿名函数用实参的形式传递</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 非匿名函数fun</span>
<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//fun(100); // 函数内部相当于  var a = 100; 100 + 100 = 200</span>

<span class="token comment">// 函数的参数也可以是匿名函数</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">666</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// fun函数的内部相当于 var  a = function () { return 666} 保存的是一个!!函数!!</span>
<span class="token comment">// 想要执行函数获取内容, 必须调用函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code v-pre>DEMO</code> 创建一个非匿名函数,调用时传递2个匿名函数作为参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 每一个匿名函数都会返回一个数字,计算这2个数字的和</span>
<span class="token keyword">function</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">num1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">num2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">getSum</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code v-pre>DEMO</code> 猜数字游戏</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 猜数字游戏</span>
        <span class="token comment">// 用户在前端输入框中输入数字,判断后提示猜大了还是猜小了,一直到猜对为止</span>
        <span class="token comment">// 猜对后提示 恭喜解锁猜数字大神成就</span>
        <span class="token comment">// 声明一个变量保存要猜的数字</span>
        <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 我们不知道用户猜多少次才会猜中,所以我们需要弹窗次数变成无限次,当用户猜对数字之后才停止弹窗(死循环)</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 显示输入框</span>
            <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入一个数字'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">==</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'猜对了,开始猜下一个数字'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">></span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'猜大了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">&lt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'猜小了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div></template>
