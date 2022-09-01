<style scoped>
.d{
    width:100%;
    height:50px;
    border-radius: 10px;
}
.dr{
    width:200px;
    height:200px;
    border-radius: 10px;
}
.df{
    display:flex;
}
.d1{
    width:40%;
    text-align:right;
}
.d2{
    width:20%;
    text-align:right;
}
.lg{
background-image:linear-gradient(to right,#3eaf7c,#2c3e50)    
}

.lgde{
background-image:linear-gradient(180deg,#3eaf7c,#2c3e50)    
}

.lgp{
background-image:linear-gradient(to right,#3eaf7c 40%,#2c3e50 60%)    
}

.rg{
 background-image: radial-gradient(100px at center center,#3eaf7c, #2c3e50);
}

.rgr{
 background-image: radial-gradient(100px at center center,#3eaf7c 40%, #2c3e50 60%);
}

.rgar{
 background-image: radial-gradient(300px at left top,#3eaf7c, #2c3e50);
}

.rgd1{
 background-image: radial-gradient(#ffffff 0% 30%, #3eaf7c 30% 60%, #2c3e50 60% 100%); 
}

.rlg{
 background-image: repeating-linear-gradient(to right,#2c3e50 0px,#3eaf7c 3px,#2c3e50 6px,#3eaf7c 9px,#2c3e50 12px);
}

.rlgr{
 background-image: repeating-radial-gradient(150px at center center,#2c3e50 6%, #3eaf7c 12%); 
}


</style>
# 渐变
渐变是颜色之间的平缓变化。
渐变种，至少要有2个色标。

## 线性渐变
以直线的方式来填充渐变色  
```css:no-line-numbers
background-image:linear-gradient(方向,色标1,色标2.......);
```

- 向右,由绿至黑渐变  
**`to right`**,**`#3eaf7c`**,**`#2c3e50`**
<div class="d lg"></div>

### 方向
方向可以是`to 关键字`也可以是`角度`。
| 终点      | 角度          |
| :-------- | :------------ |
| to right  | 90deg         |
| to left   | 270deg/-90deg |
| to top    | 0deg          |
| to bottom | 180deg        |

- 180°方向,由绿至黑渐变  
**`180deg`**,**`#3eaf7c`**,**`#2c3e50`**
<div class="d lgde"></div>

### 色标
色标由`颜色`和`位置`组成。  
颜色形式： **`rgb(255,255,255)`**/**`rgba(255,255,255,1.0)`**/**`#fff000`**/**`red`**    
位置形式： **`%`**  / **`px`**  
如不声明位置，则颜色的位置平均分配。

- 向右,由绿至黑渐变，绿从元素宽度40%开始，到60%时渐变至黑   
**`to right`**,**`#3eaf7c`** **`40%`**,**`#2c3e50`** **`60%`**
<div class="d lgp"></div>

<div class="df">
<div class="d1">
↑<br>40%<br>绿色
</div>
<div class="d2">
↑<br>60%<br>黑色
</div>
</div>


## 径向渐变
以圆形的方式来填充渐变色  
```css:no-line-numbers
background-image:radial-gradient(半径 at 圆心，色标1,色标2.........);
```
- 自元素中心，由绿向黑渐变，渐变半径为100px   
**`100px`** at **`center`** **`center`**,**`#3eaf7c`**, **`#2c3e50`**
<div class="dr rg"></div>

### 半径
以px为单位的数字。
- 以元素中心为圆心，半径为100px，由半径40%位置的绿色，径向渐变至半径60%位置的黑色。  
**`100px`** at **`center`** **`center`**,**`#3eaf7c`** **`40%`**, **`#2c3e50`** **`60%`**
<div class="dr rgr"></div>

::: danger 注意
色标声明位置时，是按照半径进行划分的。
:::



### 圆心
圆心的声明可以使用 **`关键字`**、**`px`** 及 **`%`**。  
都是基于元素的x轴和y轴定义的。

- 以元素左上角为圆心，半径为300px，由绿色，径向渐变至黑色。  
**`300px`** at **`left`** **`top`**,**`#3eaf7c`**, **`#2c3e50`**
<div class="dr rgar"></div>

- 效果展示  
**`#ffffff`** **`0%`** **`30%`**, **`#3eaf7c`** **`30%`** **`60%`**, **`#2c3e50`** **`60%`** **`100%`**
<div class="dr rgd1"></div>

## 重复渐变
将线性渐变，径向渐变，反复执行几次。

### 重复的线性渐变
```css:no-line-numbers
background-image: repeating-linear-gradient(方向,色标1,色标2,色标3...);
```
- 效果展示   
**`to right`**,**`#2c3e50 0px`**,**`#3eaf7c 3px`**,**`#2c3e50 6px`**,**`#3eaf7c 9px`**,**`#2c3e50 12px`**
<div class="d rlg"></div>

### 重复的径向渐变
```css:no-line-numbers
background-image: repeating-radial-gradient(半径 at 圆心,色标1,色标2,色标3,...); 
```
- 效果展示   
**`150px`** at **`center`** **`center`**,**`#2c3e50 6%`**, **`#3eaf7c 12%`**
<div class="dr rlgr"></div>

## 浏览器兼容性
低版本浏览器不支持渐变，需要使用 **`css`** **`hack`** 让低版本浏览器可以实现渐变效果。  
即给代码添加前缀，匹配浏览器内核。

| 前缀     | 浏览器内核    |
| :------- | :------------ |
| -moz-    | firefox       |
| -webkit- | chrome/safari |
| -o-      | opera         |
| -ms-     | IE            |

```css:no-line-numbers
.any{
background-image:-webkit-linear-gradient(top,#ff0,#0ff);
background-image:-moz-linear-gradient(top,#ff0,#0ff);
background-image:-o-linear-gradient(top,#ff0,#0ff);
background-image:-ms-linear-gradient(top,#ff0,#0ff);
}
```
::: danger 注意
- 如果添加了内核，方向写 **`起点`**，不能加to。
- 如果不添加内核，方向写 **`终点`**，有to。
:::
