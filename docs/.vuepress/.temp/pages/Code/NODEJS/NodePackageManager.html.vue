<template><div><h1 id="包管理工具" tabindex="-1"><a class="header-anchor" href="#包管理工具" aria-hidden="true">#</a> 包管理工具</h1>
<p>Node Package Manager，简称 <strong><code v-pre>NPM</code></strong>，是一个NodeJS包管理和分发的工具，已经成为了非官方的发布Node模块（包）的标准。</p>
<h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2>
<p><strong>说明书文件</strong> 定义项目所需要的各个模块的配置,是一个json对象,对象中的每一个成员对应的就是当前的配置。</p>
<h2 id="安装模块" tabindex="-1"><a class="header-anchor" href="#安装模块" aria-hidden="true">#</a> 安装模块</h2>
<p>示例： 安装 <strong><code v-pre>express</code></strong> 模块
初始化说明书文件</p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">npm init </span><span style="color: #89DDFF">-</span><span style="color: #EEFFFF">y</span></span>
<span class="line"></span></code></pre></div><p>安装 <strong><code v-pre>express</code></strong> 框架</p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">npm i express</span></span>
<span class="line"></span></code></pre></div><p>可一次安装多个中间件</p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">npm i 中间件名1 中间件名2 中间件名3 </span><span style="color: #89DDFF">...</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在安装框架时会出现added50 packages 这样的字眼，是因为安装express的同时，需要安装它的依赖包。</p>
</div>
<h2 id="卸载模块" tabindex="-1"><a class="header-anchor" href="#卸载模块" aria-hidden="true">#</a> 卸载模块</h2>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">npm uninstall 模块名</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 删除全局模块xxx；</span></span>
<span class="line"><span style="color: #EEFFFF">npm uninstall </span><span style="color: #89DDFF">-</span><span style="color: #EEFFFF">g 模块名</span></span>
<span class="line"></span></code></pre></div></div></template>
