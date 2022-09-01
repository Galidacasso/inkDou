<template><h1 id="堆叠顺序" tabindex="-1"><a class="header-anchor" href="#堆叠顺序" aria-hidden="true">#</a> 堆叠顺序</h1>
<p>由于定位的属性，Html元素会产生堆叠的现象。</p>
<h2 id="默认堆叠顺序" tabindex="-1"><a class="header-anchor" href="#默认堆叠顺序" aria-hidden="true">#</a> 默认堆叠顺序</h2>
<ul>
<li>后渲染的元素堆叠层高，置于上方</li>
<li>后渲染的元素，永远小于0，而大于-1。</li>
</ul>
<h2 id="改变堆叠的顺序" tabindex="-1"><a class="header-anchor" href="#改变堆叠的顺序" aria-hidden="true">#</a> 改变堆叠的顺序</h2>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #B2CCD6">z-index</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">}</span><span style="color: #EEFFFF"> </span></span>
<span class="line"></span></code></pre></div><p>通过z-index属性可以改变堆叠层，数值越大则约靠上方。</p>
<h2 id="相对定位-relative" tabindex="-1"><a class="header-anchor" href="#相对定位-relative" aria-hidden="true">#</a> 相对定位 relative</h2>
<ul>
<li>相对定位并未脱离文档流</li>
<li>相对定位是相对于自己原来的位置，发生偏移。</li>
</ul>
<div class="div-parent relative-parent text-center">
<div class="div-simple text-center bg-simple color-simple border-simple"><b>未设置定位时</b></div>
<div class="text-center bg-normal border-normal color-normal relative-t-l div-simple"><b>position:relative</b><br><b>top:10</b><br><b>left:70</b></div>
</div>
<br>
<h3 id="relative使用场景" tabindex="-1"><a class="header-anchor" href="#relative使用场景" aria-hidden="true">#</a> relative使用场景</h3>
<ul>
<li>类似于margin，做位置微调</li>
<li>多用于充当绝对定位元素的祖先级元素</li>
</ul>
<h2 id="绝对定位-absolute" tabindex="-1"><a class="header-anchor" href="#绝对定位-absolute" aria-hidden="true">#</a> 绝对定位 absolute</h2>
<ul>
<li>默认相对于body定位。</li>
<li>如有已设定的祖先元素，则相对于<strong>最近的</strong>，<strong>已定位</strong>的<strong>祖先级元素</strong>，<strong>左上角</strong>去定位。</li>
<li>设置绝对定位后，元素会脱离文档流。</li>
</ul>
<div class="div-parent border-parent bg-parent ">
<h5 class="ml color-parent"> 含有定位属性的父元素</h5>
<p class="ml color-parent"> p 父元素中的文本内容</p>
<p class="ml color-parent"> p 父元素中的文本内容</p>
<div class="text-center bg-normal border-normal color-normal div-simple"><b>未设置绝对定位时</b></div>
</div>
<br>
<div class="div-parent border-parent bg-parent div-parent-h relative-parent">
<h5 class="ml color-parent"> 含有定位属性的父元素</h5>
<p class="ml color-parent"> p 父元素中的文本内容</p>
<p class="ml color-parent"> p 父元素中的文本内容</p>
<div class="text-center bg-normal border-normal color-normal relative-t-l div-simple"><b>position:absolute</b><br><b>top:30</b><br><b>left:70</b></div>
</div>
<br>
<details class="custom-container details"><summary>哪种已定位元素，最适合，当做absolute的已定位祖先元素?</summary>
<p><strong>relative</strong>不写偏移属性，对周围布局没有任何影响，因此<strong>relative</strong>最适合做<strong>absolute</strong>的已定位祖先元素。</p>
</details>
<h3 id="absolute使用场景" tabindex="-1"><a class="header-anchor" href="#absolute使用场景" aria-hidden="true">#</a> absolute使用场景</h3>
<ul>
<li>需要调整元素位置，并且还会与其他元素发生堆叠时，可以使用绝对定位。</li>
<li>要注意父元素设置为<strong>relative</strong></li>
</ul>
<h2 id="固定定位-fixed" tabindex="-1"><a class="header-anchor" href="#固定定位-fixed" aria-hidden="true">#</a> 固定定位 fixed</h2>
<ul>
<li>固定在body某个(可视区域)位置的定位。</li>
<li>元素设置固定定位后，将脱离文档流，并变为块级元素。</li>
</ul>
<p><a class="normal border-normal bg-normal color-normal relative-f-l text-center" href="定位Position.html#fixed使用场景">固定定位<br>应用</a></p>
<h3 id="fixed使用场景" tabindex="-1"><a class="header-anchor" href="#fixed使用场景" aria-hidden="true">#</a> fixed使用场景</h3>
<p>详见当前页面右侧蓝色”固定定位应用“。</p>
</template>

<style>
.div-simple{
  width:200px;
  height:80px; 
  display: table-cell;
  vertical-align: middle;
}

.normal{
  width:80px;
  height:80px; 
}
.div-parent{width:100%}
.div-parent-h{height:190px}

.border-parent{border:1px solid #cab643}
.bg-parent{background-color:#cab64330;}
.color-parent{color:#cab643}

.border-simple{border:1px solid #3eaf7c}
.bg-simple{background-color:#42b98347;}
.color-simple{color:#3eaf7c}

.border-normal{border:1px solid #3867ad}
.bg-normal{background-color:#3867ad50;}
.color-normal{color:#3867ad}

.m-clear{margin:0}
.mr{margin-right:20px}
.ml{margin-left:20px}

.text-center{text-align:center;}
.text-right{text-align:right;}
.text-left{text-align:left;}

.clear-fix{clear:both}

.relative-parent{
  position:relative;
}

.relative-t-l{
  position:absolute;
  top:10%;
  left:10%;
}

.relative-f-l{
  position:absolute;
  bottom:-10%;
  right:0;
  line-height:40px
}

</style>
