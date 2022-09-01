<template><div><h1 id="盒模型" tabindex="-1"><a class="header-anchor" href="#盒模型" aria-hidden="true">#</a> 盒模型</h1>
<p>又称框模型，定义元素在页面上实际占地空间的计算方式。</p>
<div class="mg1">
<div>外边距 margin</div>
<div class="bd1">
<div>边框 border</div>
<div class="pd1">
<div>内边距 padding</div>
<div class="ct1">
<p>内容 content</p>
</div>
</div>
</div>
</div>
<p>元素实际占地宽度</p>
<ul>
<li>左外边距+左边框+左内边距+内容宽度+右内边距+右边框+右外边距</li>
</ul>
<p>元素实际占地高度</p>
<ul>
<li>上外边距+上边框+上内边距+内容高度+下内边距+下边框+下外边距</li>
</ul>
<h2 id="外边距-margin" tabindex="-1"><a class="header-anchor" href="#外边距-margin" aria-hidden="true">#</a> 外边距 margin</h2>
<p>元素与元素之间的距离，边框外的空白间距。<br>
设置元素外边距，有位移效果，把其他带框的元素挤开。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">/* 同时设置4个方向的外边距 */</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">margin</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">10px</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #545454; font-style: italic">/* 单独设置某方向的外边距 */</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">margin-top</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">10px</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">margin-bottom</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">10px</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">margin-left</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">10px</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">margin-right</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">10px</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><details class="custom-container details"><summary>观察外边距的效果</summary>
<p>外层父元素，绿色描边无背景色。<br>
内部子元素，设置外边距。</p>
<ul>
<li><strong><code v-pre>margin</code></strong>:<strong><code v-pre>10px</code></strong></li>
</ul>
<div class="df1 bd">
<div class="d1 bd mrg"><p>子元素</p></div>
</div>
<ul>
<li><strong><code v-pre>margin-top</code></strong>:<strong><code v-pre>10px</code></strong></li>
</ul>
<div class="df1 bd">
<div class="d1 bd mrgt"><p>子元素</p></div>
</div>
<ul>
<li><strong><code v-pre>margin-right</code></strong>:<strong><code v-pre>10px</code></strong></li>
</ul>
<div class="df1 bd">
<div class="d1 bd mrgr"><p>子元素</p></div>
</div>
<ul>
<li><strong><code v-pre>margin-bottom</code></strong>:<strong><code v-pre>10px</code></strong></li>
</ul>
<div class="df1 bd">
<div class="d1 bd mrgb"><p>子元素</p></div>
</div>
<ul>
<li><strong><code v-pre>margin-left</code></strong>:<strong><code v-pre>10px</code></strong></li>
</ul>
<div class="df1 bd">
<div class="d1 bd mrgl"><p>子元素</p></div>
</div>
</details>
<h3 id="外边距的取值" tabindex="-1"><a class="header-anchor" href="#外边距的取值" aria-hidden="true">#</a> 外边距的取值</h3>
<ul>
<li><strong>px</strong> 绝对值</li>
<li><strong>%</strong>  是父元素宽度的百分比，跟父元素高度没关系。</li>
<li><strong>auto</strong>  块级元素在父元素中水平居中，对上下外边距无效
<ul>
<li>对 <strong>行内元素</strong> 和 <strong>行内块</strong> 无效</li>
<li>对 <strong>设置宽度</strong> 的 <strong>块级元素</strong> 有效</li>
</ul>
</li>
</ul>
<h3 id="外边距的简写" tabindex="-1"><a class="header-anchor" href="#外边距的简写" aria-hidden="true">#</a> 外边距的简写</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">/* 1个值 同时设置4个方向的外边距 */</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">margin</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #545454; font-style: italic">/* 2个值 值1-设置上下边距 值2-设置左右边距 */</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">margin</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #545454; font-style: italic">/* 3个值 值1-设置上边距 值2-设置左右边距 值3-设置下边距*/</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">margin</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #545454; font-style: italic">/* 4个值 值1-设置上边距 值2-设置右边距 值3-设置下边距 值4-设置左边距*/</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">margin</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="外边距合并" tabindex="-1"><a class="header-anchor" href="#外边距合并" aria-hidden="true">#</a> 外边距合并</h3>
<ul>
<li>两个垂直的外边距相遇时，会发生外边距的合并，最后的值，以大的为准。</li>
<li>解决方案：单独设置一个外边距，在页面设计的直接规避。</li>
</ul>
<h3 id="可设置外边距的元素" tabindex="-1"><a class="header-anchor" href="#可设置外边距的元素" aria-hidden="true">#</a> 可设置外边距的元素</h3>
<table>
<thead>
<tr>
<th style="text-align:center">元素类型</th>
<th style="text-align:left">标签</th>
<th style="text-align:left">外边距</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">块级元素</td>
<td style="text-align:left">div p form table<br> ul lo li <br>h1-h6  dl dt</td>
<td style="text-align:left">4个方向外边距都生效</td>
</tr>
<tr>
<td style="text-align:center">行内元素</td>
<td style="text-align:left">a img span b <br>strong input <br>select section</td>
<td style="text-align:left">左右外边距生效(并且相加)<br>上下外边距无效</td>
</tr>
<tr>
<td style="text-align:center">行内块</td>
<td style="text-align:left">img  input  td</td>
<td style="text-align:left">4个方向外边距都生效,改变上下外边距，<br>会使同行其他行内元素/行内块元素一起移动</td>
</tr>
</tbody>
</table>
<h3 id="自带外边距的元素" tabindex="-1"><a class="header-anchor" href="#自带外边距的元素" aria-hidden="true">#</a> 自带外边距的元素</h3>
<p><strong>body</strong>,<strong>button</strong>,<strong>dd</strong>,<strong>dl</strong>,<strong>dt</strong>,<strong>fieldset</strong>,<strong>form</strong>,<strong>h1~h6</strong>,<strong>hr</strong>,<strong>input</strong>,<strong>legend</strong>,<strong>li</strong>,<strong>ol</strong>,<strong>p</strong>,<strong>pre</strong>,<strong>td,textarea</strong>,<strong>th</strong>,<strong>ul</strong><br>
由于不同浏览器对外边距和内边距的默认初始值不同，导致同样代码，在不同浏览器运行，会产生不同效果。</p>
<h3 id="外边距溢出" tabindex="-1"><a class="header-anchor" href="#外边距溢出" aria-hidden="true">#</a> 外边距溢出</h3>
<p>在特殊的情况下，为子元素设置上外边距，会作用到父元素上！</p>
<ul>
<li>父元素没有上边框</li>
<li>子元素内容区域的上边沿和父元素内容区域的上边沿重合</li>
</ul>
<h4 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h4>
<ul>
<li>在第一个元素的位置处，添加一个空的 <strong><code v-pre>&lt;table&gt;&lt;/table&gt;</code></strong> 此时，浏览器会认为上边沿已分开</li>
</ul>
<h4 id="其他方案-有弊端" tabindex="-1"><a class="header-anchor" href="#其他方案-有弊端" aria-hidden="true">#</a> 其他方案（有弊端）</h4>
<ul>
<li>给父元素添加上边框 ，增加了父元素的实际占地高度</li>
<li>给父元素添加上内边距 ，增加了父元素的实际占地高度</li>
<li>在第一个兄弟位置，添加 <strong><code v-pre>&lt;br&gt;</code></strong>，内部多了一行</li>
<li>父元素添加 <strong><code v-pre>overflow:auto</code></strong>，如要溢出显示效果却无法实现</li>
</ul>
<h2 id="内边距-padding" tabindex="-1"><a class="header-anchor" href="#内边距-padding" aria-hidden="true">#</a> 内边距 padding</h2>
<p>边框到内容区域之间的距离。<br>
改变内边距，会改变整个元素的占地大小，但是内容区域大小没有变化。<br>
内边距的颜色，和元素背景色相同。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">/* 同时设置4个方向的外边距 */</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">padding</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">10px</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #545454; font-style: italic">/* 单独设置某方向的外边距 */</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">padding-top</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">10px</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">padding-bottom</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">10px</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">padding-left</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">10px</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">  </span><span style="color: #B2CCD6">padding-right</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">10px</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="内边距的简写" tabindex="-1"><a class="header-anchor" href="#内边距的简写" aria-hidden="true">#</a> 内边距的简写</h3>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">/* 1个值 同时设置4个方向的内边距 */</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">padding</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #545454; font-style: italic">/* 2个值 值1-设置上下边距 值2-设置左右边距 */</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">padding</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #545454; font-style: italic">/* 3个值 值1-设置上边距 值2-设置左右边距 值3-设置下边距*/</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">padding</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #545454; font-style: italic">/* 4个值 值1-设置上边距 值2-设置右边距 值3-设置下边距 值4-设置左边距*/</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">padding</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<h3 id="margin的使用场合" tabindex="-1"><a class="header-anchor" href="#margin的使用场合" aria-hidden="true">#</a> margin的使用场合</h3>
<ul>
<li>块级元素本身需要相对父元素水平居中  <strong><code v-pre>margin:auto</code></strong>;  <strong><code v-pre>margin:0 auto</code></strong>;</li>
<li>元素之间，有距离，可以用 <strong><code v-pre>margin</code></strong></li>
<li>元素的位置微调</li>
</ul>
<h3 id="padding的使用场合" tabindex="-1"><a class="header-anchor" href="#padding的使用场合" aria-hidden="true">#</a> padding的使用场合</h3>
<ul>
<li>元素之间，有距离，有时可以使用 <strong><code v-pre>padding</code></strong></li>
<li>把元素撑开</li>
</ul>
<h2 id="改变盒模型的计算方式" tabindex="-1"><a class="header-anchor" href="#改变盒模型的计算方式" aria-hidden="true">#</a> 改变盒模型的计算方式</h2>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">box-sizing</span><span style="color: #EEFFFF">:</span><span style="color: #FFCB6B">content-box</span><span style="color: #EEFFFF">;</span></span>
<span class="line"></span></code></pre></div><p>使用 <strong><code v-pre>box-sizing</code></strong> : <strong><code v-pre>content-box</code></strong> 设置宽高为内容区域的大小。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">box-sizing</span><span style="color: #EEFFFF">:</span><span style="color: #FFCB6B">border-box</span><span style="color: #EEFFFF">;</span></span>
<span class="line"></span></code></pre></div><p>使用 <strong><code v-pre>box-sizing</code></strong>:<strong><code v-pre>border-box</code></strong> 设置宽高为包含：<br>
<strong>边框</strong> + <strong>内边距</strong> + <strong>内容区域</strong>的大小。</p>
</div></template>

<style scoped>
.mg1{
    width: 400px;
    height: 400px;
    border:2px dashed #3EAF7C;
    background-color: #ddfff0;
    font-size: 14px;
    text-align: center;
}
.bd1{
    width: 300px;
    height: 300px;
    border:2px solid #3EDAED;
    background-color: #e4fcff;
    position: relative;
    top:36%;
    left:45%;
    transform: translateX(-50%) translateY(-50%);
}
.pd1{
    width: 200px;
    height: 200px;
    border:2px dashed #ED3E9A;
    background-color: #ffeaf5;
    position: relative;
    top:31%;
    left:43%;
    transform: translateX(-50%) translateY(-50%);
}
.ct1{
    width: 100px;
    height: 100px;
    border:2px solid #C37779;
    background-color: #ffe8e9;
    position: relative;
    top:23%;
    left:40%;
    transform: translateX(-50%) translateY(-50%);
}
.mg1>div, .bd1>div, .pd1>div, .ct1>div{
    float: left;
    margin-top: 20px;
    margin-left: 20px;
}
.ct1>p{
    line-height: 70px;
}
.mg1:hover, .bd1:hover, .pd1:hover, .ct1:hover{
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.df{
  width:100%;
  display:flex;
}

.df1{
  width:102px;
  padding:0;
  margin-right:10px;
}
.d1{
  width:80px;
  height:80px;
  background-color:#42b98347;

}
.bd{border:1px solid #3eaf7c}

.mrg{margin:10px}
.mrgr2{margin-right:20px}
.mrgt{
  margin-bottom:0px;
  margin-left:0px;
  margin-right:0px;
  margin-top:10px;
}
.mrgb{
  margin-left:0px;
  margin-right:0px;
  margin-top:0px;  
  margin-bottom:10px;
}
.mrgl{
  margin-right:0px;
  margin-top:0px;  
  margin-bottom:0px; 
  margin-left:10px; 
}
.mrgr{
  margin-top:0px;  
  margin-bottom:0px; 
  margin-left:0px; 
  margin-right:10px;
}


</style>
