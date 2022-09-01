<template><h1 id="分区元素-div-块级容器-块元素-span-行内元素-参见demo10-html" tabindex="-1"><a class="header-anchor" href="#分区元素-div-块级容器-块元素-span-行内元素-参见demo10-html" aria-hidden="true">#</a> 分区元素 div(块级容器 块元素) span(行内元素) 参见Demo10.html</h1>
<p>div:  块级元素  h1~h6 p hr...
独占一行  宽度默认是父级元素的100%,高度靠内容撑起  可以支持宽高属性</p>
<p>span: 行内元素  a img  b u i ...
和其他行内元素共享一行  宽高靠内容撑起 不支持宽度</p>
<h1 id="列表-参见demo12-html-demo13-html-demo14-html" tabindex="-1"><a class="header-anchor" href="#列表-参见demo12-html-demo13-html-demo14-html" aria-hidden="true">#</a> 列表 参见Demo12.html Demo13.html  Demo14.html</h1>
<p>有条理的显示数据,大多用于导航或者菜单等等
有序列表 order list<br>
默认从阿拉伯数字1开始, 起始值为1, 可以通过type属性来指定列表样式 通过start属性指定起始位置</p>
<p>无序列表 unorder list
默认显示实心圆,可以通过type属性来指定列表样式,用到的最多的样式是none</p>
<h1 id="表单-参见demo15-html" tabindex="-1"><a class="header-anchor" href="#表单-参见demo15-html" aria-hidden="true">#</a> 表单 参见Demo15.html</h1>
<ol>
<li>可以自动整理内容,也可以添加一些初级的验证</li>
<li>form表单只有提交功能,没有接受响应的功能</li>
</ol>
<p>action  定义表单的提交动作,没有内容时默认提交到本页面
method  定义表单的提交方式,默认是get
enctype 定义数据的编码方式
上传文件时: multipart/form-data  指表单数据由多部分构成,既有文本数据也有文件的二进制数据
默认值: application/x-www-form-urlencoded&quot; 只能传文本格式</p>
<ol start="3">
<li>提供了丰富的可视化输入控件
input  默认类型是text 根据type类型来决定表单的类型
type=&quot;text&quot;             文本框
type=&quot;password&quot;         密码框
type=&quot;radio&quot;            单选框
type=&quot;checkbox&quot;         多选框
type=&quot;submit&quot;           提交按钮
type=&quot;reset&quot;            重置按钮
type=&quot;button&quot;           自定义
type=&quot;file&quot;             文件上传按钮
默认只能传递一个文件,如果想多个文件上传</li>
</ol>
<p>button                  提交按钮</p>
<p>属性:
type:    决定表单的类型
name:    可用于数据传递
value:   在type: button reset submit 定义按钮显示的文本
在type: text password hidden 定义输入的初始值
在type: checkbox radio  定义与输入相关联的值
placeholder: 充当占位符角色,提供了可描述输入预期值的提示信息
disabled: 禁用
required: 必填
readonly: 只读
checked: 默认选中</p>
<p>select      下拉框
optgroup    为下拉框中的选项创建分组   label是分组名称<br>
option      下拉框菜单选项
selected属性   默认被选中
value属性      提交时的值</p>
<p>textarea     文本域
rows      文本域中可见的行数
cols      文本域中可见的列数</p>
<p>更多的html5的新表单</p>
</template>
