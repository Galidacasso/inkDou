# css3的概述
![CSS3](/images/CSS3.png)
## 什么是css
**C**ascading **S**tyle **S**heets  
层叠样式表，级联样式表，简称样式表

## css的作用
修饰html元素，让页面更美观

## HTML和css的关系
html：负责网页的搭建，内容的展示  
css：负责修饰，美化页面

## css和html属性的使用原则
css：提升了代码重用性，提升了可维护性  
W3C建议我们尽量使用css的方式，去取代HTML属性

::: tip
css并没有把可维护性提升到极致
:::

## css语法规范
color:red;                  文本颜色  
background-color: yellow;   背景颜色  
font-size:16px;             文本字号  

## 使用方法
### 内联样式
内联样式，又称**行内样式**。  
在元素的style属性中，定义样式。
```html:no-line-numbers
<any style="样式声明1;样式声明2;"></any>
```
`样式声明`即 `样式属性`:`样式值`;  


### 内部样式
在当前页面的head标签中，编写`<style> </style>`
```html:no-line-numbers
<style>
    any{
        样式声明1;
        样式声明2
    }
</style>
```
`选择器`{`样式声明1`；`样式声明2`...........}  
内部样式在当前页面内可以反复重用，不能跨页面使用

### 外部样式
在外部单独创建一个css文件，\*.css  
在html中的head中，使用 link 引入\*.css  
```html:no-line-numbers
<link rel="stylesheet" href="*.css">
```
外部样式可以实现在多个页面中重复使用。

::: tip
在项目开发中，基于代码的重用性，多使用外部样式。  
内部样式、行内样式多用于测试和学习。
:::


