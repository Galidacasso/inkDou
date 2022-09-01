<template><h1 id="软件发展阶段" tabindex="-1"><a class="header-anchor" href="#软件发展阶段" aria-hidden="true">#</a> 软件发展阶段</h1>
<div class="language-mind ext-mind line-numbers-mode"><pre v-pre class="language-mind"><code>garid
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>程序设计阶段
<ul>
<li>主要是军用</li>
<li>软件品种单一</li>
</ul>
</li>
<li>软件设计阶段(俗称意大利面阶段,软件危机阶段)
<ul>
<li>压缩打包成套,安装使用</li>
<li>软件的品种逐渐丰富起来</li>
<li>因程序员层次不同,规范混乱,造成了软件危机</li>
</ul>
</li>
<li>软件工程概念
<ul>
<li>借助建筑设计的概念,使编程规范化,工程化</li>
<li>提出了衡量项目体量的指标:人月 1个人按照优质编写的工作量,编写1个月的量及是人月 5个人 1个月就是5个人月</li>
<li>推荐书籍:&lt;&lt;人月神话&gt;&gt;</li>
<li>焦油坑
<ul>
<li>开发三角 质量 成本 周期</li>
<li>随着项目的推移,需求 进度 功能 BUG 系统愈来愈大,系统运行 和 支撑会复杂,像进了焦油坑一样越使劲越软</li>
</ul>
</li>
<li>没有银弹
<ul>
<li>银弹 : 狼人</li>
<li>没有银弹:可以理解为没有bug</li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="项目" tabindex="-1"><a class="header-anchor" href="#项目" aria-hidden="true">#</a> 项目</h1>
<p>软件:程序+文档</p>
<h2 id="三个时期-八个阶段" tabindex="-1"><a class="header-anchor" href="#三个时期-八个阶段" aria-hidden="true">#</a> 三个时期 八个阶段</h2>
<pre><code>每个阶段都要有说明书
</code></pre>
<ul>
<li>软件定义期
<ul>
<li>可行性分析阶段
<ul>
<li>技术受经济 文化 政治 法律 技术壁垒影响</li>
<li>红海 蓝海 灰海</li>
</ul>
</li>
<li>需求分析阶段
<ul>
<li>来自可行性分析的需求</li>
</ul>
</li>
</ul>
</li>
<li>软件开发期
<ul>
<li>概要设计阶段
<ul>
<li>项目大致定位
<ul>
<li>交互框架</li>
<li>视觉框架</li>
<li>技术内容</li>
</ul>
</li>
</ul>
</li>
<li>详细设计阶段
<ul>
<li>算法</li>
<li>请求</li>
</ul>
</li>
<li>开发实现阶段</li>
<li>测试阶段
<ul>
<li>功能测试(手动)</li>
<li>性能测试(自动)</li>
</ul>
</li>
</ul>
</li>
<li>软件维护期
<ul>
<li>部署阶段</li>
<li>维护阶段</li>
</ul>
</li>
</ul>
<h1 id="学子商城项目" tabindex="-1"><a class="header-anchor" href="#学子商城项目" aria-hidden="true">#</a> 学子商城项目</h1>
<h2 id="搭建学子商城项目的工程目录" tabindex="-1"><a class="header-anchor" href="#搭建学子商城项目的工程目录" aria-hidden="true">#</a> 搭建学子商城项目的工程目录</h2>
<ul>
<li>xz (工程目录)
<ul>
<li>app.js       服务器启动文件</li>
<li>pool.js      mysql连接池文件</li>
<li>routes       路由器目录
<ul>
<li>user.js    用户路由</li>
<li>product.js 商品路由</li>
<li>....</li>
</ul>
</li>
<li>public       静态资源目录
<ul>
<li>xxx.html   静态文件</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="初始化项目及配置" tabindex="-1"><a class="header-anchor" href="#初始化项目及配置" aria-hidden="true">#</a> 初始化项目及配置</h2>
<p>npm init -y          初始化说明书文件
npm i express msql   第三方内容</p>
<h2 id="参照开发文档完成相关内容" tabindex="-1"><a class="header-anchor" href="#参照开发文档完成相关内容" aria-hidden="true">#</a> 参照开发文档完成相关内容</h2>
</template>
