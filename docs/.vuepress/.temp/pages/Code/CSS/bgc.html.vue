<template><div><h1 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h1>
<h2 id="背景颜色" tabindex="-1"><a class="header-anchor" href="#背景颜色" aria-hidden="true">#</a> 背景颜色</h2>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">background-color</span><span style="color: #EEFFFF">:</span><span style="color: #89DDFF">#</span><span style="color: #EEFFFF">faa;</span></span>
<span class="line"></span></code></pre></div><div class="d">
width:300px;<br>
height:150px;<br> 
background-color:#3eaf7c;
</div>
<h2 id="背景图片" tabindex="-1"><a class="header-anchor" href="#背景图片" aria-hidden="true">#</a> 背景图片</h2>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">background-image</span><span style="color: #EEFFFF">:url(nn</span><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">png</span><span style="color: #EEFFFF">);</span></span>
<span class="line"></span></code></pre></div><div class="d bgi">
width:300px;<br>
height:150px; <br>
background-image:url(/images/CSS3.png);
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在<code v-pre>url()</code>中，<code v-pre>单引号</code>，<code v-pre>双引号</code>，<code v-pre>不加引号</code>都正确</p>
</div>
<h3 id="平铺" tabindex="-1"><a class="header-anchor" href="#平铺" aria-hidden="true">#</a> 平铺</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">background-image</span><span style="color: #EEFFFF">:url(/images/CSS3</span><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">png</span><span style="color: #EEFFFF">);</span></span>
<span class="line"><span style="color: #FFCB6B">background-repeat</span><span style="color: #EEFFFF">:repeat;</span></span>
<span class="line"></span></code></pre></div><table>
<thead>
<tr>
<th style="text-align:center">取值</th>
<th style="text-align:center">效果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">repeat</td>
<td style="text-align:center">默认缺省值</td>
</tr>
<tr>
<td style="text-align:center">no-repeat</td>
<td style="text-align:center">无平铺</td>
</tr>
<tr>
<td style="text-align:center">repeat-x</td>
<td style="text-align:center">水平方向平铺</td>
</tr>
<tr>
<td style="text-align:center">repeat-y</td>
<td style="text-align:center">垂直方向平铺</td>
</tr>
</tbody>
</table>
<ul>
<li>repeat</li>
</ul>
<div class="d g ir">
</div>
<ul>
<li>no-repeat</li>
</ul>
<div class="d g inr">
</div>
<ul>
<li>repeat-x</li>
</ul>
<div class="d g ix">
</div>
<ul>
<li>repeat-y</li>
</ul>
<div class="d g iy">
</div>
<h3 id="定位" tabindex="-1"><a class="header-anchor" href="#定位" aria-hidden="true">#</a> 定位</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">background-image</span><span style="color: #EEFFFF">:url(/images/CSS350</span><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">png</span><span style="color: #EEFFFF">);</span></span>
<span class="line"><span style="color: #FFCB6B">background-position</span><span style="color: #EEFFFF">:50px;</span></span>
<span class="line"></span></code></pre></div><table>
<thead>
<tr>
<th style="text-align:center">取值</th>
<th style="text-align:left">效果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">单值 px %</td>
<td style="text-align:left">控制x轴的位置，y轴默认垂直居中</td>
</tr>
<tr>
<td style="text-align:center">双值 px %</td>
<td style="text-align:left">值1设置的x轴，值2设置y轴(可以取正负值)</td>
</tr>
<tr>
<td style="text-align:center">关键字</td>
<td style="text-align:left">x:left/center/right<br>y:top/center/bottom</td>
</tr>
</tbody>
</table>
<ul>
<li>单值:50px</li>
</ul>
<div class="d g inr px">
</div>
<ul>
<li>单值:50%</li>
</ul>
<div class="d g inr pxp">
</div>
<ul>
<li>双值:-10px 20px</li>
</ul>
<div class="d g inr pxy">
</div>
<ul>
<li>双值:-10% 20%</li>
</ul>
<div class="d g inr pxyp">
</div>
<ul>
<li>关键字:right bottom</li>
</ul>
<div class="d g inr pxyi">
</div>
<h3 id="尺寸" tabindex="-1"><a class="header-anchor" href="#尺寸" aria-hidden="true">#</a> 尺寸</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">background-image</span><span style="color: #EEFFFF">:url(/images/CSS350</span><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">png</span><span style="color: #EEFFFF">);</span></span>
<span class="line"><span style="color: #FFCB6B">background-size</span><span style="color: #EEFFFF">:50px;</span></span>
<span class="line"></span></code></pre></div><table>
<thead>
<tr>
<th style="text-align:center">取值</th>
<th style="text-align:left">效果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">单值 px %</td>
<td style="text-align:left">同时设置x轴和y轴</td>
</tr>
<tr>
<td style="text-align:center">双值 px %</td>
<td style="text-align:left">x,y</td>
</tr>
<tr>
<td style="text-align:center">cover</td>
<td style="text-align:left">填充，覆盖，让图片充满整个容器，保证容器全部被填充上，图片有可能示不全</td>
</tr>
<tr>
<td style="text-align:center">contain</td>
<td style="text-align:left">包含，让容器包含一张完整的图片，保证图片是完全显示的，可能会出现白区域</td>
</tr>
</tbody>
</table>
<ul>
<li>单值:75px</li>
</ul>
<div class="d g inr zx">
</div>
<ul>
<li>单值:75%</li>
</ul>
<div class="d g inr zxp">
</div>
<ul>
<li>双值:75px 25px</li>
</ul>
<div class="d g inr zxy">
</div>
<ul>
<li>双值:75% 25%</li>
</ul>
<div class="d g inr zxyp">
</div>
<ul>
<li>cover</li>
</ul>
<div class="d g inr zc">
</div>
<ul>
<li>contain</li>
</ul>
<div class="d g inr zct">
</div>
<h3 id="固定" tabindex="-1"><a class="header-anchor" href="#固定" aria-hidden="true">#</a> 固定</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">background-image</span><span style="color: #EEFFFF">:url(/images/CSS350</span><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">png</span><span style="color: #EEFFFF">);</span></span>
<span class="line"><span style="color: #FFCB6B">background-attachment</span><span style="color: #EEFFFF">:scroll;</span></span>
<span class="line"></span></code></pre></div><table>
<thead>
<tr>
<th style="text-align:center">取值</th>
<th style="text-align:left">效果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">scroll</td>
<td style="text-align:left">默认缺省值，背景图会随着窗口的滚动条而滚动</td>
</tr>
<tr>
<td style="text-align:center">fixed</td>
<td style="text-align:left">背景固定在body的某一个位置，不随着页面滚动条滚动,但只会在原容器中才能显示</td>
</tr>
</tbody>
</table>
<ul>
<li>scroll ❌ vuepress 无法展示效果</li>
</ul>
<div class="d bgi ir px ac">
</div>
<ul>
<li>fixed ❌ vuepress 无法展示效果</li>
</ul>
<div class="d bgi ir px ac">
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>background-attachment会改变background-position的效果，是相对于body去定位的。</p>
</div>
<h3 id="简写" tabindex="-1"><a class="header-anchor" href="#简写" aria-hidden="true">#</a> 简写</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">background:color  </span><span style="color: #FFCB6B">image</span><span style="color: #EEFFFF">  repeat  attachment  position;</span></span>
<span class="line"><span style="color: #EEFFFF">background:</span><span style="color: #89DDFF">#</span><span style="color: #EEFFFF">3eaf7c  url(/images/CSS350</span><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">png</span><span style="color: #EEFFFF">)  scroll 75px;</span></span>
<span class="line"></span></code></pre></div><div class="spl">
</div>
<div class="custom-container danger"><p class="custom-container-title">注意</p>
<p>简写方式中，没有background-size。<br>
不要用简写方式去重写样式，会将之前定义的样式清除。</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">最简方式</p>
<p>background:color;<br>
background:image;</p>
</div>
</div></template>

<style scoped>
.d{
    width:300px;
    height:150px;
    background-color:#3eaf7c;
    border-radius: 10px;
}
.g{
    background-image:url(/images/CSS350.png);
}
.bgi{
    background-image:url(/images/CSS3.png);
}
.ir{
    background-repeat:repeat;
}
.inr{
    background-repeat:no-repeat;
}
.ix{
    background-repeat:repeat-x;
}
.iy{
    background-repeat:repeat-y;
}
.px{
    background-position:50px;
}
.pxp{
    background-position:50%;
}

.pxy{
    background-position:-10px 20px;
}

.pxyp{
    background-position:-10% 20%;
}

.pxyi{
    background-position:right bottom;
}

.zx{
    background-size:75px;
}

.zxp{
    background-size:75%;
}

.zxy{
    background-size:75px 25px;
}

.zxyp{
    background-size:75% 25%;
}

.zc{
    background-size:cover;
}

.zct{
    background-size:contain;
}

.ac{
    background-attachment:scroll;
}

.acf{
    background-attachment:fixed;
}

.spl{
    width:300px;
    height:150px;
    background:#3eaf7c  url(/images/CSS350.png)  scroll 75px;
}
</style>
