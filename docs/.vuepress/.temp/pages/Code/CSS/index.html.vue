<template><div><h1 id="css3的概述" tabindex="-1"><a class="header-anchor" href="#css3的概述" aria-hidden="true">#</a> css3的概述</h1>
<p><img src="/images/CSS3.png" alt="CSS3"></p>
<h2 id="什么是css" tabindex="-1"><a class="header-anchor" href="#什么是css" aria-hidden="true">#</a> 什么是css</h2>
<p><strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets<br>
层叠样式表，级联样式表，简称样式表</p>
<h2 id="css的作用" tabindex="-1"><a class="header-anchor" href="#css的作用" aria-hidden="true">#</a> css的作用</h2>
<p>修饰html元素，让页面更美观</p>
<h2 id="html和css的关系" tabindex="-1"><a class="header-anchor" href="#html和css的关系" aria-hidden="true">#</a> HTML和css的关系</h2>
<p>html：负责网页的搭建，内容的展示<br>
css：负责修饰，美化页面</p>
<h2 id="css和html属性的使用原则" tabindex="-1"><a class="header-anchor" href="#css和html属性的使用原则" aria-hidden="true">#</a> css和html属性的使用原则</h2>
<p>css：提升了代码重用性，提升了可维护性<br>
W3C建议我们尽量使用css的方式，去取代HTML属性</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>css并没有把可维护性提升到极致</p>
</div>
<h2 id="css语法规范" tabindex="-1"><a class="header-anchor" href="#css语法规范" aria-hidden="true">#</a> css语法规范</h2>
<p>color:red;                  文本颜色<br>
background-color: yellow;   背景颜色<br>
font-size:16px;             文本字号</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2>
<h3 id="内联样式" tabindex="-1"><a class="header-anchor" href="#内联样式" aria-hidden="true">#</a> 内联样式</h3>
<p>内联样式，又称<strong>行内样式</strong>。<br>
在元素的style属性中，定义样式。</p>
<div class="language-html ext-html"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">any</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">style</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">样式声明1;样式声明2;</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;/</span><span style="color: #F07178">any</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre></div><p><code v-pre>样式声明</code>即 <code v-pre>样式属性</code>:<code v-pre>样式值</code>;</p>
<h3 id="内部样式" tabindex="-1"><a class="header-anchor" href="#内部样式" aria-hidden="true">#</a> 内部样式</h3>
<p>在当前页面的head标签中，编写<code v-pre>&lt;style&gt; &lt;/style&gt;</code></p>
<div class="language-html ext-html"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">style</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    any</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">        样式声明1</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">        样式声明2</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">style</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre></div><p><code v-pre>选择器</code>{<code v-pre>样式声明1</code>；<code v-pre>样式声明2</code>...........}<br>
内部样式在当前页面内可以反复重用，不能跨页面使用</p>
<h3 id="外部样式" tabindex="-1"><a class="header-anchor" href="#外部样式" aria-hidden="true">#</a> 外部样式</h3>
<p>在外部单独创建一个css文件，*.css<br>
在html中的head中，使用 link 引入*.css</p>
<div class="language-html ext-html"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">link</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">rel</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">stylesheet</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">*.css</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre></div><p>外部样式可以实现在多个页面中重复使用。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在项目开发中，基于代码的重用性，多使用外部样式。<br>
内部样式、行内样式多用于测试和学习。</p>
</div>
</div></template>
