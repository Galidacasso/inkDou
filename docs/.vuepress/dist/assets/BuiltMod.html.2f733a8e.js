import{_ as s,e as n}from"./app.0316e773.js";const a={},l=n(`<h2 id="\u5185\u7F6E\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u6A21\u5757" aria-hidden="true">#</a> \u5185\u7F6E\u6A21\u5757</h2><p>\u6838\u5FC3\u6A21\u5757,\u662Fnodejs\u4E2D\u81EA\u5E26\u7684,\u4E0D\u9700\u8981\u4E0B\u8F7D\u5373\u53EF\u4F7F\u7528\u3002</p><h3 id="\u67E5\u8BE2\u5B57\u7B26\u4E32\u6A21\u5757-querystring" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5B57\u7B26\u4E32\u6A21\u5757-querystring" aria-hidden="true">#</a> \u67E5\u8BE2\u5B57\u7B26\u4E32\u6A21\u5757 <strong><code>querystring</code></strong></h3><p>\u67E5\u8BE2\u5B57\u7B26\u4E32\u6A21\u5757\uFF0C\u89E3\u6790\u548C\u683C\u5F0F\u5316\u67E5\u8BE2\u5B57\u7B26\u4E32\u3002</p><ol><li>\u5C06\u67E5\u8BE2\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3A\u5BF9\u8C61 qs.parse()</li><li>\u5C06\u5BF9\u8C61\u683C\u5F0F\u5316\u4E3A\u67E5\u8BE2\u5B57\u7B26\u4E32</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#212121;"><code><span class="line"><span style="color:#545454;font-style:italic;">// \u4F7F\u7528querystring\u5185\u7F6E\u6A21\u5757</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">// \u5F15\u5165\u6A21\u5757 \u4E0D\u9700\u8981\u4F7F\u7528./\u5F15\u5165\u6A21\u5757</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#EEFFFF;"> qs </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">require</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">querystring</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;">// \u67E5\u8BE2\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">// \u5C5E\u6027=\u5C5E\u6027\u503C&amp;\u5C5E\u6027=\u5C5E\u6027\u503C&amp;...</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">// \u83B7\u53D6tn\u548Cwd\u7684\u503C</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#EEFFFF;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tn=baidu&amp;wd=web</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">// \u5C06\u67E5\u8BE2\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3A\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#EEFFFF;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> qs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#EEFFFF;">(str)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EEFFFF;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#EEFFFF;">(obj)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#EEFFFF;">(obj</span><span style="color:#89DDFF;">.</span><span style="color:#EEFFFF;">tn</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> obj</span><span style="color:#89DDFF;">.</span><span style="color:#EEFFFF;">wd)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;">// \u5C06\u5BF9\u8C61\u683C\u5F0F\u5316\u4E3A\u67E5\u8BE2\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#EEFFFF;"> emp </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5C0F\u827A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">say</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">missyou</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#EEFFFF;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> qs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#EEFFFF;">(emp)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#EEFFFF;">(str)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="\u6587\u4EF6\u53CA\u76EE\u5F55\u6A21\u5757-fs" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u53CA\u76EE\u5F55\u6A21\u5757-fs" aria-hidden="true">#</a> \u6587\u4EF6\u53CA\u76EE\u5F55\u6A21\u5757 <strong><code>fs</code></strong></h3><p>fs\u6A21\u5757\uFF0C\u5904\u7406\u6587\u4EF6\u53CA\u76EE\u5F55(\u8BFB\u5199/\u5220\u6539)\uFF0C\u6709\u540C\u6B65\u548C\u5F02\u6B652\u79CD\u65B9\u5F0F\u3002</p><h4 id="\u76EE\u5F55\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u64CD\u4F5C" aria-hidden="true">#</a> \u76EE\u5F55\u64CD\u4F5C</h4><table><tr><th>\u529F\u80FD</th><th>\u8FDB\u7A0B</th><th>\u65B9\u6CD5</th><th>\u5907\u6CE8</th></tr><tr><td rowspan="2">\u521B\u5EFA</td><td>\u5F02\u6B65</td><td>fs.mkdir()</td><td rowspan="2">\u4E0D\u5141\u8BB8\u91CD\u590D\u521B\u5EFA</td></tr><tr><td>\u540C\u6B65</td><td>fs.mkdirSync()</td></tr><tr><td rowspan="2">\u5220\u9664</td><td>\u5F02\u6B65</td><td>fs.rmdir()</td><td rowspan="2">\u4E0D\u5141\u8BB8\u91CD\u590D\u5220\u9664<br>\u4E0D\u80FD\u5220\u9664\u975E\u7A7A\u7684\u76EE\u5F55</td></tr><tr><td>\u540C\u6B65</td><td>fs.rmdirSync()</td></tr><tr><td rowspan="2">\u8BFB\u53D6</td><td>\u5F02\u6B65</td><td>fs.readdir()</td><td rowspan="2">\u8BFB\u53D6\u51FA\u6765\u7684\u662F\u5305\u542B\u6587\u4EF6\u53CA\u76EE\u5F55\u540D\u79F0\u7684\u6570\u7EC4<br>\u4F46\u662F\u53EA\u80FD\u8BFB\u53D6\u4E00\u5C42,\u5B50\u76EE\u5F55\u662F\u65E0\u6CD5\u8BFB\u53D6\u7684<br>\u5982\u679C\u60F3\u8981\u5B9E\u73B0\u591A\u7EA7\u76EE\u5F55\u8BFB\u53D6\u5219\u9700\u8981\u9012\u5F52\u64CD\u4F5C</td></tr><tr><td>\u540C\u6B65</td><td>fs.readdirSync()</td></tr></table><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#212121;"><code><span class="line"><span style="color:#545454;font-style:italic;">// \u5F15\u5165\u6A21\u5757</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#EEFFFF;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">require</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;">// 1. \u521B\u5EFA fs.mkdir()(\u5F02\u6B65) </span></span>
<span class="line"><span style="color:#EEFFFF;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mkdir</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xiaoyi</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">err</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#EEFFFF;">err</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">err</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#EEFFFF;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u521B\u5EFA\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;">// 2. \u5220\u9664 fs.rmdir()(\u5F02\u6B65) </span></span>
<span class="line"><span style="color:#EEFFFF;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rmdir</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xiaoyi</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">err</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#EEFFFF;">err</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">err</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#EEFFFF;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5220\u9664\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;">// 3. \u8BFB\u53D6 fs.readdir()(\u5F02\u6B65) </span></span>
<span class="line"><span style="color:#EEFFFF;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readdir</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">err</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> result</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#EEFFFF;">err</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">err</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#EEFFFF;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#EEFFFF;">result</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="\u6587\u4EF6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u64CD\u4F5C" aria-hidden="true">#</a> \u6587\u4EF6\u64CD\u4F5C</h4><table><tr><th>\u529F\u80FD</th><th>\u8FDB\u7A0B</th><th>\u65B9\u6CD5</th><th>\u5907\u6CE8</th></tr><tr><td rowspan="2">\u5185\u5BB9\u8FFD\u52A0</td><td>\u5F02\u6B65</td><td>fs.appendFile()</td><td rowspan="2">\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u4F1A\u9996\u5148\u521B\u5EFA\u6587\u4EF6\u518D\u5199\u5165\u5185\u5BB9<br>\u5982\u679C\u6587\u4EF6\u5B58\u5728\u5219\u76F4\u63A5\u5728\u539F\u6709\u5185\u5BB9\u7684\u6700\u540E\u65B9\u63D2\u5165\u5185\u5BB9</td></tr><tr><td>\u540C\u6B65</td><td>fs.appendFileSync()</td></tr><tr><td rowspan="2">\u6587\u4EF6\u8BFB\u53D6</td><td>\u5F02\u6B65</td><td>fs.readFile()</td><td rowspan="2"></td></tr><tr><td>\u540C\u6B65</td><td>fs.readFileSync()</td></tr><tr><td rowspan="2">\u6587\u4EF6\u5220\u9664</td><td>\u5F02\u6B65</td><td>fs.unlink()</td><td rowspan="2"></td></tr><tr><td>\u540C\u6B65</td><td>fs.unlinkSync()</td></tr><tr><td rowspan="2">\u6587\u4EF6\u590D\u5236</td><td>\u5F02\u6B65</td><td>fs.copyFile()</td><td rowspan="2"></td></tr><tr><td>\u540C\u6B65</td><td>fs.copyFileSync()</td></tr></table><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#212121;"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#EEFFFF;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">require</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">// 1. \u5185\u5BB9\u8FFD\u52A0  fs.appendFile  fs.appendFileSync</span></span>
<span class="line"><span style="color:#EEFFFF;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendFile</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xiaoyi.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5C0F\u827A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">err</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#EEFFFF;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5185\u5BB9\u8FFD\u52A0\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;">// 2. \u6587\u4EF6\u8BFB\u53D6 fs.readFile  fs.readFileSync</span></span>
<span class="line"><span style="color:#EEFFFF;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readFile</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Note.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">err</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> result</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#545454;font-style:italic;">// \u5982\u679C\u9047\u89C1buffer\u7C7B\u578B\u7684\u6570\u636E,\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528toString()\u8F6C\u6362\u5185\u5BB9 </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#EEFFFF;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#EEFFFF;">result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;">// 3. \u6587\u4EF6\u5220\u9664 fs.unlink  fs.unlinkSync</span></span>
<span class="line"><span style="color:#EEFFFF;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unlink</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xiaoyi.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">()</span><span style="color:#EEFFFF;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#EEFFFF;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5220\u9664\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;">// 4. \u6587\u4EF6\u590D\u5236 fs.copyFile  fs.copyFileSync</span></span>
<span class="line"><span style="color:#EEFFFF;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unlink</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Note.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">copy_Note.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">()</span><span style="color:#EEFFFF;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#EEFFFF;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u590D\u5236\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h4 id="fs-\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#fs-\u7EC3\u4E60" aria-hidden="true">#</a> fs \u7EC3\u4E60</h4><p>\u58F0\u660E\u4E00\u4E2A\u6570\u7EC4,\u4FDD\u5B58\u591A\u4E2A\u5458\u5DE5\u5BF9\u8C61\u4FE1\u606F: \u7F16\u53F7 \u59D3\u540D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#212121;"><code><span class="line"><span style="color:#545454;font-style:italic;">// \u901A\u8FC7fs\u6A21\u5757\u5C06\u5185\u5BB9\u63D2\u5165\u5230\u6587\u672C\u6587\u6863\u4E2D,\u8981\u6C42\u4E00\u884C\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">// \u4F8B\u5982: emp.txt</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">// 1 \u5C0F\u827A</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">// 2 \u5C0F\u5B87</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">// 3 \u82B9\u83DC</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#EEFFFF;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">require</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#EEFFFF;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5C0F\u827A</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5C0F\u5B87</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u82B9\u83DC</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#EEFFFF;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">// \u5751: \u987A\u5E8F\u95EE\u9898 \u5F02\u6B65\u5BFC\u81F4\u7684</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#EEFFFF;"> (</span><span style="color:#C792EA;">let</span><span style="color:#EEFFFF;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#EEFFFF;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#EEFFFF;">length</span><span style="color:#89DDFF;">;</span><span style="color:#EEFFFF;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#EEFFFF;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#545454;font-style:italic;">// console.log(arr[i].id);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#545454;font-style:italic;">// console.log(arr[i].name);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">str</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">arr</span><span style="color:#F07178;">[</span><span style="color:#EEFFFF;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#EEFFFF;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">arr</span><span style="color:#F07178;">[</span><span style="color:#EEFFFF;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#EEFFFF;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#EEFFFF;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#EEFFFF;">str</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#545454;font-style:italic;">// fs.appendFile(&#39;emp.txt&#39;, str, (err) =&gt; {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#545454;font-style:italic;">//     if (err) throw err;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#545454;font-style:italic;">//     console.log(&#39;\u8FFD\u52A0\u6210\u529F~&#39;);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#545454;font-style:italic;">// })</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#545454;font-style:italic;">// \u540C\u6B65\u65B9\u6CD5\u89E3\u51B3\u5F02\u6B65\u987A\u5E8F\u95EE\u9898</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#EEFFFF;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendFileSync</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">emp.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">str</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,17);function p(o,F){return l}var r=s(a,[["render",p],["__file","BuiltMod.html.vue"]]);export{r as default};