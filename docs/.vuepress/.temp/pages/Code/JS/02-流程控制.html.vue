<template><h1 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h1>
<p>所有的算法都是通过顺序、分支、循环这三种逻辑实现的</p>
<pre><code>顺序 : 从a 到 b 
分支 : 根据条件选择性的执行
循环 : 不断的去做一件事
</code></pre>
<h2 id="分支结构" tabindex="-1"><a class="header-anchor" href="#分支结构" aria-hidden="true">#</a> 分支结构</h2>
<h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> IF</h3>
<pre><code>if(exp){代码块}
当(exp)的布尔值结果为true的时候,执行{代码块},否则不执行

if(exp){ 代码块1 } else { 代码块2 }
当(exp)的布尔值结果为true的时候,执行{代码块1},否则执行{代码块2}

exp1 ? exp2 : exp3 三元运算符
如果exp1的结果是true 运行exp2,否则运行exp3
</code></pre>
<h4 id="特殊事项" tabindex="-1"><a class="header-anchor" href="#特殊事项" aria-hidden="true">#</a> 特殊事项</h4>
<pre><code>if(exp){代码块}的写法,可以将花括号省略掉,会导致可读性变差，且存在代隐患。
</code></pre>
<hr>
<p><code v-pre>DEMO</code> if(exp){代码块}</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 小艺粥坊 : 如果满30减15</span>
<span class="token keyword">var</span> money <span class="token operator">=</span> <span class="token number">35</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>money <span class="token operator">>=</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    money <span class="token operator">-=</span> <span class="token number">15</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'实际付款:'</span><span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 实际付款：20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><hr>
<p><code v-pre>DEMO</code> 练习: 小艺航空公司机票促销活动,如果是春季机票8折,原价2000,如果申哥现在买机票应该花多少钱?</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>
// 声明2个变量存储价格和月份 完成判断 
var price = 2000;
var month = 3;

if (month == 3 || month == 4 || month == 5) {
    price *= 0.8;
}

console.log('实付款:', price);
// 实付款:1600
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><hr>
<p><code v-pre>DEMO</code> 练习：假设有2个变量a,b,如果a大于b，则交换2个变量的值 ,只可以借助1个第三方变量</p>
<div class="language-mermaid ext-mermaid line-numbers-mode"><pre v-pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
变量a<span class="token arrow operator">--></span>第三方变量<span class="token arrow operator">--></span>变量b<span class="token arrow operator">--></span>变量a<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>// 例如: a = 2  b = 1  交换值 a = 1 b = 2 
var a = 2;
var b = 1;
var tmp;
if (a &gt; b) {
    tmp = a;    // 把较大的a变量的值给tmp
    a = b;      // 把较小的b变量的值给a
    b = tmp;    // 把tmp的值给b
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><hr>
<p><code v-pre>DEMO</code> 练习：如果满30减15, 如果不够30 则提示还差xx元可以减15元</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>var mon = 20; // 声明一个变量为实际付款值

if (mon &gt;= 30) {
    mon -= 15;
} else {
    console.log('还差:' + (30 - mon) + '元可以减15元');
}
console.log('实付款:', mon);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><hr>
<p><code v-pre>DEMO</code> 练习：声明变量保存一个数字判断是奇数还是偶数,分别做输出</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>var num = 5;

// 第一种
if (num % 2 == 0) {
    console.log('偶数');
} else {
    console.log('奇数');
}

// 第二种
if (num % 2 != 0) {
    console.log('奇数');
} else {
    console.log('偶数');
}

// 第三种
if (num%2) {
  console.log(num,'奇数');
} else {
  console.log(num,'偶数');
}

// 第四种 三元(三目)运算符
num % 2 == 0 ? console.log('偶数') : console.log('奇数');
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><hr>
<h3 id="if-嵌套" tabindex="-1"><a class="header-anchor" href="#if-嵌套" aria-hidden="true">#</a> IF 嵌套</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span><span class="token punctuation">{</span>代码块<span class="token number">1</span><span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>exp2<span class="token punctuation">)</span><span class="token punctuation">{</span>代码块<span class="token number">2</span><span class="token punctuation">}</span><span class="token operator">...</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>语句块n<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code v-pre>DEMO</code> 订单状态</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1 未付款  2 未发货  3运输中  其他 状态非法</span>
<span class="token keyword">var</span> sta <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>sta <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'未付款'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sta <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'未发货'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sta <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'运输中'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'状态非法'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="switch-case" tabindex="-1"><a class="header-anchor" href="#switch-case" aria-hidden="true">#</a> switch case</h3>
<pre><code>判断一个表达式的值是否和case匹配,并执行相关联的语句,如果与case的值都不匹配,执行default内容
</code></pre>
<p><code v-pre>DEMO</code> 订单状态</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1 未付款  2 未发货  3运输中  其他 状态非法</span>
<span class="token keyword">var</span> sta <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>sta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'未付款'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'未发货'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'运输中'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'状态非法'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="循环结构" tabindex="-1"><a class="header-anchor" href="#循环结构" aria-hidden="true">#</a> 循环结构</h2>
<pre><code>在表达式为true的前提下,循环执行一段代码块,一直到表达式为false时结束
</code></pre>
<h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">while</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span><span class="token punctuation">{</span>循环体<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><pre><code>如果(exp)为true,执行循环体,一直到表达式为false时结束循环
如果(exp)一直是true,就会造成死循环,所以while循环体中需要有增量配合(exp)
</code></pre>
<p><code v-pre>DEMO</code> 循环体</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'小艺: Are you think of me ?'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>解析↑：</p>
<table>
<thead>
<tr>
<th style="text-align:center">循环次数</th>
<th style="text-align:center">i的值</th>
<th style="text-align:center">exp(i &lt; 5)</th>
<th style="text-align:center">是否执行循环体</th>
<th style="text-align:center">i++</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">1</td>
<td style="text-align:center">T</td>
<td style="text-align:center">是</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">2</td>
<td style="text-align:center">T</td>
<td style="text-align:center">是</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">3</td>
<td style="text-align:center">T</td>
<td style="text-align:center">是</td>
<td style="text-align:center">4</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">4</td>
<td style="text-align:center">T</td>
<td style="text-align:center">是</td>
<td style="text-align:center">5</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">5</td>
<td style="text-align:center">F</td>
<td style="text-align:center">否,结束循环</td>
<td style="text-align:center">--</td>
</tr>
</tbody>
</table>
<p><code v-pre>DEMO</code> 练习：使用while循环计算1到100的和</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 友情提示 可以借助一个第三方变量 存储相加后的值</span>
<span class="token comment">// 1 + 2 + 3 + 4 + 5 + 6 + ... + 100</span>

<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5050 </span>
<span class="token comment">// i = 1  sum : 0+1 = 1</span>
<span class="token comment">// i = 2  sum : 1+2 = 3</span>
<span class="token comment">// i = 3  sum : 3+3 = 6</span>
<span class="token comment">// i = 4  sum : 6+4 = 10</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="do-while" tabindex="-1"><a class="header-anchor" href="#do-while" aria-hidden="true">#</a> do{}while()</h3>
<pre><code>无论条件是否满足都会被无条件的执行一次循环体
</code></pre>
<p><code v-pre>DEMO</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'小艺'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span>exp1<span class="token punctuation">;</span>exp2<span class="token punctuation">;</span>exp3<span class="token punctuation">)</span><span class="token punctuation">{</span>循环体<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><pre><code>for循环过程
1. 首先会无条件的执行exp1,再执行exp2,如果满足条件(true)才执行循环体,否则终止循环  
2. 当循环体执行完毕后会执行exp3,进行增量操作,继续执行exp2 判断是否满足条件,如果满足(true)则继续执行循环体,如果不满足条件则终止循环 
</code></pre>
<div class="language-mermaid ext-mermaid line-numbers-mode"><pre v-pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
exp1<span class="token arrow operator">--></span>exp2<span class="token arrow operator">--></span>true<span class="token arrow operator">--></span>循环体<span class="token arrow operator">--></span>exp3<span class="token arrow operator">--></span>exp2<span class="token arrow operator">--></span>false<span class="token arrow operator">--></span>结束循环
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code v-pre>DEMO</code> for循环</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我要回家~'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="for循环特殊写法" tabindex="-1"><a class="header-anchor" href="#for循环特殊写法" aria-hidden="true">#</a> for循环特殊写法</h4>
<pre><code>for(;;){} 
三个表达式为空(死循环),必须写分号(语法)
需要有break来终止循环进行
没有exp3,内部需要有相对应的增量代码  
</code></pre>
<h5 id="break-终止循环-跳出循环体" tabindex="-1"><a class="header-anchor" href="#break-终止循环-跳出循环体" aria-hidden="true">#</a> break 终止循环(跳出循环体)</h5>
<p><code v-pre>DEMO</code> for特殊写法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'小艺'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 跳出循环体 终止循环作用</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 正常</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'xiaoyi'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第三个表达式不写,但是还想让for循环执行结果和上方for循环一样</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'小艺'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 增量</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="for循环嵌套" tabindex="-1"><a class="header-anchor" href="#for循环嵌套" aria-hidden="true">#</a> for循环嵌套</h4>
<pre><code>一个for循环中的循环体又是一个for循环(套娃)
</code></pre>
<div class="language-mermaid ext-mermaid line-numbers-mode"><pre v-pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
外层For循环<span class="token arrow operator">--></span>Exp1<span class="token arrow operator">--></span>Exp2<span class="token arrow operator">--></span>Ture<span class="token arrow operator">--></span>内层for循环<span class="token arrow operator">--></span>exp1<span class="token arrow operator">--></span>exp2<span class="token arrow operator">--></span>true<span class="token arrow operator">--></span>循环体<span class="token arrow operator">--></span>exp2<span class="token arrow operator">--></span>flase<span class="token arrow operator">--></span>Exp2<span class="token arrow operator">--></span>False<span class="token arrow operator">--></span>结束循环
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="执行过程" tabindex="-1"><a class="header-anchor" href="#执行过程" aria-hidden="true">#</a> 执行过程</h5>
<ol>
<li>
<p>先执行<code v-pre>外层循环</code>, 外层循环先执行<code v-pre>exp1</code>,再执行<code v-pre>exp2</code>,如果为<code v-pre>false</code>则终止整个循环,如果为<code v-pre>true</code>则进入<code v-pre>内层循环</code>,<code v-pre>内层循环</code>也需要按照规则执行<code v-pre>exp1</code>--&gt;<code v-pre>exp2</code>--&gt;<code v-pre>循环体</code>--&gt;<code v-pre>exp3</code> ...`</p>
</li>
<li>
<p>一旦从<code v-pre>外层循环</code>进入<code v-pre>内层循环</code>后,只有等<code v-pre>内层循环</code>结束后,才会跳出<code v-pre>内层循环</code>,进入<code v-pre>外层循环</code>中</p>
</li>
<li>
<p><code v-pre>外层循环</code>每进入1次,<code v-pre>内层循环</code>都会从头开始执行n次(具体执行多少次看内层循环的条件)</p>
</li>
<li>
<p>以此类推,一直到<code v-pre>外层循环</code>条件为<code v-pre>false</code>时才会<code v-pre>终止整个循环</code></p>
</li>
</ol>
<h5 id="控制方法" tabindex="-1"><a class="header-anchor" href="#控制方法" aria-hidden="true">#</a> 控制方法</h5>
<pre><code>外层控制行,内层控制列,先有行再有列
</code></pre>
<p><code v-pre>练习</code> 绘制等腰三角形</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> row <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token comment">//外层 for() 控制行数, 在exp1里确定r变量为行数,起始值为1</span>
<span class="token comment">//外层 exp2明确行数关系,r&lt;=row,exp3明确变量r的自增属性</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> str <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span> r <span class="token operator">&lt;=</span> row<span class="token punctuation">;</span> r<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//内层 for() 1控制该行里有多少个空格,变量c1确定了空格的起始数</span>
  <span class="token comment">//通过exp2明确空格和行数的关系,即空格数量应等于总输出行数减去当前行数</span>
  <span class="token comment">//通过exp3明确自增属性</span>
  <span class="token comment">//在循环体中,给变量拼接 '空格'</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> c1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> c1 <span class="token operator">&lt;=</span> row <span class="token operator">-</span> r<span class="token punctuation">;</span> c1<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">+=</span> <span class="token string">' '</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//内层 for() 2控制该行里有多少个星,变量c1确定了星的起始数</span>
  <span class="token comment">//通过exp2明确星和行数的关系,即星的数量=行数x2-1</span>
  <span class="token comment">//通过exp3明确自增属性</span>
  <span class="token comment">//在循环体中,给变量拼接 '*'</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> c <span class="token operator">&lt;=</span> r <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> c<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">+=</span> <span class="token string">'*'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  str <span class="token operator">+=</span> <span class="token string">'\n'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><code v-pre>练习</code> 绘制倒置等腰三角形</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> gndrow <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> sr <span class="token operator">=</span> gndrow <span class="token punctuation">,</span>str <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span> sr <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> sr<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 输出的空格数量等与总行数-当前行数</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> sc <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> sc <span class="token operator">&lt;=</span> gndrow<span class="token operator">-</span>sr <span class="token punctuation">;</span> sc<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    str<span class="token operator">+=</span><span class="token string">' '</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token comment">// 输出星的数量等与当前行数的两倍减1,输出自减</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> sc1 <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>sr<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> sc1 <span class="token operator">></span><span class="token number">0</span><span class="token punctuation">;</span> sc1<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str<span class="token operator">+=</span><span class="token string">'*'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
    str<span class="token operator">+=</span><span class="token string">'\n'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sstr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></template>
