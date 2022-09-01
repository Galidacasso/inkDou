<template><div><h1 id="接口说明文档" tabindex="-1"><a class="header-anchor" href="#接口说明文档" aria-hidden="true">#</a> 接口说明文档</h1>
<h2 id="用户注册" tabindex="-1"><a class="header-anchor" href="#用户注册" aria-hidden="true">#</a> 用户注册</h2>
<p>接口地址：http://127.0.0.1:8080/user/register</p>
<p>返回格式：json</p>
<p>请求方式：post</p>
<p>请求示例：http://127.0.0.1:8080/user/register</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>uname</td>
<td>是</td>
<td>String</td>
<td>用户名</td>
</tr>
<tr>
<td>upwd</td>
<td>是</td>
<td>String</td>
<td>密码</td>
</tr>
<tr>
<td>email</td>
<td>是</td>
<td>String</td>
<td>邮箱</td>
</tr>
<tr>
<td>phone</td>
<td>是</td>
<td>string</td>
<td>电话</td>
</tr>
</tbody>
</table>
<p>返回参数</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>Int</td>
<td>返回码<br>200-注册成功<br>401-用户名为空<br>402-密码为空<br>403-邮箱为空<br>404-电话为空</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>返回说明</td>
</tr>
</tbody>
</table>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">register suc</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="用户登录" tabindex="-1"><a class="header-anchor" href="#用户登录" aria-hidden="true">#</a> 用户登录</h2>
<p>接口地址：http://127.0.0.1:8080/user/login</p>
<p>返回格式：json</p>
<p>请求方式：post</p>
<p>请求示例：http://127.0.0.1:8080/user/login</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>uname</td>
<td>是</td>
<td>String</td>
<td>用户名</td>
</tr>
<tr>
<td>upwd</td>
<td>是</td>
<td>String</td>
<td>密码</td>
</tr>
</tbody>
</table>
<p>返回参数</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>Int</td>
<td>返回码  200-登录成功 301-用户名或密码错误 401-用户名为空 402-密码为空</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>返回说明</td>
</tr>
</tbody>
</table>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">login suc</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="用户检索" tabindex="-1"><a class="header-anchor" href="#用户检索" aria-hidden="true">#</a> 用户检索</h2>
<p>接口地址：http://127.0.0.1:8080/user/detail</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/user/detail?uid=1</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Uid</td>
<td>是</td>
<td>Int</td>
<td>用户编号</td>
</tr>
</tbody>
</table>
<p>返回参数</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>Int</td>
<td>返回码  301-未检索到用户 401-用户名为空</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>返回说明</td>
</tr>
</tbody>
</table>
<p>返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">uid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">uname</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">dingding</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">upwd</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">123456</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">email</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">ding@qq.com</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">phone</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">13501234567</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">avatar</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/avatar/default.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">user_name</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">丁伟</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">gender</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户" aria-hidden="true">#</a> 删除用户</h2>
<p>接口地址：http://127.0.0.1:8080/user/delete</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/user/delete?uid=1</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Uid</td>
<td>是</td>
<td>Int</td>
<td>用户编号</td>
</tr>
</tbody>
</table>
<p>返回参数</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>Int</td>
<td>返回码  200-成功删除 301-删除失败 401-用户编号为空</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>返回说明</td>
</tr>
</tbody>
</table>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">delete suc</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修改用户信息" tabindex="-1"><a class="header-anchor" href="#修改用户信息" aria-hidden="true">#</a> 修改用户信息</h2>
<p>接口地址：http://127.0.0.1:8080/user/update</p>
<p>返回格式：json</p>
<p>请求方式：post</p>
<p>请求示例：http://127.0.0.1:8080/user/update</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>uid</td>
<td>是</td>
<td>int</td>
<td>用户编号</td>
</tr>
<tr>
<td>email</td>
<td>是</td>
<td>String</td>
<td>邮箱</td>
</tr>
<tr>
<td>phone</td>
<td>是</td>
<td>string</td>
<td>电话</td>
</tr>
<tr>
<td>gender</td>
<td>是</td>
<td>Int</td>
<td>性别 1-男 0-女</td>
</tr>
<tr>
<td>user_name</td>
<td>是</td>
<td>String</td>
<td>真实姓名</td>
</tr>
</tbody>
</table>
<p>返回参数</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>Int</td>
<td>返回码  200-更新成功 301-更改失败 401-用户编号为空 402-邮箱为空 403-电话为空 404-性别为空 406-真姓实名为空</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>返回说明</td>
</tr>
</tbody>
</table>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">update suc</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="用户列表" tabindex="-1"><a class="header-anchor" href="#用户列表" aria-hidden="true">#</a> 用户列表</h2>
<p>接口地址：http://127.0.0.1:8080/user/list</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/list/detail?pno=1&amp;pageSize=10</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pno</td>
<td>否</td>
<td>Int</td>
<td>页码</td>
</tr>
<tr>
<td>pageSize</td>
<td>否</td>
<td>Int</td>
<td>每页大小</td>
</tr>
</tbody>
</table>
<p>返回参数——数组</p>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">recordCount</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">pageSize</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">9</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">pageCount</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">pno</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">data</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">[</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">uid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">uname</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">yaya</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">email</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">ya@qq.com</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">phone</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">13501234560</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">avatar</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/avatar/default.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">user_name</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">秦小雅</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">gender</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">uid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">uname</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">doudou</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">email</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">dou@qq.com</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">phone</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">13501234569</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">avatar</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/avatar/default.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">user_name</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">窦志强</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">gender</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">]</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检测邮箱" tabindex="-1"><a class="header-anchor" href="#检测邮箱" aria-hidden="true">#</a> 检测邮箱</h2>
<p>接口地址：http://127.0.0.1:8080/user/checkemail</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/user/checkemail?email=ya@qq.com</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>email</td>
<td>是</td>
<td>string</td>
<td>用户邮箱</td>
</tr>
</tbody>
</table>
<p>返回参数</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>Int</td>
<td>返回码  200-不存在 201-已存在</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>返回说明</td>
</tr>
</tbody>
</table>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">non-exists</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="检测手机" tabindex="-1"><a class="header-anchor" href="#检测手机" aria-hidden="true">#</a> 检测手机</h2>
<p>接口地址：http://127.0.0.1:8080/user/checkphone</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/user/checkphone?phone=18111111111</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>phone</td>
<td>是</td>
<td>string</td>
<td>用户电话</td>
</tr>
</tbody>
</table>
<p>返回参数</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>Int</td>
<td>返回码  200-不存在 201-已存在</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>返回说明</td>
</tr>
</tbody>
</table>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">non-exists</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="检测用户名" tabindex="-1"><a class="header-anchor" href="#检测用户名" aria-hidden="true">#</a> 检测用户名</h2>
<p>接口地址：http://127.0.0.1:8080/user/checkuname</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/user/checkuname?uname=jing</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>uname</td>
<td>是</td>
<td>string</td>
<td>用户邮箱</td>
</tr>
</tbody>
</table>
<p>返回参数</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>Int</td>
<td>返回码  200-不存在 201-已存在</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>返回说明</td>
</tr>
</tbody>
</table>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">non-exists</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="退出登录" tabindex="-1"><a class="header-anchor" href="#退出登录" aria-hidden="true">#</a> 退出登录</h2>
<p>接口地址：http://127.0.0.1:8080/user/logout</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/user/logout</p>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">logout succ</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="获取当前用户信息" tabindex="-1"><a class="header-anchor" href="#获取当前用户信息" aria-hidden="true">#</a> 获取当前用户信息</h2>
<p>接口地址：http://127.0.0.1:8080/user/sessiondata</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/user/sessiondata</p>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">uid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">uname</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">dingding</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="商品模块" tabindex="-1"><a class="header-anchor" href="#商品模块" aria-hidden="true">#</a> 商品模块</h2>
<h2 id="商品列表" tabindex="-1"><a class="header-anchor" href="#商品列表" aria-hidden="true">#</a> 商品列表</h2>
<p>接口地址：http://127.0.0.1:8080/product/list</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/product/list?pno=1&amp;pageSize=10</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pno</td>
<td>否</td>
<td>Int</td>
<td>页码</td>
</tr>
<tr>
<td>count</td>
<td>否</td>
<td>Int</td>
<td>每页大小</td>
</tr>
</tbody>
</table>
<p>返回参数——数组</p>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">recordCount</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">43</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">pageSize</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">pageCount</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">9</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">pno</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">data</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">[</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">lid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">29</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">联想(ThinkPad)轻薄系列E470c(20H3A004CD)14英寸笔记本电脑(i5-6200U 8G 500G 2G独显 Win10)黑色</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4699</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">sold_count</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1862</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">is_onsale</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/product/md/584b5678Nbc9f1e70.jpg</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">lid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">43</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">神舟(HASEE)战神Z6-KP7GT 15.6英寸游戏本笔记本电脑(i7-7700HQ 8G 1T+128G SSD GTX1050 1080P)黑色</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5699</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">sold_count</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1844</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">is_onsale</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/product/md/58a2c667Ne2b5cb73.jpg</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">]</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="商品详情" tabindex="-1"><a class="header-anchor" href="#商品详情" aria-hidden="true">#</a> 商品详情</h2>
<p>接口地址：http://127.0.0.1:8080/product/detail</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/product/detail?lid=1</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>lid</td>
<td>是</td>
<td>Int</td>
<td>商品编号</td>
</tr>
</tbody>
</table>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">lid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">family_id</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">Apple MacBook Air 13.3英寸笔记本 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">subtitle</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">5月焕新季，领券买新机！神券满8000减800！一体成型金属机身，纤薄轻巧，长达12小时续航</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">8268</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">promise</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">\*退货补运费 \*30天无忧退货 \*48小时快速退款 \*72小时发货</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">spec</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">双核i5/8GB内存/256GB闪存</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">lname</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">AppleMacBook Air</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">os</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">MacOS</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">memory</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">8G</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">resolution</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">1920\*1080</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">video_card</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">集成显卡</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">cpu</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">Intel i5低功耗版</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">video_memory</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">其它</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">category</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">轻薄本</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">disk</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">256G固态</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">\&lt;div class=</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">content_tpl\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">\&gt; \&lt;div class=</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">formwork\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">\&gt; \&lt;div class=</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">formwork_img\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">\&gt;\&lt;br\&gt;\&lt;/div\&gt;\&lt;div class=</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">formwork_img\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">\&gt; \&lt;img alt=</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D"> class=</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D"> src=</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">img/product/detail/</span><span style="color: #F78C6C">57</span><span style="color: #EEFFFF">b</span><span style="color: #F78C6C">15612</span><span style="color: #EEFFFF">N</span><span style="color: #F78C6C">81</span><span style="color: #EEFFFF">dc</span><span style="color: #F78C6C">489</span><span style="color: #EEFFFF">d.jpg\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">\&gt; \&lt;/div\&gt; \&lt;/div\&gt; \&lt;div class=</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">formwork\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">\&gt; \&lt;div class=</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">formwork_img\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">\&gt; \&lt;img alt=</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D"> class=</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D"> src=</span><span style="color: #EEFFFF">\\</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #545454; font-style: italic">//img20.360buyimg.com/vc/jfs/t2683/60/4222930118/169462/233c7678/57b15616N1e285f09.jpg\\&quot;\&gt; \&lt;/div\&gt; \&lt;/div\&gt; \&lt;div class=\\&quot;formwork\\&quot;\&gt; \&lt;div class=\\&quot;formwork_text\\&quot;\&gt; 技术规格请前往 www.apple.com/cn/macbook-air/specs.html 查看完整内容。\&lt;/div\&gt;\&lt;/div\&gt;\&lt;/div\&gt;&quot;,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">shelf_time</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF">: </span><span style="color: #F78C6C">150223456789</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">sold_count</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1922</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">is_onsale</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">picList</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">[</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">laptop_id</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">sm</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/product/sm/57b12a31N8f4f75a3.jpg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">md</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/product/md/57b12a31N8f4f75a3.jpg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">lg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/product/lg/57b12a31N8f4f75a3.jpg</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">laptop_id</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">sm</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/product/sm/57ad359dNd4a6f130.jpg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">md</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/product/md/57ad359dNd4a6f130.jpg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">lg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/product/lg/57ad359dNd4a6f130.jpg</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">6</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">laptop_id</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">sm</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/product/sm/57ad8846N64ac3c79.jpg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">md</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/product/md/57ad8846N64ac3c79.jpg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">lg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/product/lg/57ad8846N64ac3c79.jpg</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">]</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">family</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">fid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">fname</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">AppleMacBookAir</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">laptopList</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">[</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">lid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">spec</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">双核i5/8GB内存/128GB闪存</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">lid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">spec</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">双核i5/8GB内存/256GB闪存</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">lid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">spec</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">定制款：双核i7/8G内存/128G闪存</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">lid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&quot;</span><span style="color: #F78C6C">spec</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">定制款：双核i7/8G内存/256G闪存</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">]</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3删除商品" tabindex="-1"><a class="header-anchor" href="#_1-3删除商品" aria-hidden="true">#</a> 1.3删除商品</h2>
<p>接口地址：http://127.0.0.1:8080/product/delete</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/product/delete?lid=1</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>lid</td>
<td>是</td>
<td>Int</td>
<td>商品编号</td>
</tr>
</tbody>
</table>
<p>返回参数</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>Int</td>
<td>返回码  200-成功删除 301-删除失败 401-商品编号为空</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>返回说明</td>
</tr>
</tbody>
</table>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">delete suc</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-4商品添加" tabindex="-1"><a class="header-anchor" href="#_1-4商品添加" aria-hidden="true">#</a> 1.4商品添加</h2>
<p>作用：添加商品</p>
<p>返回格式：json</p>
<p>请求方式：post</p>
<p>请求示例：http://127.0.0.1:8080/product/add</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>family_id</td>
<td>是</td>
<td>int</td>
<td>#所属型号家族编号</td>
</tr>
<tr>
<td>title</td>
<td>是</td>
<td>String</td>
<td>#主标题</td>
</tr>
<tr>
<td>subtitle</td>
<td>是</td>
<td>String</td>
<td>#副标题</td>
</tr>
<tr>
<td>price</td>
<td>是</td>
<td>float</td>
<td>#价格</td>
</tr>
<tr>
<td>promise</td>
<td>是</td>
<td>String</td>
<td>#服务承诺</td>
</tr>
<tr>
<td>spec</td>
<td>是</td>
<td>string</td>
<td>#规格/颜色</td>
</tr>
<tr>
<td>lname</td>
<td>是</td>
<td>string</td>
<td>#商品名称</td>
</tr>
<tr>
<td>os</td>
<td>是</td>
<td>string</td>
<td>#操作系统</td>
</tr>
<tr>
<td>memory</td>
<td>是</td>
<td>string</td>
<td>#内存容量</td>
</tr>
<tr>
<td>resollution</td>
<td>是</td>
<td>string</td>
<td>#分辨率</td>
</tr>
<tr>
<td>video_card</td>
<td>是</td>
<td>string</td>
<td>#显卡型号</td>
</tr>
<tr>
<td>cpu</td>
<td>是</td>
<td>string</td>
<td>#处理器</td>
</tr>
<tr>
<td>video_memory</td>
<td>是</td>
<td>string</td>
<td>#显存容量</td>
</tr>
<tr>
<td>category</td>
<td>是</td>
<td>string</td>
<td>#所属分类</td>
</tr>
<tr>
<td>disk</td>
<td>是</td>
<td>string</td>
<td>#硬盘容量及类型</td>
</tr>
<tr>
<td>details</td>
<td>是</td>
<td>string</td>
<td>#产品详细说明</td>
</tr>
<tr>
<td>shelf_time</td>
<td>是</td>
<td>int</td>
<td>#上架时间</td>
</tr>
<tr>
<td>sold_count</td>
<td>是</td>
<td>int</td>
<td>#已售出的数量</td>
</tr>
<tr>
<td>is_onsale</td>
<td>是</td>
<td>int</td>
<td>#是否在售</td>
</tr>
</tbody>
</table>
<p>返回参数</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>Int</td>
<td>返回码  200-添加成功 401-所属家族编号为空 402-标题为空 403-二级为空 404-价格为空 ...</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>返回说明</td>
</tr>
</tbody>
</table>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">add suc</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="购物车模块" tabindex="-1"><a class="header-anchor" href="#购物车模块" aria-hidden="true">#</a> 购物车模块</h2>
<h2 id="_1-1添加购物车" tabindex="-1"><a class="header-anchor" href="#_1-1添加购物车" aria-hidden="true">#</a> 1.1添加购物车</h2>
<p>接口地址：http://127.0.0.1:8080/cart/add</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/cart/add?lid=1&amp;buyCount=5</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>lid</td>
<td>是</td>
<td>Int</td>
<td>商品编号</td>
</tr>
<tr>
<td>buyCount</td>
<td>是</td>
<td>int</td>
<td>购买数量</td>
</tr>
</tbody>
</table>
<p>json返回实例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">add suc</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-2购物车列表" tabindex="-1"><a class="header-anchor" href="#_1-2购物车列表" aria-hidden="true">#</a> 1.2购物车列表</h2>
<p>接口地址：http://127.0.0.1:8080/cart/list</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/cart/list</p>
<p>json返回实例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">200</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">data</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">[</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">iid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">987</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">lid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">17</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">联想(Lenovo)小新700电竞版 15.6英寸游戏笔记本电脑(i5-6300HQ 8G 500G+128G SSD GTX950M 4G IPS)黑</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">spec</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">小新700【i5 双硬盘 GTX950M】</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">5199.00</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">count</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/product/sm/587f476aNcfbf7869.jpg</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">]</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3删除购物车" tabindex="-1"><a class="header-anchor" href="#_1-3删除购物车" aria-hidden="true">#</a> 1.3删除购物车</h2>
<p>接口地址：http://127.0.0.1:8080/cart/del</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/cart/del?iid=2</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>iid</td>
<td>是</td>
<td>Int</td>
<td>购物车编号</td>
</tr>
</tbody>
</table>
<p>json返回实例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">delete suc</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-4修改购物车条目中的购买数量" tabindex="-1"><a class="header-anchor" href="#_1-4修改购物车条目中的购买数量" aria-hidden="true">#</a> 1.4修改购物车条目中的购买数量</h2>
<p>接口地址：http://127.0.0.1:8080/cart/updatecount</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/cart/updatecount?iid=1&amp;count=2</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>iid</td>
<td>是</td>
<td>Int</td>
<td>购物车编号</td>
</tr>
<tr>
<td>count</td>
<td>是</td>
<td>int</td>
<td>商品数量</td>
</tr>
</tbody>
</table>
<p>json返回实例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">update suc</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-5修改购物车条目中的是否勾选" tabindex="-1"><a class="header-anchor" href="#_1-5修改购物车条目中的是否勾选" aria-hidden="true">#</a> 1.5修改购物车条目中的是否勾选</h2>
<p>接口地址：http://127.0.0.1:8080/cart/updatechecked</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/cart/updatechecked?iid=1&amp;checked=1</p>
<p>请求参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>iid</td>
<td>是</td>
<td>Int</td>
<td>购物车编号</td>
</tr>
<tr>
<td>checked</td>
<td>是</td>
<td>int</td>
<td>是否勾选 1勾选 0 未勾选</td>
</tr>
</tbody>
</table>
<p>json返回实例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">200</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">msg</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">update suc</span><span style="color: #89DDFF">&quot;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-6修改购物车条目中的是否勾选" tabindex="-1"><a class="header-anchor" href="#_1-6修改购物车条目中的是否勾选" aria-hidden="true">#</a> 1.6修改购物车条目中的是否勾选</h2>
<p>接口地址：http://127.0.0.1:8080/cart/listchecked</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>请求示例：http://127.0.0.1:8080/cart/listchecked</p>
<p>json返回实例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">code</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">200</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">data</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">[</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">iid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">987</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">lid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">17</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">联想(Lenovo)小新700电竞版 15.6英寸游戏笔记本电脑(i5-6300HQ 8G 500G+128G SSD GTX950M 4G IPS)黑</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">spec</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">小新700【i5 双硬盘 GTX950M】</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">5199.00</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">count</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/product/sm/587f476aNcfbf7869.jpg</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">]</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h2>
<p>接口地址：http://127.0.0.1:8080/index</p>
<p>返回格式：json</p>
<p>请求方式：get</p>
<p>接口示例：http://127.0.0.1:8080/index</p>
<p>返回参数</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>carouselItems</td>
<td>array</td>
<td>轮播广告</td>
</tr>
<tr>
<td>recommendedItems</td>
<td>array</td>
<td>首页推荐</td>
</tr>
<tr>
<td>newArrialItems</td>
<td>array</td>
<td>最新上架</td>
</tr>
<tr>
<td>topSaleItems</td>
<td>array</td>
<td>热销单品</td>
</tr>
</tbody>
</table>
<p>Json返回示例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">carouselItems</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">[</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">cid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">img</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/banner1.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">轮播广告商品1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=28</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">cid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">img</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/banner2.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">轮播广告商品2</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=19</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">cid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">img</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/banner3.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">轮播广告商品3</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">lookforward.html</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">cid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">img</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/banner4.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">轮播广告商品4</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">lookforward.html</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">],</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">recommendedItems</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">[</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">Apple MacBook Air系列</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i5处理器\|256GB SSD\|8GB内存\|英特尔HD显卡620含共享显卡内存</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img1.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">6988</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=1</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">小米Air 金属超轻薄</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i5处理器\|512GB SSD\|2GB内存\|英特尔HD独立显卡</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img2.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3488</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=5</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">联想E480C 轻薄系列</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i7处理器\|256GB SSD\|4GB内存\|英特尔HD显卡680M</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img3.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5399</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=9</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">华硕RX310 金属超极本</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i5处理器\|512GB SSD\|4GB内存\|英特尔HD游戏级显卡</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img4.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4966</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=13</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">联想小新700 电竞版游戏本</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i7处理器\|1TGB SSD\|8GB内存\|英特尔HD显卡620含共享显卡内存</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img5.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">6299</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=17</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">6</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">戴尔灵越燃7000 轻薄窄边</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i5处理器\|512GB SSD\|2GB内存\|英特尔HD显卡</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img3.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5199</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=19</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">],</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">newArrialItems</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">[</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">Apple MacBook Air系列</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i5处理器\|256GB SSD\|8GB内存\|英特尔HD显卡620含共享显卡内存</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img1.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">6988</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=1</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">小米Air 金属超轻薄</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i5处理器\|512GB SSD\|2GB内存\|英特尔HD独立显卡</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img2.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3488</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=5</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">联想E480C 轻薄系列</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i7处理器\|256GB SSD\|4GB内存\|英特尔HD显卡680M</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img3.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5399</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=9</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">华硕RX310 金属超极本</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i5处理器\|512GB SSD\|4GB内存\|英特尔HD游戏级显卡</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img4.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4966</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=13</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">联想小新700 电竞版游戏本</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i7处理器\|1TGB SSD\|8GB内存\|英特尔HD显卡620含共享显卡内存</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img5.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">6299</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=17</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">6</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">戴尔灵越燃7000 轻薄窄边</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i5处理器\|512GB SSD\|2GB内存\|英特尔HD显卡</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img3.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5199</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=19</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">],</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&quot;</span><span style="color: #C792EA">topSaleItems</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">[</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">Apple MacBook Air系列</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i5处理器\|256GB SSD\|8GB内存\|英特尔HD显卡620含共享显卡内存</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img1.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">6988</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=1</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">小米Air 金属超轻薄</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i5处理器\|512GB SSD\|2GB内存\|英特尔HD独立显卡</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img2.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3488</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=5</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">联想E480C 轻薄系列</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i7处理器\|256GB SSD\|4GB内存\|英特尔HD显卡680M</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img3.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5399</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=9</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">华硕RX310 金属超极本</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i5处理器\|512GB SSD\|4GB内存\|英特尔HD游戏级显卡</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img4.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4966</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=13</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">联想小新700 电竞版游戏本</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i7处理器\|1TGB SSD\|8GB内存\|英特尔HD显卡620含共享显卡内存</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img5.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">6299</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=17</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pid</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">6</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">title</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">戴尔灵越燃7000 轻薄窄边</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">details</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">酷睿双核i5处理器\|512GB SSD\|2GB内存\|英特尔HD显卡</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">pic</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">img/index/study_computer_img3.png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">price</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5199</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&quot;</span><span style="color: #FFCB6B">href</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">product_details.html?lid=19</span><span style="color: #89DDFF">&quot;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">]</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
