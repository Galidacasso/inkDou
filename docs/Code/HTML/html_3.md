# 表单 form
1. 可以自动整理内容，也可以添加一些初级的验证
2. form表单只有提交功能，没有接受响应的功能
3. 提供了丰富的可视化输入控件 input
```html:no-line-numbers
<form action="" method="" enctype="multipart/form-data">
```
- **`action`**  定义表单的提交动作，没有内容时默认提交到本页面  
- **`method`**  定义表单的提交方式，默认是get  
- **`enctype`** 定义数据的编码方式:
   - 上传文件时: **`multipart/form-data`**  指表单数据由多部分构成，既有文本数据也有文件的二进制数据
   - 默认值: **`application/x-www-form-urlencoded`** 只能传文本格式

## input 类型
默认类型是text，根据type类型来决定表单的类型：

| 类型     | 内容     |          样式           |
| -------- | -------- | :---------------------: |
| text     | 文本框   |   <input type="text">   |
| password | 密码框   | <input type="password"> |
| radio    | 单选框   |  <input type="radio">   |
| checkbox | 多选框   | <input type="checkbox"> |
| submit   | 提交按钮 |  <input type="submit">  |
| reset    | 重置按钮 |  <input type="reset">   |
| button   | 自定义   |  <input type="button">  |
| file     | 文件上传 |   <input type="file">   |

:::tip
file仅能上传1个文件，如需多个文件上传，需使用button
:::
## input 属性       
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

```html
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
    <button>起飞</button>
</form>
```
::: details 输出
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
:::
```html
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
```
::: details 输出
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
:::

### 下拉框
```html
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
   <!-- 文本域 -->
   <textarea cols="30" rows="10"></textarea>
   <button>提交</button>
</form>
```
::: details 输出
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
:::


### 联动选择
```html
label联动选择
<input type="checkbox" id="auto"> 
<label for="auto">点击同意注册</label>
```
::: details 输出
label联动选择
<input type="checkbox" id="auto"> 
<label for="auto">点击同意注册</label>
:::

### 注册页面演示
```html
<table border="1" bordercolor="red" width="400px" height="500px">
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
        <td colspan="2">愿意到以下城市工作</tdcol>
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
            <label for="auot">不要公开我的信息</label>
        </td>
    </tr>
</table>
```
::: details 输出
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
:::

### 文件上传
```html
<form action="">
   <input type="file"><br>
   <!-- 多文件上传 -->
   <input type="file" multiple><br>
   <!-- 文件类型校验 只能png图片  只能上传图片 image/* MIME-->
   <input type="file" multiple accept="image/png"><br>
   <br>
   <button>提交</button>
</form>
```

::: details
<form action="">
   <input type="file"><br>
   <!-- 多文件上传 -->
   <input type="file" multiple><br>
   <!-- 文件类型校验 只能png图片  只能上传图片 image/* MIME-->
   <input type="file" multiple accept="image/png"><br>
   <br>
   <button>提交</button>
</form>
:::




## html5 新表单
```html
<input type="color">
<input type="url">
<input type="search">
<input type="tel">
<input type="range">
<input type="number">
<!-- 日期控件 -->
<input type="datetime-local">
```

::: details
<input type="color">颜色选择<br>
<input type="url">网址输入<br>
<input type="search">搜索<br>
<input type="tel">电话<br>
<input type="range">滑块<br>
<input type="number">数字<br>
<!-- 日期控件 -->
<input type="datetime-local">
:::

### 内联框架
```html
<iframe src="http://www.tmooc.cn/" width="100%" height="1800px" frameborder="0" scrolling="no"></iframe>
```

::: details
<iframe src="http://www.tmooc.cn/" width="100%" height="1800px" frameborder="0" scrolling="no"></iframe>
:::

::: tip 
内联框架不支持https协议的网址
:::