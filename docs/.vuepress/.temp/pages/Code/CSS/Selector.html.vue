<template><div><h1 id="基础选择器" tabindex="-1"><a class="header-anchor" href="#基础选择器" aria-hidden="true">#</a> 基础选择器</h1>
<p>选择器是条件，页面中符合这个条件的元素，会应用这个样式。<br>
选择器规范了页面中哪些元素能够使用定义好的样式。(将定义好的样式匹配给页面中的元素)</p>
<p><strong><code v-pre>选择器</code></strong> { <strong><code v-pre>样式声明</code></strong> }</p>
<h2 id="通用选择器" tabindex="-1"><a class="header-anchor" href="#通用选择器" aria-hidden="true">#</a> 通用选择器</h2>
<p>页面中所有元素都应用此样式，效率低，不建议使用。
使用通配符&quot;<strong><code v-pre>*</code></strong>&quot;作为选择器。<br>
项目中唯一使用通用选择器方式，就是利用通用选择器做css reset。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">/* 所有元素的内外边距清空 */</span></span>
<span class="line"><span style="color: #FFCB6B">*</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #B2CCD6">margin</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #B2CCD6">padding</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">0</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h2 id="元素选择器" tabindex="-1"><a class="header-anchor" href="#元素选择器" aria-hidden="true">#</a> 元素选择器</h2>
<p>又称标签选择器，一般用于定义页面中某种元素的公共样式。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">p</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #B2CCD6">color</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">red</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #FFCB6B">div</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #B2CCD6">background-color</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">yellow</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h2 id="id选择器" tabindex="-1"><a class="header-anchor" href="#id选择器" aria-hidden="true">#</a> id选择器</h2>
<p>对某一个id生效的选择器。<br>
id的特点，页面中没有重复ID，所有id选择器，是针对一个元素的专属定制。</p>
<div class="language-html ext-html"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">style</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">#</span><span style="color: #F78C6C">d1</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #B2CCD6">color</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">red</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #B2CCD6">background-color</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">yellow</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">style</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">div</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">d1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">Lorem ipsum dolor sit amet.</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="类选择器" tabindex="-1"><a class="header-anchor" href="#类选择器" aria-hidden="true">#</a> 类选择器</h2>
<p>把一类样式，封装成一个小模块，起一个类名。<br>
哪个元素想使用，都可以使用，直接用class调用类名。</p>
<div class="custom-container warning"><p class="custom-container-title">类名的规范</p>
<p>类名中只能包含 <strong><code v-pre>-</code></strong> 和 <strong><code v-pre>_</code></strong> , 不能以数字开头，做到见名知意。</p>
</div>
<div class="language-html ext-html"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">style</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">text-danger</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #B2CCD6">color</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">blue</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">style</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h3</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">class</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">text-danger</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="多类选择器" tabindex="-1"><a class="header-anchor" href="#多类选择器" aria-hidden="true">#</a> 多类选择器</h2>
<p>可以给单个元素赋予多个样式。</p>
<div class="language-html ext-html"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">style</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">类1</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">类2</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">style</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">any</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">class</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">类1 类2 ...</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="分类选择器" tabindex="-1"><a class="header-anchor" href="#分类选择器" aria-hidden="true">#</a> 分类选择器</h2>
<h3 id="元素选择器-类选择器" tabindex="-1"><a class="header-anchor" href="#元素选择器-类选择器" aria-hidden="true">#</a> 元素选择器+类选择器</h3>
<p>为引用了某类名的元素，输出样式</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">/* 选择引用类1的p标签 */</span></span>
<span class="line"><span style="color: #FFCB6B">p</span><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">类1</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="类选择器-类选择器" tabindex="-1"><a class="header-anchor" href="#类选择器-类选择器" aria-hidden="true">#</a> 类选择器+类选择器</h3>
<p>为同时引用了某两个类名的元素，输出样式</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">/* 选择引用类1及类2的元素 */</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">类1</span><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">类2</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h2 id="群组选择器" tabindex="-1"><a class="header-anchor" href="#群组选择器" aria-hidden="true">#</a> 群组选择器</h2>
<p>将多个选择器，放在一起，使用,分隔，定义公共样式</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">span</span><span style="color: #89DDFF">,</span><span style="color: #FFCB6B">a</span><span style="color: #89DDFF">,</span><span style="color: #FFCB6B">input</span><span style="color: #89DDFF">,</span><span style="color: #FFCB6B">button</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">any</span><span style="color: #89DDFF">,.</span><span style="color: #FFCB6B">类1</span><span style="color: #89DDFF">,#</span><span style="color: #F78C6C">id</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h2 id="后代选择器" tabindex="-1"><a class="header-anchor" href="#后代选择器" aria-hidden="true">#</a> 后代选择器</h2>
<p>通过元素的后代关系，来匹配元素。<br>
后代，一级或者多级的嵌套。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">div</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">li</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">a</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h2 id="子代选择器" tabindex="-1"><a class="header-anchor" href="#子代选择器" aria-hidden="true">#</a> 子代选择器</h2>
<p>根据元素的父子级关系，匹配元素。
子代，一级嵌套。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">div</span><span style="color: #89DDFF">&gt;</span><span style="color: #FFCB6B">ul</span><span style="color: #89DDFF">&gt;</span><span style="color: #FFCB6B">li</span><span style="color: #89DDFF">&gt;</span><span style="color: #FFCB6B">a</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><strong>子代选择器</strong> 和 <strong>后代选择器</strong> 可以混合使用</p>
</div>
<h2 id="伪类选择器" tabindex="-1"><a class="header-anchor" href="#伪类选择器" aria-hidden="true">#</a> 伪类选择器</h2>
<p>用于匹配元素在不同状态下的样式。</p>
<table>
<thead>
<tr>
<th style="text-align:left">选择器</th>
<th style="text-align:left">匹配状态</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">:link{}</td>
<td style="text-align:left">未访问时的状态</td>
</tr>
<tr>
<td style="text-align:left">:visited{}</td>
<td style="text-align:left">访问后的状态</td>
</tr>
<tr>
<td style="text-align:left">:hover{}</td>
<td style="text-align:left">鼠标悬停时的状态</td>
</tr>
<tr>
<td style="text-align:left">:active{}</td>
<td style="text-align:left">激活状态</td>
</tr>
</tbody>
</table>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">a</span><span style="color: #89DDFF">:</span><span style="color: #C792EA">hover</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF">...</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h2 id="选择器权值" tabindex="-1"><a class="header-anchor" href="#选择器权值" aria-hidden="true">#</a> 选择器权值</h2>
<p><strong>权值</strong>，表示当前选择器的重要程度，权值越大，优先级越高。</p>
<table>
<thead>
<tr>
<th style="text-align:right">内容</th>
<th style="text-align:right">权值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">!important</td>
<td style="text-align:right">&gt;1000</td>
</tr>
<tr>
<td style="text-align:right">内联样式</td>
<td style="text-align:right">1000</td>
</tr>
<tr>
<td style="text-align:right">id选择器</td>
<td style="text-align:right">100</td>
</tr>
<tr>
<td style="text-align:right">类/伪类</td>
<td style="text-align:right">10</td>
</tr>
<tr>
<td style="text-align:right">元素选择器</td>
<td style="text-align:right">1</td>
</tr>
<tr>
<td style="text-align:right">通用选择器</td>
<td style="text-align:right">0</td>
</tr>
<tr>
<td style="text-align:right">继承的样式</td>
<td style="text-align:right">--</td>
</tr>
</tbody>
</table>
<h3 id="权值特点" tabindex="-1"><a class="header-anchor" href="#权值特点" aria-hidden="true">#</a> 权值特点</h3>
<p>1.当一个选择器，包含多个选择器时，需要将所有的选择器权值进行相加，结果大的优先显示。<br>
2.权值相同，使用就近原则。<br>
3.群组选择器的权值，单独计算，不能相加。<br>
4.如果样式后添加了!important，直接获得最高优先级。<br>
5.选择器权值的计算，不会超过本身权值的最大数量级。（100个1权值选择器也不会大于10权值的选择器）</p>
</div></template>
