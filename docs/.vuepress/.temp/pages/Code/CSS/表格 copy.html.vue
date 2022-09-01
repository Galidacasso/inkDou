<template><h1 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h1>
<h2 id="常用样式" tabindex="-1"><a class="header-anchor" href="#常用样式" aria-hidden="true">#</a> 常用样式</h2>
<ul>
<li>table
<ul>
<li>html属性：<strong><code v-pre>border</code></strong> <strong><code v-pre>width</code></strong> <strong><code v-pre>height</code></strong> <strong><code v-pre>align</code></strong></li>
<li><strong><code v-pre>border</code></strong> 只会设置最外层边框。</li>
<li><strong><code v-pre>width</code></strong> <strong><code v-pre>height</code></strong> 设置后仍会根据内容变动。</li>
<li>css常用样式</li>
</ul>
</li>
<li><code v-pre>td</code> /<code v-pre>th</code>
<ul>
<li>尺寸，边框，字体，文本，内边距都有效。</li>
<li>外边距无效。</li>
</ul>
</li>
</ul>
<h3 id="特殊" tabindex="-1"><a class="header-anchor" href="#特殊" aria-hidden="true">#</a> 特殊</h3>
<p>设置 td/th中 文本 垂直对齐方式</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">vertical-align</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> top/middle/bottom </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><strong><code v-pre>input</code></strong> <strong><code v-pre>img</code></strong> 也可以设置 <strong><code v-pre>vertical-aligen</code></strong></p>
</div>
<h2 id="特有样式" tabindex="-1"><a class="header-anchor" href="#特有样式" aria-hidden="true">#</a> 特有样式</h2>
<h3 id="边框合并" tabindex="-1"><a class="header-anchor" href="#边框合并" aria-hidden="true">#</a> 边框合并</h3>
<ul>
<li>table边框与td/th边框<strong>分离</strong></li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">border-collapse</span><span style="color: #EEFFFF">:separate</span></span>
<span class="line"></span></code></pre></div><table class="table_separate table_simple_113px">
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>
<ul>
<li>table边框与td/th边框<strong>合并</strong></li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">border-collapse</span><span style="color: #EEFFFF">:collapse</span></span>
<span class="line"></span></code></pre></div><table class="table_collapse table_simple_102px">
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>
<h3 id="边框距离" tabindex="-1"><a class="header-anchor" href="#边框距离" aria-hidden="true">#</a> 边框距离</h3>
<ul>
<li>设置table边框与td/th边框的<strong>间距</strong></li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">border-spacing</span><span style="color: #EEFFFF">:20px</span></span>
<span class="line"></span></code></pre></div><table class="table_separate table_simple_184px border-spacing">
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>
<h3 id="标题位置" tabindex="-1"><a class="header-anchor" href="#标题位置" aria-hidden="true">#</a> 标题位置</h3>
<ul>
<li>顶部标题 top</li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">caption-side</span><span style="color: #EEFFFF">:top</span></span>
<span class="line"></span></code></pre></div><table class="table_collapse table_simple_102px">
<caption>标题caption</caption>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>
<ul>
<li>底部标题 bottom</li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">caption-side</span><span style="color: #EEFFFF">:bottom</span></span>
<span class="line"></span></code></pre></div><table class="table_collapse table_simple_102px table-layout-b">
<caption>标题caption</caption>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>
<h3 id="显示规则" tabindex="-1"><a class="header-anchor" href="#显示规则" aria-hidden="true">#</a> 显示规则</h3>
<ul>
<li>自由布局 auto</li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">table-layout</span><span style="color: #EEFFFF">:auto</span></span>
<span class="line"></span></code></pre></div><table class="table_separate table-layout-auto">
<caption>未设置宽高的表格</caption>
<tr><td>列标题1</td><td>列标题2</td><td>列标题3</td></tr>
<tr><td>自由布局</td><td>默认值</td><td>table-layout:auto</td></tr>
<tr><td>单元格靠内容撑开</td><td>表格尺寸</td><td>随内容变化</td></tr>
</table>
<ul>
<li>固定布局 fixed</li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #FFCB6B">table-layout</span><span style="color: #EEFFFF">:fixed</span></span>
<span class="line"></span></code></pre></div><table class="table_separate table-layout-fixed ">
<caption>已设置td宽高的表格</caption>
<tr><td class="td-w">列标题1</td><td class="td-w">列标题2</td><td class="td-w">列标题3</td></tr>
<tr><td class="td-w">固定布局</td><td class="td-w">设定值</td><td class="td-w">table-layout:fixed</td></tr>
<tr><td class="td-w">单元格高度靠内容撑开</td><td class="td-w">表格尺寸宽度</td><td class="td-w">固定</td></tr>
</table>
<h4 id="显示规则的对比" tabindex="-1"><a class="header-anchor" href="#显示规则的对比" aria-hidden="true">#</a> 显示规则的对比</h4>
<table>
<thead>
<tr>
<th style="text-align:left">表格自动布局</th>
<th style="text-align:left">表格的固定布局</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">单元格大小会自动的适应内容</td>
<td style="text-align:left">单元格大小完全取决于设置的尺寸</td>
</tr>
<tr>
<td style="text-align:left">表格复杂时，加载速度较慢，效率低</td>
<td style="text-align:left">任何情况下，加载速度都很快</td>
</tr>
<tr>
<td style="text-align:left">自动布局比较灵活</td>
<td style="text-align:left">固定表格不够灵活</td>
</tr>
<tr>
<td style="text-align:left">适用于不确定每列大小，并且不复杂的表格</td>
<td style="text-align:left">适用于确定每列 尺寸的表格</td>
</tr>
</tbody>
</table>
</template>

<style>
.table_simple_113px{
  width:113px;
  border:1px solid #ccc;
}
.table_simple_184px{
  width:184px;
  border:1px solid #ccc;
}
.table_simple_102px{
  width:102px;
  border:1px solid #ccc;
}
.table_separate{
  border-collapse:separate;
}
.table_collapse{
  border-collapse:collapse;
}
.border-spacing{
  border-spacing:20px
}
.table-layout-b{
  caption-side:bottom
}
.table-layout-auto{
  table-layout:auto
}
.table-layout-fixed{
  table-layout:fixed
}
.td-w{
  width:80px;
  height:10px;
}
</style>
