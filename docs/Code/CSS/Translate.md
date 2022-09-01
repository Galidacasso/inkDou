<style scoped>
.parent{
  display:flex;
}
.d-item {
  width: 150px;
  height: 150px;

  background-color: #42b98347;
  color: #3eaf7c;
  border: 1px solid #3eaf7c;
  text-align:center;
  line-height:130px;
}
.dx:hover{
  transform: translate(40px)
}
.dy:hover{
  transform: translatey(40px)
}
.dxy:hover{
  transform: translate(40px,-40px)
}
.font-s{
  font-size:.4rem;
}

.sxyl:hover {transform:scale(1.5);}
.sxym:hover {transform:scale(0.5);}
.sxl:hover {transform:scaleX(2);}
.syl:hover {transform:scaleY(2);}
.sxyl1:hover {transform:scale(-0.8,2);}

.rts:hover {transform:rotate(45deg);}
.rtn:hover {transform:rotate(-45deg);}
.rtrl:hover {
  transform-origin:right bottom;
  transform:rotate(45deg);
  }

.skx:hover {transform:skewX(45deg);}
.sky:hover {transform:skewY(45deg);}
.skxy:hover {transform:skew(30deg,15deg);}

.pt{perspective : 500px}
.r3dx:hover{ transform:rotateX(45deg) }
.r3dy:hover{ transform:rotateY(45deg) }
.r3dz:hover{ transform:rotateZ(45deg) }
.r3dxyz:hover{ transform:rotate3D(1,1,1,45deg) }
</style>

# 转换 <Badge type="warning" text="重要" />
转换是通过css改变元素在页面中的`位置`、`大小`、`角度`以及`形状`。
- 2D转换，只在x轴和y轴发生变化。
- 3D转换，除了x轴和y轴，增加了z轴的变化。

## 转换属性
`transform` 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行位移、缩放、旋转或倾斜。
- 默认值 `none`，不转换。
- `transform-function` 转换函数。

```css:no-line-numbers
.item{ transform: translate(100px, 100px) scale(1.5)  rotate(45deg) skewX(15deg)}
```

:::tip transform-function取值
transform:中可以取1个或者多个转换函数，例如translate()，scale()....
多个转换函数之间，用`空格`分开，如函数支持多个参数，参数用`逗号`隔开
:::



## 2D转换
在x轴和y轴发生变化的转换，含4个转换函数：位移、缩放、旋转、倾斜。

### 位移
`translate` 改变元素的位置。
|               写法               |            说明            |     备注      |
| :------------------------------: | :------------------------: | :-----------: |
|          `translate(x)`          |   元素在x轴上的位移距离    | `+`→  \| `-`← |
| `translateX(x)`或`translatex(x)` |   元素在x轴上的位移距离    |               |
| `translateY(y)`或`translatey(y)` |   元素在y轴上的位移距离    | `+`↓  \| `-`↑ |
|         `translate(x,y)`         | 元素在x轴及y轴上的位移距离 |               |

**鼠标悬停查看效果**
<div class="parent">
<div class=" d-item dx font-s">translate(100px)</div>&nbsp;&nbsp;
<div class=" d-item dy font-s">translatey(100px)</div>&nbsp;&nbsp;
<div class=" d-item dxy font-s">translate(100px,-100px)</div>
</div>

### 缩放
`scale` 改变元素的大小。
|      写法      |             说明             |          参数取值          |
| :------------: | :--------------------------: | :------------------------: |
| `scale(value)` | 同时设置x轴、y轴的缩放的倍数 |       value > 1 放大       |
|  `scaleX(x)`   |      单独设置x轴的倍数       |     0 < value < 1 缩小     |
|  `scaleY(y)`   |      单独设置y轴的倍数       | -1 < value < 0  反转并缩小 |
|  `scale(x,y)`  |       分别设置x轴和y轴       |  value < -1   反转并放大   |

**鼠标悬停查看效果**
<div class="parent">
<div class=" d-item sxyl font-s">scale(1.5)</div>&nbsp;&nbsp;
<div class=" d-item sxym font-s">scale(0.5)</div>&nbsp;&nbsp;
<div class=" d-item sxl font-s">scaleX(2)</div>&nbsp;&nbsp;
<div class=" d-item syl font-s">scaleY(2)</div>&nbsp;&nbsp;
<div class=" d-item sxyl1 font-s">scale(-0.7,2)</div>&nbsp;&nbsp;
</div>

### 旋转
`rotate` 改变元素的角度。  
- 使用`deg`作为单位，`+`为顺时针，`-`为逆时针
- 默认旋转原点为元素的中心
  - 使用`transform-origin`设置旋转原点，取值：
    - `px` `%`
    - `x`:`left`/`center`/`right`  
    - `y`:`top`/`center`/`bottom`

**鼠标悬停查看效果**
<div class="parent">
<div class=" d-item rts font-s">rotate(45deg)</div>&nbsp;&nbsp;
<div class=" d-item rtn font-s">rotate(-45deg)</div>&nbsp;&nbsp;
<div class=" d-item rtrl font-s">设右下为中心</div>&nbsp;&nbsp;
</div>

### 倾斜
`skew` 使元素向某轴倾斜。
|          写法           |          说明           |       参数取值        |
| :---------------------: | :---------------------: | :-------------------: |
| `skew(deg)` `skew(deg)` | 让元素的y轴向着x轴倾斜  | `+` 逆时针 `-` 顺时针 |
|      `skewY(deg)`       | 让元素的x轴向着y轴倾斜  | `+` 顺时针 `-` 逆时针 |
|    `skew(xdeg,ydeg)`    | 同时设置元素x,y轴的倾斜 | `+` 顺时针 `-` 逆时针 |

**鼠标悬停查看效果**
<div class="parent">
<div class=" d-item skx font-s">skewX(45deg)</div>&nbsp;&nbsp;
<div class=" d-item sky font-s">skewY(45deg)</div>&nbsp;&nbsp;
<div class=" d-item skxy font-s">skew(30deg,15deg)</div>&nbsp;&nbsp;
</div>

## 3D转换
除了x轴和y轴，增加了z轴的变化。z轴模拟了人眼到3D转换元素之间的距离，距离不同，效果不同。  
`perspective` 透视距离，此属性要加载到3D转换元素的父元素上
```css:no-line-numbers
.parent{ perspective : 150px }
```

### 3D旋转
`rotateX` `rotateY` `rotateZ` 使元素以某轴为中心轴旋转。单位是deg。
|         写法          |           说明           |          效果参考          |
| :-------------------: | :----------------------: | :------------------------: |
|    `rotateX(deg)`     | 以x轴为中心轴，旋转n deg |    烤羊腿，老式爆米花机    |
|    `rotateY(deg)`     | 以y轴为中心轴，旋转n deg |  旋转门，钢管舞，挂炉烤鸭  |
|    `rotateZ(deg)`     | 以z轴为中心轴，旋转n deg | 电风扇，滚筒洗衣机，摩天轮 |
| `rotate3D(x,y,z,deg)` |         合并设置         |             --             |

:::tip rotate3D 取值
`x,y,z`  取值 =0 ，不参与旋转&nbsp;&nbsp;|&nbsp;&nbsp;取值 >0 ，参与旋转  
`deg`  取值越大，在当前轴转的越快
:::

**鼠标悬停查看效果**
<div class="pt parent ">
<div class=" d-item r3dx font-s">rotateX(45deg)</div>&nbsp;&nbsp;
<div class=" d-item r3dy font-s">rotateY(45deg)</div>&nbsp;&nbsp;
<div class=" d-item r3dz font-s">rotateZ(45deg)</div>&nbsp;&nbsp;
<div class=" d-item r3dxyz font-s">rotate3D(1,1,1,45deg)</div>&nbsp;&nbsp;
</div>