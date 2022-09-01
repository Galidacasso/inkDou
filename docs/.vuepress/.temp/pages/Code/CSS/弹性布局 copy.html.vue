<template><h1 id="弹性布局" tabindex="-1"><a class="header-anchor" href="#弹性布局" aria-hidden="true">#</a> 弹性布局</h1>
<p>弹性布局，是一种布局方式，可以统一的控制子元素的 <strong><code v-pre>显示方向</code></strong> 和 <strong><code v-pre>显示效果</code></strong>，使css布局具有了非常强大的灵活性。</p>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<h3 id="容器-项目" tabindex="-1"><a class="header-anchor" href="#容器-项目" aria-hidden="true">#</a> 容器 &amp; 项目</h3>
<p><strong>容器</strong></p>
<ul>
<li>将子元素按照弹性布局的方式展示的父元素，称为容器。</li>
<li>在容器上添加<code v-pre>display:flex</code>，即可使容器内部的元素以弹性布局的方式展示。</li>
<li>容器本身不是弹性布局。</li>
</ul>
<p><strong>项目</strong></p>
<ul>
<li>容器内部的元素，称为项目。</li>
</ul>
<h3 id="主轴" tabindex="-1"><a class="header-anchor" href="#主轴" aria-hidden="true">#</a> 主轴</h3>
<p>项目排列方向的一根轴，叫主轴，按照方向共有4条，分别是：</p>
<ul>
<li>横向：左→右</li>
<li>横向：右→左</li>
<li>纵向：下→上</li>
<li>纵向：上→下</li>
</ul>
<p>项目横向排列，主轴即x轴。<br>
项目纵向排列，主轴即y轴。<br>
项目在主轴排列顺序，称为主轴起点和终点。</p>
<h3 id="交叉轴" tabindex="-1"><a class="header-anchor" href="#交叉轴" aria-hidden="true">#</a> 交叉轴</h3>
<p>与主轴方向垂直的轴，叫做交叉轴。<br>
项目在交叉轴上的对齐方式，称为交叉轴的起点和终点。</p>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2>
<p>将元素设置成弹性容器之后，他所有的子元素都会变成弹性项目。<br>
项目按照弹性布局的方式排列。<br>
<code v-pre>display:flex</code> 将块级元素设置为容器<br>
<code v-pre>display:inline-flex</code> 将行内元素设置为容器</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">/* 设置弹性容器 */</span></span>
<span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">container</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">display</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">flex / inline-flex </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">弹性布局的特点</p>
<ul>
<li>当元素变为弹性容器，<code v-pre>text-align</code> <code v-pre>vertical-align</code> 失效</li>
<li>弹性项目，<code v-pre>float</code> <code v-pre>clear</code> 失效</li>
</ul>
</div>
<h2 id="容器属性" tabindex="-1"><a class="header-anchor" href="#容器属性" aria-hidden="true">#</a> 容器属性</h2>
<h3 id="主轴方向" tabindex="-1"><a class="header-anchor" href="#主轴方向" aria-hidden="true">#</a> 主轴方向</h3>
<p><code v-pre>flex-direction</code> 设置项目的排列方向</p>
<table>
<thead>
<tr>
<th style="text-align:center">方向</th>
<th style="text-align:center">主轴</th>
<th style="text-align:center">方向</th>
<th style="text-align:center">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>row</code></td>
<td style="text-align:center">x轴</td>
<td style="text-align:center">左→右</td>
<td style="text-align:center">默认值</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>row-reverse</code></td>
<td style="text-align:center">x轴</td>
<td style="text-align:center">右→左</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>column</code></td>
<td style="text-align:center">y轴</td>
<td style="text-align:center">顶→底</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>column-reverse</code></td>
<td style="text-align:center">y轴</td>
<td style="text-align:center">底→顶</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">container</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">flex-direction</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">row / row-reverse / column / column-reverse </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p><strong>row</strong></p>
<div class="div_conc bg-simple border-simple">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
</div>
<p><strong>row-reverse</strong></p>
<div class="div_conc bg-simple border-simple fdrr">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
</div>
<p><strong>column</strong></p>
<div class="div_conc bg-simple border-simple fdc">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
</div>
<p><strong>column-reverse</strong></p>
<div class="div_conc bg-simple border-simple fdcr">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
</div>
<h3 id="项目换行" tabindex="-1"><a class="header-anchor" href="#项目换行" aria-hidden="true">#</a> 项目换行</h3>
<p><code v-pre>flex-wrap</code> 设置项目的排列方向</p>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:left">内容</th>
<th style="text-align:center">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>nowrap</code></td>
<td style="text-align:left">不换行，压缩</td>
<td style="text-align:center">默认值</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>wrap</code></td>
<td style="text-align:left">换行,项目在交叉轴的起点，换行往终点方向折行</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>wrap-reverse</code></td>
<td style="text-align:left">换行反转，项目在交叉轴的终点，换行往起点方向折行</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">container</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">flex-wrap</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF">nowrap / wrap / wrap-reverse </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p><strong>nowrap</strong></p>
<div class="div_conc bg-simple border-simple">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
<div class="div_project bg-simple border-simple font-s">itme7</div>
</div>
<p><strong>wrap</strong></p>
<div class="div_conc bg-simple border-simple fwn">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
<div class="div_project bg-simple border-simple font-s">itme7</div>
</div>
<p><strong>wrap-reverse</strong></p>
<div class="div_conc bg-simple border-simple fwr">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
<div class="div_project bg-simple border-simple font-s">itme7</div>
</div>
<h3 id="flex-flow" tabindex="-1"><a class="header-anchor" href="#flex-flow" aria-hidden="true">#</a> flex-flow</h3>
<p><code v-pre>flex-flow</code> 可同时设置<code v-pre>flex-direction</code>和<code v-pre>flex-wrap</code>两个属性，即缩写方法</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">container</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">flex-flow</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> direction wrap </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><h3 id="主轴对齐" tabindex="-1"><a class="header-anchor" href="#主轴对齐" aria-hidden="true">#</a> 主轴对齐</h3>
<p><code v-pre>justify-content</code> 设置项目的排列方向</p>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:left">内容</th>
<th style="text-align:center">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>flex-start</code></td>
<td style="text-align:left">主轴的起点对齐</td>
<td style="text-align:center">默认值</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>center</code></td>
<td style="text-align:left">主轴的中间</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>flex-end</code></td>
<td style="text-align:left">主轴的终点</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>space-between</code></td>
<td style="text-align:left">两端对齐</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>space-around</code></td>
<td style="text-align:left">两端有空白，左右间距都相同</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>space-evenly</code></td>
<td style="text-align:left">项目的间距完全相同</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">container</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">justify-content</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> flex-start / center / flex-end / space-between... </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p><strong>flex-start</strong></p>
<div class="div_con bg-simple border-simple fdr jcc">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
</div>
<p><strong>flex-start</strong></p>
<div class="div_con bg-simple border-simple fdr jc">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
</div>
<p><strong>flex-end</strong></p>
<div class="div_con bg-simple border-simple fdr je">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
</div>
<p><strong>space-between</strong></p>
<div class="div_con bg-simple border-simple fdr jb">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
</div>
<p><strong>space-around</strong></p>
<div class="div_con bg-simple border-simple fdr ja">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
</div>
<p><strong>space-evenly</strong></p>
<div class="div_con bg-simple border-simple fdr jee">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
</div>
<h3 id="交叉轴对齐" tabindex="-1"><a class="header-anchor" href="#交叉轴对齐" aria-hidden="true">#</a> 交叉轴对齐</h3>
<p><code v-pre>align-items</code> 设置项目的排列方向</p>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:left">内容</th>
<th style="text-align:center">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>flex-start</code></td>
<td style="text-align:left">交叉轴起点对齐</td>
<td style="text-align:center">默认值</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>flex-end</code></td>
<td style="text-align:left">交叉轴终点对齐</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>center</code></td>
<td style="text-align:left">交叉轴中间</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>baseline</code></td>
<td style="text-align:left">按照项目内文本的基线，统一对齐</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>stretch</code></td>
<td style="text-align:left">项目未定义高度，所有项目充满交叉轴所有空间</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">container</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">align-items</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> flex-start / center / flex-end / baseline / stretch... </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p><strong>flex-start</strong></p>
<div class="div_concc bg-simple border-simple jcc fwn">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<p class="font-s3">guards just</p>
</div>
<p><strong>flex-end</strong></p>
<div class="div_concc bg-simple border-simple fwn jcc aife">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<p class="font-s3">guards just</p>
</div>
<p><strong>center</strong></p>
<div class="div_concc bg-simple border-simple fwn jcc aic">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<p class="font-s3">guards just</p>
</div>
<p><strong>baseline</strong>   <em><strong><font size=1.5>注意观察基线的位置</font></strong></em></p>
<div class="div_concc bg-simple border-simple fwn jcc aib">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<p class="font-s3">guards just</p>
</div>
<p><strong>stretch</strong></p>
<div class="div_concc bg-simple border-simple fwn jcc ais">
<div class="div_project1 bg-simple border-simple font-s2">itme1</div>
<div class="div_project2 bg-simple border-simple font-s2">itme2</div>
<div class="div_project3 bg-simple border-simple font-s2">itme3</div>
</div>
<h2 id="项目属性" tabindex="-1"><a class="header-anchor" href="#项目属性" aria-hidden="true">#</a> 项目属性</h2>
<p>项目属性，设置在项目上，只控制项目自身，不影响容器和其他项目的效果。</p>
<h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h3>
<p><code v-pre>order</code> 改变项目在主轴上的排列顺序。<br>
默认值为0，无单位整数，值越小，越靠近主轴的起点。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">order</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="div_conc bg-simple border-simple">
<div class="div_project od3 bg-simple border-simple font-s3 ">itme1 order:3</div>
<div class="div_project od2 bg-simple border-simple font-s3 ">itme2 order:2</div>
<div class="div_project od1 bg-simple border-simple font-s3 ">itme3 order:1</div>
</div>
<h3 id="flex-grow" tabindex="-1"><a class="header-anchor" href="#flex-grow" aria-hidden="true">#</a> flex-grow</h3>
<p><code v-pre>flex-grow</code> 如果主轴方向上有剩余空间，项目将按照设置的增长速度变大。<br>
默认值为0，不变大，无单位的数字设置变大的速度</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">flex-grow</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="div_conccc bg-simple border-simple">
<div class="div_project od1 fg1 bg-simple border-simple font-s3 ">itme1 flex-grow:1</div>
<div class="div_project od2 fg2 bg-simple border-simple font-s3 ">itme2 flex-grow:2</div>
<div class="div_project od3 fg3 bg-simple border-simple font-s3 ">itme3 flex-grow:3</div>
</div>
<h3 id="flex-shrink" tabindex="-1"><a class="header-anchor" href="#flex-shrink" aria-hidden="true">#</a> flex-shrink</h3>
<p><code v-pre>flex-shrink</code> 容器空间不足时，项目按照设置的缩小速度变小。<br>
默认值为0，不变化，无单位的数字设置缩小的速度</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">flex-shrink</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="div_concccc bg-simple border-simple">
<div class="div_project4 od1 fs1 bg-simple border-simple font-s3">itme1 flex-shrink:3</div>
<div class="div_project4 od2 fs2 bg-simple border-simple font-s3">itme2 flex-shrink:2</div>
<div class="div_project4 od3 fs3 bg-simple border-simple font-s3">itme3 flex-shrink:2</div>
</div>
<h3 id="flex-basis" tabindex="-1"><a class="header-anchor" href="#flex-basis" aria-hidden="true">#</a> flex-basis</h3>
<p><code v-pre>flex-basis</code> 设置每个项目占主轴的空间。</p>
<ul>
<li>默认值为auto，按照项目已设置的尺寸显示，</li>
<li>具体数值，按照当前的数值显示，不再按照项目已设置的尺寸显示。</li>
<li>%</li>
</ul>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">flex-basis</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">20%</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><div class="div_concccc bg-simple border-simple">
<div class="div_project4 od1 fb1 bg-simple border-simple font-s3">itme1 flex-basis:30%</div>
<div class="div_project4 od2 fb2 bg-simple border-simple font-s3">itme2 flex-basis:20%</div>
<div class="div_project4 od3 fb3 bg-simple border-simple font-s3">itme3 flex-basis:40%</div>
</div>
<h3 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h3>
<p><code v-pre>flex</code> 是<code v-pre>flex-grow</code> <code v-pre>flex-shrink</code> <code v-pre>flex-basis</code>的简写。</p>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #B2CCD6">flex</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">25%</span><span style="color: #89DDFF">;}</span></span>
<span class="line"></span></code></pre></div><h3 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> align-self</h3>
<p><code v-pre>align-self</code> 设置单个项目在交叉轴上的对齐方式 。</p>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:left">内容</th>
<th style="text-align:center">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>flex-start</code></td>
<td style="text-align:left">交叉轴起点对齐</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>flex-end</code></td>
<td style="text-align:left">交叉轴终点对齐</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>center</code></td>
<td style="text-align:left">交叉轴中间</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>baseline</code></td>
<td style="text-align:left">按照项目内文本的基线，统一对齐</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>stretch</code></td>
<td style="text-align:left">项目未定义高度，所有项目充满交叉轴所有空间</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>auto</code></td>
<td style="text-align:left">使用容器设置的align-items的值</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<div class="language-css ext-css"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">item</span><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #B2CCD6">align-self</span><span style="color: #89DDFF">:</span><span style="color: #F78C6C">20%</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div></template>

<style scoped>
.div_con{
  width:500px;
  display:flex;
}

.div_conc{
  width:300px;
  display:flex;
}

.div_concc{
  width:300px;
  height:100px;
  display:flex;
}

.div_conccc{
  width:100%;
  display:flex;
}

.div_concccc{
  width:100%;
  height:100px;
  display:flex;
}

.div_project{
  width:50px;
  height:50px;
}

.div_project1{
  width:80px;

}
.div_project2{
  width:60px;

}

.div_project3{
    width:70px;
}

.div_project4{
    width:100%;
}

.font-s{
  font-size: 10px;
  line-height: 50px;
  text-align: center;
}

.font-s3{
  font-size: 10px;
  text-align: center;
}

.font-s2{
  font-size: 10px;
  line-height: 100px;
  text-align: center;
}


.bg-simple{background-color:#42b98347;}
.color-vuepress{color:#3eaf7c}
.border-simple{border:1px solid #3eaf7c}

.fdr{flex-direction:row;}
.fdrr{flex-direction:row-reverse;}
.fdc{flex-direction:column;}
.fdcr{flex-direction:column-reverse;}

.fwn{flex-wrap:wrap}
.fwr{flex-wrap:wrap-reverse}

.jc{justify-content:center}
.je{justify-content:flex-end}
.jb{justify-content:space-between}
.ja{justify-content:space-around}
.jee{justify-content:space-evenly}
.jcc{justify-content:flex-start}

.aifs{align-items:flex-start}
.aife{align-items:flex-end}
.aic{align-items:center}
.aib{align-items:baseline}
.ais{align-items:stretch}

.od1{order:1}
.od2{order:2}
.od3{order:3}

.fg1{flex-grow: 1;}
.fg2{flex-grow: 2}
.fg3{flex-grow: 3}

.fs1{flex-shrink: 3;}
.fs2{flex-shrink: 2;}
.fs3{flex-shrink: 2;}

.fb1{flex-basis: 30%;}
.fb2{flex-basis: 20%;}
.fb3{flex-basis: 40%;}

.asfs{align-self: flex-start;}
.asfe{align-self: flex-end;}
.asc{align-self: center;}
.asb{align-self: baseline;}
.ass{align-self: stretch;}
.asa{align-self: auto;}
</style>
