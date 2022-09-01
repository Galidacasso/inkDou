<template><div><h1 id="表单-form" tabindex="-1"><a class="header-anchor" href="#表单-form" aria-hidden="true">#</a> 表单 form</h1>
<ol>
<li>可以自动整理内容，也可以添加一些初级的验证</li>
<li>form表单只有提交功能，没有接受响应的功能</li>
<li>提供了丰富的可视化输入控件 input</li>
</ol>
<div class="language-html ext-html"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">form</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">action</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">method</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">enctype</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">multipart/form-data</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre></div><ul>
<li><strong><code v-pre>action</code></strong>  定义表单的提交动作，没有内容时默认提交到本页面</li>
<li><strong><code v-pre>method</code></strong>  定义表单的提交方式，默认是get</li>
<li><strong><code v-pre>enctype</code></strong> 定义数据的编码方式:
<ul>
<li>上传文件时: <strong><code v-pre>multipart/form-data</code></strong>  指表单数据由多部分构成，既有文本数据也有文件的二进制数据</li>
<li>默认值: <strong><code v-pre>application/x-www-form-urlencoded</code></strong> 只能传文本格式</li>
</ul>
</li>
</ul>
<h2 id="input-类型" tabindex="-1"><a class="header-anchor" href="#input-类型" aria-hidden="true">#</a> input 类型</h2>
<p>默认类型是text，根据type类型来决定表单的类型：</p>
<table>
<thead>
<tr>
<th>类型</th>
<th>内容</th>
<th style="text-align:center">样式</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td>文本框</td>
<td style="text-align:center"><input type="text"></td>
</tr>
<tr>
<td>password</td>
<td>密码框</td>
<td style="text-align:center"><input type="password"></td>
</tr>
<tr>
<td>radio</td>
<td>单选框</td>
<td style="text-align:center"><input type="radio"></td>
</tr>
<tr>
<td>checkbox</td>
<td>多选框</td>
<td style="text-align:center"><input type="checkbox"></td>
</tr>
<tr>
<td>submit</td>
<td>提交按钮</td>
<td style="text-align:center"><input type="submit"></td>
</tr>
<tr>
<td>reset</td>
<td>重置按钮</td>
<td style="text-align:center"><input type="reset"></td>
</tr>
<tr>
<td>button</td>
<td>自定义</td>
<td style="text-align:center"><input type="button"></td>
</tr>
<tr>
<td>file</td>
<td>文件上传</td>
<td style="text-align:center"><input type="file"></td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>file仅能上传1个文件，如需多个文件上传，需使用button</p>
</div>
<h2 id="input-属性" tabindex="-1"><a class="header-anchor" href="#input-属性" aria-hidden="true">#</a> input 属性</h2>
<table align="center" valign="middle">
    <tr>
        <td>属性名</td>
        <td colspan="2">内容</td>
    </tr>
    <tr>
        <td>type</td>
        <td colspan="2">决定表单的类型</td>
    </tr>
    <tr>
        <td>name</td>
        <td colspan="2">可用于数据传递</td>
    </tr>
    <tr>
        <td rowspan="3">value</td>
        <td>属性为button reset submit时</td>
        <td>定义按钮显示的文本</td>
    </tr>
    <tr>
        <td>属性为text password hidden时</td>
        <td>定义输入的初始值</td>
    </tr>
    <tr>
        <td>属性为checkbox radio时</td>
        <td>定义与输入相关联的值</td>
    </tr>
    <tr>
        <td>placeholder</td>
        <td colspan="2">占位符，描述输入预期值的提示信息</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td colspan="2">禁用</td>
    </tr>
    <tr>
        <td>required</td>
        <td colspan="2">必填</td>
    </tr>
    <tr>
        <td>readonly</td>
        <td colspan="2">只读</td>
    </tr>
    <tr>
        <td>checked</td>
        <td colspan="2">默认选中</td>
    </tr>
   <tr>
        <td rowspan="6">select</td>
        <td colspan="2">下拉框</td>
    </tr>
    <tr>
        <td>optgroup</td>
        <td>为下拉框中的选项创建分组</td>
    </tr>
    <tr>
        <td>label</td>
        <td>是分组名称</td>
    </tr>
    <tr>
        <td>option</td>
        <td>下拉框菜单选项</td>
    </tr>
    <tr>
        <td>selected</td>
        <td>默认被选中</td>
    </tr>
    <tr>
        <td>value</td>
        <td>提交时的值</td>
    </tr>
    <tr>
        <td rowspan="3">textarea</td>
        <td colspan="2">文本域</td>
    </tr>
    <tr>
        <td>rows</td>
        <td>文本域中可见的行数</td>
    </tr>
    <tr>
        <td>cols</td>
        <td>文本域中可见的列数</td>
    </tr>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">form</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">action</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">method</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">enctype</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">multipart/form-data</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #545454; font-style: italic">&lt;!-- 依靠我们当前的name属性的值来区分数据来源于哪个表单 --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    文本框: </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">uname</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    密码框: </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">upwd</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    单选框: 男</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">radio</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">sex</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">男</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">           女</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">radio</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">sex</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">女</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    多选框: 吃  </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">checkbox</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">like</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">吃</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            喝 </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">checkbox</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">like</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">喝</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            玩 </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">checkbox</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">like</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">玩</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            乐 </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">checkbox</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">like</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">乐</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #545454; font-style: italic">&lt;!-- 如果当前有文件上传的控件,需要写成: enctype=&quot;multipart/form-data&quot; --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    文件上传: </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">file</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #545454; font-style: italic">&lt;!-- 提交按钮 --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">submit</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #545454; font-style: italic">&lt;!-- 重置按钮 --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">reset</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">button</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">起飞</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">button</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">form</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>输出</summary>
<form action="" method="" enctype="multipart/form-data">
    <!-- 依靠我们当前的name属性的值来区分数据来源于哪个表单 -->
    文本框: <input type="text" name="uname"><br>
    密码框: <input type="password" name="upwd"><br>
    单选框: 男<input type="radio" name="sex" value="男">
           女<input type="radio" name="sex" value="女"><br>
    多选框: 吃  <input type="checkbox" name="like" value="吃">
            喝 <input type="checkbox" name="like" value="喝">
            玩 <input type="checkbox" name="like" value="玩">
            乐 <input type="checkbox" name="like" value="乐">
    <br>
    <!-- 如果当前有文件上传的控件,需要写成: enctype="multipart/form-data" -->
    文件上传: <input type="file"> <br>
    <!-- 提交按钮 -->
    <input type="submit">
    <!-- 重置按钮 -->
    <input type="reset">
    <button>按钮</button>
</form>
</details>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">form</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">action</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">placeholder</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">请输入用户名</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">disabled</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">小艺</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">readonly</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">required</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">placeholder</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">此处必须填写内容</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">radio</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">checked</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">radio</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> &gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">submit</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">submit</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">button</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">提交</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">button</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">form</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>输出</summary>
<form action="">
    <input type="text" placeholder="请输入用户名"><br>
    <input type="text" value="小艺"><br>
    <input type="text" value="小艺" disabled><br>
    <input type="text" value="小艺" readonly><br>
    <input type="text" required placeholder="此处必须填写内容"><br>
    <input type="radio" checked>
    <input type="radio" ><br>
    <br>
    <input type="submit" value="submit">
    <button>提交</button>
</form>
</details>
<h3 id="下拉框" tabindex="-1"><a class="header-anchor" href="#下拉框" aria-hidden="true">#</a> 下拉框</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">form</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">action</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">select</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">sel1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">0</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">北京</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">上海</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">2</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">天津</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">重庆</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">重庆</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">select</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">select</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">sel2</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">optgroup</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">label</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">北京</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">           </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">0</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">东城区</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">           </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">西城区</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">           </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">2</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">朝阳区</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">           </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">3</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">海淀区</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">optgroup</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">optgroup</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">label</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">天津</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">           </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">4</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">河南区</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">           </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">5</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">宝坻区</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">           </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">6</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">北辰区</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">           </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">7</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">静海区</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">optgroup</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">select</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">select</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">sel3</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">size</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">4</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">北京</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">上海</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">天津</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">重庆</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">杭州</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">桂林</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">内蒙古</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">       </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">朝阳</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">select</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #545454; font-style: italic">&lt;!-- 文本域 --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">textarea</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">cols</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">30</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">rows</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">10</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;/</span><span style="color: #F07178">textarea</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">button</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">提交</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">button</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">form</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>输出</summary>
<form action="">
   <select name="sel1">
       <option value="0">北京</option>
       <option value="1">上海</option>
       <option value="2">天津</option>
       <option value="重庆">重庆</option>
   </select>
   <select name="sel2">
       <optgroup label="北京">
           <option value="0">东城区</option>
           <option value="1">西城区</option>
           <option value="2">朝阳区</option>
           <option value="3">海淀区</option>
       </optgroup>
       <optgroup label="天津">
           <option value="4">河南区</option>
           <option value="5">宝坻区</option>
           <option value="6">北辰区</option>
           <option value="7">静海区</option>
       </optgroup>
   </select>
   <select name="sel3" size="4"> 
       <option>北京</option>
       <option>上海</option>
       <option>天津</option>
       <option>重庆</option>
       <option>杭州</option>
       <option>桂林</option>
       <option>内蒙古</option>
       <option>朝阳</option>
   </select>
   <button>提交</button>
</form>
</details>
<h3 id="联动选择" tabindex="-1"><a class="header-anchor" href="#联动选择" aria-hidden="true">#</a> 联动选择</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #EEFFFF">label联动选择</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">checkbox</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">auto</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">label</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">for</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">auto</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">点击同意注册</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">label</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>输出</summary>
<p>label联动选择
<input type="checkbox" id="auto">
<label for="auto">点击同意注册</label></p>
</details>
<h3 id="注册页面演示" tabindex="-1"><a class="header-anchor" href="#注册页面演示" aria-hidden="true">#</a> 注册页面演示</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">table</span><span style="color: #89DDFF"> border=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">bordercolor</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">red</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">width</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">400px</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">height</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">500px</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">用户账号:</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">placeholder</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">请输入用户名</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">用户密码:</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">placeholder</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">请输入用户密码</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">籍贯:</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">select</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">北京</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">天津</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">杭州</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">select</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">性别:</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">radio</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">sex</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">0</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">男</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">radio</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">sex</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">1</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">checked</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">女</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">radio</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">sex</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">2</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">不详</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">头像:</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">file</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">colspan</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">2</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">愿意到以下城市工作</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tdcol</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">&amp;nbsp;</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">select</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">size</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">4</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">北京</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">天津</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">杭州</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">                </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">重庆</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">option</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">select</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">留言:</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">textarea</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">cols</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">30</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">rows</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">10</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;/</span><span style="color: #F07178">textarea</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">&amp;nbsp;</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">submit</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">登录</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">reset</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">清除</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">button</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">起飞</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">disabled</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">&amp;nbsp;</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">checkbox</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">auto</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">checked</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">            </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">label</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">for</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">auot</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">不要公开我的信息</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">label</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">        </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">td</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">tr</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">table</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>输出</summary>
<table>
    <tr>
        <td>用户账号:</td>
        <td>
            <input type="text" placeholder="请输入用户名">
        </td>
    </tr>
    <tr>
        <td>用户密码:</td>
        <td>
            <input type="password" placeholder="请输入用户密码"> 
        </td>
    </tr>
    <tr>
        <td>籍贯:</td>
        <td>
            <select>
                <option value="">北京</option>
                <option value="">天津</option>
                <option value="">杭州</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>性别:</td>
        <td>
            <input type="radio" name="sex" value="0">男
            <input type="radio" name="sex" value="1" checked>女
            <input type="radio" name="sex" value="2">不详
        </td>
    </tr>
    <tr>
        <td>头像:</td>
        <td>
            <input type="file">
        </td>
    </tr>
    <tr>
        <td colspan="2">愿意到以下城市工作</td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td>
            <select size="4">
                <option>北京</option>
                <option>天津</option>
                <option>杭州</option>
                <option>重庆</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>留言:</td>
        <td>
            <textarea cols="30" rows="10"></textarea>
        </td>
    </tr> 
    <tr>
        <td>&nbsp;</td>
        <td>
            <input type="submit" value="登录">
            <input type="reset" value="清除">
            <input type="button" value="起飞" disabled>
        </td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td>
            <input type="checkbox" id="auto" checked>
            <label for="auto">不要公开我的信息</label>
        </td>
    </tr>
</table>
</details>
<h3 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传" aria-hidden="true">#</a> 文件上传</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">form</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">action</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">file</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #545454; font-style: italic">&lt;!-- 多文件上传 --&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">file</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">multiple</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #545454; font-style: italic">&lt;!-- 文件类型校验 只能png图片  只能上传图片 image/* MIME--&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">file</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">multiple</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">accept</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">image/png</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">br</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #EEFFFF">   </span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">button</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF">提交</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">button</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">form</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details">
<form action="">
   <input type="file"><br>
   <!-- 多文件上传 -->
   <input type="file" multiple><br>
   <!-- 文件类型校验 只能png图片  只能上传图片 image/* MIME-->
   <input type="file" multiple accept="image/png"><br>
   <br>
   <button>提交</button>
</form>
</details>
<h2 id="html5-新表单" tabindex="-1"><a class="header-anchor" href="#html5-新表单" aria-hidden="true">#</a> html5 新表单</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">color</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">url</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">search</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">tel</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">range</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">number</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #545454; font-style: italic">&lt;!-- 日期控件 --&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">input</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">datetime-local</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details">
<p><input type="color">颜色选择<br>
<input type="url">网址输入<br>
<input type="search">搜索<br>
<input type="tel">电话<br>
<input type="range">滑块<br>
<input type="number">数字<br></p>
<!-- 日期控件 -->
<input type="datetime-local">
</details>
<h3 id="内联框架" tabindex="-1"><a class="header-anchor" href="#内联框架" aria-hidden="true">#</a> 内联框架</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #212121"><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">iframe</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">src</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">http://www.tmooc.cn/</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">width</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">100%</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">height</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">1800px</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">frameborder</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">0</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">scrolling</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">no</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;&lt;/</span><span style="color: #F07178">iframe</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details class="custom-container details">
<iframe src="http://www.tmooc.cn/" width="100%" height="1800px" frameborder="0" scrolling="no"></iframe>
</details>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>内联框架不支持https协议的网址</p>
</div>
</div></template>
