<template><h2 id="内置模块" tabindex="-1"><a class="header-anchor" href="#内置模块" aria-hidden="true">#</a> 内置模块</h2>
<p>核心模块,是nodejs中自带的,不需要下载即可使用。</p>
<h3 id="查询字符串模块-querystring" tabindex="-1"><a class="header-anchor" href="#查询字符串模块-querystring" aria-hidden="true">#</a> 查询字符串模块 <strong><code v-pre>querystring</code></strong></h3>
<p>查询字符串模块，解析和格式化查询字符串。</p>
<ol>
<li>将查询字符串转化为对象  qs.parse()</li>
<li>将对象格式化为查询字符串</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 使用querystring内置模块</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 引入模块 不需要使用./引入模块</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> qs </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">querystring</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 查询字符串</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 属性=属性值&amp;属性=属性值&amp;...</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 获取tn和wd的值</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">tn=baidu&amp;wd=web</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 将查询字符串转化为对象</span></span>
<span class="line"><span style="color: #C792EA">let</span><span style="color: #EEFFFF"> obj </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> qs</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">parse</span><span style="color: #EEFFFF">(str)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(obj)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(obj</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">tn</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> obj</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">wd)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 将对象格式化为查询字符串</span></span>
<span class="line"><span style="color: #C792EA">let</span><span style="color: #EEFFFF"> emp </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #F07178">say</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">missyou</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #C792EA">var</span><span style="color: #EEFFFF"> str </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> qs</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">stringify</span><span style="color: #EEFFFF">(emp)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #EEFFFF">(str)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="文件及目录模块-fs" tabindex="-1"><a class="header-anchor" href="#文件及目录模块-fs" aria-hidden="true">#</a> 文件及目录模块 <strong><code v-pre>fs</code></strong></h3>
<p>fs模块，处理文件及目录(读写/删改)，有同步和异步2种方式。</p>
<h4 id="目录操作" tabindex="-1"><a class="header-anchor" href="#目录操作" aria-hidden="true">#</a> 目录操作</h4>
<table >
        <tr>
            <th>功能</th>
            <th>进程</th>
            <th>方法</th>
            <th>备注</th>
        </tr>
        <tr>
            <td rowspan="2">创建</td>
            <td>异步</td>
            <td>fs.mkdir()</td>
            <td rowspan="2">不允许重复创建</td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.mkdirSync()</td>
        </tr>
        <tr>
            <td rowspan="2">删除</td>
            <td>异步</td>
            <td>fs.rmdir()</td>
            <td rowspan="2">不允许重复删除<br>不能删除非空的目录</td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.rmdirSync()</td>
        </tr>
        <tr>
            <td rowspan="2">读取</td>
            <td>异步</td>
            <td>fs.readdir()</td>
            <td rowspan="2">读取出来的是包含文件及目录名称的数组<br>但是只能读取一层,子目录是无法读取的<br>如果想要实现多级目录读取则需要递归操作</td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.readdirSync()</td>
        </tr>
    </table> 
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 引入模块</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> fs </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">fs</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 1. 创建 fs.mkdir()(异步) </span></span>
<span class="line"><span style="color: #EEFFFF">fs</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">mkdir</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">xiaoyi</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">err</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">err</span><span style="color: #F07178">) </span><span style="color: #89DDFF; font-style: italic">throw</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">err</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">创建成功</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 2. 删除 fs.rmdir()(异步) </span></span>
<span class="line"><span style="color: #EEFFFF">fs</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">rmdir</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">xiaoyi</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">err</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">err</span><span style="color: #F07178">) </span><span style="color: #89DDFF; font-style: italic">throw</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">err</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">删除成功</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 3. 读取 fs.readdir()(异步) </span></span>
<span class="line"><span style="color: #EEFFFF">fs</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">readdir</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">a</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">err</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> result</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">err</span><span style="color: #F07178">) </span><span style="color: #89DDFF; font-style: italic">throw</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">err</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">result</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h4>
<table >
        <tr>
            <th>功能</th>
            <th>进程</th>
            <th>方法</th>
            <th>备注</th>
        </tr>
        <tr>
            <td rowspan="2">内容追加</td>
            <td>异步</td>
            <td>fs.appendFile()</td>
            <td rowspan="2">如果文件不存在会首先创建文件再写入内容<br>如果文件存在则直接在原有内容的最后方插入内容</td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.appendFileSync()</td>
        </tr>
        <tr>
            <td rowspan="2">文件读取</td>
            <td>异步</td>
            <td>fs.readFile()</td>
            <td rowspan="2"></td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.readFileSync()</td>
        </tr>
        <tr>
            <td rowspan="2">文件删除</td>
            <td>异步</td>
            <td>fs.unlink()</td>
            <td rowspan="2"> </td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.unlinkSync()</td>
        </tr>
        <tr>
            <td rowspan="2">文件复制</td>
            <td>异步</td>
            <td>fs.copyFile()</td>
            <td rowspan="2"> </td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.copyFileSync()</td>
        </tr>
    </table>  
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> fs </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">fs</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 1. 内容追加  fs.appendFile  fs.appendFileSync</span></span>
<span class="line"><span style="color: #EEFFFF">fs</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">appendFile</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">xiaoyi.txt</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">err</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">内容追加成功</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 2. 文件读取 fs.readFile  fs.readFileSync</span></span>
<span class="line"><span style="color: #EEFFFF">fs</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">readFile</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Note.md</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">err</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> result</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// 如果遇见buffer类型的数据,可以直接使用toString()转换内容 </span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">result</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">toString</span><span style="color: #F07178">())</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 3. 文件删除 fs.unlink  fs.unlinkSync</span></span>
<span class="line"><span style="color: #EEFFFF">fs</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">unlink</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">xiaoyi.txt</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">删除成功</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #545454; font-style: italic">// 4. 文件复制 fs.copyFile  fs.copyFileSync</span></span>
<span class="line"><span style="color: #EEFFFF">fs</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">unlink</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Note.md</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">copy_Note.md</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">复制成功</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h4 id="fs-练习" tabindex="-1"><a class="header-anchor" href="#fs-练习" aria-hidden="true">#</a> fs 练习</h4>
<p>声明一个数组,保存多个员工对象信息: 编号 姓名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic">// 通过fs模块将内容插入到文本文档中,要求一行一个</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 例如: emp.txt</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 1 小艺</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 2 小宇</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 3 芹菜</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> fs </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">require</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">fs</span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">let</span><span style="color: #EEFFFF"> arr </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> [</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">小宇</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">芹菜</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">]</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">// 坑: 顺序问题 异步导致的</span></span>
<span class="line"><span style="color: #89DDFF; font-style: italic">for</span><span style="color: #EEFFFF"> (</span><span style="color: #C792EA">let</span><span style="color: #EEFFFF"> i </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> i </span><span style="color: #89DDFF">&lt;</span><span style="color: #EEFFFF"> arr</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">length</span><span style="color: #89DDFF">;</span><span style="color: #EEFFFF"> i</span><span style="color: #89DDFF">++</span><span style="color: #EEFFFF">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// console.log(arr[i].id);</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// console.log(arr[i].name);</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #C792EA">let</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">str</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">arr</span><span style="color: #F07178">[</span><span style="color: #EEFFFF">i</span><span style="color: #F07178">]</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">id</span><span style="color: #F07178"> </span><span style="color: #89DDFF">+</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178"> </span><span style="color: #89DDFF">+</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">arr</span><span style="color: #F07178">[</span><span style="color: #EEFFFF">i</span><span style="color: #F07178">]</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">name</span><span style="color: #F07178"> </span><span style="color: #89DDFF">+</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #EEFFFF">\n</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">str</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// fs.appendFile(&#39;emp.txt&#39;, str, (err) =&gt; {</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">//     if (err) throw err;</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">//     console.log(&#39;追加成功~&#39;);</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// })</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #545454; font-style: italic">// 同步方法解决异步顺序问题</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #EEFFFF">fs</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">appendFileSync</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">emp.txt</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">str</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div></template>
