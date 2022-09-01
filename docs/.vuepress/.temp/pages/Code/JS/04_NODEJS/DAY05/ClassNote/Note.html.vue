<template><h1 id="restful" tabindex="-1"><a class="header-anchor" href="#restful" aria-hidden="true">#</a> Restful</h1>
<ol>
<li>REST(表述性状态传递),是一种软件框架风格,降低开发的复杂性</li>
<li>Restful 一套结构清晰,符合标准,易于理解,扩展方便的结构风格</li>
<li>设计特点:
<table>
<thead>
<tr>
<th style="text-align:center">序号</th>
<th style="text-align:center">标题</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">原则条件</td>
<td>在服务器端,把功能分配给各种资源,向客户端公开,所有资源都共享接口</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">版本要求</td>
<td>例如:<RouterLink to="/Code/JS/04_NODEJS/DAY05/ClassNote/https:/www.itdengta.com/api/v1/">IT灯塔 V1</RouterLink> &amp; <RouterLink to="/Code/JS/04_NODEJS/DAY05/ClassNote/www.itdengta.com/api/v2/">IT灯塔 V2</RouterLink></td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">路径</td>
<td>在REST风格中,每个url代表一种资源,在地址中只能使用名词<br>例如:<br>https:/www.itdengta.com/api/v1/user/(符合规范)<br>https:/www.itdengta.com/api/v1/getuser/(不符合规范)</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">标准<br>HTTP方法</td>
<td>GET (SELECT) 从服务器获取资源<BR>POST (INSERT) 向服务器提交资源<BR>PUT (UPDATE) 更新服务器资源 需要ApiPost调试<BR>DELETE (DELETE) 从服务器上删除资源 需要ApiPost调试</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">状态码</td>
<td>自定义,不必严格遵循,但尽量遵循HTTP的状态码</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">错误处理</td>
<td>当出现错误时候,应该返回错误信息<br>例如:<br>要求用户名必填,但没填<br>应当返回:{code:400,msg'用户名不能为空'}</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">返回结果</td>
<td>针对不同的操作返回不同的内容</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">过滤设计</td>
<td>如一次性返回内容数量较多,API需要进行参数过滤(分页)</td>
</tr>
</tbody>
</table>
</li>
</ol>
<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2>
<ul>
<li>硬件接口
<ul>
<li>USB</li>
<li>VGA</li>
<li>HDML</li>
</ul>
</li>
<li>软件接口
<ul>
<li>APIs</li>
</ul>
</li>
</ul>
<h2 id="apipost软件" tabindex="-1"><a class="header-anchor" href="#apipost软件" aria-hidden="true">#</a> ApiPost软件</h2>
<p><a href="https://www.apipost.cn/" target="_blank" rel="noopener noreferrer">ApiPost<ExternalLinkIcon/></a></p>
</template>
