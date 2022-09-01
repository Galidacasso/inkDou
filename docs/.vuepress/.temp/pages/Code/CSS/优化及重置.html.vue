<template><h1 id="优化与重置" tabindex="-1"><a class="header-anchor" href="#优化与重置" aria-hidden="true">#</a> 优化与重置</h1>
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
</template>

<style scoped>

</style>
