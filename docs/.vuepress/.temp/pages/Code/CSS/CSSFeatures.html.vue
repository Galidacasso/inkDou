<template><div><h1 id="css的特性" tabindex="-1"><a class="header-anchor" href="#css的特性" aria-hidden="true">#</a> css的特性</h1>
<h2 id="继承性" tabindex="-1"><a class="header-anchor" href="#继承性" aria-hidden="true">#</a> 继承性</h2>
<p>大部分的css效果，是可以直接被子元素继承。<br>
必须是子元素继承父元素（祖先）的样式。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;!</span><span style="color: #F07178">DOCTYPE</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">html</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">html</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">en</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">head</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">meta</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">charset</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">UTF-8</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">meta</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">http-equiv</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">X-UA-Compatible</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">content</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">IE=edge</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">meta</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">viewport</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">content</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">width=device-width, initial-scale=1.0</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">title</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">继承性</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">title</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">    &lt;</span><span style="color: #F07178">style</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #FFCB6B">div</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #B2CCD6">border</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">1px</span><span style="color: #EEFFFF"> solid </span><span style="color: #89DDFF">#</span><span style="color: #EEFFFF">ff0000</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #B2CCD6">color</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">cadetblue</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #B2CCD6">width</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">200px</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #B2CCD6">height</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">100px</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">style</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">head</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">body</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        父元素（祖先）</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            子元素</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">a</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">www.baidu.com</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">                子元素中的a</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">a</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">body</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">html</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/images/继承性.png" alt="继承性"></p>
<div class="custom-container danger"><p class="custom-container-title">注意</p>
<p><strong><code v-pre>&lt;a&gt;</code></strong> <strong><code v-pre>&lt;/a&gt;</code></strong> 的字体颜色，是不继承的。</p>
</div>
<h2 id="层叠性" tabindex="-1"><a class="header-anchor" href="#层叠性" aria-hidden="true">#</a> 层叠性</h2>
<p>可以为一个样式设置多个样式规则。<br>
规则中，属性不冲突(没有重复)，都可以作用到当前元素上。<br>
在同级样式下，属性重复时，新的属性值会覆盖在上一个属性值之上。</p>
<h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h2>
<p>如果多个样式规则作用到一个元素上时。<br>
样式属性发生了冲突，根据优先级来应用。</p>
<h3 id="默认优先级" tabindex="-1"><a class="header-anchor" href="#默认优先级" aria-hidden="true">#</a> 默认优先级</h3>
<table>
<thead>
<tr>
<th style="text-align:left">优先级</th>
<th style="text-align:left">样式种类</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">最高</td>
<td style="text-align:left">内联样式(行内样式)</td>
</tr>
<tr>
<td style="text-align:left">就近原则</td>
<td style="text-align:left">内部样式，外部样式</td>
</tr>
<tr>
<td style="text-align:left">最低</td>
<td style="text-align:left">浏览器默认样式</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">就近原则</p>
<p>哪种样式靠近元素，哪种样式的优先级就高</p>
</div>
<h3 id="调整优先级" tabindex="-1"><a class="header-anchor" href="#调整优先级" aria-hidden="true">#</a> 调整优先级</h3>
<p>在 <strong><code v-pre>属性值</code></strong> 和 <strong><code v-pre>;</code></strong> 之间添加  <strong><code v-pre>!important</code></strong>，可以把优先级提升到最高。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">*</span><span style="color: #89DDFF">{</span><span style="color: #B2CCD6">color</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">red </span><span style="color: #F78C6C">!important</span><span style="color: #89DDFF">;}</span></span>
<span class="line"></span></code></pre></div><p>同时，内联样式不允许使用 <strong><code v-pre>!important</code></strong>。</p>
</div></template>
