<template><div><h1 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变" aria-hidden="true">#</a> 渐变</h1>
<p>渐变是颜色之间的平缓变化。
渐变种，至少要有2个色标。</p>
<h2 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变" aria-hidden="true">#</a> 线性渐变</h2>
<p>以直线的方式来填充渐变色</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">background-image</span><span style="color: #EEFFFF">:linear-gradient(方向</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">色标1</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">色标2.......);</span></span>
<span class="line"></span></code></pre></div><ul>
<li>向右,由绿至黑渐变<br>
<strong><code v-pre>to right</code></strong>,<strong><code v-pre>#3eaf7c</code></strong>,<strong><code v-pre>#2c3e50</code></strong></li>
</ul>
<div class="d lg"></div>
<h3 id="方向" tabindex="-1"><a class="header-anchor" href="#方向" aria-hidden="true">#</a> 方向</h3>
<p>方向可以是<code v-pre>to 关键字</code>也可以是<code v-pre>角度</code>。</p>
<table>
<thead>
<tr>
<th style="text-align:left">终点</th>
<th style="text-align:left">角度</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">to right</td>
<td style="text-align:left">90deg</td>
</tr>
<tr>
<td style="text-align:left">to left</td>
<td style="text-align:left">270deg/-90deg</td>
</tr>
<tr>
<td style="text-align:left">to top</td>
<td style="text-align:left">0deg</td>
</tr>
<tr>
<td style="text-align:left">to bottom</td>
<td style="text-align:left">180deg</td>
</tr>
</tbody>
</table>
<ul>
<li>180°方向,由绿至黑渐变<br>
<strong><code v-pre>180deg</code></strong>,<strong><code v-pre>#3eaf7c</code></strong>,<strong><code v-pre>#2c3e50</code></strong></li>
</ul>
<div class="d lgde"></div>
<h3 id="色标" tabindex="-1"><a class="header-anchor" href="#色标" aria-hidden="true">#</a> 色标</h3>
<p>色标由<code v-pre>颜色</code>和<code v-pre>位置</code>组成。<br>
颜色形式： <strong><code v-pre>rgb(255,255,255)</code></strong>/<strong><code v-pre>rgba(255,255,255,1.0)</code></strong>/<strong><code v-pre>#fff000</code></strong>/<strong><code v-pre>red</code></strong><br>
位置形式： <strong><code v-pre>%</code></strong>  / <strong><code v-pre>px</code></strong><br>
如不声明位置，则颜色的位置平均分配。</p>
<ul>
<li>向右,由绿至黑渐变，绿从元素宽度40%开始，到60%时渐变至黑<br>
<strong><code v-pre>to right</code></strong>,<strong><code v-pre>#3eaf7c</code></strong> <strong><code v-pre>40%</code></strong>,<strong><code v-pre>#2c3e50</code></strong> <strong><code v-pre>60%</code></strong></li>
</ul>
<div class="d lgp"></div>
<div class="df">
<div class="d1">
↑<br>40%<br>绿色
</div>
<div class="d2">
↑<br>60%<br>黑色
</div>
</div>
<h2 id="径向渐变" tabindex="-1"><a class="header-anchor" href="#径向渐变" aria-hidden="true">#</a> 径向渐变</h2>
<p>以圆形的方式来填充渐变色</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">background-image</span><span style="color: #EEFFFF">:radial-gradient(半径 at 圆心，色标1</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">色标2.........);</span></span>
<span class="line"></span></code></pre></div><ul>
<li>自元素中心，由绿向黑渐变，渐变半径为100px<br>
<strong><code v-pre>100px</code></strong> at <strong><code v-pre>center</code></strong> <strong><code v-pre>center</code></strong>,<strong><code v-pre>#3eaf7c</code></strong>, <strong><code v-pre>#2c3e50</code></strong></li>
</ul>
<div class="dr rg"></div>
<h3 id="半径" tabindex="-1"><a class="header-anchor" href="#半径" aria-hidden="true">#</a> 半径</h3>
<p>以px为单位的数字。</p>
<ul>
<li>以元素中心为圆心，半径为100px，由半径40%位置的绿色，径向渐变至半径60%位置的黑色。<br>
<strong><code v-pre>100px</code></strong> at <strong><code v-pre>center</code></strong> <strong><code v-pre>center</code></strong>,<strong><code v-pre>#3eaf7c</code></strong> <strong><code v-pre>40%</code></strong>, <strong><code v-pre>#2c3e50</code></strong> <strong><code v-pre>60%</code></strong></li>
</ul>
<div class="dr rgr"></div>
<div class="custom-container danger"><p class="custom-container-title">注意</p>
<p>色标声明位置时，是按照半径进行划分的。</p>
</div>
<h3 id="圆心" tabindex="-1"><a class="header-anchor" href="#圆心" aria-hidden="true">#</a> 圆心</h3>
<p>圆心的声明可以使用 <strong><code v-pre>关键字</code></strong>、<strong><code v-pre>px</code></strong> 及 <strong><code v-pre>%</code></strong>。<br>
都是基于元素的x轴和y轴定义的。</p>
<ul>
<li>以元素左上角为圆心，半径为300px，由绿色，径向渐变至黑色。<br>
<strong><code v-pre>300px</code></strong> at <strong><code v-pre>left</code></strong> <strong><code v-pre>top</code></strong>,<strong><code v-pre>#3eaf7c</code></strong>, <strong><code v-pre>#2c3e50</code></strong></li>
</ul>
<div class="dr rgar"></div>
<ul>
<li>效果展示<br>
<strong><code v-pre>#ffffff</code></strong> <strong><code v-pre>0%</code></strong> <strong><code v-pre>30%</code></strong>, <strong><code v-pre>#3eaf7c</code></strong> <strong><code v-pre>30%</code></strong> <strong><code v-pre>60%</code></strong>, <strong><code v-pre>#2c3e50</code></strong> <strong><code v-pre>60%</code></strong> <strong><code v-pre>100%</code></strong></li>
</ul>
<div class="dr rgd1"></div>
<h2 id="重复渐变" tabindex="-1"><a class="header-anchor" href="#重复渐变" aria-hidden="true">#</a> 重复渐变</h2>
<p>将线性渐变，径向渐变，反复执行几次。</p>
<h3 id="重复的线性渐变" tabindex="-1"><a class="header-anchor" href="#重复的线性渐变" aria-hidden="true">#</a> 重复的线性渐变</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">background-image</span><span style="color: #EEFFFF">: repeating-linear-gradient(方向</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">色标1</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">色标2</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">色标3...);</span></span>
<span class="line"></span></code></pre></div><ul>
<li>效果展示<br>
<strong><code v-pre>to right</code></strong>,<strong><code v-pre>#2c3e50 0px</code></strong>,<strong><code v-pre>#3eaf7c 3px</code></strong>,<strong><code v-pre>#2c3e50 6px</code></strong>,<strong><code v-pre>#3eaf7c 9px</code></strong>,<strong><code v-pre>#2c3e50 12px</code></strong></li>
</ul>
<div class="d rlg"></div>
<h3 id="重复的径向渐变" tabindex="-1"><a class="header-anchor" href="#重复的径向渐变" aria-hidden="true">#</a> 重复的径向渐变</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">background-image</span><span style="color: #EEFFFF">: repeating-radial-gradient(半径 at 圆心</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">色标1</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">色标2</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">色标3</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">...); </span></span>
<span class="line"></span></code></pre></div><ul>
<li>效果展示<br>
<strong><code v-pre>150px</code></strong> at <strong><code v-pre>center</code></strong> <strong><code v-pre>center</code></strong>,<strong><code v-pre>#2c3e50 6%</code></strong>, <strong><code v-pre>#3eaf7c 12%</code></strong></li>
</ul>
<div class="dr rlgr"></div>
<h2 id="浏览器兼容性" tabindex="-1"><a class="header-anchor" href="#浏览器兼容性" aria-hidden="true">#</a> 浏览器兼容性</h2>
<p>低版本浏览器不支持渐变，需要使用 <strong><code v-pre>css</code></strong> <strong><code v-pre>hack</code></strong> 让低版本浏览器可以实现渐变效果。<br>
即给代码添加前缀，匹配浏览器内核。</p>
<table>
<thead>
<tr>
<th style="text-align:left">前缀</th>
<th style="text-align:left">浏览器内核</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">-moz-</td>
<td style="text-align:left">firefox</td>
</tr>
<tr>
<td style="text-align:left">-webkit-</td>
<td style="text-align:left">chrome/safari</td>
</tr>
<tr>
<td style="text-align:left">-o-</td>
<td style="text-align:left">opera</td>
</tr>
<tr>
<td style="text-align:left">-ms-</td>
<td style="text-align:left">IE</td>
</tr>
</tbody>
</table>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #B2CCD6">background-image</span><span style="color: #89DDFF">:</span><span style="color: #82AAFF">-webkit-linear-gradient</span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">top</span><span style="color: #89DDFF">,#</span><span style="color: #EEFFFF">ff0</span><span style="color: #89DDFF">,#</span><span style="color: #EEFFFF">0ff</span><span style="color: #89DDFF">);</span></span>
<span class="line"><span style="color: #B2CCD6">background-image</span><span style="color: #89DDFF">:</span><span style="color: #82AAFF">-moz-linear-gradient</span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">top</span><span style="color: #89DDFF">,#</span><span style="color: #EEFFFF">ff0</span><span style="color: #89DDFF">,#</span><span style="color: #EEFFFF">0ff</span><span style="color: #89DDFF">);</span></span>
<span class="line"><span style="color: #B2CCD6">background-image</span><span style="color: #89DDFF">:</span><span style="color: #82AAFF">-o-linear-gradient</span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">top</span><span style="color: #89DDFF">,#</span><span style="color: #EEFFFF">ff0</span><span style="color: #89DDFF">,#</span><span style="color: #EEFFFF">0ff</span><span style="color: #89DDFF">);</span></span>
<span class="line"><span style="color: #B2CCD6">background-image</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">-ms-linear-gradient(top</span><span style="color: #89DDFF">,#</span><span style="color: #EEFFFF">ff0</span><span style="color: #89DDFF">,#</span><span style="color: #EEFFFF">0ff)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="custom-container danger"><p class="custom-container-title">注意</p>
<ul>
<li>如果添加了内核，方向写 <strong><code v-pre>起点</code></strong>，不能加to。</li>
<li>如果不添加内核，方向写 <strong><code v-pre>终点</code></strong>，有to。</li>
</ul>
</div>
</div></template>

<style scoped>
.d{
    width:100%;
    height:50px;
    border-radius: 10px;
}
.dr{
    width:200px;
    height:200px;
    border-radius: 10px;
}
.df{
    display:flex;
}
.d1{
    width:40%;
    text-align:right;
}
.d2{
    width:20%;
    text-align:right;
}
.lg{
background-image:linear-gradient(to right,#3eaf7c,#2c3e50)    
}

.lgde{
background-image:linear-gradient(180deg,#3eaf7c,#2c3e50)    
}

.lgp{
background-image:linear-gradient(to right,#3eaf7c 40%,#2c3e50 60%)    
}

.rg{
 background-image: radial-gradient(100px at center center,#3eaf7c, #2c3e50);
}

.rgr{
 background-image: radial-gradient(100px at center center,#3eaf7c 40%, #2c3e50 60%);
}

.rgar{
 background-image: radial-gradient(300px at left top,#3eaf7c, #2c3e50);
}

.rgd1{
 background-image: radial-gradient(#ffffff 0% 30%, #3eaf7c 30% 60%, #2c3e50 60% 100%); 
}

.rlg{
 background-image: repeating-linear-gradient(to right,#2c3e50 0px,#3eaf7c 3px,#2c3e50 6px,#3eaf7c 9px,#2c3e50 12px);
}

.rlgr{
 background-image: repeating-radial-gradient(150px at center center,#2c3e50 6%, #3eaf7c 12%); 
}


</style>
