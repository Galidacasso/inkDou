<template><h1 id="堆叠顺序" tabindex="-1"><a class="header-anchor" href="#堆叠顺序" aria-hidden="true">#</a> 堆叠顺序</h1>
<p>Html元素产生的堆叠现象。</p>
<h2 id="默认堆叠顺序" tabindex="-1"><a class="header-anchor" href="#默认堆叠顺序" aria-hidden="true">#</a> 默认堆叠顺序</h2>
<ul>
<li>后渲染的元素堆叠层高，置于上方(前方)</li>
<li>后渲染的元素，永远小于0，而大于-1。</li>
</ul>
<h2 id="改变堆叠的顺序" tabindex="-1"><a class="header-anchor" href="#改变堆叠的顺序" aria-hidden="true">#</a> 改变堆叠的顺序</h2>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #B2CCD6">z-index</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">}</span><span style="color: #EEFFFF"> </span></span>
<span class="line"></span></code></pre></div><p>通过z-index属性可以改变堆叠层，数值越大则越靠上方(前方)。</p>
<p><img src="/images/css/zindex.png" alt="z-index"></p>
<h3 id="z-index取值" tabindex="-1"><a class="header-anchor" href="#z-index取值" aria-hidden="true">#</a> z-index取值</h3>
<p>z-index的值为无单位的整数</p>
<ul>
<li>可以取负值</li>
<li>默认的顺序永远小于0，而大于-1</li>
<li>项目中一般最大到1000</li>
</ul>
<h3 id="定位的堆叠与浮动的关系" tabindex="-1"><a class="header-anchor" href="#定位的堆叠与浮动的关系" aria-hidden="true">#</a> 定位的堆叠与浮动的关系</h3>
<ul>
<li>浮动和定位不是一个体系不可进行比较。</li>
<li>浮动永远只有一层，不能设置层级。</li>
<li>定位可以设置堆叠顺序。</li>
<li>浮动的堆叠顺序 <strong>＜</strong> z-index:0 <strong>＜</strong> 未设置z-index 的元素</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>z-index只对已定位元素有效</li>
<li>z-index值相同，后渲染的高</li>
<li>堆叠顺序对父子关系无效，永远是子元素压着父元素。</li>
</ul>
</div>
</template>

<style scoped>
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

.z-size-20{
  z-index:0
}

.z-size-30{
  z-index:30
}

</style>
