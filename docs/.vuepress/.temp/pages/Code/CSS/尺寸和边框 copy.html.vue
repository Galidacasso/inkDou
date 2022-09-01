<template><h1 id="尺寸和边框" tabindex="-1"><a class="header-anchor" href="#尺寸和边框" aria-hidden="true">#</a> 尺寸和边框</h1>
<h2 id="尺寸" tabindex="-1"><a class="header-anchor" href="#尺寸" aria-hidden="true">#</a> 尺寸</h2>
<p>通过尺寸的声明，改变元素在页面上的宽、高。</p>
<ul>
<li>以 绝对值 取值 <strong><code v-pre>px</code></strong></li>
<li>以 相对值 取值 <strong><code v-pre>%</code></strong> （相对于父元素）</li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">width</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">100%</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">height</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">150px</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><ul>
<li>宽度与父元素等宽(100%)，高度为150px</li>
</ul>
<div class="d1"></div>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<ul>
<li>父元素有固定高度时，height可以设置相对值 %</li>
<li>如果父元素是body，height相对值失效，宽度可以设置相对值</li>
</ul>
</div>
<h3 id="max-min-尺寸" tabindex="-1"><a class="header-anchor" href="#max-min-尺寸" aria-hidden="true">#</a> max &amp; min 尺寸</h3>
<p>限定元素的最大及最小尺寸。</p>
<table>
<thead>
<tr>
<th style="text-align:left">值名称</th>
<th style="text-align:left">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">max-width</td>
<td style="text-align:left">最大宽度</td>
</tr>
<tr>
<td style="text-align:left">max-height</td>
<td style="text-align:left">最大高度</td>
</tr>
<tr>
<td style="text-align:left">min-width</td>
<td style="text-align:left">最小宽度</td>
</tr>
<tr>
<td style="text-align:left">min-heigth</td>
<td style="text-align:left">最小高度</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">关于图片</p>
<ul>
<li>给图片设置 max-width:100%，是指图片的原始尺寸。</li>
<li>图片可以缩放，但不会超过原始大小。</li>
</ul>
</div>
<h3 id="允许设置尺寸的元素" tabindex="-1"><a class="header-anchor" href="#允许设置尺寸的元素" aria-hidden="true">#</a> 允许设置尺寸的元素</h3>
<table>
<thead>
<tr>
<th style="text-align:center">元素类型</th>
<th style="text-align:left">标签</th>
<th style="text-align:left">设置效果</th>
<th style="text-align:left">默认宽高</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">块级元素</td>
<td style="text-align:left">div p form table<br> ul lo li <br>h1-h6  dl dt</td>
<td style="text-align:left">可以设置宽高</td>
<td style="text-align:left">默认宽：父元素宽度100% <br> 默认高：靠内容撑开，无内容，高度为0</td>
</tr>
<tr>
<td style="text-align:center">行内元素</td>
<td style="text-align:left">a img span b <br>strong input <br>select section</td>
<td style="text-align:left">设置宽高无效</td>
<td style="text-align:left">默认宽/高，都是被内容撑开，<br>没有内容，就没有宽高</td>
</tr>
<tr>
<td style="text-align:center">行内块</td>
<td style="text-align:left">img  input  td</td>
<td style="text-align:left">可以设置宽高</td>
<td style="text-align:left">浏览器自动设置宽/高，<br>浏览器不同设置的宽高也不同</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">特殊情况</p>
<p>自带宽高属性的元素，可以设置样式宽高，例如：&lt;img&gt;  &lt;table&gt;&lt;/table&gt;</p>
</div>
<h3 id="溢出处理" tabindex="-1"><a class="header-anchor" href="#溢出处理" aria-hidden="true">#</a> 溢出处理</h3>
<p>当内容较大，元素区域较小，就会发生溢出效果。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #B2CCD6">overflow</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">visible|hidden|scroll|auto</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><table>
<thead>
<tr>
<th style="text-align:left">值名称</th>
<th style="text-align:left">效果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">visible(默认)</td>
<td style="text-align:left">溢出部分可见</td>
</tr>
<tr>
<td style="text-align:left">hidden</td>
<td style="text-align:left">溢出部分不可见</td>
</tr>
<tr>
<td style="text-align:left">scroll</td>
<td style="text-align:left">添加滚动条</td>
</tr>
<tr>
<td style="text-align:left">auto</td>
<td style="text-align:left">溢出的方向，有滚动条，不溢出的方向没有滚动条</td>
</tr>
</tbody>
</table>
<ul>
<li>溢出部分不可见</li>
</ul>
<div class="d2 ofh"><img src="/images/CSS3.png"></div>
<ul>
<li>添加滚动条</li>
</ul>
<div class="d2 ofs"><img src="/images/CSS3.png"></div>
<ul>
<li>溢出方向添加滚动条</li>
</ul>
<div class="d2 ofa"><img src="/images/CSS3.png"></div>
<h3 id="设置单向溢出" tabindex="-1"><a class="header-anchor" href="#设置单向溢出" aria-hidden="true">#</a> 设置单向溢出</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #B2CCD6">overflow-x</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> visible|hidden|scroll|auto</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #B2CCD6">overflow-y</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> visible|hidden|scroll|auto</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="d3 ofx">
  <div class="d4">
    <img class="imgbr imgr" src="/images/CSS/1.png">
    <img class="imgbr imgr" src="/images/CSS/2.png">
    <img class="imgbr imgr" src="/images/CSS/3.png">
    <img class="imgbr " src="/images/CSS/4.png">
  </div>
</div>
<h2 id="边框" tabindex="-1"><a class="header-anchor" href="#边框" aria-hidden="true">#</a> 边框</h2>
<p>设置元素四边边框。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #B2CCD6">border</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> width style color</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="d5 bd"></div>
<table>
    <tr>
        <td colspan="2">值名称</td>
        <td>解释</td>
    </tr>
    <tr>
        <td colspan="2">width</td>
        <td>边框宽度</td>
    </tr>
    <tr>
        <td rowspan="4">style</td>
        <td>solid</td>
        <td>实线</td>
    </tr>
    <tr>
        <td>dotted</td>
        <td>点虚线</td>
    </tr>
    <tr>
        <td>dashed</td>
        <td>短线虚线</td>
    </tr>
    <tr>
        <td>double</td>
        <td>双实线</td>
    </tr>
    <tr>
        <td colspan="2">color</td>
        <td>颜色，支持transparent</td>
    </tr>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>border:0/none 清除4个方向的边框</p>
</div>
<h3 id="单边边框" tabindex="-1"><a class="header-anchor" href="#单边边框" aria-hidden="true">#</a> 单边边框</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">border-top</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1px</span><span style="color: #EEFFFF"> solid </span><span style="color: #89DDFF">#</span><span style="color: #EEFFFF">3eaf7c</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">border-right</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1px</span><span style="color: #EEFFFF"> solid </span><span style="color: #89DDFF">#</span><span style="color: #EEFFFF">3eaf7c</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">border-bottom</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1px</span><span style="color: #EEFFFF"> solid </span><span style="color: #89DDFF">#</span><span style="color: #EEFFFF">3eaf7c</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">border-left</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1px</span><span style="color: #EEFFFF"> solid </span><span style="color: #89DDFF">#</span><span style="color: #EEFFFF">3eaf7c</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="d6">
<div class="d7 bdt"></div>
<div class="d7 bdr"></div>
<div class="d7 bdb"></div>
<div class="d7 bdl"></div>
</div>
<h3 id="圆角" tabindex="-1"><a class="header-anchor" href="#圆角" aria-hidden="true">#</a> 圆角</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #B2CCD6">border-radius</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">10px</span><span style="color: #EEFFFF">|</span><span style="color: #F78C6C">50%</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p>以相对值 <strong><code v-pre>px</code></strong> 取值，最大 <strong><code v-pre>边长/2</code></strong> ，结果为圆或者椭圆。<br>
以相对值 <strong><code v-pre>%</code></strong> 取值，最大 <strong><code v-pre>50%</code></strong> ，结果为圆或者椭圆。</p>
<div class="d6">
<div class="d5 brap"></div>
<div class="d5 brab"></div>
</div>
<h3 id="单边圆角" tabindex="-1"><a class="header-anchor" href="#单边圆角" aria-hidden="true">#</a> 单边圆角</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">border-top-left-radius</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">10px</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">border-bottom-left-radius</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">10px</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">border-top-right-radius</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">50%</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">border-bottom-right-radius</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">50%</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="d6">
<div class="d7 brar"></div>
<div class="d7 bral"></div>
<div class="d7 brat"></div>
<div class="d7 brab1"></div>
</div>
<h3 id="边框阴影" tabindex="-1"><a class="header-anchor" href="#边框阴影" aria-hidden="true">#</a> 边框阴影</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">box-shadow</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">h-shadow v-shadow blur spread color inset</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><table>
<thead>
<tr>
<th style="text-align:left">值名称</th>
<th style="text-align:left">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">h-shadow</td>
<td style="text-align:left">水平偏移量</td>
</tr>
<tr>
<td style="text-align:left">v-shadow</td>
<td style="text-align:left">垂直偏移量</td>
</tr>
<tr>
<td style="text-align:left">blur</td>
<td style="text-align:left">模糊距离</td>
</tr>
<tr>
<td style="text-align:left">spread</td>
<td style="text-align:left">阴影大小</td>
</tr>
<tr>
<td style="text-align:left">color</td>
<td style="text-align:left">颜色</td>
</tr>
<tr>
<td style="text-align:left">inset</td>
<td style="text-align:left">内阴影</td>
</tr>
</tbody>
</table>
<div class="d6">
<div class="d7 bd bs"></div>
<div class="d7 bd bsi"></div>
</div>
<h3 id="轮廓" tabindex="-1"><a class="header-anchor" href="#轮廓" aria-hidden="true">#</a> 轮廓</h3>
<p>绘制在边框外的线，不占页面空间。<br>
轮廓没有单边的定义。<br>
可以使用 <strong><code v-pre>solid</code></strong> <strong><code v-pre>dotted</code></strong> <strong><code v-pre>dashed</code></strong> <strong><code v-pre>double</code></strong> 样式</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">outline</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">3px</span><span style="color: #EEFFFF"> solid </span><span style="color: #89DDFF">#</span><span style="color: #EEFFFF">4e6e8e4d</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="d5 bd outl"></div></template>

<style>

</style>
