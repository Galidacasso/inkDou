<template><div><h1 id="转换" tabindex="-1"><a class="header-anchor" href="#转换" aria-hidden="true">#</a> 转换 <Badge type="warning" text="重要" /></h1>
<p>转换是通过css改变元素在页面中的<code v-pre>位置</code>、<code v-pre>大小</code>、<code v-pre>角度</code>以及<code v-pre>形状</code>。</p>
<ul>
<li>2D转换，只在x轴和y轴发生变化。</li>
<li>3D转换，除了x轴和y轴，增加了z轴的变化。</li>
</ul>
<h2 id="转换属性" tabindex="-1"><a class="header-anchor" href="#转换属性" aria-hidden="true">#</a> 转换属性</h2>
<p><code v-pre>transform</code> 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行位移、缩放、旋转或倾斜。</p>
<ul>
<li>默认值 <code v-pre>none</code>，不转换。</li>
<li><code v-pre>transform-function</code> 转换函数。</li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">transform</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">translate</span><span style="color: #89DDFF">(</span><span style="color: #F78C6C">100px</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">100px</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">scale</span><span style="color: #89DDFF">(</span><span style="color: #F78C6C">1.5</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF">  </span><span style="color: #82AAFF">rotate</span><span style="color: #89DDFF">(</span><span style="color: #F78C6C">45deg</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">skewX</span><span style="color: #89DDFF">(</span><span style="color: #F78C6C">15deg</span><span style="color: #89DDFF">)}</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">transform-function取值</p>
<p>transform:中可以取1个或者多个转换函数，例如translate()，scale()....
多个转换函数之间，用<code v-pre>空格</code>分开，如函数支持多个参数，参数用<code v-pre>逗号</code>隔开</p>
</div>
<h2 id="_2d转换" tabindex="-1"><a class="header-anchor" href="#_2d转换" aria-hidden="true">#</a> 2D转换</h2>
<p>在x轴和y轴发生变化的转换，含4个转换函数：位移、缩放、旋转、倾斜。</p>
<h3 id="位移" tabindex="-1"><a class="header-anchor" href="#位移" aria-hidden="true">#</a> 位移</h3>
<p><code v-pre>translate</code> 改变元素的位置。</p>
<table>
<thead>
<tr>
<th style="text-align:center">写法</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>translate(x)</code></td>
<td style="text-align:center">元素在x轴上的位移距离</td>
<td style="text-align:center"><code v-pre>+</code>→  | <code v-pre>-</code>←</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>translateX(x)</code>或<code v-pre>translatex(x)</code></td>
<td style="text-align:center">元素在x轴上的位移距离</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>translateY(y)</code>或<code v-pre>translatey(y)</code></td>
<td style="text-align:center">元素在y轴上的位移距离</td>
<td style="text-align:center"><code v-pre>+</code>↓  | <code v-pre>-</code>↑</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>translate(x,y)</code></td>
<td style="text-align:center">元素在x轴及y轴上的位移距离</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<p><strong>鼠标悬停查看效果</strong></p>
<div class="parent">
<div class=" d-item dx font-s">translate(100px)</div>&nbsp;&nbsp;
<div class=" d-item dy font-s">translatey(100px)</div>&nbsp;&nbsp;
<div class=" d-item dxy font-s">translate(100px,-100px)</div>
</div>
<h3 id="缩放" tabindex="-1"><a class="header-anchor" href="#缩放" aria-hidden="true">#</a> 缩放</h3>
<p><code v-pre>scale</code> 改变元素的大小。</p>
<table>
<thead>
<tr>
<th style="text-align:center">写法</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">参数取值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>scale(value)</code></td>
<td style="text-align:center">同时设置x轴、y轴的缩放的倍数</td>
<td style="text-align:center">value &gt; 1 放大</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>scaleX(x)</code></td>
<td style="text-align:center">单独设置x轴的倍数</td>
<td style="text-align:center">0 &lt; value &lt; 1 缩小</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>scaleY(y)</code></td>
<td style="text-align:center">单独设置y轴的倍数</td>
<td style="text-align:center">-1 &lt; value &lt; 0  反转并缩小</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>scale(x,y)</code></td>
<td style="text-align:center">分别设置x轴和y轴</td>
<td style="text-align:center">value &lt; -1   反转并放大</td>
</tr>
</tbody>
</table>
<p><strong>鼠标悬停查看效果</strong></p>
<div class="parent">
<div class=" d-item sxyl font-s">scale(1.5)</div>&nbsp;&nbsp;
<div class=" d-item sxym font-s">scale(0.5)</div>&nbsp;&nbsp;
<div class=" d-item sxl font-s">scaleX(2)</div>&nbsp;&nbsp;
<div class=" d-item syl font-s">scaleY(2)</div>&nbsp;&nbsp;
<div class=" d-item sxyl1 font-s">scale(-0.7,2)</div>&nbsp;&nbsp;
</div>
<h3 id="旋转" tabindex="-1"><a class="header-anchor" href="#旋转" aria-hidden="true">#</a> 旋转</h3>
<p><code v-pre>rotate</code> 改变元素的角度。</p>
<ul>
<li>使用<code v-pre>deg</code>作为单位，<code v-pre>+</code>为顺时针，<code v-pre>-</code>为逆时针</li>
<li>默认旋转原点为元素的中心
<ul>
<li>使用<code v-pre>transform-origin</code>设置旋转原点，取值：
<ul>
<li><code v-pre>px</code> <code v-pre>%</code></li>
<li><code v-pre>x</code>:<code v-pre>left</code>/<code v-pre>center</code>/<code v-pre>right</code></li>
<li><code v-pre>y</code>:<code v-pre>top</code>/<code v-pre>center</code>/<code v-pre>bottom</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>鼠标悬停查看效果</strong></p>
<div class="parent">
<div class=" d-item rts font-s">rotate(45deg)</div>&nbsp;&nbsp;
<div class=" d-item rtn font-s">rotate(-45deg)</div>&nbsp;&nbsp;
<div class=" d-item rtrl font-s">设右下为中心</div>&nbsp;&nbsp;
</div>
<h3 id="倾斜" tabindex="-1"><a class="header-anchor" href="#倾斜" aria-hidden="true">#</a> 倾斜</h3>
<p><code v-pre>skew</code> 使元素向某轴倾斜。</p>
<table>
<thead>
<tr>
<th style="text-align:center">写法</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">参数取值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>skew(deg)</code> <code v-pre>skew(deg)</code></td>
<td style="text-align:center">让元素的y轴向着x轴倾斜</td>
<td style="text-align:center"><code v-pre>+</code> 逆时针 <code v-pre>-</code> 顺时针</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>skewY(deg)</code></td>
<td style="text-align:center">让元素的x轴向着y轴倾斜</td>
<td style="text-align:center"><code v-pre>+</code> 顺时针 <code v-pre>-</code> 逆时针</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>skew(xdeg,ydeg)</code></td>
<td style="text-align:center">同时设置元素x,y轴的倾斜</td>
<td style="text-align:center"><code v-pre>+</code> 顺时针 <code v-pre>-</code> 逆时针</td>
</tr>
</tbody>
</table>
<p><strong>鼠标悬停查看效果</strong></p>
<div class="parent">
<div class=" d-item skx font-s">skewX(45deg)</div>&nbsp;&nbsp;
<div class=" d-item sky font-s">skewY(45deg)</div>&nbsp;&nbsp;
<div class=" d-item skxy font-s">skew(30deg,15deg)</div>&nbsp;&nbsp;
</div>
<h2 id="_3d转换" tabindex="-1"><a class="header-anchor" href="#_3d转换" aria-hidden="true">#</a> 3D转换</h2>
<p>除了x轴和y轴，增加了z轴的变化。z轴模拟了人眼到3D转换元素之间的距离，距离不同，效果不同。<br>
<code v-pre>perspective</code> 透视距离，此属性要加载到3D转换元素的父元素上</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">parent</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">perspective</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">150px</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_3d旋转" tabindex="-1"><a class="header-anchor" href="#_3d旋转" aria-hidden="true">#</a> 3D旋转</h3>
<p><code v-pre>rotateX</code> <code v-pre>rotateY</code> <code v-pre>rotateZ</code> 使元素以某轴为中心轴旋转。单位是deg。</p>
<table>
<thead>
<tr>
<th style="text-align:center">写法</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">效果参考</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>rotateX(deg)</code></td>
<td style="text-align:center">以x轴为中心轴，旋转n deg</td>
<td style="text-align:center">烤羊腿，老式爆米花机</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>rotateY(deg)</code></td>
<td style="text-align:center">以y轴为中心轴，旋转n deg</td>
<td style="text-align:center">旋转门，钢管舞，挂炉烤鸭</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>rotateZ(deg)</code></td>
<td style="text-align:center">以z轴为中心轴，旋转n deg</td>
<td style="text-align:center">电风扇，滚筒洗衣机，摩天轮</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>rotate3D(x,y,z,deg)</code></td>
<td style="text-align:center">合并设置</td>
<td style="text-align:center">--</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">rotate3D 取值</p>
<p><code v-pre>x,y,z</code>  取值 =0 ，不参与旋转  |  取值 &gt;0 ，参与旋转<br>
<code v-pre>deg</code>  取值越大，在当前轴转的越快</p>
</div>
<p><strong>鼠标悬停查看效果</strong></p>
<div class="pt parent ">
<div class=" d-item r3dx font-s">rotateX(45deg)</div>&nbsp;&nbsp;
<div class=" d-item r3dy font-s">rotateY(45deg)</div>&nbsp;&nbsp;
<div class=" d-item r3dz font-s">rotateZ(45deg)</div>&nbsp;&nbsp;
<div class=" d-item r3dxyz font-s">rotate3D(1,1,1,45deg)</div>&nbsp;&nbsp;
</div></div></template>

<style scoped>
.parent{
  display:flex;
}
.d-item {
  width: 150px;
  height: 150px;

  background-color: #42b98347;
  color: #3eaf7c;
  border: 1px solid #3eaf7c;
  text-align:center;
  line-height:130px;
}
.dx:hover{
  transform: translate(40px)
}
.dy:hover{
  transform: translatey(40px)
}
.dxy:hover{
  transform: translate(40px,-40px)
}
.font-s{
  font-size:.4rem;
}

.sxyl:hover {transform:scale(1.5);}
.sxym:hover {transform:scale(0.5);}
.sxl:hover {transform:scaleX(2);}
.syl:hover {transform:scaleY(2);}
.sxyl1:hover {transform:scale(-0.8,2);}

.rts:hover {transform:rotate(45deg);}
.rtn:hover {transform:rotate(-45deg);}
.rtrl:hover {
  transform-origin:right bottom;
  transform:rotate(45deg);
  }

.skx:hover {transform:skewX(45deg);}
.sky:hover {transform:skewY(45deg);}
.skxy:hover {transform:skew(30deg,15deg);}

.pt{perspective : 500px}
.r3dx:hover{ transform:rotateX(45deg) }
.r3dy:hover{ transform:rotateY(45deg) }
.r3dz:hover{ transform:rotateZ(45deg) }
.r3dxyz:hover{ transform:rotate3D(1,1,1,45deg) }
</style>
