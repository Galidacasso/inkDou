<template><h1 id="文本格式化" tabindex="-1"><a class="header-anchor" href="#文本格式化" aria-hidden="true">#</a> 文本格式化</h1>
<p>包含字体和文本的属性。</p>
<h2 id="常用单位" tabindex="-1"><a class="header-anchor" href="#常用单位" aria-hidden="true">#</a> 常用单位</h2>
<table>
<thead>
<tr>
<th style="text-align:left">单位</th>
<th style="text-align:center">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>px</strong></td>
<td style="text-align:center">绝对</td>
<td style="text-align:left">1个Viewport像素，相对长度单位。<br>像素px是相对于显示器屏幕分辨率而言的。</td>
</tr>
<tr>
<td style="text-align:left"><strong>pt</strong></td>
<td style="text-align:center">绝对</td>
<td style="text-align:left">1pt = 1/72英寸，物理长度单位，指的是72分之一英寸</td>
</tr>
<tr>
<td style="text-align:left"><strong>pc</strong></td>
<td style="text-align:center">绝对</td>
<td style="text-align:left">1pc = 12pt</td>
</tr>
<tr>
<td style="text-align:left"><strong>%</strong></td>
<td style="text-align:center">相对</td>
<td style="text-align:left">相对于父元素的字体尺寸</td>
</tr>
<tr>
<td style="text-align:left"><strong>em</strong></td>
<td style="text-align:center">相对</td>
<td style="text-align:left">相对于父元素的字体尺寸，相对长度单位。<br>相对于当前对象内文本的字体尺寸</td>
</tr>
<tr>
<td style="text-align:left"><strong>rem</strong></td>
<td style="text-align:center">相对</td>
<td style="text-align:left">相对长度单位,(即root em) 相对于html标签的字体尺寸,<br>相对的只是HTML根元素</td>
</tr>
<tr>
<td style="text-align:left"><strong>keyword</strong></td>
<td style="text-align:center">相对</td>
<td style="text-align:left">xx-small, x-small, small, medium, large, x-large, xx-large</td>
</tr>
<tr>
<td style="text-align:left"><strong>vw</strong></td>
<td style="text-align:center">相对</td>
<td style="text-align:left">相当于Viewport宽度的1/100,相对于视口的宽度</td>
</tr>
<tr>
<td style="text-align:left"><strong>vh</strong></td>
<td style="text-align:center">相对</td>
<td style="text-align:left">相当于Viewport高度的1/100,相对于视口的高度</td>
</tr>
<tr>
<td style="text-align:left"><strong>vmin</strong></td>
<td style="text-align:center">相对</td>
<td style="text-align:left">相当于Viewport高宽中长度相对较小的1/100,<br>关于视口高度和宽度两者的最小值</td>
</tr>
<tr>
<td style="text-align:left"><strong>vmax</strong></td>
<td style="text-align:center">相对</td>
<td style="text-align:left">相当于Viewport高宽中长度相对较大的1/100,<br>关于视口高度和宽度两者的最大值</td>
</tr>
</tbody>
</table>
<h3 id="px-特点" tabindex="-1"><a class="header-anchor" href="#px-特点" aria-hidden="true">#</a> px 特点</h3>
<ul>
<li>IE无法调整使用px为单位的字体大小。</li>
<li>国内大部分网站能够调整的原因是用em或rem作为字体单位。</li>
<li>Firefox能够调整px、em和rem，但是使用ie浏览器（或者内核）的用户较多。</li>
</ul>
<h3 id="em-特点" tabindex="-1"><a class="header-anchor" href="#em-特点" aria-hidden="true">#</a> em 特点</h3>
<ul>
<li>值不固定</li>
<li>继承父元素字体大小</li>
</ul>
<div class="custom-container danger"><p class="custom-container-title">注意</p>
<p>任意浏览器的默认字体都是<strong>16px</strong><br>
因此所有未经过调整的浏览器都符合：<strong>1em</strong> = <strong>16px</strong><br>
如需调整，则声明 <strong>font-size</strong>:<strong>75%</strong>(任值)<br>
浏览器默认值就会变成 <strong>16px</strong> × <strong>75%</strong> = <strong>12px</strong><br>
此时：<strong>1em</strong> = <strong>12px</strong></p>
</div>
<h3 id="px-与-rem-的选择" tabindex="-1"><a class="header-anchor" href="#px-与-rem-的选择" aria-hidden="true">#</a> px 与 rem 的选择？</h3>
<ul>
<li>对于只需要适配少部分手机设备，且分辨率对页面影响不大的，使用px即可 。</li>
<li>对于需要适配各种移动设备，使用rem，例如只需要适配iPhone和iPad等分辨率差别比较挺大的设备。</li>
</ul>
<div class="custom-container danger"><p class="custom-container-title">注意</p>
<ul>
<li>字体单位，主要由项目决定，如果用户群都使用最新版的浏览器，则推荐使用rem。</li>
<li>如果要考虑兼容性，那就使用px，或者两者同时使用。</li>
</ul>
</div>
<h2 id="字体属性" tabindex="-1"><a class="header-anchor" href="#字体属性" aria-hidden="true">#</a> 字体属性</h2>
<h3 id="字号" tabindex="-1"><a class="header-anchor" href="#字号" aria-hidden="true">#</a> 字号</h3>
<p>指定字号的大小</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">font-size</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">2rem</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p class="fn frem">font-size:2rem</p>
<p class="fn fps">font-size:20%</p>
<h3 id="字体系列" tabindex="-1"><a class="header-anchor" href="#字体系列" aria-hidden="true">#</a> 字体系列</h3>
<p>指定字的字体，需要客户端已安装相应的字体</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #B2CCD6">font-family</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">楷体</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p class="fn ff">font-family:"楷体"</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如字体名称有空格，使用双引号包括。</p>
</div>
<h3 id="字体粗细" tabindex="-1"><a class="header-anchor" href="#字体粗细" aria-hidden="true">#</a> 字体粗细</h3>
<p>指定字体的粗细。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">font-weight</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">bold </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p class="fn fwl">font-weight:lighter</p>
<p class="fn fwn">font-weight:normal</p>
<p class="fn fwb">font-weight:bold</p>
<p class="fn fwbr">font-weight:bolder</p>
<p class="fn fw999">font-weight:900</p>
<h3 id="字体样式" tabindex="-1"><a class="header-anchor" href="#字体样式" aria-hidden="true">#</a> 字体样式</h3>
<p>指定字体的样式 常规 <strong><code v-pre>normal</code></strong>  斜体 <strong><code v-pre>italic</code></strong>。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">font-style</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">italic </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p class="fn fsi">font-style:italic</p>
<h3 id="字体变体" tabindex="-1"><a class="header-anchor" href="#字体变体" aria-hidden="true">#</a> 字体变体</h3>
<p>指定字体为小型大写字母 <strong><code v-pre>small-caps</code></strong></p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">font-variant</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">small-caps </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p class="fn fvsc">font-variant:small-caps</p>
<h3 id="字体属性-简写" tabindex="-1"><a class="header-anchor" href="#字体属性-简写" aria-hidden="true">#</a> 字体属性 简写</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">font</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">style variant weight size famliy </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p class="fn fsmp">font:italic small-caps bold 1.2rem 楷体</p>
<h3 id="字体属性-极简" tabindex="-1"><a class="header-anchor" href="#字体属性-极简" aria-hidden="true">#</a> 字体属性 极简</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">font</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">size famliy </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p class="fn fsbs">font:2rem 楷体</p>
<h2 id="文本属性" tabindex="-1"><a class="header-anchor" href="#文本属性" aria-hidden="true">#</a> 文本属性</h2>
<h3 id="文本颜色" tabindex="-1"><a class="header-anchor" href="#文本颜色" aria-hidden="true">#</a> 文本颜色</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">color</span><span style="color: #89DDFF">:#</span><span style="color: #EEFFFF">3eaf7c </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p class="fn cr fwb">color:#3eaf7c</p>
<h3 id="水平对齐" tabindex="-1"><a class="header-anchor" href="#水平对齐" aria-hidden="true">#</a> 水平对齐</h3>
<p>默认居左 <strong><code v-pre>left</code></strong> | 居中 <strong><code v-pre>center</code></strong> | 居右 <strong><code v-pre>right</code></strong> | 两端对齐 <strong><code v-pre>justify</code></strong></p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">text-align</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">center </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="df1">
<p class="tac ">text-align:center 墨斗</p>
<p class="taj pl pr">text-align:justify木工画直线的工具。 元 李冶-敬斋古今黈-卷八 又闻墨斗谜云：我有一张琴，一弦藏在腹，莫笑墨如鸦，正尽人间曲。王汶石-大木匠-一：窗前有一张木桌，桌上摆着墨斗、曲尺、土白纸。</p>
<p class="tar pr">text-align:right 尾部</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">关于对齐</p>
<p><strong>text-align</strong>，让元素内部的 <strong>文本</strong> <strong>行内元素</strong> <strong>行内块</strong>，<strong>水平对齐</strong>。<br>
⚠️ <strong>后代 块级元素</strong> 会继承<strong>text-align</strong>，但没有效果。<br>
使用 <strong>margin:0 auto</strong> 可以使 <strong>块级元素自身(本身)</strong>，<strong>水平居中对齐</strong>。</p>
</div>
<h3 id="垂直对齐" tabindex="-1"><a class="header-anchor" href="#垂直对齐" aria-hidden="true">#</a> 垂直对齐</h3>
<p>文本垂直对齐，由行高实现，行高即定义一行文本的高度，如果行高大于文本字号，那文本默认会在行高范围能垂直居中。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">line-height</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">100px</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="df1 df2 tac">未设置行高。</div>
<br>
<div class="df1 df2 tac lht">设置行高与父元素等高</div>
<h3 id="文本线" tabindex="-1"><a class="header-anchor" href="#文本线" aria-hidden="true">#</a> 文本线</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">text-decoration</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">line-through </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p class="fn tdlt">删除线 text-decoration:line-through </p>
<p class="fn tdol">上划线 text-decoration:line-through </p>
<p class="fn tdul">下划线 text-decoration:line-through </p>
<p class="fn"><a class=".tdn" href="http://www.baidu.com">链接:百度 text-decoration:none</a></p>
<h3 id="首行缩进" tabindex="-1"><a class="header-anchor" href="#首行缩进" aria-hidden="true">#</a> 首行缩进</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">text-indent</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">40px</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="df1">
<p class="taj pl pr tint">木工画直线的工具。 元 李冶-敬斋古今黈-卷八 又闻墨斗谜云：我有一张琴，一弦藏在腹，莫笑墨如鸦，正尽人间曲。王汶石-大木匠-一：窗前有一张木桌，桌上摆着墨斗、曲尺、土白纸。木工画直线的工具。 元 李冶-敬斋古今黈-卷八 又闻墨斗谜云：我有一张琴，一弦藏在腹，莫笑墨如鸦，正尽人间曲。王汶石-大木匠-一：窗前有一张木桌，桌上摆着墨斗、曲尺、土白纸。</p>
<p class="taj pl pr tint">木工画直线的工具。 元 李冶-敬斋古今黈-卷八 又闻墨斗谜云：我有一张琴，一弦藏在腹，莫笑墨如鸦，正尽人间曲。王汶石-大木匠-一：窗前有一张木桌，桌上摆着墨斗、曲尺、土白纸。木工画直线的工具。 元 李冶-敬斋古今黈-卷八 又闻墨斗谜云：我有一张琴，一弦藏在腹，莫笑墨如鸦，正尽人间曲。王汶石-大木匠-一：窗前有一张木桌，桌上摆着墨斗、曲尺、土白纸。</p>
</div>
<h3 id="文本阴影" tabindex="-1"><a class="header-anchor" href="#文本阴影" aria-hidden="true">#</a> 文本阴影</h3>
<table>
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
<td style="text-align:left">color</td>
<td style="text-align:left">颜色</td>
</tr>
</tbody>
</table>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">text-shadow</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">1px</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1px</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3px</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">#</span><span style="color: #EEFFFF">3eaf7c </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="df1 df2 tac lht tsdw">设置行高与父元素等高</div></template>

<style scoped>
.fn{
  font-size:1.2rem;
  background-color:#f2f2f2;
  border-radius:5px;
  padding:15px 15px;
}
.pl{padding-left:15px}
.pr{padding-right:15px}
.df1{
    width:100%;
    background-color:#f2f2f2;
    border-radius:5px;
    padding:0 0px;
    font-size:1.2rem;
}
.df2{
    height:100px;
}
.cr{
  color:#3eaf7c
}
.frem{ font-size:2rem }
.fps{ font-size:20% }
.ff{ font-family:"楷体" }
.fwn{ font-weight:normal }
.fwb{ font-weight:bold }
.fwbr{ font-weight:bolder }
.fwl{ font-weight:lighter }
.fw999{ font-weight:900 }
.fsi{ font-style:italic }
.fvsc{ font-variant:small-caps }
.fsmp{ font:italic small-caps bold 2rem 楷体}
.fsbs{ font:2rem 楷体}

.tac{ text-align:center }
.tar{ text-align:right }
.taj{ text-align:justify }

.lht{ line-height:100px }

.tdlt{ text-decoration:line-through }
.tdol{ text-decoration:overline }
.tdul{ text-decoration:underline }
.tdn{ text-decoration:none }
.tint{text-indent:40px }
.tsdw{ text-shadow:1px 1px 5px #3eaf7c }
</style>
