# HTML5基础
Hyper Text Markup Language超文本标记语言，即html，是创建网页的标准标记语言。  
HTML依赖浏览器运行，不同的浏览器解析显示页面的效果也不同。  
HTML标准制定者 [www.w3.org](https://www.w3.org)   
### HTML的注释
使用`<!--`内容`-->` 包裹要注释的内容
```html
<!-- 文档类型声明  给浏览器看的 -->
<!DOCTYPE html>
<!-- html网页的根元素  属性="属性值"  lang语言属性 浏览器翻译语言 -->
<html lang="en">
<!-- 网页的头部 -->
<!-- HTML注释 被注释的内容不会在页面中显示 -->

<head>
    <!-- meta 网页的元数据,给搜索引擎看的 -->
    <!-- 网页编码 -->
    <meta charset="UTF-8">
    <!-- 浏览器的兼容 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 声明的视口 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 网站的标题 -->
    <title>这是我的网页</title>
</head>
<!-- 网站身体,网站上显示所有的内容都需要写在里边 -->
<body>
    Hello World
</body>

</html>
``` 

::: details 输出
<!-- 文档类型声明  给浏览器看的 -->
<!DOCTYPE html>
<!-- html网页的根元素  属性="属性值"  lang语言属性 浏览器翻译语言 -->
<html lang="en">
<!-- 网页的头部 -->
<!-- HTML注释 被注释的内容不会在页面中显示 -->

<head>
    <!-- meta 网页的元数据,给搜索引擎看的 -->
    <!-- 网页编码 -->
    <meta charset="UTF-8">
    <!-- 浏览器的兼容 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 声明的视口 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 网站的标题 -->
    <title>这是我的网页</title>
</head>
<!-- 网站身体,网站上显示所有的内容都需要写在里边 -->
<body>
    Hello World
</body>

</html>
:::
## 标记
HTML用来描述功能的符号叫标记(标签),有单双之分。
- 在使用过程中,需要一对尖括号括起来<> 
- 双标记是成双成对出现的
- 标记与标记之间可以互相嵌套

### 标题标签
**h1** **h2** ... **h6**  
|   标题   | 内容                          |
| :------: | :---------------------------- |
|   作用   | 用醒目的方式显示标题          |
| 默认效果 | 居左 加粗 独占一行            |
| 可选属性 | **`algin`** left/right/center |
```html
    <h1>h1</h1>
    <h2 align="center">h2 居中</h2>
    <h3 align="right">h3 右对齐</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <h6>h6</h6>
```
::: details 输出
<h1>h1</h1>
<h2 align="center">h2 居中</h2>
<h3 align="right">h3 右对齐</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
:::

### 段落标签
**p**  
|   标题   | 内容                                                             |
| :------: | :--------------------------------------------------------------- |
|   作用   | 结构化文本的一种方式，分割上下文内容                             |
| 默认效果 | 20px 黑色 有上下外边距                                           |
| 可选属性 | **`algin`** left/right/center **`size`** **`width`** **`color`** |

```html
<p>p 段落标签</p>
<p align="center">p 段落标签</p>
<p align="right">p 段落标签</p>
<p>p<br>段落标签</p>
```
::: details 输出
<p>p 段落标签</p>
<p align="center">p 段落标签</p>
<p align="right">p 段落标签</p>
<p>p<br>段落标签</p>
:::

### 分割线
**hr**
|   标题   | 内容                                                             |
| :------: | :--------------------------------------------------------------- |
|   作用   | 创建一条水平线,分割上下文内容                                    |
| 默认效果 | 1px大小 黑色 全尺寸100%                                          |
| 可选属性 | **`algin`** left/right/center **`size`** **`width`** **`color`** |
```html
望明月,新悲凉,千古恨,轮回尝
<hr size="15" color="blue" align="right" width="100px">
故国空余恨,旧王泪无痕
<hr size="10"  color="red" align="center" width="300px">
君戈空指日,妾发乱垂云
```
::: details 输出
望明月,新悲凉,千古恨,轮回尝
<hr size="15" color="blue" align="right" width="100px">
故国空余恨,旧王泪无痕
<hr size="10"  color="red" align="center" width="300px">
君戈空指日,妾发乱垂云
<hr>
:::

#### 练习：个人简历
个人简历用最大标题显示 居中  
小标题使用中等标题  
内容使用段落划分  
小标题之间需要用分割线分割, 长度800 高度5 居左 颜色任意
```html
<h1 align="center">个人简历</h1>
<h3>基本信息</h3>
<p>姓名: 申哥</p>
<p>年龄: 18</p>
<hr color="red" width="800px" size="5" align="left">
<h3>教育经历</h3>
<p>小学: 清华附小</p>
<p>中学: 清华附中</p>
<p>大学: 耶鲁大学</p>
<hr color="yellow" width="800px" size="5" align="left">
<h3>专业技能</h3>
<p>精通 rm -rf/* 从删库到跑路</p>
<p>精通 各种操作系统开关机</p>
```
::: details 输出
<h1 align="center">个人简历</h1>
<h3>基本信息</h3>
<p>姓名: 申哥</p>
<p>年龄: 18</p>
<hr color="red" width="800px" size="5" align="left">
<h3>教育经历</h3>
<p>小学: 清华附小</p>
<p>中学: 清华附中</p>
<p>大学: 耶鲁大学</p>
<hr color="yellow" width="800px" size="5" align="left">
<h3>专业技能</h3>
<p>精通 rm -rf/* 从删库到跑路</p>
<p>精通 各种操作系统开关机</p>
:::

### 样式标签(较多) 
| 标签  |  别名  |  作用  |
| :---: | :----: | :----: |
|   b   | strong |  加粗  |
|   i   |   em   |  倾斜  |
|   u   |   --   | 下划线 |
|   s   |  del   | 删除线 |
|  br   |   --   |  换行  |
|  sup  |   --   |  上标  |
|  sub  |   --   |  下标  |

```html
<!-- 加粗 -->
<b>加粗</b>
<!-- 表示文本很重要 -->
<strong>加粗</strong>
<!-- 倾斜 -->
<i>倾斜</i>
<em>倾斜</em>
<!-- 下划线 -->
<u>下划线</u>
<!-- 删除线 -->
<s>删除线</s>
<del>删除线</del>
<br>
<b>
    我们是<i>WEBVN</i><s>2201</s>
    <i>
        <u>2202</u>
    </i>
</b>
<br>
<!-- 上标 -->
2<sup>3</sup>
<!-- 下标 -->
log<sub>n</sub>
<!-- 碳的充分燃烧 -->
C +O <sub>2</sub> = CO<sub>2</sub>
```
::: details 输出
<b>加粗</b>
<strong>加粗</strong>

<i>倾斜</i>
<em>倾斜</em>

<u>下划线</u>

<s>删除线</s>
<del>删除线</del>


<b>
    我们是<i>WEBVN</i><s>2201</s>
    <i>
        <u>2202</u>
    </i>
</b>


2<sup>3</sup>
log<sub>n</sub>
C +O <sub>2</sub> = CO<sub>2</sub>
:::

### 字符实体(较多)
|  标签   |     作用     |  效果  |
| :-----: | :----------: | :----: |
| \&nbsp; | 不间断的空格 |        |
|  \&gt;  |     大于     |  &gt;  |
|  \&lt;  |     小于     |  &lt;  |
| \&yen;  |    人民币    | &yen;  |
| \&copy; |     版权     | &copy; |
| \&reg;  |     商标     | &reg;  |
| \&#190; |    3/4数     | &#190; |
| \&#248; | 字母o带斜杠  | &#248; |