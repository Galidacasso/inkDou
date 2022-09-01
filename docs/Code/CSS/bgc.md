<style scoped>
.d{
    width:300px;
    height:150px;
    background-color:#3eaf7c;
    border-radius: 10px;
}
.g{
    background-image:url(/images/CSS350.png);
}
.bgi{
    background-image:url(/images/CSS3.png);
}
.ir{
    background-repeat:repeat;
}
.inr{
    background-repeat:no-repeat;
}
.ix{
    background-repeat:repeat-x;
}
.iy{
    background-repeat:repeat-y;
}
.px{
    background-position:50px;
}
.pxp{
    background-position:50%;
}

.pxy{
    background-position:-10px 20px;
}

.pxyp{
    background-position:-10% 20%;
}

.pxyi{
    background-position:right bottom;
}

.zx{
    background-size:75px;
}

.zxp{
    background-size:75%;
}

.zxy{
    background-size:75px 25px;
}

.zxyp{
    background-size:75% 25%;
}

.zc{
    background-size:cover;
}

.zct{
    background-size:contain;
}

.ac{
    background-attachment:scroll;
}

.acf{
    background-attachment:fixed;
}

.spl{
    width:300px;
    height:150px;
    background:#3eaf7c  url(/images/CSS350.png)  scroll 75px;
}
</style>
# 背景
## 背景颜色
```css:no-line-numbers
background-color:#faa;
```
<div class="d">
width:300px;<br>
height:150px;<br> 
background-color:#3eaf7c;
</div>

## 背景图片
```css:no-line-numbers
background-image:url(nn.png);
```
<div class="d bgi">
width:300px;<br>
height:150px; <br>
background-image:url(/images/CSS3.png);
</div>

::: tip
在`url()`中，`单引号`，`双引号`，`不加引号`都正确
:::

### 平铺
```css:no-line-numbers
background-image:url(/images/CSS3.png);
background-repeat:repeat;
```
|   取值    |     效果     |
| :-------: | :----------: |
|  repeat   |  默认缺省值  |
| no-repeat |    无平铺    |
| repeat-x  | 水平方向平铺 |
| repeat-y  | 垂直方向平铺 |

- repeat 
<div class="d g ir">
</div>

- no-repeat 
<div class="d g inr">
</div>

- repeat-x 
<div class="d g ix">
</div>

- repeat-y 
<div class="d g iy">
</div>

### 定位
```css:no-line-numbers
background-image:url(/images/CSS350.png);
background-position:50px;
```
|   取值    | 效果                                       |
| :-------: | :----------------------------------------- |
| 单值 px % | 控制x轴的位置，y轴默认垂直居中             |
| 双值 px % | 值1设置的x轴，值2设置y轴(可以取正负值)     |
|  关键字   | x:left/center/right<br>y:top/center/bottom |

- 单值:50px
<div class="d g inr px">
</div>

- 单值:50%
<div class="d g inr pxp">
</div>

- 双值:-10px 20px
<div class="d g inr pxy">
</div>

- 双值:-10% 20%
<div class="d g inr pxyp">
</div>

- 关键字:right bottom
<div class="d g inr pxyi">
</div>


### 尺寸
```css:no-line-numbers
background-image:url(/images/CSS350.png);
background-size:50px;
```
|   取值    | 效果                                                                   |
| :-------: | :--------------------------------------------------------------------- |
| 单值 px % | 同时设置x轴和y轴                                                       |
| 双值 px % | x,y                                                                    |
|   cover   | 填充，覆盖，让图片充满整个容器，保证容器全部被填充上，图片有可能示不全 |
|  contain  | 包含，让容器包含一张完整的图片，保证图片是完全显示的，可能会出现白区域 |

- 单值:75px
<div class="d g inr zx">
</div>

- 单值:75%
<div class="d g inr zxp">
</div>

- 双值:75px 25px
<div class="d g inr zxy">
</div>

- 双值:75% 25%
<div class="d g inr zxyp">
</div>

- cover
<div class="d g inr zc">
</div>

- contain
<div class="d g inr zct">
</div>

### 固定
```css:no-line-numbers
background-image:url(/images/CSS350.png);
background-attachment:scroll;
```
|  取值  | 效果                                                                      |
| :----: | :------------------------------------------------------------------------ |
| scroll | 默认缺省值，背景图会随着窗口的滚动条而滚动                                |
| fixed  | 背景固定在body的某一个位置，不随着页面滚动条滚动,但只会在原容器中才能显示 |

- scroll :x: vuepress 无法展示效果
<div class="d bgi ir px ac">
</div>

- fixed :x: vuepress 无法展示效果
<div class="d bgi ir px ac">
</div>

::: tip
background-attachment会改变background-position的效果，是相对于body去定位的。
:::
### 简写
```css:no-line-numbers
background:color  image  repeat  attachment  position;
background:#3eaf7c  url(/images/CSS350.png)  scroll 75px;
```
<div class="spl">
</div>

::: danger 注意
简写方式中，没有background-size。  
不要用简写方式去重写样式，会将之前定义的样式清除。
::: 


::: tip 最简方式
background:color;  
background:image; 
::: 
