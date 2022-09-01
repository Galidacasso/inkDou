<template><div><h1 id="版本控制" tabindex="-1"><a class="header-anchor" href="#版本控制" aria-hidden="true">#</a> 版本控制</h1>
<p>版本控制是指对软件开发过程中各种程序代码、配置文件及说明文档等文件变更的管理，是软件配置管理的核心思想之一。<br>
版本控制最主要的功能就是<strong>追踪文件的变更</strong>。<br>
即： <strong><code v-pre>什么人</code></strong> 在 <strong><code v-pre>什么时候</code></strong> 改变了 <strong><code v-pre>什么文件</code></strong> 的 <strong><code v-pre>什么内容</code></strong></p>
<h2 id="本地化版本控制" tabindex="-1"><a class="header-anchor" href="#本地化版本控制" aria-hidden="true">#</a> 本地化版本控制</h2>
<ul>
<li>
<p>集中式版本控制(SVN)</p>
<ul>
<li>版本集中存放在<code v-pre>中央服务器</code>中</li>
<li><code v-pre>用户</code>向<code v-pre>中央服务器</code>提交代码</li>
<li>在<code v-pre>中央服务器</code>发生故障时,<code v-pre>用户</code>无法提交代码</li>
</ul>
</li>
<li>
<p>分布式版本控制(Git)</p>
<ul>
<li><code v-pre>用户</code>之间互相推送代码</li>
<li>无需担心分布式用户的单一故障</li>
</ul>
</li>
</ul>
<h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> GIT</h2>
<p><a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">官网 https://git-scm.com<ExternalLinkIcon/></a></p>
<h3 id="特点介绍" tabindex="-1"><a class="header-anchor" href="#特点介绍" aria-hidden="true">#</a> 特点介绍</h3>
<ul>
<li>
<p>几乎所有操作都可以本地操作(离线)</p>
</li>
<li>
<p>时刻保持数据的完整性</p>
</li>
<li>
<p>文件流传的三个工作区</p>
<ul>
<li><strong><code v-pre>工作目录</code></strong> <strong><code v-pre>暂存区域</code></strong> <strong><code v-pre>本地仓库</code></strong></li>
</ul>
</li>
<li>
<p>工作方法</p>
<ul>
<li>在工作目录修改文件,执行add操作对文件执行快照,保存至暂存区域</li>
<li>然后通过commit提交,将暂存区域的文件快照永久的存储到git仓库中</li>
</ul>
</li>
</ul>
<h2 id="git操作方法" tabindex="-1"><a class="header-anchor" href="#git操作方法" aria-hidden="true">#</a> GIT操作方法</h2>
<ol>
<li>检测电脑中是否存在git —— 鼠标右键查看是否有<code v-pre>git bash</code> 命令</li>
<li>GIT 初始化配置 —— 在工程目录内，右键<code v-pre>git bash here</code> 打开git窗口</li>
</ol>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git config --global user.name </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">zwk222</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #EEFFFF">git config --global user.email </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">zwk222@icloud.com</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #EEFFFF">git config --list</span></span>
<span class="line"></span></code></pre></div><h3 id="初始化git仓库" tabindex="-1"><a class="header-anchor" href="#初始化git仓库" aria-hidden="true">#</a> 初始化git仓库</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git init</span></span>
<span class="line"></span></code></pre></div><p>通过初始化命令，会创建一个隐藏的目录 <strong><code v-pre>.git</code></strong><br>
此时，当前目录不仅是本地磁盘的真实物理目录，还是本地仓库。</p>
<h3 id="互相影响" tabindex="-1"><a class="header-anchor" href="#互相影响" aria-hidden="true">#</a> 互相影响</h3>
<ul>
<li>存在物理目录中的内容,不一定存在git仓库中</li>
<li>需要上至暂存区才会提交至本地仓库</li>
<li>在物理目录中删除,不定会在本地仓库中删除</li>
<li>在本地仓库中删除,会在物理目录中删除</li>
</ul>
<h3 id="查看当前目录的工作状态" tabindex="-1"><a class="header-anchor" href="#查看当前目录的工作状态" aria-hidden="true">#</a> 查看当前目录的工作状态</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git status</span></span>
<span class="line"></span></code></pre></div><p><strong><code v-pre>未提交</code></strong> <strong><code v-pre>已提交</code></strong> <strong><code v-pre>已忽略</code></strong></p>
<h3 id="添加内容到暂存区" tabindex="-1"><a class="header-anchor" href="#添加内容到暂存区" aria-hidden="true">#</a> 添加内容到暂存区</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git add</span></span>
<span class="line"></span></code></pre></div><ul>
<li>添加指定<code v-pre>文件</code>到暂存区 git add <code v-pre>文件名</code></li>
<li>添加指定<code v-pre>目录</code>到暂存区 git add <code v-pre>目录名</code></li>
<li>添加<code v-pre>当前目录的所有文件</code>到暂存区 git add <code v-pre>目录名</code></li>
</ul>
<h3 id="将暂存区的内容提交到仓库" tabindex="-1"><a class="header-anchor" href="#将暂存区的内容提交到仓库" aria-hidden="true">#</a> 将暂存区的内容提交到仓库</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git commit -m </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">提交说明</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="查看提交日志" tabindex="-1"><a class="header-anchor" href="#查看提交日志" aria-hidden="true">#</a> 查看提交日志</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git log</span></span>
<span class="line"></span></code></pre></div><h3 id="从仓库回退指定的版本" tabindex="-1"><a class="header-anchor" href="#从仓库回退指定的版本" aria-hidden="true">#</a> 从仓库回退指定的版本</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git reset --hard id</span></span>
<span class="line"></span></code></pre></div><h3 id="查看所有版本的记录和回退记录" tabindex="-1"><a class="header-anchor" href="#查看所有版本的记录和回退记录" aria-hidden="true">#</a> 查看所有版本的记录和回退记录</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git reflog</span></span>
<span class="line"></span></code></pre></div><h3 id="忽略内容-不需要提交到仓库" tabindex="-1"><a class="header-anchor" href="#忽略内容-不需要提交到仓库" aria-hidden="true">#</a> 忽略内容,不需要提交到仓库</h3>
<p>在目录中创建 .gitignore 文件,把不需要提交的内容写在此文件中</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic"># 例如</span></span>
<span class="line"><span style="color: #EEFFFF">node_modules/ </span><span style="color: #545454; font-style: italic"># 此目如下的所有文件</span></span>
<span class="line"><span style="color: #EEFFFF">Note.md </span><span style="color: #545454; font-style: italic"># 单个文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h2>
<p>分支可以把某些内容从开发主键上分离出来</p>
<h3 id="查看所有分支" tabindex="-1"><a class="header-anchor" href="#查看所有分支" aria-hidden="true">#</a> 查看所有分支</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git branch</span></span>
<span class="line"></span></code></pre></div><h3 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git branch 分支名称</span></span>
<span class="line"></span></code></pre></div><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git checkout 分支名称</span></span>
<span class="line"></span></code></pre></div><h3 id="分支合并" tabindex="-1"><a class="header-anchor" href="#分支合并" aria-hidden="true">#</a> 分支合并</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git merge 分支名称</span></span>
<span class="line"></span></code></pre></div><ul>
<li>当前分支存在同名文件时,会发生合并冲突现象,此时可选择修复冲突内容
<ul>
<li>保留当前更改</li>
<li>保留传入的更改</li>
<li>保留双方更改</li>
<li>通过文件对比查看那些内容具有差异</li>
</ul>
</li>
</ul>
<h3 id="重置合并" tabindex="-1"><a class="header-anchor" href="#重置合并" aria-hidden="true">#</a> 重置合并</h3>
<ul>
<li>合同冲突后,会出现<code v-pre>you need to resolve your current index first</code>,可以通过重置合并解决</li>
</ul>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git reset --merge</span></span>
<span class="line"></span></code></pre></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>修改了仓库中的内容,一定要及时提交</p>
</div>
<h2 id="vscode中关于文件状态的提示" tabindex="-1"><a class="header-anchor" href="#vscode中关于文件状态的提示" aria-hidden="true">#</a> VScode中关于文件状态的提示</h2>
<ul>
<li>D 本地文件已删除,但仓库中还存在</li>
<li>U 本地文件存在,但为未提交到仓库中</li>
<li>M 文件修改,但未提交到仓库中
...</li>
</ul>
<h2 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h2>
<h3 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> <a href="https://github.com/" target="_blank" rel="noopener noreferrer">github<ExternalLinkIcon/></a></h3>
<p>GitHub是一个面向开源及私有软件项目的托管平台，因为只支持Git作为唯一的版本库格式进行托管，故名GitHub。</p>
<h3 id="gitee" tabindex="-1"><a class="header-anchor" href="#gitee" aria-hidden="true">#</a> <a href="https://gitee.com/" target="_blank" rel="noopener noreferrer">gitee<ExternalLinkIcon/></a></h3>
<p>Gitee是开源中国（OSChina）推出的基于Git的代码托管服务。</p>
<h3 id="创建远程仓库" tabindex="-1"><a class="header-anchor" href="#创建远程仓库" aria-hidden="true">#</a> 创建远程仓库</h3>
<p>创建github或者gitee的账号，并创立远程仓库，通过git将项目推送至远程仓库。</p>
<h3 id="推送至远程仓库" tabindex="-1"><a class="header-anchor" href="#推送至远程仓库" aria-hidden="true">#</a> 推送至远程仓库</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #545454; font-style: italic"># git push -u 远程仓库的地址 分支名称</span></span>
<span class="line"><span style="color: #EEFFFF">git push -u https://gitee.com/galidacasso/Yanglao.git master</span></span>
<span class="line"></span></code></pre></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>首次推送需要填写账号和密码。</p>
</div>
<h3 id="强制推送" tabindex="-1"><a class="header-anchor" href="#强制推送" aria-hidden="true">#</a> 强制推送</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git push -u https://gitee.com/galidacasso/Yanglao.git master --force</span></span>
<span class="line"></span></code></pre></div><h3 id="克隆仓库-拉取代码" tabindex="-1"><a class="header-anchor" href="#克隆仓库-拉取代码" aria-hidden="true">#</a> 克隆仓库(拉取代码)</h3>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">git clone https://gitee.com/shaipe/wechat-rs.git</span></span>
<span class="line"></span></code></pre></div></div></template>
