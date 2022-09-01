<style scoped>
.d1{ 
  width:100%;
  height:150px;
  background-color:#3eaf7c;
  }
.d2{ 
  width:400px;
  height:200px;
  background-color:#3eaf7c;
}
.d3{
  width:500px;
}
.d4{
  width:830px;
}
.d5{
  width:40%;
  height:50px;
  background-color:#42b98347;
  margin-right:10px;
}
.d6{
  width:100%;
  display:flex;
}
.d7{
  width:50px;
  height:50px;
  background-color:#42b98347;
  margin-right:10px
}
.imgbr{ 
  border-radius:5px;
}
.imgr{ margin-right:10px}
.imgr.imgbr:hover,.imgbr:hover{
  outline:2px solid #3eaf7c;
}
.ofs{ overflow:scroll}
.ofa{ overflow:auto}
.ofh{ overflow:hidden}
.ofx{ overflow-x:auto}

.bd{border:1px solid #3eaf7c}
.bdt{border-top:1px solid #3eaf7c}
.bdl{border-left:1px solid #3eaf7c}
.bdb{border-bottom:1px solid #3eaf7c}
.bdr{border-right:1px solid #3eaf7c}

.brap{border-radius: 10px}
.brab{border-radius: 50%}
.brar{ 
  border-top-right-radius: 10px ;
  border-bottom-right-radius: 10px ;
}
.bral{ 
  border-top-left-radius: 50% ;
  border-bottom-left-radius: 50% ;
}
.brat{ border-top-left-radius: 50% ;}
.brab1{ border-bottom-right-radius: 10px ;}

.bs{box-shadow:0 0  6px 1px #3eaf7c; }
.bsi{box-shadow:0 0  6px 1px #3eaf7c inset; }

.outl{outline:3px solid #4e6e8e4d;}
</style>


# 尺寸和边框
## 尺寸
通过尺寸的声明，改变元素在页面上的宽、高。  
- 以 绝对值 取值 **`px`**
- 以 相对值 取值 **`%`** （相对于父元素）

```css:no-line-numbers
.any{ 
  width:100%;
  height:150px
  }
```
- 宽度与父元素等宽(100%)，高度为150px
<div class="d1"></div>

::: warning 注意
- 父元素有固定高度时，height可以设置相对值 %
- 如果父元素是body，height相对值失效，宽度可以设置相对值
:::

### max & min 尺寸
限定元素的最大及最小尺寸。
| 值名称     | 解释     |
| :--------- | :------- |
| max-width  | 最大宽度 |
| max-height | 最大高度 |
| min-width  | 最小宽度 |
| min-heigth | 最小高度 |

::: tip 关于图片
- 给图片设置 max-width:100%，是指图片的原始尺寸。
- 图片可以缩放，但不会超过原始大小。
:::

### 允许设置尺寸的元素

| 元素类型 | 标签                                             | 设置效果     | 默认宽高                                                        |
| :------: | :----------------------------------------------- | :----------- | :-------------------------------------------------------------- |
| 块级元素 | div p form table<br> ul lo li <br>h1-h6  dl dt   | 可以设置宽高 | 默认宽：父元素宽度100% <br> 默认高：靠内容撑开，无内容，高度为0 |
| 行内元素 | a img span b <br>strong input <br>select section | 设置宽高无效 | 默认宽/高，都是被内容撑开，<br>没有内容，就没有宽高             |
|  行内块  | img  input  td                                   | 可以设置宽高 | 浏览器自动设置宽/高，<br>浏览器不同设置的宽高也不同             |

::: tip 特殊情况
自带宽高属性的元素，可以设置样式宽高，例如：\<img>  \<table>\</table>
:::

### 溢出处理
当内容较大，元素区域较小，就会发生溢出效果。
```css:no-line-numbers
.any{overflow:visible|hidden|scroll|auto}
```

| 值名称        | 效果                                         |
| :------------ | :------------------------------------------- |
| visible(默认) | 溢出部分可见                                 |
| hidden        | 溢出部分不可见                               |
| scroll        | 添加滚动条                                   |
| auto          | 溢出的方向，有滚动条，不溢出的方向没有滚动条 |


- 溢出部分不可见 
<div class="d2 ofh"><img src="/images/CSS3.png"></div>

- 添加滚动条
<div class="d2 ofs"><img src="/images/CSS3.png"></div>

- 溢出方向添加滚动条
<div class="d2 ofa"><img src="/images/CSS3.png"></div>

### 设置单向溢出
```css:no-line-numbers
.any{overflow-x: visible|hidden|scroll|auto}
```
```css:no-line-numbers
.any{overflow-y: visible|hidden|scroll|auto}
```
<div class="d3 ofx">
  <div class="d4">
    <img class="imgbr imgr" src="/images/CSS/1.png">
    <img class="imgbr imgr" src="/images/CSS/2.png">
    <img class="imgbr imgr" src="/images/CSS/3.png">
    <img class="imgbr " src="/images/CSS/4.png">
  </div>
</div>


## 边框
设置元素四边边框。
```css:no-line-numbers
.any{border: width style color}
```
<div class="d5 bd"></div>

<table>
    <tr>
        <td colspan="2">值名称</td>
        <td>解释</td>
    </tr>
    <tr>
        <td colspan="2">width</td>
        <td>边框宽度</td>
    </tr>
    <tr>
        <td rowspan="4">style</td>
        <td>solid</td>
        <td>实线</td>
    </tr>
    <tr>
        <td>dotted</td>
        <td>点虚线</td>
    </tr>
    <tr>
        <td>dashed</td>
        <td>短线虚线</td>
    </tr>
    <tr>
        <td>double</td>
        <td>双实线</td>
    </tr>
    <tr>
        <td colspan="2">color</td>
        <td>颜色，支持transparent</td>
    </tr>
</table>



::: tip
border:0/none 清除4个方向的边框
:::

### 单边边框
```css:no-line-numbers
.any{
  border-top: 1px solid #3eaf7c;
  border-right: 1px solid #3eaf7c;
  border-bottom: 1px solid #3eaf7c;
  border-left: 1px solid #3eaf7c;
  }

```
<div class="d6">
<div class="d7 bdt"></div>
<div class="d7 bdr"></div>
<div class="d7 bdb"></div>
<div class="d7 bdl"></div>
</div>

### 圆角
```css:no-line-numbers
.any{border-radius: 10px|50%}
```
以相对值 **`px`** 取值，最大 **`边长/2`** ，结果为圆或者椭圆。  
以相对值 **`%`** 取值，最大 **`50%`** ，结果为圆或者椭圆。
<div class="d6">
<div class="d5 brap"></div>
<div class="d5 brab"></div>
</div>

### 单边圆角
```css:no-line-numbers
.any{
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  }
```
<div class="d6">
<div class="d7 brar"></div>
<div class="d7 bral"></div>
<div class="d7 brat"></div>
<div class="d7 brab1"></div>
</div>

### 边框阴影
```css:no-line-numbers
.any{ box-shadow:h-shadow v-shadow blur spread color inset; }
```
| 值名称   | 解释       |
| :------- | :--------- |
| h-shadow | 水平偏移量 |
| v-shadow | 垂直偏移量 |
| blur     | 模糊距离   |
| spread   | 阴影大小   |
| color    | 颜色       |
| inset    | 内阴影     |

<div class="d6">
<div class="d7 bd bs"></div>
<div class="d7 bd bsi"></div>
</div>

### 轮廓
绘制在边框外的线，不占页面空间。  
轮廓没有单边的定义。  
可以使用 **`solid`** **`dotted`** **`dashed`** **`double`** 样式

```css:no-line-numbers
.any{ outline:3px solid #4e6e8e4d; }
```

<div class="d5 bd outl"></div>