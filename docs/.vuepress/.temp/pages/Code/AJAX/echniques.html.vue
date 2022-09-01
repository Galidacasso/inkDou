<template><h1 id="排错" tabindex="-1"><a class="header-anchor" href="#排错" aria-hidden="true">#</a> 排错</h1>
<h2 id="打桩法" tabindex="-1"><a class="header-anchor" href="#打桩法" aria-hidden="true">#</a> 打桩法</h2>
<p>用console.log(nnn)在关键步骤打印。写到一个可以出结果的点，先看效果是否正确，正确了再继续写。</p>
<ul>
<li>可以看到关键变量值是否正确</li>
<li>如果这句console.log不打印，说明代码没有执行到这里。</li>
<li>如果打印正确，说明到这一行都是正确的，再出错误，就是后面代码的问题。</li>
</ul>
<h2 id="报错信息" tabindex="-1"><a class="header-anchor" href="#报错信息" aria-hidden="true">#</a> 报错信息</h2>
<ul>
<li>
<p>#️⃣ <code v-pre>Cannot read property ‘lengeh’ of undefined</code><br>
数据库没有开启</p>
</li>
<li>
<p>❌<font color=red>Uncaught SyntaxError : Invalid or unexpected token</font>     <u><font color=grey>03_ex.html:13</font></u><br>
在第13行有出乎意料的符号</p>
</li>
<li>
<p>❌<font color=red>Uncaught SyntaxError : Unexpected end of input</font><br>
出乎意料的结尾，一般为缺少结束的&quot;<strong><code v-pre>括号</code></strong>&quot;</p>
</li>
<li>
<p>❌<font color=red>Uncaught ReferenceError : <font color="#660000"><b>login</b></font> is not defined at HTMLButtonElement.onclick</font>
出乎意料的结尾，login这个方法未定义,说明login方法中缺少&quot;<strong><code v-pre>}</code></strong>&quot;</p>
</li>
<li>
<p>❌<font color=red>Uncaught SyntaxError : missing ) after argument list</font><br>
符号错误.</p>
</li>
<li>
<p>❌<font color=red>Access to XMLHttpRequest at '<u><font color=grey>http://127.0.0.1:8080/test/ajax</font></u> ' from origin 'null' has been blocked by policy : No 'Access-Control-Allow-Oringin' header is present on the requested resource.</font><br>
跨域错误。<br>
AJAX页面，需要使用访问服务的方式打开，否则会报跨域错误。</p>
</li>
<li>
<p>❌<font color=red>Uncaught SyntaxError : Invalid left-hand side in assignment</font><br>
&quot;<strong><code v-pre>==</code></strong>&quot;写成了&quot;<strong><code v-pre>=</code></strong>&quot;</p>
</li>
</ul>
</template>
