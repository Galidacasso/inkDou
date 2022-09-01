<template><div><h1 id="html5基础" tabindex="-1"><a class="header-anchor" href="#html5基础" aria-hidden="true">#</a> HTML5基础</h1>
<p>Hyper Text Markup Language超文本标记语言，即html，是创建网页的标准标记语言。<br>
HTML依赖浏览器运行，不同的浏览器解析显示页面的效果也不同。<br>
HTML标准制定者 <a href="https://www.w3.org" target="_blank" rel="noopener noreferrer">www.w3.org<ExternalLinkIcon/></a></p>
<h3 id="html的注释" tabindex="-1"><a class="header-anchor" href="#html的注释" aria-hidden="true">#</a> HTML的注释</h3>
<p>使用<code v-pre>&lt;!--</code>内容<code v-pre>--&gt;</code> 包裹要注释的内容</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 文档类型声明  给浏览器看的 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;!</span><span style="color: #F07178">DOCTYPE</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">html</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- html网页的根元素  属性=&quot;属性值&quot;  lang语言属性 浏览器翻译语言 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">html</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">en</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 网页的头部 --&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- HTML注释 被注释的内容不会在页面中显示 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">head</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #545454; font-style: italic">&lt;!-- meta 网页的元数据,给搜索引擎看的 --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #545454; font-style: italic">&lt;!-- 网页编码 --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">meta</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">charset</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">UTF-8</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #545454; font-style: italic">&lt;!-- 浏览器的兼容 --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">meta</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">http-equiv</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">X-UA-Compatible</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">content</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">IE=edge</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #545454; font-style: italic">&lt;!-- 声明的视口 --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">meta</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">viewport</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">content</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">width=device-width, initial-scale=1.0</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #545454; font-style: italic">&lt;!-- 网站的标题 --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">title</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">这是我的网页</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">title</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">head</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 网站身体,网站上显示所有的内容都需要写在里边 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">body</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    Hello World</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">body</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">html</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>输出</summary>
<!-- 文档类型声明  给浏览器看的 -->
<!DOCTYPE html>
<!-- html网页的根元素  属性="属性值"  lang语言属性 浏览器翻译语言 -->
<html lang="en">
<!-- 网页的头部 -->
<!-- HTML注释 被注释的内容不会在页面中显示 -->
<head>
    <!-- meta 网页的元数据,给搜索引擎看的 -->
    <!-- 网页编码 -->
    <meta charset="UTF-8">
    <!-- 浏览器的兼容 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 声明的视口 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 网站的标题 -->
    <title>这是我的网页</title>
</head>
<!-- 网站身体,网站上显示所有的内容都需要写在里边 -->
<body>
    Hello World
</body>
</html>
</details>
<h2 id="标记" tabindex="-1"><a class="header-anchor" href="#标记" aria-hidden="true">#</a> 标记</h2>
<p>HTML用来描述功能的符号叫标记(标签),有单双之分。</p>
<ul>
<li>在使用过程中,需要一对尖括号括起来&lt;&gt;</li>
<li>双标记是成双成对出现的</li>
<li>标记与标记之间可以互相嵌套</li>
</ul>
<h3 id="标题标签" tabindex="-1"><a class="header-anchor" href="#标题标签" aria-hidden="true">#</a> 标题标签</h3>
<p><strong>h1</strong> <strong>h2</strong> ... <strong>h6</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">标题</th>
<th style="text-align:left">内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">作用</td>
<td style="text-align:left">用醒目的方式显示标题</td>
</tr>
<tr>
<td style="text-align:center">默认效果</td>
<td style="text-align:left">居左 加粗 独占一行</td>
</tr>
<tr>
<td style="text-align:center">可选属性</td>
<td style="text-align:left"><strong><code v-pre>algin</code></strong> left/right/center</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h1</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">h1</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h1</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h2</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">center</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">h2 居中</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h2</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h3</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">right</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">h3 右对齐</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h3</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h4</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">h4</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h4</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h5</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">h5</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h5</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h6</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">h6</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h6</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>输出</summary>
<h1>h1</h1>
<h2 align="center">h2 居中</h2>
<h3 align="right">h3 右对齐</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
</details>
<h3 id="段落标签" tabindex="-1"><a class="header-anchor" href="#段落标签" aria-hidden="true">#</a> 段落标签</h3>
<p><strong>p</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">标题</th>
<th style="text-align:left">内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">作用</td>
<td style="text-align:left">结构化文本的一种方式，分割上下文内容</td>
</tr>
<tr>
<td style="text-align:center">默认效果</td>
<td style="text-align:left">20px 黑色 有上下外边距</td>
</tr>
<tr>
<td style="text-align:center">可选属性</td>
<td style="text-align:left"><strong><code v-pre>algin</code></strong> left/right/center <strong><code v-pre>size</code></strong> <strong><code v-pre>width</code></strong> <strong><code v-pre>color</code></strong></td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">p 段落标签</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">center</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">p 段落标签</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">right</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">p 段落标签</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">p</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">段落标签</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>输出</summary>
<p>p 段落标签</p>
<p align="center">p 段落标签</p>
<p align="right">p 段落标签</p>
<p>p<br>段落标签</p>
</details>
<h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3>
<p><strong>hr</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">标题</th>
<th style="text-align:left">内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">作用</td>
<td style="text-align:left">创建一条水平线,分割上下文内容</td>
</tr>
<tr>
<td style="text-align:center">默认效果</td>
<td style="text-align:left">1px大小 黑色 全尺寸100%</td>
</tr>
<tr>
<td style="text-align:center">可选属性</td>
<td style="text-align:left"><strong><code v-pre>algin</code></strong> left/right/center <strong><code v-pre>size</code></strong> <strong><code v-pre>width</code></strong> <strong><code v-pre>color</code></strong></td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">望明月,新悲凉,千古恨,轮回尝</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">hr</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">size</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">15</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">color</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">blue</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">right</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">width</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">100px</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">故国空余恨,旧王泪无痕</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">hr</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">size</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">10</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">  </span><span style="color: #C792EA">color</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">red</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">center</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">width</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">300px</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">君戈空指日,妾发乱垂云</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>输出</summary>
<p>望明月,新悲凉,千古恨,轮回尝</p>
<hr size="15" color="blue" align="right" width="100px">
故国空余恨,旧王泪无痕
<hr size="10"  color="red" align="center" width="300px">
君戈空指日,妾发乱垂云
<hr>
</details>
<h4 id="练习-个人简历" tabindex="-1"><a class="header-anchor" href="#练习-个人简历" aria-hidden="true">#</a> 练习：个人简历</h4>
<p>个人简历用最大标题显示 居中<br>
小标题使用中等标题<br>
内容使用段落划分<br>
小标题之间需要用分割线分割, 长度800 高度5 居左 颜色任意</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h1</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">center</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">个人简历</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h1</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h3</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">基本信息</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h3</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">姓名: 申哥</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">年龄: 18</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">hr</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">color</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">red</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">width</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">800px</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">size</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">5</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">left</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h3</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">教育经历</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h3</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">小学: 清华附小</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">中学: 清华附中</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">大学: 耶鲁大学</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">hr</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">color</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">yellow</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">width</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">800px</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">size</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">5</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">left</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h3</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">专业技能</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h3</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">精通 rm -rf/* 从删库到跑路</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">精通 各种操作系统开关机</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>输出</summary>
<h1 align="center">个人简历</h1>
<h3>基本信息</h3>
<p>姓名: 申哥</p>
<p>年龄: 18</p>
<hr color="red" width="800px" size="5" align="left">
<h3>教育经历</h3>
<p>小学: 清华附小</p>
<p>中学: 清华附中</p>
<p>大学: 耶鲁大学</p>
<hr color="yellow" width="800px" size="5" align="left">
<h3>专业技能</h3>
<p>精通 rm -rf/* 从删库到跑路</p>
<p>精通 各种操作系统开关机</p>
</details>
<h3 id="样式标签-较多" tabindex="-1"><a class="header-anchor" href="#样式标签-较多" aria-hidden="true">#</a> 样式标签(较多)</h3>
<table>
<thead>
<tr>
<th style="text-align:center">标签</th>
<th style="text-align:center">别名</th>
<th style="text-align:center">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">b</td>
<td style="text-align:center">strong</td>
<td style="text-align:center">加粗</td>
</tr>
<tr>
<td style="text-align:center">i</td>
<td style="text-align:center">em</td>
<td style="text-align:center">倾斜</td>
</tr>
<tr>
<td style="text-align:center">u</td>
<td style="text-align:center">--</td>
<td style="text-align:center">下划线</td>
</tr>
<tr>
<td style="text-align:center">s</td>
<td style="text-align:center">del</td>
<td style="text-align:center">删除线</td>
</tr>
<tr>
<td style="text-align:center">br</td>
<td style="text-align:center">--</td>
<td style="text-align:center">换行</td>
</tr>
<tr>
<td style="text-align:center">sup</td>
<td style="text-align:center">--</td>
<td style="text-align:center">上标</td>
</tr>
<tr>
<td style="text-align:center">sub</td>
<td style="text-align:center">--</td>
<td style="text-align:center">下标</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 加粗 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">b</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">加粗</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">b</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 表示文本很重要 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">strong</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">加粗</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">strong</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 倾斜 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">i</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">倾斜</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">i</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">em</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">倾斜</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">em</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 下划线 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">u</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">下划线</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">u</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 删除线 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">s</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">删除线</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">s</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">del</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">删除线</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">del</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">b</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    我们是</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">i</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">WEBVN</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">i</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">s</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">2201</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">s</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">i</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">u</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">2202</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">u</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">i</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">b</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 上标 --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">2</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">sup</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">3</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">sup</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 下标 --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">log</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">sub</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">n</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">sub</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 碳的充分燃烧 --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">C +O </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">sub</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">2</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">sub</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> = CO</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">sub</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">2</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">sub</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>输出</summary>
<p><b>加粗</b>
<strong>加粗</strong></p>
<p><i>倾斜</i>
<em>倾斜</em></p>
<p><u>下划线</u></p>
<p><s>删除线</s>
<del>删除线</del></p>
<b>
    我们是<i>WEBVN</i><s>2201</s>
    <i>
        <u>2202</u>
    </i>
</b>
<p>2<sup>3</sup>
log<sub>n</sub>
C +O <sub>2</sub> = CO<sub>2</sub></p>
</details>
<h3 id="字符实体-较多" tabindex="-1"><a class="header-anchor" href="#字符实体-较多" aria-hidden="true">#</a> 字符实体(较多)</h3>
<table>
<thead>
<tr>
<th style="text-align:center">标签</th>
<th style="text-align:center">作用</th>
<th style="text-align:center">效果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">&amp;nbsp;</td>
<td style="text-align:center">不间断的空格</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">&amp;gt;</td>
<td style="text-align:center">大于</td>
<td style="text-align:center">&gt;</td>
</tr>
<tr>
<td style="text-align:center">&amp;lt;</td>
<td style="text-align:center">小于</td>
<td style="text-align:center">&lt;</td>
</tr>
<tr>
<td style="text-align:center">&amp;yen;</td>
<td style="text-align:center">人民币</td>
<td style="text-align:center">¥</td>
</tr>
<tr>
<td style="text-align:center">&amp;copy;</td>
<td style="text-align:center">版权</td>
<td style="text-align:center">©</td>
</tr>
<tr>
<td style="text-align:center">&amp;reg;</td>
<td style="text-align:center">商标</td>
<td style="text-align:center">®</td>
</tr>
<tr>
<td style="text-align:center">&amp;#190;</td>
<td style="text-align:center">3/4数</td>
<td style="text-align:center">¾</td>
</tr>
<tr>
<td style="text-align:center">&amp;#248;</td>
<td style="text-align:center">字母o带斜杠</td>
<td style="text-align:center">ø</td>
</tr>
</tbody>
</table>
</div></template>
