<template><h1 id="图片-超链接-表格" tabindex="-1"><a class="header-anchor" href="#图片-超链接-表格" aria-hidden="true">#</a> 图片 超链接 表格</h1>
<h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h3>
<p>目录就是文件夹,不同的目录在开发项目中代表不同的部分</p>
<ul>
<li>根目录</li>
<li>子目录</li>
</ul>
<h3 id="路径" tabindex="-1"><a class="header-anchor" href="#路径" aria-hidden="true">#</a> 路径</h3>
<p>路径就是从当前目录到目标位置所经过的线路</p>
<ul>
<li>绝对路径 目录下的绝对位置,完整的文件描述 ,从文件的最高级目录开始到目标文件结束,中间完整的路径</li>
<li>相对路径 从当前目录出发找到目标文件位置
<ul>
<li>同级 <strong><code v-pre>./</code></strong></li>
<li>父级 <strong><code v-pre>../</code></strong></li>
</ul>
</li>
</ul>
<h2 id="图片-img" tabindex="-1"><a class="header-anchor" href="#图片-img" aria-hidden="true">#</a> 图片 img</h2>
<div class="language-html ext-html"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">img</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">src</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">图片源</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">alt</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">代替图片出现的文字</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">title</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">鼠标悬停在图片上显示的内容</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 绝对路径加载 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">img</span><span style="color: #89DDFF"> </span></span>
<span class="line"><span style="color: #C792EA">width</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">600px</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">height</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">400px</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #C792EA">src</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">https://img20.360buyimg.com/pop/s1180x940_jfs/t1/208589/34/21014/101652/625f5d15E3cb4741a/39a0bd91acc0e880.jpg.webp</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">alt</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 相对路径加载 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">img</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">src</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">宝贝.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">alt</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">img</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">src</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/1.webp</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">alt</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">网络环境差,图片加载中~~</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">title</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">猜猜我是谁</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><details class="custom-container details"><summary>输出</summary>
<p><img 
width="600px" height="400px"
src="https://img20.360buyimg.com/pop/s1180x940_jfs/t1/208589/34/21014/101652/625f5d15E3cb4741a/39a0bd91acc0e880.jpg.webp" alt=""></p>
<!-- 相对路径加载 -->
<img src="宝贝.png" alt="">
<img src="img/1.webp" alt="网络环境差,图片加载中~~" title="猜猜我是谁">
</details>
<h2 id="超链接-a" tabindex="-1"><a class="header-anchor" href="#超链接-a" aria-hidden="true">#</a> 超链接 a</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">a</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">地址</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">target</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">_blank</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;/</span><span style="color: #F07178">a</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">a</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">https:www.baidu.com</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">点我跳转到百度</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">a</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 新窗口打开 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">a</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">https:www.baidu.com</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">target</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">_blank</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">点我跳转到百度</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">a</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 下载 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">a</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">宝贝.zip</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">点我下载宝贝</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">a</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 执行js --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">a</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">javascript:alert(&#39;垃圾已清理~~&#39;)</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">点我清除垃圾</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">a</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">a</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">javascript:clear()</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">点我清除垃圾</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">a</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #C792EA">function</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">clear</span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #82AAFF">setTimeout</span><span style="color: #F07178">(</span><span style="color: #89DDFF">()</span><span style="color: #F07178"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #F07178"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">            </span><span style="color: #82AAFF">alert</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">垃圾已清理~~</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #89DDFF">},</span><span style="color: #F07178"> </span><span style="color: #F78C6C">5000</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- js的另类执行方式  自定义事件--&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">a</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">javascript:;</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;/</span><span style="color: #F07178">a</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">a</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">javascript:void(0);</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;/</span><span style="color: #F07178">a</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 锚点  跳转到学子商城中的锚点--&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">a</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">#loca</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">关于申哥</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">a</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">p</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">loca</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">这里是申哥的介绍</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">p</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">a</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">demo1.html#local</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">跳转到demo1锚点</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">a</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">a</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">#</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">回到顶部</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">a</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">a</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">href</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">https://www.jd.com</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">img</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">src</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/2.webp</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">alt</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">a</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="表格-table-tr-td" tabindex="-1"><a class="header-anchor" href="#表格-table-tr-td" aria-hidden="true">#</a> 表格 table tr td</h2>
<p>表格由table、tr、td 组成，其中：</p>
<ul>
<li>table 表格主体</li>
<li>tr 行 横为行</li>
<li>td 列 竖为列</li>
</ul>
<p>表格都是从table标签开始, tr&gt;td&gt;逐级填充数据内容。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">table</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">img</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">src</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">https://img0.baidu.com/it/u=611029487,2706947771&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=500&amp;h=500</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">alt</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">&amp;yen;5693.30</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">0人付款</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            Atomic滑雪板女全能平花板男快穿固定器12GW</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">中体冠军雪具</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">北京</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">table</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><details class="custom-container details"><summary>输出</summary>
<p>此输出受vuepress影响，并非实际效果。</p>
<table>
    <tr>
        <td>
            <img src="https://img0.baidu.com/it/u=611029487,2706947771&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
        </td>
        <td></td>
    </tr>
    <tr>
        <td>&yen;5693.30</td>
        <td>0人付款0</td>
    </tr>
    <tr>
        <td>
            Atomic滑雪板女全能平花板男快穿固定器12GW
        </td>
        <td></td>
    </tr>
    <tr>
        <td>中体冠军雪具</td>
        <td>北京</td>
    </tr>
</table>
</details>
<h3 id="表格属性" tabindex="-1"><a class="header-anchor" href="#表格属性" aria-hidden="true">#</a> 表格属性</h3>
<table>
<thead>
<tr>
<th style="text-align:center">属性名</th>
<th style="text-align:center">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">border</td>
<td style="text-align:center">表格的边框</td>
</tr>
<tr>
<td style="text-align:center">bordercolor</td>
<td style="text-align:center">边框的颜色</td>
</tr>
<tr>
<td style="text-align:center">width</td>
<td style="text-align:center">表格宽度</td>
</tr>
<tr>
<td style="text-align:center">height</td>
<td style="text-align:center">表格高度</td>
</tr>
<tr>
<td style="text-align:center">bgcolor</td>
<td style="text-align:center">背景色</td>
</tr>
<tr>
<td style="text-align:center">background</td>
<td style="text-align:center">背景图</td>
</tr>
</tbody>
</table>
<h3 id="对齐方式" tabindex="-1"><a class="header-anchor" href="#对齐方式" aria-hidden="true">#</a> 对齐方式</h3>
<p>table居中是表格的整体居中和内容无关<br>
align   水平   left/center/right<br>
valign  垂直   top/middle/bottom</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">table</span><span style="color: #89DDFF"> border=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">bordercolor</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">red</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">width</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">300px</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">height</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200px</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #89DDFF">    align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">center</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> bgcolor=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">pink</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">background</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">https://img0.baidu.com/it/u=611029487,2706947771&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=500&amp;h=500</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF"> bgcolor=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">orange</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">1</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">valign</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">bottom</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">2</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">3</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">right</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">1</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF"> bgcolor=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">gray</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">2</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">3</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">table</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><details class="custom-container details"><summary>输出</summary>
<p>此输出受vuepress影响，并非实际效果。</p>
<table border="1" bordercolor="red" width="300px" height="200px"
    align="center" bgcolor="pink" background="https://img0.baidu.com/it/u=611029487,2706947771&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500">
        <tr bgcolor="orange">
            <td>1</td>
            <td valign="bottom">2</td>
            <td>3</td>
        </tr>
        <tr>
            <td align="right">1</td>
            <td bgcolor="gray">2</td>
            <td>3</td>
        </tr>
</table>
</details>
<h3 id="单元格合并" tabindex="-1"><a class="header-anchor" href="#单元格合并" aria-hidden="true">#</a> 单元格合并</h3>
<p>单元格的合并，会将单元格往纵横方向伸展，因此多余的单元格要删除掉<br>
行合并: rowspan  从指定的单元格开始纵向合并多个单元格<br>
列合并: colspan  从指定的单元格开始横向合并多个单元格</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">table</span><span style="color: #89DDFF"> border=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">width</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">300px</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">height</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">300px</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">center</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">center</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">卒</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">colspan</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">2</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">rowspan</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">2</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">曹操</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">卒</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">center</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">卒</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">卒</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">center</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">卒</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">卒</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">卒</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">卒</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">center</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">rowspan</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">2</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">关</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">羽</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">卒</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">卒</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">rowspan</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">2</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">张</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">飞</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF"> align=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">center</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">&amp;nbsp;</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">&amp;nbsp;</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">table</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><details class="custom-container details"><summary>输出</summary>
<p>此输出受vuepress影响，并非实际效果。</p>
<table border="1" width="300px" height="300px" align="center">
    <tr align="center">
        <td>卒</td>
        <td colspan="2" rowspan="2">曹操</td>
        <td>卒</td> 
    </tr>
    <tr align="center">
        <td>卒</td>
        <td>卒</td>
    </tr>
    <tr align="center">
        <td>卒</td>
        <td>卒</td>
        <td>卒</td>
        <td>卒</td>
    </tr>
    <tr align="center">
        <td rowspan="2">关<br>羽</td>
        <td>卒</td>
        <td>卒</td>
        <td rowspan="2">张<br>飞</td>
    </tr>
    <tr align="center">
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
</table>
</details>
<h3 id="表格边距" tabindex="-1"><a class="header-anchor" href="#表格边距" aria-hidden="true">#</a> 表格边距</h3>
<p>外边距: cellspacing   单元格和单元格之间的距离<br>
内边距: cellpadding  边框到内容的距离</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">table</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">width</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">300px</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">height</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">300px</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> border=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">cellspacing</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">10</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">cellpadding</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">10</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">小艺</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">小艺</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">小艺</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">小艺</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">小艺</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">小艺</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">小艺</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">小艺</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">小艺</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">   </span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">table</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><details class="custom-container details"><summary>输出</summary>
<p>此输出受vuepress影响，并非实际效果。</p>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<table width="300px" height="300px" border="1" cellspacing="10" cellpadding="10">
    <tr>
        <td>小艺</td>
        <td>小艺</td>
        <td>小艺</td>
    </tr>
    <tr>
        <td>小艺</td>
        <td>小艺</td>
        <td>小艺</td>
    </tr>
    <tr>
        <td>小艺</td>
        <td>小艺</td>
        <td>小艺</td>   
    </tr>
</table>
</body>
</html>
</details>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>表格的宽度是靠内容撑起的,如果为空则按照最小尺寸显示<br>
如果设置的宽度大于内容宽度则按照设置的宽度显示<br>
如果设置的宽度小于内容宽度则按照内容宽度显示</p>
</div>
<h1 id="分区元素-div-块级容器-块元素-span-行内元素-参见demo10-html" tabindex="-1"><a class="header-anchor" href="#分区元素-div-块级容器-块元素-span-行内元素-参见demo10-html" aria-hidden="true">#</a> 分区元素 div(块级容器 块元素) span(行内元素) 参见Demo10.html</h1>
<p>div:  块级元素  h1~h6 p hr...
独占一行  宽度默认是父级元素的100%,高度靠内容撑起  可以支持宽高属性</p>
<p>span: 行内元素  a img  b u i ...
和其他行内元素共享一行  宽高靠内容撑起 不支持宽度</p>
<h1 id="列表-参见demo12-html-demo13-html-demo14-html" tabindex="-1"><a class="header-anchor" href="#列表-参见demo12-html-demo13-html-demo14-html" aria-hidden="true">#</a> 列表 参见Demo12.html Demo13.html  Demo14.html</h1>
<p>有条理的显示数据,大多用于导航或者菜单等等
有序列表 order list<br>
默认从阿拉伯数字1开始, 起始值为1, 可以通过type属性来指定列表样式 通过start属性指定起始位置</p>
<p>无序列表 unorder list
默认显示实心圆,可以通过type属性来指定列表样式,用到的最多的样式是none</p>
<h1 id="表单-参见demo15-html" tabindex="-1"><a class="header-anchor" href="#表单-参见demo15-html" aria-hidden="true">#</a> 表单 参见Demo15.html</h1>
<ol>
<li>可以自动整理内容,也可以添加一些初级的验证</li>
<li>form表单只有提交功能,没有接受响应的功能</li>
</ol>
<p>action  定义表单的提交动作,没有内容时默认提交到本页面
method  定义表单的提交方式,默认是get
enctype 定义数据的编码方式
上传文件时: multipart/form-data  指表单数据由多部分构成,既有文本数据也有文件的二进制数据
默认值: application/x-www-form-urlencoded&quot; 只能传文本格式</p>
<ol start="3">
<li>提供了丰富的可视化输入控件
input  默认类型是text 根据type类型来决定表单的类型
type=&quot;text&quot;             文本框
type=&quot;password&quot;         密码框
type=&quot;radio&quot;            单选框
type=&quot;checkbox&quot;         多选框
type=&quot;submit&quot;           提交按钮
type=&quot;reset&quot;            重置按钮
type=&quot;button&quot;           自定义
type=&quot;file&quot;             文件上传按钮
默认只能传递一个文件,如果想多个文件上传</li>
</ol>
<p>button                  提交按钮</p>
<p>属性:
type:    决定表单的类型
name:    可用于数据传递
value:   在type: button reset submit 定义按钮显示的文本
在type: text password hidden 定义输入的初始值
在type: checkbox radio  定义与输入相关联的值
placeholder: 充当占位符角色,提供了可描述输入预期值的提示信息
disabled: 禁用
required: 必填
readonly: 只读
checked: 默认选中</p>
<p>select      下拉框
optgroup    为下拉框中的选项创建分组   label是分组名称<br>
option      下拉框菜单选项
selected属性   默认被选中
value属性      提交时的值</p>
<p>textarea     文本域
rows      文本域中可见的行数
cols      文本域中可见的列数</p>
<p>更多的html5的新表单</p>
</template>
