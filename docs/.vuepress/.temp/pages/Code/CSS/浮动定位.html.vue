<template><h1 id="浮动定位" tabindex="-1"><a class="header-anchor" href="#浮动定位" aria-hidden="true">#</a> 浮动定位</h1>
<p>让 <strong>块级元素</strong> 脱离 <strong>文档流定位</strong>（普通流定位）,像行内元素一样横向排列。</p>
<p>方法：向父级元素添加<code v-pre>float</code>属性。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">float</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">left/right/none </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><ul>
<li>none 不浮动，默认值</li>
</ul>
<div class="border-simple div-parent">
<div class="bg-simple div-simple border-simple text-center">
<span class="color-vuepress">&lt;div&gt;</span>
块级元素
<span class="color-vuepress">&lt;/div&gt;</span>
</div>
<p class="bg-simple border-simple text-center m-clear">
<span class="color-vuepress">&lt;p&gt;</span>
块级元素
<span class="color-vuepress">&lt;/p&gt;</span>
</p>
</div>
<ul>
<li>left 左浮动，浮动后，向左对齐</li>
</ul>
<div class="border-simple  div-parent text-right">父元素
<div class="bg-simple div-simple border-simple text-center float-left">
设置浮动，已设宽高
</div>
<p class="bg-simple border-simple text-center m-clear">
未设浮动，文本避开浮动元素
</p>
</div>
<p class="clear-fix"></p>
<br>
<div class="border-simple  div-parent">
<div class="bg-simple div-simple border-simple text-center float-left">
设置浮动，已设宽高
</div>
<p class="bg-simple border-simple text-center float-left m-clear">
设置浮动，未设宽高，靠内容撑开
</p>
</div>
<p>⚠️ <p class="clear-fix">❌父级元素高度坍塌</p></p>
<ul>
<li>right 右浮动，浮动后，向右对齐</li>
</ul>
<div class="border-simple div-parent">
<div class="bg-simple div-simple border-simple text-center float-right">
设置浮动，已设宽高
</div>
<p class="bg-simple border-simple text-center m-clear">
未设浮动，文本避开浮动元素
</p>
</div>
<p class="clear-fix"></p>
<br>
<div class="border-simple div-parent">
<div class="bg-simple div-simple border-simple text-center float-right">
设置浮动
</div>
<p class="bg-simple border-simple text-center float-right m-clear">
设置浮动，未设宽高，靠内容撑开
</p>
</div>
<p>⚠️ <p class="clear-fix">❌父级元素高度坍塌</p></p>
<h2 id="浮动的特点" tabindex="-1"><a class="header-anchor" href="#浮动的特点" aria-hidden="true">#</a> 浮动的特点</h2>
<ul>
<li>元素一旦浮动，脱离文档流，不占据页面空间，后续元素会上前补位。</li>
<li>元素浮动之后，会停靠在父元素的最左边/最右边，或者停靠在之前已浮动元素的后面。</li>
<li>父元素横向显示不下所有已浮动元素，最后显示不下的部分，会自动换行。</li>
<li>浮动是为了解决多个块级元素横向显示的问题。</li>
</ul>
<h2 id="浮动引发的特殊情况" tabindex="-1"><a class="header-anchor" href="#浮动引发的特殊情况" aria-hidden="true">#</a> 浮动引发的特殊情况</h2>
<ul>
<li>浮动的元素，会在浮动方向占据位置。</li>
<li>换行的浮动元素，不能去占据已经被占的位置显示。</li>
<li>浮动的元素，如果本身没有定义宽度，浮动之后，元素宽度以内容为准</li>
<li>浮动的元素，就会变成块级元素（允许设置尺寸，上下外边距有效）</li>
<li>脱离文档流
<ul>
<li>元素一旦脱离文档流，会发生4件事：
<ol>
<li>元素在页面不占空间。</li>
<li>后续元素上前补位。</li>
<li>元素不设置宽度，脱离文档流后，宽度以内容为准。</li>
<li>元素脱离文档流，变为块级元素。</li>
<li>文本、行内元素、行内块元素，不会被浮动元素压在下面，二是巧妙的避开，环绕着浮动元素显示。</li>
</ol>
</li>
</ul>
</li>
</ul>
<h2 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h2>
<ul>
<li>清除之前浮动元素带来的影响。</li>
<li>如元素周围有浮动的兄弟元素，设置 <strong>clear</strong> 属性，此元素不会补位。</li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">clear</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">both/left/right </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><ul>
<li>clear:left  清除 左浮动   的影响</li>
<li>clear:right 清除 右浮动   的影响</li>
<li>clear:both  清除 所有浮动 的影响</li>
</ul>
<div class="border-simple div-parent">
<div class="bg-simple div-simple border-simple text-center float-left">
设置浮动，已设宽高
</div>
<p class="bg-simple border-simple text-center m-clear">
P 未设浮动，未设清除浮动，文本避开浮动元素</p>
<p class="bg-simple border-simple text-center m-clear clear-fix">
P 设置清除浮动
</p>
</div>
<h2 id="高度坍塌" tabindex="-1"><a class="header-anchor" href="#高度坍塌" aria-hidden="true">#</a> 高度坍塌</h2>
<p>块级元素如果不设置高，如内部所有元素都脱离文档流（如设置了浮动），此时块级元素就认为内部没有其他元素，原被内部元素撑开的高度就失去了，此为高度坍塌。</p>
<p><strong>嵌套关系:div&gt;div+p</strong></p>
<div class="border-simple  div-parent">
<div class="bg-simple div-simple border-simple text-center float-left">
设置浮动，已设宽高
</div>
<p class="bg-simple border-simple text-center float-left m-clear">
设置浮动，未设宽高，靠内容撑开
</p>
</div>
<p>⚠️ <p class="clear-fix">❌父级元素高度坍塌</p></p>
<h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3>
<ul>
<li>在父元素最后添加一个空的块级元素，给此块级元素设置<strong>clear:both</strong></li>
</ul>
<p><strong>嵌套关系:div&gt;div+p+div</strong>(设置clear:both)</p>
<div class="border-simple  div-parent">
<div class="bg-simple div-simple border-simple text-center float-left">
设置浮动，已设宽高
</div>
<p class="bg-simple border-simple text-center float-left m-clear">
设置浮动，未设宽高，靠内容撑开
</p>
<div class="clear-fix"></div>
</div>
<div class="custom-container tip"><p class="custom-container-title">其他解决方案 (有缺陷)</p>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:left">缺陷</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">设置父元素高度</td>
<td style="text-align:left">无法确定父元素的合理高度</td>
</tr>
<tr>
<td style="text-align:center">父元素也浮动</td>
<td style="text-align:left">会影响其他元素的页面效果</td>
</tr>
<tr>
<td style="text-align:center"><RouterLink to="/Code/CSS/%E5%B0%BA%E5%AF%B8%E5%92%8C%E8%BE%B9%E6%A1%86.html#%E6%BA%A2%E5%87%BA%E5%A4%84%E7%90%86">overflow:auto</RouterLink></td>
<td style="text-align:left">溢出部分无法显示</td>
</tr>
</tbody>
</table>
</div>
</template>

<style scoped>
.div-simple{
  width:200px;
  height:80px; 
  display: table-cell;
  vertical-align: middle;
}
.div-parent{width:100%}
.m-clear{margin:0}
.mr{margin-right:20px}
.ml{margin-left:20px}

.bg-simple{background-color:#42b98347;}

.color-vuepress{color:#3eaf7c}

.text-center{text-align:center;}
.text-right{text-align:right;}

.border-simple{border:1px solid #3eaf7c}
.float-left{float:left}
.float-right{float:right}
.clear-fix{clear:both}
</style>
