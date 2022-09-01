<template><div><h1 id="定位" tabindex="-1"><a class="header-anchor" href="#定位" aria-hidden="true">#</a> 定位</h1>
<p>控制(改变)元素在页面中的位置，让元素出现在我们规定的位置。</p>
<h2 id="普通流定位" tabindex="-1"><a class="header-anchor" href="#普通流定位" aria-hidden="true">#</a> 普通流定位</h2>
<p>普通流定位，即html默认的显示方式，也称文档流定位。</p>
<ul>
<li>每个元素在页面上都有自己的空间，相互之间不能堆叠。</li>
<li>每个元素默认是从父元素的左上角开始显示。</li>
<li>块级元素独立成行，按照从上往下的顺序排列。</li>
<li>行内元素和行内块，共用一行，从左往右排列，一行显示不下，换行显示。</li>
</ul>
<div class="bg-simple div-simple border-simple text-center"><span class="color-vuepress">&lt;div&gt;</span> 块级元素 <span class="color-vuepress">&lt;/div&gt;</span> </div>
<p class="bg-simple border-simple text-center"><span class="color-vuepress">&lt;p&gt;</span> 块级元素 <span class="color-vuepress">&lt;/p&gt;</span></p>
<p><a class="bg-simple border-simple"><span class="color-vuepress">&lt;a&gt;</span> 行内元素 <span class="color-vuepress">&lt;/a&gt;</span></a>
<span class="bg-simple border-simple"><span class="color-vuepress">&lt;span&gt;</span> 行内元素 <span class="color-vuepress">&lt;/span&gt;</span></span><input type="text" class="bg-simple border-simple" placeholder="<input>行内块元素"></p>
<table>
<thead>
<tr>
<th style="text-align:right">元素类型</th>
<th style="text-align:center">元素排列</th>
<th style="text-align:left">设置样式</th>
<th style="text-align:left">默认宽度</th>
<th style="text-align:left">包含</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">块级元素</td>
<td style="text-align:center">独占一行</td>
<td style="text-align:left">可设置宽/高</td>
<td style="text-align:left">容器的100%</td>
<td style="text-align:left">任何标签</td>
</tr>
<tr>
<td style="text-align:right">行内元素</td>
<td style="text-align:center">共占一行</td>
<td style="text-align:left">不可设置宽/高</td>
<td style="text-align:left">内容的宽度</td>
<td style="text-align:left">文本/行内元素</td>
</tr>
<tr>
<td style="text-align:right">行内块元素</td>
<td style="text-align:center">共占一行</td>
<td style="text-align:left">可设置宽/高</td>
<td style="text-align:left">内容的宽度</td>
<td style="text-align:left">--</td>
</tr>
</tbody>
</table>
</div></template>

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
