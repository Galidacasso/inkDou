<template><h1 id="过渡" tabindex="-1"><a class="header-anchor" href="#过渡" aria-hidden="true">#</a> 过渡</h1>
<p>过渡是让css样式在一段时间内平缓的变化。</p>
<div class="parent">
<div class="dx font-s">无过渡</div>&nbsp;&nbsp;
<div class="dx gd font-s">有过渡</div>
</div>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2>
<h3 id="过渡属性" tabindex="-1"><a class="header-anchor" href="#过渡属性" aria-hidden="true">#</a> 过渡属性</h3>
<p>通过 <code v-pre>transition-property</code> 可以设置参与过渡的属性。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">transition-property</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> color width visibility...</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p>取值 all,代表所有支持过渡的属性，都参与过渡。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">transition-property</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> all</span><span style="color: #89DDFF">;}</span></span>
<span class="line"></span></code></pre></div><p><strong>可参与过渡的属性</strong></p>
<ul>
<li>颜色属性</li>
<li>可以取值为具体数字( px、%、rem )的属性</li>
<li>阴影</li>
<li>转换</li>
<li>visibility <font size="0.5">( 过渡之后隐藏，而不是显示隐藏的过渡效果 ) </font></li>
</ul>
<h3 id="过渡时长" tabindex="-1"><a class="header-anchor" href="#过渡时长" aria-hidden="true">#</a> 过渡时长</h3>
<p>通过 <code v-pre>transition-duration</code> 可以设置参与过渡的时长（速度），取值为: <code v-pre>s</code> / <code v-pre>ms</code> 。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">transition-duration</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1500ms</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="parent">
<div class="dx gdt0 font-s">0.5s</div>&nbsp;&nbsp;
<div class="dx gdt15 font-s">1500ms</div>&nbsp;&nbsp;
<div class="dx gdt3 font-s">3s</div>&nbsp;&nbsp;
</div>
<h3 id="过渡曲线" tabindex="-1"><a class="header-anchor" href="#过渡曲线" aria-hidden="true">#</a> 过渡曲线</h3>
<p>通过 <code v-pre>transition-timing-fuction</code> 可以设置过渡时间曲线函数。</p>
<table>
<thead>
<tr>
<th style="text-align:center">NO.</th>
<th style="text-align:left">名称</th>
<th style="text-align:left">内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:left">ease</td>
<td style="text-align:left">慢速开始，中间加速，减速结束</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:left">linear</td>
<td style="text-align:left">匀速</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:left">ease-in</td>
<td style="text-align:left">慢慢开始，一直缓慢加速</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:left">ease-out</td>
<td style="text-align:left">快速的开始，加速，减速结束</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:left">ease-in-out</td>
<td style="text-align:left">慢速开始，中间快速加速，减速结束</td>
</tr>
</tbody>
</table>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> transition-timing-fuction </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> ease</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="parent">
<div class="dx gdt15 ttfe font-s">ease       </div>&nbsp;&nbsp;
<div class="dx gdt15 ttfl font-s">linear     </div>&nbsp;&nbsp;
<div class="dx gdt15 ttfei font-s">ease-in    </div>&nbsp;&nbsp;
<div class="dx gdt15 ttfeofont-s">ease-out   </div>&nbsp;&nbsp;
<div class="dx gdt15 ttfeio font-s">ease-in-out</div>&nbsp;&nbsp;
</div>
<h3 id="延迟过渡" tabindex="-1"><a class="header-anchor" href="#延迟过渡" aria-hidden="true">#</a> 延迟过渡</h3>
<p>通过 <code v-pre>transition-delay</code> 可以延迟过渡开始的时间，取值为: <code v-pre>s</code> / <code v-pre>ms</code> 。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">transition-delay</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2s</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="dx gdt15 ttfe td2s font-s">延迟2s</div>&nbsp;&nbsp;
<h3 id="过渡的简写方式" tabindex="-1"><a class="header-anchor" href="#过渡的简写方式" aria-hidden="true">#</a> 过渡的简写方式</h3>
<p><code v-pre>transition</code>:<code v-pre>property</code><font size="0.5">( 参与过渡的属性 ) </font> <code v-pre>duration</code><font size="0.5">( 过渡时长 ) </font> <code v-pre>timing-function</code><font size="0.5">( 过渡曲线 ) </font><code v-pre>delay</code><font size="0.5">( 延迟 ) </font>;</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">transition</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> all </span><span style="color: #F78C6C">2s</span><span style="color: #EEFFFF"> linear </span><span style="color: #F78C6C">2s</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><ul>
<li><strong>最简方式</strong>
<code v-pre>transition</code>:<code v-pre>duration</code><font size="0.5">( 过渡时长 ) </font></li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">transition</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2s</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div></template>

<style scoped>
.parent{ display:flex; }
.dx {
    width: 120px;
    height: 120px;
    text-align: center;
    line-height: 115px;
    background-color: #e7c00060;
    border: 1px solid #e7c000;
    color: #e7c000; 
}
.gd{ transition: all 1s ease-in-out 0s;}
.dx:hover {
    color: #3eaf7c;
    background-color: #42b98347;
    border: 1px solid #3eaf7c;
    border-radius: 50%;
}

.font-s{font-size:.4rem }

.gdt15{
  transition-property : all;
  transition-duration : 1500ms
  }
.gdt3{
  transition-property : all;
  transition-duration : 3s
  }
.gdt0{
  transition-property : all;
  transition-duration : 0.5s
  }
.ttfe{transition-timing-fuction : ease}
.ttfl{transition-timing-fuction : linear}
.ttfei{transition-timing-fuction : ease-in}
.ttfeo{transition-timing-fuction : ease-out}
.ttfeio{transition-timing-fuction : ease-in-out}
.td2s{transition-delay : 2s}


</style>
