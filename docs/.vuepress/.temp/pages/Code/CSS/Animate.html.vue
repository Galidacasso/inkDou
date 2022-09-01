<template><div><h1 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h1>
<p><code v-pre>animation</code> 动画是两个或者两个以上css值，平缓变化的效果。即将多个过渡放到一起的效果。</p>
<h2 id="关键帧" tabindex="-1"><a class="header-anchor" href="#关键帧" aria-hidden="true">#</a> 关键帧</h2>
<p>动画是有多个帧组成的，需要定义样式的时间点，即为关键帧<code v-pre>keyframes</code></p>
<p>CSS动画的关键帧需要注意：</p>
<ul>
<li>动画执行这一帧的时间点</li>
<li>在这个时间点上的样式</li>
<li>1个动画中，至少需要2个关键帧</li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF; font-style: italic">@keyframes</span><span style="color: #EEFFFF"> change</span><span style="color: #89DDFF">{}</span></span>
<span class="line"></span></code></pre></div><h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h2>
<h3 id="定义动画" tabindex="-1"><a class="header-anchor" href="#定义动画" aria-hidden="true">#</a> 定义动画</h3>
<p>定义动画，是使用关键帧完成的。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF; font-style: italic">@keyframes</span><span style="color: #EEFFFF"> change</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #545454; font-style: italic">/*关键帧*/</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #FFCB6B">0%</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">      </span><span style="color: #545454; font-style: italic">/*动画开始时的样式*/</span></span>
<span class="line"><span style="color: #EEFFFF">      </span><span style="color: #B2CCD6">border</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1px</span><span style="color: #EEFFFF"> solid </span><span style="color: #89DDFF">#</span><span style="color: #EEFFFF">e7c000</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">      </span><span style="color: #B2CCD6">background-color</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">#</span><span style="color: #EEFFFF">e7c00060</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">      </span><span style="color: #B2CCD6">border-radius</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0%</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #FFCB6B">100%</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">      </span><span style="color: #545454; font-style: italic">/*动画结束时的样式*/</span></span>
<span class="line"><span style="color: #EEFFFF">      </span><span style="color: #B2CCD6">border</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1px</span><span style="color: #EEFFFF"> solid </span><span style="color: #89DDFF">#</span><span style="color: #EEFFFF">3eaf7c</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">      </span><span style="color: #B2CCD6">background-color</span><span style="color: #89DDFF">:#</span><span style="color: #EEFFFF">42b98347</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">      </span><span style="color: #B2CCD6">border-radius</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">50%</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="调用动画" tabindex="-1"><a class="header-anchor" href="#调用动画" aria-hidden="true">#</a> 调用动画</h3>
<p>在动画定义完成后，需要在元素上调用动画。</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">效果</th>
<th style="text-align:left">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>animation-name</code></td>
<td style="text-align:left">调用的动画名称</td>
<td style="text-align:left">字符</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>animation-duration</code></td>
<td style="text-align:left">动画的持续时间</td>
<td style="text-align:left">s/ms</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>animation-timing-function</code></td>
<td style="text-align:left">动画播放的时间曲线函数</td>
<td style="text-align:left"><code v-pre>ease</code><hr/><code v-pre>linear</code><hr/><code v-pre>steps(n)</code><hr/>...</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>animation-delay</code></td>
<td style="text-align:left">动画延迟</td>
<td style="text-align:left">s/ms</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>animation-iteration-count</code></td>
<td style="text-align:left">动画播放次数</td>
<td style="text-align:left">数字<hr/><code v-pre>infinite</code> <font size="0.5">(无限)</font></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>animation-direction</code></td>
<td style="text-align:left">动画播放顺序</td>
<td style="text-align:left"><code v-pre>normal</code> 正序 0%-100%<hr/><code v-pre>reverse</code> 逆序 100%-0%<hr/><code v-pre>alternate</code> 轮流播放</td>
</tr>
</tbody>
</table>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">animation_item</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">animation-name</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">change</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">animation-duration</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">2s</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">animation-timing-function</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">ease</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">animation-delay</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">1s</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="anitem"></div>
<h3 id="简写方法" tabindex="-1"><a class="header-anchor" href="#简写方法" aria-hidden="true">#</a> 简写方法</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">animation_item</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">          </span><span style="color: #545454; font-style: italic">/* 动画名   持续        曲线函数      延迟   次数    顺序 */</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">animation</span><span style="color: #EEFFFF">： </span><span style="color: #B2CCD6">name</span><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">duration</span><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">timing-function</span><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">delay</span><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">count</span><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">direction</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">极简方式</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">animation_item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">animation</span><span style="color: #EEFFFF">： </span><span style="color: #B2CCD6">name</span><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">duration</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div></div>
<h3 id="填充状态" tabindex="-1"><a class="header-anchor" href="#填充状态" aria-hidden="true">#</a> 填充状态</h3>
<p><code v-pre>animation-fill-mode</code> 规定<code v-pre>当动画不播放时</code>/<code v-pre>当动画完成时</code>/<code v-pre>当动画有一个延迟未开始播放时</code>，要应用到元素的样式。<br>
默认情况下，CSS 动画在第一个关键帧播放完之前不会影响元素，在最后一个关键帧完成后停止影响元素。<code v-pre>animation-fill-mode</code> 属性可重写该行为。</p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>none</code></td>
<td style="text-align:left">默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>forwards</code></td>
<td style="text-align:left">动画在结束后，停留在最后一帧</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>backwards</code></td>
<td style="text-align:left">动画在延迟时间内，保持在第一帧</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>both</code></td>
<td style="text-align:left">动画遵循 forwards 和 backwards 的规则，两者都兼顾</td>
</tr>
</tbody>
</table>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<h3 id="动画与过渡的区别" tabindex="-1"><a class="header-anchor" href="#动画与过渡的区别" aria-hidden="true">#</a> 动画与过渡的区别</h3>
<table>
<thead>
<tr>
<th style="text-align:left">过渡</th>
<th style="text-align:left">动画</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">两个css值之间的变化</td>
<td style="text-align:left">两个或者两个以上css值的变化</td>
</tr>
<tr>
<td style="text-align:left">必须使用hover激活</td>
<td style="text-align:left">可以使用hover激活(动画代码写hover)<hr>可以加载激活(动画代码写原样式中)</td>
</tr>
</tbody>
</table>
<h3 id="第三方动画库" tabindex="-1"><a class="header-anchor" href="#第三方动画库" aria-hidden="true">#</a> 第三方动画库</h3>
<p>在项目中，一些普通的动画，可以使用第三方动画库，提高开发效率。<br>
<a href="https://animate.style/" target="_blank" rel="noopener noreferrer">animate<ExternalLinkIcon/></a></p>
<p><strong>安装</strong></p>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">npm install animate.css --save</span></span>
<span class="line"></span></code></pre></div><p><strong>引入项目</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">animate.css</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre></div><p><strong>引入html</strong>
使用网络包</p>
<div class="language-html ext-html"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">link</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #C792EA">rel</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">stylesheet</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #89DDFF">  /&gt;</span></span>
<span class="line"></span></code></pre></div><br>
<p><strong>效果展示</strong></p>
<div class="animate_div_animate animate_flash animate_last">flash</div>
<br>
<div class="animate_div_animate animate_bounce animate_last">bounce</div>
<br>
<div class="animate_div_animate animate_rubberBand animate_last">rubberBand</div>
<br><br></div></template>

<style scoped>
.anitem{
  width:200px;
  height: 200px;
  animation: change 3s linear 1s 2 alternate;
  animation-iteration-count:infinite;
  animation-fill-mode: both;
}
.anitem:hover{
    animation-play-state: paused;
}
@keyframes change{
/*关键帧*/
  0%{
      /*动画开始时的样式*/
      border: 1px solid #e7c000;
      background-color: #e7c00060;
      border-radius: 0%;
  }
  100%{
      /*动画结束时的样式*/
      border: 1px solid #3eaf7c;
      background-color:#42b98347;
      border-radius: 50%;
  }
}

.animate_div_animate{
  width: 400px;
  height:100px;
  border: 1px solid #3eaf7c;
  background-color:#42b98347;
  line-height:100px;
  text-align:center
}
.animate_flash{
  animation: flash 3s linear 1s 2 alternate;
}

.animate_bounce{
  animation: bounce 3s linear 1s 2 alternate;
}

.animate_rubberBand{
  animation: rubberBand 3s linear 1s 2 alternate;
}

.animate_last{
  animation-iteration-count:infinite;
  animation-fill-mode: both;
}

</style>
