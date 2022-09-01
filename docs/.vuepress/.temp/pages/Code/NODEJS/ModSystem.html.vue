<template><div><h1 id="模块系统" tabindex="-1"><a class="header-anchor" href="#模块系统" aria-hidden="true">#</a> 模块系统</h1>
<p>Nodejs使用模块来划分功能，并提供了一套导入导出的机制，js文件互相调用就可以完成复杂的功能</p>
<h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2>
<p>在Nodejs中，一个js文件就可以当做一个模块</p>
<div class="custom-container tip"><p class="custom-container-title">模块思想</p>
<p>不是一种单独的开发语言，而是一种作用域JS编程的规范和思想<br>
<a href="https://www.commonjs.org" target="_blank" rel="noopener noreferrer">CommonJS 规范<ExternalLinkIcon/></a></p>
</div>
<h2 id="自定义模块" tabindex="-1"><a class="header-anchor" href="#自定义模块" aria-hidden="true">#</a> 自定义模块</h2>
<p><strong>无形的构造函数</strong>: 模块中的代码都会被无形的构造函数包裹</p>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:left">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">require</td>
<td style="text-align:left">引入对象</td>
</tr>
<tr>
<td style="text-align:center">exports</td>
<td style="text-align:left">导出对象的别名</td>
</tr>
<tr>
<td style="text-align:center">module.exports</td>
<td style="text-align:left">真正的导出对象</td>
</tr>
<tr>
<td style="text-align:center">__diename</td>
<td style="text-align:left">返回当前模块的绝对路径</td>
</tr>
<tr>
<td style="text-align:center">__filename</td>
<td style="text-align:left">返回当前模块的绝对路径和模块名</td>
</tr>
</tbody>
</table>
<p><strong><code v-pre>require</code></strong> 模块的导入</p>
<ul>
<li><code v-pre>require</code>用于获取模块向外暴露的接口，其实就是 <code v-pre>exports</code>对象</li>
<li>如果引入同级模块，需要加 <code v-pre>./</code> ，文件的后缀名可以不写，因为默认后缀为<code v-pre>.js</code></li>
</ul>
<p><strong><code v-pre>exports</code></strong> 模块的导出</p>
<ul>
<li>通常，开发中经常会把功能封装在模块内，然后通过<code v-pre>exports</code>的方法向外公开暴露一个接口，其他开发人员就可以通过模块引入的方式<code v-pre>require</code>引用这个接口，使用模块的内的功能</li>
</ul>
<h3 id="示例1" tabindex="-1"><a class="header-anchor" href="#示例1" aria-hidden="true">#</a> 示例1</h3>
<p><strong>传递2个参数完成这2个参数的和</strong></p>
<ul>
<li>文件夹
<ul>
<li>1.js</li>
<li>2.js</li>
</ul>
</li>
</ul>
<p><strong>1.js</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 封装计算器函数</span></span>
<span class="line"><span style="color: #C792EA">function</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">getSum</span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">a</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> b</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">a</span><span style="color: #F07178"> </span><span style="color: #89DDFF">+</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">b</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 导出模块对象 exports其实是一个空对象</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">我是导出之前的exprots:</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">exports</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 对象.属性 = 值</span></span>
<span class="line"><span style="color: #89DDFF">exports.</span><span style="color: #EEFFFF">getSum </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> getSum</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">我是导出之后的exprots:</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">exports</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre></div><p><strong>2.js</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 引入模块</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 如果引入的模块是同级的,需要加 ./ js后缀名可以不要</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> obj </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">./1.js</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">我是2.js的obj:</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> obj)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 按照要求传递参数 即可完成功能</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(obj</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">getSum</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">10</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">20</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre></div><h3 id="示例2" tabindex="-1"><a class="header-anchor" href="#示例2" aria-hidden="true">#</a> 示例2</h3>
<p>封装一个circle模块, 模块中声明2个函数，
函数接受半径计算原的周长和面积，
在main.js中引入circle模块，传递半径，得到计算结果。</p>
<ul>
<li>文件夹
<ul>
<li>circle.js</li>
<li>main.js</li>
</ul>
</li>
</ul>
<p><strong>circle.js</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 周长</span></span>
<span class="line"><span style="color: #C792EA">function</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">getLen</span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">r</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">Math</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">PI</span><span style="color: #F07178"> </span><span style="color: #89DDFF">*</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">r</span><span style="color: #F07178"> </span><span style="color: #89DDFF">*</span><span style="color: #F07178"> </span><span style="color: #F78C6C">2</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 面积</span></span>
<span class="line"><span style="color: #C792EA">function</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">getArea</span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">r</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// Math.pow 幂运算</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">Math</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">PI</span><span style="color: #F07178"> </span><span style="color: #89DDFF">*</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">Math</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">pow</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">r</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #F78C6C">2</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 导出模块</span></span>
<span class="line"><span style="color: #89DDFF">exports.</span><span style="color: #EEFFFF">getArea </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> getArea</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">exports.</span><span style="color: #EEFFFF">getLen </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> getLen</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre></div><p><strong>main.js</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 导入模块</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> obj </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">./circle</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// toFixed(2) 保留2位小数</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(obj</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">getArea</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">10</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toFixed</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(obj</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">getLen</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">10</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toFixed</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">2</span><span style="color: #EEFFFF">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre></div><h3 id="演示3" tabindex="-1"><a class="header-anchor" href="#演示3" aria-hidden="true">#</a> 演示3</h3>
<p>导出一个对象，在2.js中直接使用obj.name就能获取&quot;小艺&quot;</p>
<ul>
<li>文件夹
<ul>
<li>1.js</li>
<li>2.js</li>
</ul>
</li>
</ul>
<p><strong>1.js</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 第一次:</span></span>
<span class="line"><span style="color: #89DDFF">exports.</span><span style="color: #EEFFFF">emp </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #FFCB6B">emp</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #FFCB6B">name</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 原因是 exports就是一个空对象,结果又给了一个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 第二次</span></span>
<span class="line"><span style="color: #89DDFF">exports</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #FFCB6B">name</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">我是1.js中的exports:</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">exports</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 上述写法产生空对象的原因:</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 1. 实际上exports并不是真正的导出对象,而是一个替身(别名),  </span></span>
<span class="line"><span style="color: #545454; font-style: italic">//    真正的导出对象是 module.exports</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 2. exports中保存的是 module.exports的引用地址信息,</span></span>
<span class="line"><span style="color: #545454; font-style: italic">//    而不是真的地址的指针,当exports的地址发生改变的时候,</span></span>
<span class="line"><span style="color: #545454; font-style: italic">//    并不会影响 module.exports的原有地址的指向,所以是空对象</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 指针:描述了数据在内存中的位置</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 第三次: 解决方案</span></span>
<span class="line"><span style="color: #89DDFF">module.exports</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre></div><p><strong>2.js</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 引入模块</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> obj </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">./1</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">我是2.js的obj:</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> obj)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(obj</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">name)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre></div><h2 id="模块的引入" tabindex="-1"><a class="header-anchor" href="#模块的引入" aria-hidden="true">#</a> 模块的引入</h2>
<ol>
<li>引入同级目录需要添加<code v-pre>./</code>。</li>
<li>当引入一个目录时，nodejs会自动寻找这个目录下的index.js文件，如果找不到会报错:找不该该模块。但实际开发中不可能每个目录模块下都准备一个index.js,所以需要通过package.json说明书文件来指定加载的文件内容。</li>
</ol>
</div></template>
