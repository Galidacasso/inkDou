<style scoped>
.mg1{
    width: 400px;
    height: 400px;
    border:2px dashed #3EAF7C;
    background-color: #ddfff0;
    font-size: 14px;
    text-align: center;
}
.bd1{
    width: 300px;
    height: 300px;
    border:2px solid #3EDAED;
    background-color: #e4fcff;
    position: relative;
    top:36%;
    left:45%;
    transform: translateX(-50%) translateY(-50%);
}
.pd1{
    width: 200px;
    height: 200px;
    border:2px dashed #ED3E9A;
    background-color: #ffeaf5;
    position: relative;
    top:31%;
    left:43%;
    transform: translateX(-50%) translateY(-50%);
}
.ct1{
    width: 100px;
    height: 100px;
    border:2px solid #C37779;
    background-color: #ffe8e9;
    position: relative;
    top:23%;
    left:40%;
    transform: translateX(-50%) translateY(-50%);
}
.mg1>div, .bd1>div, .pd1>div, .ct1>div{
    float: left;
    margin-top: 20px;
    margin-left: 20px;
}
.ct1>p{
    line-height: 70px;
}
.mg1:hover, .bd1:hover, .pd1:hover, .ct1:hover{
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.df{
  width:100%;
  display:flex;
}

.df1{
  width:102px;
  padding:0;
  margin-right:10px;
}
.d1{
  width:80px;
  height:80px;
  background-color:#42b98347;

}
.bd{border:1px solid #3eaf7c}

.mrg{margin:10px}
.mrgr2{margin-right:20px}
.mrgt{
  margin-bottom:0px;
  margin-left:0px;
  margin-right:0px;
  margin-top:10px;
}
.mrgb{
  margin-left:0px;
  margin-right:0px;
  margin-top:0px;  
  margin-bottom:10px;
}
.mrgl{
  margin-right:0px;
  margin-top:0px;  
  margin-bottom:0px; 
  margin-left:10px; 
}
.mrgr{
  margin-top:0px;  
  margin-bottom:0px; 
  margin-left:0px; 
  margin-right:10px;
}


</style>
# 盒模型
又称框模型，定义元素在页面上实际占地空间的计算方式。  

<div class="mg1">
<div>外边距 margin</div>
<div class="bd1">
<div>边框 border</div>
<div class="pd1">
<div>内边距 padding</div>
<div class="ct1">
<p>内容 content</p>
</div>
</div>
</div>
</div>

元素实际占地宽度
- 左外边距+左边框+左内边距+内容宽度+右内边距+右边框+右外边距  

元素实际占地高度
- 上外边距+上边框+上内边距+内容高度+下内边距+下边框+下外边距

## 外边距 margin
元素与元素之间的距离，边框外的空白间距。  
设置元素外边距，有位移效果，把其他带框的元素挤开。  

```css:no-line-numbers
/* 同时设置4个方向的外边距 */
.any{ margin:10px }
/* 单独设置某方向的外边距 */
.any{ 
  margin-top:10px;
  margin-bottom:10px;
  margin-left:10px;
  margin-right:10px;
   }
```
::: details 观察外边距的效果
外层父元素，绿色描边无背景色。   
内部子元素，设置外边距。   

- **`margin`**:**`10px`**
<div class="df1 bd">
<div class="d1 bd mrg"><p>子元素</p></div>
</div>

- **`margin-top`**:**`10px`**
<div class="df1 bd">
<div class="d1 bd mrgt"><p>子元素</p></div>
</div>

- **`margin-right`**:**`10px`**
<div class="df1 bd">
<div class="d1 bd mrgr"><p>子元素</p></div>
</div>

- **`margin-bottom`**:**`10px`**
<div class="df1 bd">
<div class="d1 bd mrgb"><p>子元素</p></div>
</div>

- **`margin-left`**:**`10px`**
<div class="df1 bd">
<div class="d1 bd mrgl"><p>子元素</p></div>
</div>
:::

### 外边距的取值
- **px** 绝对值
- **%**  是父元素宽度的百分比，跟父元素高度没关系。
- **auto**  块级元素在父元素中水平居中，对上下外边距无效
  - 对 **行内元素** 和 **行内块** 无效
  - 对 **设置宽度** 的 **块级元素** 有效

### 外边距的简写
```css:no-line-numbers
/* 1个值 同时设置4个方向的外边距 */
.any{ margin:1; }
/* 2个值 值1-设置上下边距 值2-设置左右边距 */
.any{ margin:1 2; }
/* 3个值 值1-设置上边距 值2-设置左右边距 值3-设置下边距*/
.any{ margin:1 2 3; }
/* 4个值 值1-设置上边距 值2-设置右边距 值3-设置下边距 值4-设置左边距*/
.any{ margin:1 2 3 4; }
```

### 外边距合并
- 两个垂直的外边距相遇时，会发生外边距的合并，最后的值，以大的为准。 
- 解决方案：单独设置一个外边距，在页面设计的直接规避。

### 可设置外边距的元素

| 元素类型 | 标签                                             | 外边距                                                                          |
| :------: | :----------------------------------------------- | :------------------------------------------------------------------------------ |
| 块级元素 | div p form table<br> ul lo li <br>h1-h6  dl dt   | 4个方向外边距都生效                                                             |
| 行内元素 | a img span b <br>strong input <br>select section | 左右外边距生效(并且相加)<br>上下外边距无效                                      |
|  行内块  | img  input  td                                   | 4个方向外边距都生效,改变上下外边距，<br>会使同行其他行内元素/行内块元素一起移动 |

### 自带外边距的元素
**body**,**button**,**dd**,**dl**,**dt**,**fieldset**,**form**,**h1~h6**,**hr**,**input**,**legend**,**li**,**ol**,**p**,**pre**,**td,textarea**,**th**,**ul**   
由于不同浏览器对外边距和内边距的默认初始值不同，导致同样代码，在不同浏览器运行，会产生不同效果。

### 外边距溢出
在特殊的情况下，为子元素设置上外边距，会作用到父元素上！
- 父元素没有上边框
- 子元素内容区域的上边沿和父元素内容区域的上边沿重合

#### 解决方案
- 在第一个元素的位置处，添加一个空的 **`<table></table>`** 此时，浏览器会认为上边沿已分开

#### 其他方案（有弊端）
- 给父元素添加上边框 ，增加了父元素的实际占地高度
- 给父元素添加上内边距 ，增加了父元素的实际占地高度
- 在第一个兄弟位置，添加 **`<br>`**，内部多了一行
- 父元素添加 **`overflow:auto`**，如要溢出显示效果却无法实现

## 内边距 padding
边框到内容区域之间的距离。  
改变内边距，会改变整个元素的占地大小，但是内容区域大小没有变化。   
内边距的颜色，和元素背景色相同。  
 

```css:no-line-numbers
/* 同时设置4个方向的外边距 */
.any{ padding:10px }
/* 单独设置某方向的外边距 */
.any{ 
  padding-top:10px;
  padding-bottom:10px;
  padding-left:10px;
  padding-right:10px;
   }
```

### 内边距的简写
```css:no-line-numbers
/* 1个值 同时设置4个方向的内边距 */
.any{ padding:1; }
/* 2个值 值1-设置上下边距 值2-设置左右边距 */
.any{ padding:1 2; }
/* 3个值 值1-设置上边距 值2-设置左右边距 值3-设置下边距*/
.any{ padding:1 2 3; }
/* 4个值 值1-设置上边距 值2-设置右边距 值3-设置下边距 值4-设置左边距*/
.any{ padding:1 2 3 4; }
```

## 总结
### margin的使用场合
- 块级元素本身需要相对父元素水平居中  **`margin:auto`**;  **`margin:0 auto`**;
- 元素之间，有距离，可以用 **`margin`**
- 元素的位置微调

### padding的使用场合
- 元素之间，有距离，有时可以使用 **`padding`**
- 把元素撑开

## 改变盒模型的计算方式
```css:no-line-numbers
box-sizing:content-box;
```
使用 **`box-sizing`** : **`content-box`** 设置宽高为内容区域的大小。

```css:no-line-numbers
box-sizing:border-box;
```
使用 **`box-sizing`**:**`border-box`** 设置宽高为包含：  
**边框** + **内边距** + **内容区域**的大小。
