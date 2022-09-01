<template><div><h1 id="inkdou配置" tabindex="-1"><a class="header-anchor" href="#inkdou配置" aria-hidden="true">#</a> inkDou配置</h1>
<h2 id="开发与打包" tabindex="-1"><a class="header-anchor" href="#开发与打包" aria-hidden="true">#</a> 开发与打包</h2>
<h3 id="开发模式" tabindex="-1"><a class="header-anchor" href="#开发模式" aria-hidden="true">#</a> 开发模式</h3>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">npm run </span><span style="color: #FFCB6B">docs</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">dev</span></span>
<span class="line"></span></code></pre></div><h3 id="打包为静态页面" tabindex="-1"><a class="header-anchor" href="#打包为静态页面" aria-hidden="true">#</a> 打包为静态页面</h3>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">npm run </span><span style="color: #FFCB6B">build</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">dev</span></span>
<span class="line"></span></code></pre></div><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2>
<h3 id="shiki" tabindex="-1"><a class="header-anchor" href="#shiki" aria-hidden="true">#</a> shiki</h3>
<p>为 Markdown 代码块启用代码高亮。</p>
<ul>
<li>安装</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">npm i </span><span style="color: #89DDFF">-</span><span style="color: #EEFFFF">D </span><span style="color: #89DDFF">@</span><span style="color: #EEFFFF">vuepress</span><span style="color: #89DDFF">/</span><span style="color: #EEFFFF">plugin</span><span style="color: #89DDFF">-</span><span style="color: #EEFFFF">shiki@next</span></span>
<span class="line"></span></code></pre></div><ul>
<li>配置</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> shikiPlugin </span><span style="color: #89DDFF">}</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@vuepress/plugin-shiki</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">    </span><span style="color: #82AAFF">shikiPlugin</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">      </span><span style="color: #545454; font-style: italic">// 配置项</span></span>
<span class="line"><span style="color: #EEFFFF">      </span><span style="color: #F07178">theme</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">material-darker</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>可选 <strong>theme</strong><a href="https://github.com/shikijs/shiki/blob/main/docs/languages.md#all-languages" target="_blank" rel="noopener noreferrer">列表<ExternalLinkIcon/></a></li>
<li>个人偏好：
<ul>
<li><code v-pre>github-dark-dimmed</code>、<code v-pre>github-dark</code>、<code v-pre>github-light</code></li>
<li><code v-pre>material-darker</code>、<code v-pre>material-lighter</code>、</li>
<li><code v-pre>one-dark-pro</code></li>
</ul>
</li>
</ul>
</div></template>
