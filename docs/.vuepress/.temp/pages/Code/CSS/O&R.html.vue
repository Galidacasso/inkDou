<template><div><h1 id="优化与重置" tabindex="-1"><a class="header-anchor" href="#优化与重置" aria-hidden="true">#</a> 优化与重置</h1>
<p>为了更好的用户体验，在项目中我们需要将css优化，将样式统一，重置默认样式。</p>
<h2 id="css优化" tabindex="-1"><a class="header-anchor" href="#css优化" aria-hidden="true">#</a> css优化</h2>
<h3 id="优化目的" tabindex="-1"><a class="header-anchor" href="#优化目的" aria-hidden="true">#</a> 优化目的</h3>
<ul>
<li>减少服务器的压力</li>
<li>提升用户体验</li>
</ul>
<h3 id="优化原则" tabindex="-1"><a class="header-anchor" href="#优化原则" aria-hidden="true">#</a> 优化原则</h3>
<ul>
<li>将css和js代码，放到独立的文件中，在头部引入</li>
<li>尽量减少http请求个数</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">sprits</p>
<p>又称精灵图、雪碧图，是一张集合小图标的图片。</p>
<p><img src="/images/sprits.png" alt="link"><br>
我们可以使用背景图的定位，显示某一个图标，这种方法可以重复使用，是由于此图请求一次后，重复用时，会使用缓存，有效减少了请求的数量。</p>
</div>
<h3 id="代码优化" tabindex="-1"><a class="header-anchor" href="#代码优化" aria-hidden="true">#</a> 代码优化</h3>
<ul>
<li>合并样式（能用简写方式，就不单独定义）</li>
<li>减少样式的重写(能重用就重用)</li>
<li>代码压缩</li>
<li>避免空的href和src</li>
</ul>
<h2 id="样式重置" tabindex="-1"><a class="header-anchor" href="#样式重置" aria-hidden="true">#</a> 样式重置</h2>
<h3 id="css-reset" tabindex="-1"><a class="header-anchor" href="#css-reset" aria-hidden="true">#</a> css reset</h3>
<p>我们为了让样式统一，在开发之前，经常会把这些不同的默认样式，进行统一处理
这种统一化处理，就叫做 <code v-pre>css reset</code></p>
<ul>
<li><code v-pre>css reset</code>没有严格要求，不同项目的<code v-pre>css reset</code>不同</li>
<li>但是<code v-pre>css reset</code>往往比较霸道，把一些有用的默认样式也清除了</li>
</ul>
<h3 id="normalize-css" tabindex="-1"><a class="header-anchor" href="#normalize-css" aria-hidden="true">#</a> normalize.css</h3>
<p>是一种css reset的解决方案。<br>
保护有用的浏览器默认样式，而不是完全去掉他们。</p>
<ul>
<li>针对不同浏览器，修复了很多的bug</li>
<li>比较平和，很多开发者支持这种方式</li>
</ul>
<p><a href="https://github.com/necolas/normalize.css" target="_blank" rel="noopener noreferrer">normalize.css v8.0.1<ExternalLinkIcon/></a></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/* Document</span></span>
<span class="line"><span style="color: #545454; font-style: italic">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 1. 修正所有浏览器行高.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 2. 防止iOS更改方向后调整字体.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">html</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">line-height</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1.15</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #FFCB6B">-webkit-text-size-adjust</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">100%</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 2 */</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/* Sections</span></span>
<span class="line"><span style="color: #545454; font-style: italic">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Remove the margin in all browsers.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">body</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">margin</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Render the `main` element consistently in IE.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">main</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">display</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> block</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Correct the font size and margin on `h1` elements within `section` and</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * `article` contexts in Chrome, Firefox, and Safari.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">h1</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">font-size</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2em</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">margin</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0.67em</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/* Grouping content</span></span>
<span class="line"><span style="color: #545454; font-style: italic">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 1. Add the correct box sizing in Firefox.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 2. Show the overflow in Edge and IE.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">hr</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">box-sizing</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> content-box</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">height</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">overflow</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> visible</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 2 */</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 1. Correct the inheritance and scaling of font size in all browsers.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 2. Correct the odd `em` font sizing in all browsers.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">pre</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">font-family</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> monospace</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> monospace</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">font-size</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1em</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 2 */</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/* Text-level semantics</span></span>
<span class="line"><span style="color: #545454; font-style: italic">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Remove the gray background on active links in IE 10.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">a</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">background-color</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> transparent</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 1. Remove the bottom border in Chrome 57-</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">abbr</span><span style="color: #89DDFF">[</span><span style="color: #C792EA">title</span><span style="color: #89DDFF">]</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">border-bottom</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> none</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">text-decoration</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> underline</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 2 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">text-decoration</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> underline dotted</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 2 */</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Add the correct font weight in Chrome, Edge, and Safari.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">b</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #FFCB6B">strong</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">font-weight</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> bolder</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 1. Correct the inheritance and scaling of font size in all browsers.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 2. Correct the odd `em` font sizing in all browsers.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">code</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #FFCB6B">kbd</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #FFCB6B">samp</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">font-family</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> monospace</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> monospace</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">font-size</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1em</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 2 */</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Add the correct font size in all browsers.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">small</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">font-size</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">80%</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Prevent `sub` and `sup` elements from affecting the line height in</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * all browsers.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">sub</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #FFCB6B">sup</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">font-size</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">75%</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">line-height</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">position</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> relative</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">vertical-align</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> baseline</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">sub</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">bottom</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">-0.25em</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">sup</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">top</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">-0.5em</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/* Embedded content</span></span>
<span class="line"><span style="color: #545454; font-style: italic">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Remove the border on images inside links in IE 10.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">img</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">border-style</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> none</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/* Forms</span></span>
<span class="line"><span style="color: #545454; font-style: italic">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 1. Change the font styles in all browsers.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 2. Remove the margin in Firefox and Safari.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">button</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #FFCB6B">input</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #FFCB6B">optgroup</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #FFCB6B">select</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #FFCB6B">textarea</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">font-family</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> inherit</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">font-size</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">100%</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">line-height</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1.15</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">margin</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 2 */</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Show the overflow in IE.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 1. Show the overflow in Edge.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">button</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #FFCB6B">input</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">overflow</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> visible</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Remove the inheritance of text transform in Edge, Firefox, and IE.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 1. Remove the inheritance of text transform in Firefox.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">button</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #FFCB6B">select</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">text-transform</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> none</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Correct the inability to style clickable types in iOS and Safari.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">button</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">button</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">],</span></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">reset</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">],</span></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">submit</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #FFCB6B">-webkit-appearance</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> button</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Remove the inner border and padding in Firefox.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">button</span><span style="color: #89DDFF">::</span><span style="color: #C792EA">-moz-focus-inner</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">button</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]::</span><span style="color: #C792EA">-moz-focus-inner</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">reset</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]::</span><span style="color: #C792EA">-moz-focus-inner</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">submit</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]::</span><span style="color: #C792EA">-moz-focus-inner</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">border-style</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> none</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">padding</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Restore the focus styles unset by the previous rule.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">button</span><span style="color: #89DDFF">:</span><span style="color: #C792EA">-moz-focusring</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">button</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]:</span><span style="color: #C792EA">-moz-focusring</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">reset</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]:</span><span style="color: #C792EA">-moz-focusring</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">submit</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]:</span><span style="color: #C792EA">-moz-focusring</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">outline</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1px</span><span style="color: #EEFFFF"> dotted ButtonText</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Correct the padding in Firefox.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">fieldset</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">padding</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0.35em</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0.75em</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0.625em</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 1. Correct the text wrapping in Edge and IE.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 2. Correct the color inheritance from `fieldset` elements in IE.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 3. Remove the padding so developers are not caught out when they zero out</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> *    `fieldset` elements in all browsers.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">legend</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">box-sizing</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> border-box</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">color</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> inherit</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 2 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">display</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> table</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">max-width</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">100%</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">padding</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 3 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">white-space</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> normal</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Add the correct vertical alignment in Chrome, Firefox, and Opera.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">progress</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">vertical-align</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> baseline</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Remove the default vertical scrollbar in IE 10+.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">textarea</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">overflow</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> auto</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 1. Add the correct box sizing in IE 10.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 2. Remove the padding in IE 10.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">checkbox</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">],</span></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">radio</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">box-sizing</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> border-box</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">padding</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 2 */</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Correct the cursor style of increment and decrement buttons in Chrome.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">number</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]::</span><span style="color: #C792EA">-webkit-inner-spin-button</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">number</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]::</span><span style="color: #C792EA">-webkit-outer-spin-button</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">height</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> auto</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 1. Correct the odd appearance in Chrome and Safari.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 2. Correct the outline style in Safari.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">search</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #FFCB6B">-webkit-appearance</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> textfield</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">outline-offset</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">-2px</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 2 */</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Remove the inner padding in Chrome and Safari on macOS.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">search</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">]::</span><span style="color: #C792EA">-webkit-search-decoration</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #FFCB6B">-webkit-appearance</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> none</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 1. Correct the inability to style clickable types in iOS and Safari.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * 2. Change font properties to `inherit` in Safari.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">::</span><span style="color: #C792EA">-webkit-file-upload-button</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #FFCB6B">-webkit-appearance</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> button</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 1 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">font</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> inherit</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">/* 2 */</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/* Interactive</span></span>
<span class="line"><span style="color: #545454; font-style: italic">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/*</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Add the correct display in Edge, IE 10+, and Firefox.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">details</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">display</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> block</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/*</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Add the correct display in all browsers.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">summary</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">display</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> list-item</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/* Misc</span></span>
<span class="line"><span style="color: #545454; font-style: italic">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Add the correct display in IE 10+.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FFCB6B">template</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">display</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> none</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">/**</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> * Add the correct display in IE 10.</span></span>
<span class="line"><span style="color: #545454; font-style: italic"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">[</span><span style="color: #C792EA">hidden</span><span style="color: #89DDFF">]</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">display</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> none</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

<style scoped>

</style>
