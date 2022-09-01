<template><div><h1 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h1>
<p><img src="https://img0.baidu.com/it/u=615520464,4178533933&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=640&amp;h=320" alt="nodejs"><br>
是基于V8引擎的JavaScript运行环境<br>
<strong>特点</strong>: 事件驱动 、非阻塞式I/O  轻量又高效<br>
<a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a><br>
<a href="https://nodejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">中文地址<ExternalLinkIcon/></a></p>
<h2 id="node-js代码运行方式" tabindex="-1"><a class="header-anchor" href="#node-js代码运行方式" aria-hidden="true">#</a> Node.js代码运行方式</h2>
<p>交互模式: 在命令行里输入代码
脚本模式: 使用node命令运行js文件</p>
<h2 id="node-js数据类型" tabindex="-1"><a class="header-anchor" href="#node-js数据类型" aria-hidden="true">#</a> Node.js数据类型</h2>
<p>原生JS基础类型 + JS引用类型 + Node独有的(Buffer)</p>
<h2 id="node-js对象" tabindex="-1"><a class="header-anchor" href="#node-js对象" aria-hidden="true">#</a> Node.js对象</h2>
<p>Node.js全局大对象Global,所有和Node有关系的内容都会被挂载到这个对象下</p>
<h3 id="console对象" tabindex="-1"><a class="header-anchor" href="#console对象" aria-hidden="true">#</a> console对象</h3>
<p>console是程序的控制台，主要用于打印一些测试信息，可以帮助开发者做简单的调试工作，更高级的调试会用到debug工具。</p>
<div class="language-javascript ext-js"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 用于标准流的输出</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 在浏览器控制台输出前加一个错误标志</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">error</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 在浏览器控制台输出前加一个警告标志</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">warn</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">1</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre></div><h3 id="其他对象" tabindex="-1"><a class="header-anchor" href="#其他对象" aria-hidden="true">#</a> 其他对象</h3>
<p><a href="https://www.php.cn/js-tutorial-465179.html" target="_blank" rel="noopener noreferrer">process<ExternalLinkIcon/></a><br>
<a href="https://www.php.cn/js-tutorial-480645.html" target="_blank" rel="noopener noreferrer">Buffer<ExternalLinkIcon/></a><br>
.....</p>
<h2 id="node-js运行不成功的原因" tabindex="-1"><a class="header-anchor" href="#node-js运行不成功的原因" aria-hidden="true">#</a> Node.js运行不成功的原因:</h2>
<p>1.安装过程中出现问题,使用管理员权限安装NodeJs<br>
2.目前NodeJs没做Win11的兼容,Win11的版本可能存在问题<br>
3.系统缺少可运行的c++运行库或版本过低<br>
4.当前的插件或者其他软件修改了环境变量</p>
</div></template>
