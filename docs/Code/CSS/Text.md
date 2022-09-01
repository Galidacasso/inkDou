<style scoped>
.fn{
  font-size:1.2rem;
  background-color:#f2f2f2;
  border-radius:5px;
  padding:15px 15px;
}
.pl{padding-left:15px}
.pr{padding-right:15px}
.df1{
    width:100%;
    background-color:#f2f2f2;
    border-radius:5px;
    padding:0 0px;
    font-size:1.2rem;
}
.df2{
    height:100px;
}
.cr{
  color:#3eaf7c
}
.frem{ font-size:2rem }
.fps{ font-size:20% }
.ff{ font-family:"楷体" }
.fwn{ font-weight:normal }
.fwb{ font-weight:bold }
.fwbr{ font-weight:bolder }
.fwl{ font-weight:lighter }
.fw999{ font-weight:900 }
.fsi{ font-style:italic }
.fvsc{ font-variant:small-caps }
.fsmp{ font:italic small-caps bold 2rem 楷体}
.fsbs{ font:2rem 楷体}

.tac{ text-align:center }
.tar{ text-align:right }
.taj{ text-align:justify }

.lht{ line-height:100px }

.tdlt{ text-decoration:line-through }
.tdol{ text-decoration:overline }
.tdul{ text-decoration:underline }
.tdn{ text-decoration:none }
.tint{text-indent:40px }
.tsdw{ text-shadow:1px 1px 5px #3eaf7c }
</style>

# 文本格式化
包含字体和文本的属性。  

## 常用单位

| 单位        | 类型  | 描述                                                                       |
| :---------- | :---: | :------------------------------------------------------------------------- |
| **px**      | 绝对  | 1个Viewport像素，相对长度单位。<br>像素px是相对于显示器屏幕分辨率而言的。  |
| **pt**      | 绝对  | 1pt = 1/72英寸，物理长度单位，指的是72分之一英寸                           |
| **pc**      | 绝对  | 1pc = 12pt                                                                 |
| **%**       | 相对  | 相对于父元素的字体尺寸                                                     |
| **em**      | 相对  | 相对于父元素的字体尺寸，相对长度单位。<br>相对于当前对象内文本的字体尺寸   |
| **rem**     | 相对  | 相对长度单位,(即root em) 相对于html标签的字体尺寸,<br>相对的只是HTML根元素 |
| **keyword** | 相对  | xx-small, x-small, small, medium, large, x-large, xx-large                 |
| **vw**      | 相对  | 相当于Viewport宽度的1/100,相对于视口的宽度                                 |
| **vh**      | 相对  | 相当于Viewport高度的1/100,相对于视口的高度                                 |
| **vmin**    | 相对  | 相当于Viewport高宽中长度相对较小的1/100,<br>关于视口高度和宽度两者的最小值 |
| **vmax**    | 相对  | 相当于Viewport高宽中长度相对较大的1/100,<br>关于视口高度和宽度两者的最大值 |

### px 特点

- IE无法调整使用px为单位的字体大小。
- 国内大部分网站能够调整的原因是用em或rem作为字体单位。  
- Firefox能够调整px、em和rem，但是使用ie浏览器（或者内核）的用户较多。

### em 特点
- 值不固定
- 继承父元素字体大小
  
::: danger 注意
任意浏览器的默认字体都是**16px**   
因此所有未经过调整的浏览器都符合：**1em** = **16px**      
如需调整，则声明 **font-size**:**75%**(任值)   
浏览器默认值就会变成 **16px** × **75%** = **12px**    
此时：**1em** = **12px**
::: 


### px 与 rem 的选择？
- 对于只需要适配少部分手机设备，且分辨率对页面影响不大的，使用px即可 。
- 对于需要适配各种移动设备，使用rem，例如只需要适配iPhone和iPad等分辨率差别比较挺大的设备。

::: danger 注意
- 字体单位，主要由项目决定，如果用户群都使用最新版的浏览器，则推荐使用rem。
- 如果要考虑兼容性，那就使用px，或者两者同时使用。
::: 
## 字体属性

### 字号
指定字号的大小
```css:no-line-numbers
.any{ font-size:2rem }
```
<p class="fn frem">font-size:2rem</p>
<p class="fn fps">font-size:20%</p>

### 字体系列
指定字的字体，需要客户端已安装相应的字体
```css:no-line-numbers
.any{font-family:"楷体"}
```
<p class="fn ff">font-family:"楷体"</p>

::: tip 
如字体名称有空格，使用双引号包括。
:::

### 字体粗细
指定字体的粗细。
```css:no-line-numbers
.any{ font-weight:bold }
```
<p class="fn fwl">font-weight:lighter</p>
<p class="fn fwn">font-weight:normal</p>
<p class="fn fwb">font-weight:bold</p>
<p class="fn fwbr">font-weight:bolder</p>
<p class="fn fw999">font-weight:900</p>

### 字体样式
指定字体的样式 常规 **`normal`**  斜体 **`italic`**。
```css:no-line-numbers
.any{ font-style:italic }
```
<p class="fn fsi">font-style:italic</p>

### 字体变体
指定字体为小型大写字母 **`small-caps`**
```css:no-line-numbers
.any{ font-variant:small-caps }
```
<p class="fn fvsc">font-variant:small-caps</p>

### 字体属性 简写
```css:no-line-numbers
.any{ font:style variant weight size famliy }
```
<p class="fn fsmp">font:italic small-caps bold 1.2rem 楷体</p>

### 字体属性 极简
```css:no-line-numbers
.any{ font:size famliy }
```
<p class="fn fsbs">font:2rem 楷体</p>

## 文本属性
### 文本颜色
```css:no-line-numbers
.any{ color:#3eaf7c }
```
<p class="fn cr fwb">color:#3eaf7c</p>

### 水平对齐
默认居左 **`left`** | 居中 **`center`** | 居右 **`right`** | 两端对齐 **`justify`**
```css:no-line-numbers
.any{ text-align:center }
```
<div class="df1">
<p class="tac ">text-align:center 墨斗</p>
<p class="taj pl pr">text-align:justify木工画直线的工具。 元 李冶-敬斋古今黈-卷八 又闻墨斗谜云：我有一张琴，一弦藏在腹，莫笑墨如鸦，正尽人间曲。王汶石-大木匠-一：窗前有一张木桌，桌上摆着墨斗、曲尺、土白纸。</p>
<p class="tar pr">text-align:right 尾部</p>
</div>

::: tip 关于对齐
**text-align**，让元素内部的 **文本** **行内元素** **行内块**，**水平对齐**。  
:warning: **后代 块级元素** 会继承**text-align**，但没有效果。  
使用 **margin:0 auto** 可以使 **块级元素自身(本身)**，**水平居中对齐**。
:::


### 垂直对齐
文本垂直对齐，由行高实现，行高即定义一行文本的高度，如果行高大于文本字号，那文本默认会在行高范围能垂直居中。
```css:no-line-numbers
.any{ line-height:100px }
```
<div class="df1 df2 tac">未设置行高。</div>
<br>
<div class="df1 df2 tac lht">设置行高与父元素等高</div>

### 文本线
```css:no-line-numbers
.any{ text-decoration:line-through }
```
<p class="fn tdlt">删除线 text-decoration:line-through </p>
<p class="fn tdol">上划线 text-decoration:line-through </p>
<p class="fn tdul">下划线 text-decoration:line-through </p>
<p class="fn"><a class=".tdn" href="http://www.baidu.com">链接:百度 text-decoration:none</a></p>


### 首行缩进
```css:no-line-numbers
.any{ text-indent:40px }
```
<div class="df1">
<p class="taj pl pr tint">木工画直线的工具。 元 李冶-敬斋古今黈-卷八 又闻墨斗谜云：我有一张琴，一弦藏在腹，莫笑墨如鸦，正尽人间曲。王汶石-大木匠-一：窗前有一张木桌，桌上摆着墨斗、曲尺、土白纸。木工画直线的工具。 元 李冶-敬斋古今黈-卷八 又闻墨斗谜云：我有一张琴，一弦藏在腹，莫笑墨如鸦，正尽人间曲。王汶石-大木匠-一：窗前有一张木桌，桌上摆着墨斗、曲尺、土白纸。</p>
<p class="taj pl pr tint">木工画直线的工具。 元 李冶-敬斋古今黈-卷八 又闻墨斗谜云：我有一张琴，一弦藏在腹，莫笑墨如鸦，正尽人间曲。王汶石-大木匠-一：窗前有一张木桌，桌上摆着墨斗、曲尺、土白纸。木工画直线的工具。 元 李冶-敬斋古今黈-卷八 又闻墨斗谜云：我有一张琴，一弦藏在腹，莫笑墨如鸦，正尽人间曲。王汶石-大木匠-一：窗前有一张木桌，桌上摆着墨斗、曲尺、土白纸。</p>
</div>

### 文本阴影

| 值名称   | 解释       |
| :------- | :--------- |
| h-shadow | 水平偏移量 |
| v-shadow | 垂直偏移量 |
| blur     | 模糊距离   |
| color    | 颜色       |

```css:no-line-numbers
.any{ text-shadow:1px 1px 3px #3eaf7c }
```
<div class="df1 df2 tac lht tsdw">设置行高与父元素等高</div>