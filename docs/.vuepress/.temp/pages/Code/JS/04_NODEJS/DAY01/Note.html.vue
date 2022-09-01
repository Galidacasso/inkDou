<template><h1 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意!!!</h1>
<p>Nodejs阶段的学习或涉及到很多抽象思想和底层理念与操作,对于现在的我们来讲不是容易理解(思想),在整个学习阶段很多的代码和写法都是固定好的,我们需要先按照固定的写法写代码,在可以能够运行的基础上,发散思维来想象,Nodejs阶段需要大家比平时学习多一点想象力</p>
<p>思想 !!! + 代码!!! + 思维</p>
<h1 id="node-js-基于v8引擎的javascript运行环境" tabindex="-1"><a class="header-anchor" href="#node-js-基于v8引擎的javascript运行环境" aria-hidden="true">#</a> Node.js 基于V8引擎的JavaScript运行环境</h1>
<p>特点: 事件驱动 、非阻塞式I/O  轻量又高效
官网: https://nodejs.org/
中文地址: https://nodejs.org/zh-cn/</p>
<h1 id="node-js代码运行方式" tabindex="-1"><a class="header-anchor" href="#node-js代码运行方式" aria-hidden="true">#</a> Node.js代码运行方式</h1>
<p>交互模式: 在命令行里敲代码,开发中不可能遇到
脚本模式: 使用node命令运行js文件</p>
<h1 id="node-js数据类型" tabindex="-1"><a class="header-anchor" href="#node-js数据类型" aria-hidden="true">#</a> Node.js数据类型</h1>
<p>原生JS基础类型 + JS引用类型 + Node独有的(Buffer)</p>
<h1 id="node-js对象" tabindex="-1"><a class="header-anchor" href="#node-js对象" aria-hidden="true">#</a> Node.js对象</h1>
<p>Node.js全局大对象Global,所有和Node有关系的内容都会被挂载到这个对象下</p>
<h2 id="console对象-参见demo1-html" tabindex="-1"><a class="header-anchor" href="#console对象-参见demo1-html" aria-hidden="true">#</a> console对象 参见Demo1.html</h2>
<h2 id="在nodejs中还有一些对象比如-process-buffer等-不再赘述" tabindex="-1"><a class="header-anchor" href="#在nodejs中还有一些对象比如-process-buffer等-不再赘述" aria-hidden="true">#</a> 在Nodejs中还有一些对象比如: process Buffer等,不再赘述</h2>
<h1 id="全局函数-定时器-重点-基于事件循环-4种" tabindex="-1"><a class="header-anchor" href="#全局函数-定时器-重点-基于事件循环-4种" aria-hidden="true">#</a> 全局函数 定时器(重点)基于事件循环 4种</h1>
<p>场景:</p>
<ol>
<li>计时器炸弹</li>
<li>闹钟</li>
<li>秒杀倒计时</li>
<li>轮播图
......</li>
</ol>
<h2 id="一次性定时器-settimeout-callback-time-参见demo2-js" tabindex="-1"><a class="header-anchor" href="#一次性定时器-settimeout-callback-time-参见demo2-js" aria-hidden="true">#</a> 一次性定时器 setTimeout(callback,time,[...]) 参见Demo2.js</h2>
<p>计划在xxx毫秒后执行一次回调函数callback,返回一个 timeObject,供clearTimeout在需要的时候使用的
clearTimeout(timeObject) 清除一次性定时器</p>
<h2 id="周期性定时器-setinterval-callback-time-参见demo3-js" tabindex="-1"><a class="header-anchor" href="#周期性定时器-setinterval-callback-time-参见demo3-js" aria-hidden="true">#</a> 周期性定时器 setInterval(callback,time,[...]) 参见Demo3.js</h2>
<p>计划在xxx毫秒后执行一次回调函数callback(可重复执行回调),返回一个intervalObject,供clearInterval在需要的时候使用的
clearInterval(返回一个intervalObject) 清除周期性定时器</p>
<h2 id="立即执行定时器-作为理解-参见demo4-js" tabindex="-1"><a class="header-anchor" href="#立即执行定时器-作为理解-参见demo4-js" aria-hidden="true">#</a> 立即执行定时器(作为理解)  参见Demo4.js</h2>
<p>process.nextTick具有最高优先级  setImmediate次高优先级</p>
<h2 id="事件循环-作为理解-分为6个阶段-每个阶段都有自己特殊的任务" tabindex="-1"><a class="header-anchor" href="#事件循环-作为理解-分为6个阶段-每个阶段都有自己特殊的任务" aria-hidden="true">#</a> 事件循环(作为理解)分为6个阶段,每个阶段都有自己特殊的任务</h2>
<ol>
<li>timers    给定时器制定一个执行的下限时间</li>
<li>系统回调</li>
<li>prepare Node内部回调</li>
<li>poll(事件队列)
如果存在setImmediate的设定,则事件循环结束后立即结束poll阶段进入check阶段
如果不存在setImmediate的设定,则会查看是否有其他的定时器setTimeout或者setInterval,如果有有则事件循环绕会timers阶段执行,如果没有则阻塞在poll阶段中,等待回调</li>
<li>check 立即执行setImmediate</li>
<li>close callbakc 正常情况下几乎不会发生</li>
</ol>
<h1 id="模块系统" tabindex="-1"><a class="header-anchor" href="#模块系统" aria-hidden="true">#</a> 模块系统</h1>
<p>Nodejs使用模块来划分所有的功能,并且提供了一套导入导出的机制,js文件互相调用就可以完成复杂的功能
模块: 在Nodejs中,一个js文件就可以当做一个模块</p>
<h2 id="自定义模块-参见目录01-02-03" tabindex="-1"><a class="header-anchor" href="#自定义模块-参见目录01-02-03" aria-hidden="true">#</a> 自定义模块 参见目录01 02 03</h2>
<p>无形的构造函数: 模块中的代码都会被无形的构造函数包裹
require     引入对象
exports     导出对象的别名
module.exports  真正的导出对象
__diename   返回当前模块的绝对路径
__filename  返回当前模块的绝对路径和模块名</p>
<ol>
<li>require 模块的导入</li>
</ol>
<ul>
<li>require用于获取一个模块向外暴露的接口,其实呢就是 exports对象</li>
<li>如果引入同级模块,需要加 ./ 文件的后缀名可以不要,因为默认的就是.js后缀</li>
</ul>
<ol start="2">
<li>exports 模块的导出</li>
</ol>
<ul>
<li>通常而言,开发中经常会把功能封装在模块内,然后通过exports的方法向外公开暴露一个接口,其他开发人员就可以通过模块引入的方式(require)引用这个接口,使用模块的内的功能</li>
</ul>
<h2 id="内置模块" tabindex="-1"><a class="header-anchor" href="#内置模块" aria-hidden="true">#</a> 内置模块</h2>
<h2 id="第三方模块" tabindex="-1"><a class="header-anchor" href="#第三方模块" aria-hidden="true">#</a> 第三方模块</h2>
</template>
