<template><div><h1 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h1>
<h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2>
<h3 id="手机号如何存储" tabindex="-1"><a class="header-anchor" href="#手机号如何存储" aria-hidden="true">#</a> 手机号如何存储?</h3>
<p>答：VARCHAR</p>
<div class="custom-container tip"><p class="custom-container-title">VARCHAR的应用比较灵活</p>
<ul>
<li>手机号并非数字，只是看起来像数字</li>
<li>在应用的时候，会将手机号拆分成几个部分，而数字是不可被拆分的</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">前3位</th>
<th style="text-align:center">4-7位</th>
<th style="text-align:center">8-11位</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">网络识别号 联通 移动 电信</td>
<td style="text-align:center">地区编码(归属地)</td>
<td style="text-align:center">用户号号码 随机分配</td>
</tr>
</tbody>
</table>
</div>
<h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h2>
<h3 id="关于js的误差" tabindex="-1"><a class="header-anchor" href="#关于js的误差" aria-hidden="true">#</a> 关于js的误差</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">((</span><span style="color: #F78C6C">0.1</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">+</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0.7</span><span style="color: #EEFFFF">) </span><span style="color: #89DDFF">*</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">10</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">==</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">8</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//false</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">((</span><span style="color: #F78C6C">0.2</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">+</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0.6</span><span style="color: #EEFFFF">) </span><span style="color: #89DDFF">*</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">10</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">==</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">8</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">浮点数的精度问题</p>
<ul>
<li>在计算机中因为浮点数存在精度问题，所以运算时会有一些误差。</li>
<li><strong>误差是必然的,只是偶尔体现</strong></li>
<li>比如<code v-pre>1</code>在计算机存储时为<code v-pre>0.99999</code>..</li>
</ul>
</div>
<h3 id="数组排序" tabindex="-1"><a class="header-anchor" href="#数组排序" aria-hidden="true">#</a> 数组排序</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 普通匿名函数</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> arr </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> [</span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #EEFFFF">]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(arr</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">sort</span><span style="color: #EEFFFF">(</span><span style="color: #C792EA">function</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">a</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> b</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">b</span><span style="color: #F07178"> </span><span style="color: #89DDFF">-</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">a</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">//箭头函数 简化</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(arr</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">sort</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">a</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> b</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> b </span><span style="color: #89DDFF">-</span><span style="color: #EEFFFF"> a))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">sort</p>
<ul>
<li>使用sort()方法可以对数组进行排序</li>
<li><strong>a-b</strong> 为升序 即：1 2 3 4 5</li>
<li><strong>b-a</strong> 为降序 即：5 4 3 2 1</li>
<li>当数组为字符的时候，仅升序，即英文字母顺序</li>
<li>当数组为字符的时候，降序使用reverse()，即英文字母顺序</li>
</ul>
</div>
</div></template>
