
<style scoped>
.anitem{
  width:200px;
  height: 200px;
  animation: change 3s linear 1s 2 alternate;
  animation-iteration-count:infinite;
  animation-fill-mode: both;
}
.anitem:hover{
    animation-play-state: paused;
}
@keyframes change{
/*关键帧*/
  0%{
      /*动画开始时的样式*/
      border: 1px solid #e7c000;
      background-color: #e7c00060;
      border-radius: 0%;
  }
  100%{
      /*动画结束时的样式*/
      border: 1px solid #3eaf7c;
      background-color:#42b98347;
      border-radius: 50%;
  }
}

.animate_div_animate{
  width: 400px;
  height:100px;
  border: 1px solid #3eaf7c;
  background-color:#42b98347;
  line-height:100px;
  text-align:center
}
.animate_flash{
  animation: flash 3s linear 1s 2 alternate;
}

.animate_bounce{
  animation: bounce 3s linear 1s 2 alternate;
}

.animate_rubberBand{
  animation: rubberBand 3s linear 1s 2 alternate;
}

.animate_last{
  animation-iteration-count:infinite;
  animation-fill-mode: both;
}

</style>

# 动画
`animation` 动画是两个或者两个以上css值，平缓变化的效果。即将多个过渡放到一起的效果。


## 关键帧
动画是有多个帧组成的，需要定义样式的时间点，即为关键帧`keyframes`    

CSS动画的关键帧需要注意：
- 动画执行这一帧的时间点
- 在这个时间点上的样式
- 1个动画中，至少需要2个关键帧

```css:no-line-numbers
@keyframes change{}
```

## 使用步骤
### 定义动画
定义动画，是使用关键帧完成的。
```css:no-line-numbers
@keyframes change{
/*关键帧*/
  0%{
      /*动画开始时的样式*/
      border: 1px solid #e7c000;
      background-color: #e7c00060;
      border-radius: 0%;
  }
  100%{
      /*动画结束时的样式*/
      border: 1px solid #3eaf7c;
      background-color:#42b98347;
      border-radius: 50%;
  }
}
```

### 调用动画
在动画定义完成后，需要在元素上调用动画。  

| 属性                        | 效果                   | 参数                                                                      |
| :-------------------------- | :--------------------- | :------------------------------------------------------------------------ |
| `animation-name`            | 调用的动画名称         | 字符                                                                      |
| `animation-duration`        | 动画的持续时间         | s/ms                                                                      |
| `animation-timing-function` | 动画播放的时间曲线函数 | `ease`<hr/>`linear`<hr/>`steps(n)`<hr/>...                                |
| `animation-delay`           | 动画延迟               | s/ms                                                                      |
| `animation-iteration-count` | 动画播放次数           | 数字<hr/>`infinite` <font size="0.5">(无限)</font>                        |
| `animation-direction`       | 动画播放顺序           | `normal` 正序 0%-100%<hr/>`reverse` 逆序 100%-0%<hr/>`alternate` 轮流播放 |

```css:no-line-numbers
.animation_item{
  animation-name:change;
  animation-duration:2s;
  animation-timing-function:ease;
  animation-delay:1s
}
```
<div class="anitem"></div>

### 简写方法
```css:no-line-numbers
.animation_item{
          /* 动画名   持续        曲线函数      延迟   次数    顺序 */
  animation： name  duration  timing-function  delay  count  direction;
}
```
:::tip 极简方式
```css:no-line-numbers
.animation_item{ animation： name  duration }
```
:::

### 填充状态
`animation-fill-mode` 规定`当动画不播放时`/`当动画完成时`/`当动画有一个延迟未开始播放时`，要应用到元素的样式。  
默认情况下，CSS 动画在第一个关键帧播放完之前不会影响元素，在最后一个关键帧完成后停止影响元素。`animation-fill-mode` 属性可重写该行为。

| 值          | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| `none`      | 默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。 |
| `forwards`  | 动画在结束后，停留在最后一帧                                 |
| `backwards` | 动画在延迟时间内，保持在第一帧                               |
| `both`      | 动画遵循 forwards 和 backwards 的规则，两者都兼顾            |

## 其他
### 动画与过渡的区别
| 过渡                | 动画                                                                   |
| :------------------ | :--------------------------------------------------------------------- |
| 两个css值之间的变化 | 两个或者两个以上css值的变化                                            |
| 必须使用hover激活   | 可以使用hover激活(动画代码写hover)<hr>可以加载激活(动画代码写原样式中) |

### 第三方动画库
在项目中，一些普通的动画，可以使用第三方动画库，提高开发效率。  
[animate](https://animate.style/)

**安装**
```shell:no-line-numbers
npm install animate.css --save
```

**引入项目**
```js:no-line-numbers
import 'animate.css';
```

**引入html**
使用网络包
```html:no-line-numbers
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
```
<br>

**效果展示**
<div class="animate_div_animate animate_flash animate_last">flash</div>
<br>
<div class="animate_div_animate animate_bounce animate_last">bounce</div>
<br>
<div class="animate_div_animate animate_rubberBand animate_last">rubberBand</div>
<br><br>