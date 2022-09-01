<style scoped>
.div_con{
  width:500px;
  display:flex;
}

.div_conc{
  width:300px;
  display:flex;
}

.div_concc{
  width:300px;
  height:100px;
  display:flex;
}

.div_conccc{
  width:100%;
  display:flex;
}

.div_concccc{
  width:100%;
  height:100px;
  display:flex;
}

.div_project{
  width:50px;
  height:50px;
}

.div_project1{
  width:80px;

}
.div_project2{
  width:60px;

}

.div_project3{
    width:70px;
}

.div_project4{
    width:100%;
}

.font-s{
  font-size: 10px;
  line-height: 50px;
  text-align: center;
}

.font-s3{
  font-size: 10px;
  text-align: center;
}

.font-s2{
  font-size: 10px;
  line-height: 100px;
  text-align: center;
}


.bg-simple{background-color:#42b98347;}
.color-vuepress{color:#3eaf7c}
.border-simple{border:1px solid #3eaf7c}

.fdr{flex-direction:row;}
.fdrr{flex-direction:row-reverse;}
.fdc{flex-direction:column;}
.fdcr{flex-direction:column-reverse;}

.fwn{flex-wrap:wrap}
.fwr{flex-wrap:wrap-reverse}

.jc{justify-content:center}
.je{justify-content:flex-end}
.jb{justify-content:space-between}
.ja{justify-content:space-around}
.jee{justify-content:space-evenly}
.jcc{justify-content:flex-start}

.aifs{align-items:flex-start}
.aife{align-items:flex-end}
.aic{align-items:center}
.aib{align-items:baseline}
.ais{align-items:stretch}

.od1{order:1}
.od2{order:2}
.od3{order:3}

.fg1{flex-grow: 1;}
.fg2{flex-grow: 2}
.fg3{flex-grow: 3}

.fs1{flex-shrink: 3;}
.fs2{flex-shrink: 2;}
.fs3{flex-shrink: 2;}

.fb1{flex-basis: 30%;}
.fb2{flex-basis: 20%;}
.fb3{flex-basis: 40%;}

.asfs{align-self: flex-start;}
.asfe{align-self: flex-end;}
.asc{align-self: center;}
.asb{align-self: baseline;}
.ass{align-self: stretch;}
.asa{align-self: auto;}


</style>

# 弹性布局 <Badge type="warning" text="重要" />
弹性布局，是一种布局方式，可以统一的控制子元素的 **`显示方向`** 和 **`显示效果`**，使css布局具有了非常强大的灵活性。

## 概念
### 容器 & 项目
**容器**
- 将子元素按照弹性布局的方式展示的父元素，称为容器。   
- 在容器上添加`display:flex`，即可使容器内部的元素以弹性布局的方式展示。  
- 容器本身不是弹性布局。
  
**项目**
- 容器内部的元素，称为项目。

### 主轴
项目排列方向的一根轴，叫主轴，按照方向共有4条，分别是：
- 横向：左→右
- 横向：右→左
- 纵向：下→上
- 纵向：上→下  


项目横向排列，主轴即x轴。  
项目纵向排列，主轴即y轴。  
项目在主轴排列顺序，称为主轴起点和终点。

### 交叉轴
与主轴方向垂直的轴，叫做交叉轴。  
项目在交叉轴上的对齐方式，称为交叉轴的起点和终点。  

## 语法
将元素设置成弹性容器之后，他所有的子元素都会变成弹性项目。  
项目按照弹性布局的方式排列。  
`display:flex` 将块级元素设置为容器  
`display:inline-flex` 将行内元素设置为容器

```css:no-line-numbers
/* 设置弹性容器 */
.container{ display:flex / inline-flex }
```

:::tip 弹性布局的特点
- 当元素变为弹性容器，`text-align` `vertical-align` 失效
- 弹性项目，`float` `clear` 失效
:::

## 容器属性
### 主轴方向
`flex-direction` 设置项目的排列方向
|       方向       | 主轴  | 方向  |  备注  |
| :--------------: | :---: | :---: | :----: |
|      `row`       |  x轴  | 左→右 | 默认值 |
|  `row-reverse`   |  x轴  | 右→左 |        |
|     `column`     |  y轴  | 顶→底 |        |
| `column-reverse` |  y轴  | 底→顶 |        |

```css:no-line-numbers
.container{ flex-direction:row / row-reverse / column / column-reverse }
```

**row**
<div class="div_conc bg-simple border-simple">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
</div>


**row-reverse**
<div class="div_conc bg-simple border-simple fdrr">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
</div>

**column**
<div class="div_conc bg-simple border-simple fdc">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
</div>

**column-reverse**
<div class="div_conc bg-simple border-simple fdcr">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
</div>

### 项目换行
`flex-wrap` 设置项目的排列方向
|      名称      | 内容                                             |  备注  |
| :------------: | :----------------------------------------------- | :----: |
|    `nowrap`    | 不换行，压缩                                     | 默认值 |
|     `wrap`     | 换行,项目在交叉轴的起点，换行往终点方向折行      |        |
| `wrap-reverse` | 换行反转，项目在交叉轴的终点，换行往起点方向折行 |        |


```css:no-line-numbers
.container{ flex-wrap:nowrap / wrap / wrap-reverse }
```

**nowrap** 
<div class="div_conc bg-simple border-simple">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
<div class="div_project bg-simple border-simple font-s">itme7</div>
</div>

**wrap** 
<div class="div_conc bg-simple border-simple fwn">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
<div class="div_project bg-simple border-simple font-s">itme7</div>
</div>

**wrap-reverse** 
<div class="div_conc bg-simple border-simple fwr">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
<div class="div_project bg-simple border-simple font-s">itme7</div>
</div>

### flex-flow
`flex-flow` 可同时设置`flex-direction`和`flex-wrap`两个属性，即缩写方法
```css:no-line-numbers
.container{ flex-flow: direction wrap }
```

### 主轴对齐
`justify-content` 设置项目的排列方向
|      名称       | 内容                       |  备注  |
| :-------------: | :------------------------- | :----: |
|  `flex-start`   | 主轴的起点对齐             | 默认值 |
|    `center`     | 主轴的中间                 |        |
|   `flex-end`    | 主轴的终点                 |        |
| `space-between` | 两端对齐                   |        |
| `space-around`  | 两端有空白，左右间距都相同 |        |
| `space-evenly`  | 项目的间距完全相同         |        |

```css:no-line-numbers
.container{ justify-content : flex-start / center / flex-end / space-between... }
```
**flex-start** 
<div class="div_con bg-simple border-simple fdr jcc">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
</div>

**flex-start** 
<div class="div_con bg-simple border-simple fdr jc">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
</div>

**flex-end** 
<div class="div_con bg-simple border-simple fdr je">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
</div>

**space-between** 
<div class="div_con bg-simple border-simple fdr jb">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
</div>

**space-around** 
<div class="div_con bg-simple border-simple fdr ja">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
</div>

**space-evenly** 
<div class="div_con bg-simple border-simple fdr jee">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<div class="div_project bg-simple border-simple font-s">itme4</div>
<div class="div_project bg-simple border-simple font-s">itme5</div>
<div class="div_project bg-simple border-simple font-s">itme6</div>
</div>

### 交叉轴对齐
`align-items` 设置项目的排列方向
|     名称     | 内容                                       |  备注  |
| :----------: | :----------------------------------------- | :----: |
| `flex-start` | 交叉轴起点对齐                             | 默认值 |
|  `flex-end`  | 交叉轴终点对齐                             |        |
|   `center`   | 交叉轴中间                                 |        |
|  `baseline`  | 按照项目内文本的基线，统一对齐             |        |
|  `stretch`   | 项目未定义高度，所有项目充满交叉轴所有空间 |        |

```css:no-line-numbers
.container{ align-items : flex-start / center / flex-end / baseline / stretch... }
```

**flex-start**
<div class="div_concc bg-simple border-simple jcc fwn">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<p class="font-s3">guards just</p>
</div>

**flex-end**
<div class="div_concc bg-simple border-simple fwn jcc aife">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<p class="font-s3">guards just</p>
</div>

**center**
<div class="div_concc bg-simple border-simple fwn jcc aic">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<p class="font-s3">guards just</p>
</div>

**baseline**   ***<font size=1.5>注意观察基线的位置</font>***
<div class="div_concc bg-simple border-simple fwn jcc aib">
<div class="div_project bg-simple border-simple font-s">itme1</div>
<div class="div_project bg-simple border-simple font-s">itme2</div>
<div class="div_project bg-simple border-simple font-s">itme3</div>
<p class="font-s3">guards just</p>
</div>

**stretch**
<div class="div_concc bg-simple border-simple fwn jcc ais">
<div class="div_project1 bg-simple border-simple font-s2">itme1</div>
<div class="div_project2 bg-simple border-simple font-s2">itme2</div>
<div class="div_project3 bg-simple border-simple font-s2">itme3</div>
</div>

## 项目属性
项目属性，设置在项目上，只控制项目自身，不影响容器和其他项目的效果。

### order
`order` 改变项目在主轴上的排列顺序。  
默认值为0，无单位整数，值越小，越靠近主轴的起点。

```css:no-line-numbers
.item{ order:0 }
```

<div class="div_conc bg-simple border-simple">
<div class="div_project od3 bg-simple border-simple font-s3 ">itme1 order:3</div>
<div class="div_project od2 bg-simple border-simple font-s3 ">itme2 order:2</div>
<div class="div_project od1 bg-simple border-simple font-s3 ">itme3 order:1</div>
</div>

### flex-grow
`flex-grow` 如果主轴方向上有剩余空间，项目将按照设置的增长速度变大。  
默认值为0，不变大，无单位的数字设置变大的速度

```css:no-line-numbers
.item{ flex-grow:0 }
```

<div class="div_conccc bg-simple border-simple">
<div class="div_project od1 fg1 bg-simple border-simple font-s3 ">itme1 flex-grow:1</div>
<div class="div_project od2 fg2 bg-simple border-simple font-s3 ">itme2 flex-grow:2</div>
<div class="div_project od3 fg3 bg-simple border-simple font-s3 ">itme3 flex-grow:3</div>
</div>

### flex-shrink
`flex-shrink` 容器空间不足时，项目按照设置的缩小速度变小。  
默认值为0，不变化，无单位的数字设置缩小的速度

```css:no-line-numbers
.item{ flex-shrink:0 }
```

<div class="div_concccc bg-simple border-simple">
<div class="div_project4 od1 fs1 bg-simple border-simple font-s3">itme1 flex-shrink:3</div>
<div class="div_project4 od2 fs2 bg-simple border-simple font-s3">itme2 flex-shrink:2</div>
<div class="div_project4 od3 fs3 bg-simple border-simple font-s3">itme3 flex-shrink:2</div>
</div>

### flex-basis
`flex-basis` 设置每个项目占主轴的空间。  
- 默认值为auto，按照项目已设置的尺寸显示，
- 具体数值，按照当前的数值显示，不再按照项目已设置的尺寸显示。
- % 

```css:no-line-numbers
.item{ flex-basis:20% }
```

<div class="div_concccc bg-simple border-simple">
<div class="div_project4 od1 fb1 bg-simple border-simple font-s3">itme1 flex-basis:30%</div>
<div class="div_project4 od2 fb2 bg-simple border-simple font-s3">itme2 flex-basis:20%</div>
<div class="div_project4 od3 fb3 bg-simple border-simple font-s3">itme3 flex-basis:40%</div>
</div>

### flex
`flex` 是`flex-grow` `flex-shrink` `flex-basis`的简写。  

```css:no-line-numbers
.item{flex:0 1 25%;}
```

### align-self
`align-self` 设置单个项目在交叉轴上的对齐方式 。
|     名称     | 内容                                       | 备注  |
| :----------: | :----------------------------------------- | :---: |
| `flex-start` | 交叉轴起点对齐                             |       |
|  `flex-end`  | 交叉轴终点对齐                             |       |
|   `center`   | 交叉轴中间                                 |       |
|  `baseline`  | 按照项目内文本的基线，统一对齐             |       |
|  `stretch`   | 项目未定义高度，所有项目充满交叉轴所有空间 |       |
|    `auto`    | 使用容器设置的align-items的值              |       |


```css:no-line-numbers
.item{ align-self:20% }
```
