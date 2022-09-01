<style scoped>
.parent{ display:flex; }
.dx {
    width: 120px;
    height: 120px;
    text-align: center;
    line-height: 115px;
    background-color: #e7c00060;
    border: 1px solid #e7c000;
    color: #e7c000; 
}
.gd{ transition: all 1s ease-in-out 0s;}
.dx:hover {
    color: #3eaf7c;
    background-color: #42b98347;
    border: 1px solid #3eaf7c;
    border-radius: 50%;
}

.font-s{font-size:.4rem }

.gdt15{
  transition-property : all;
  transition-duration : 1500ms
  }
.gdt3{
  transition-property : all;
  transition-duration : 3s
  }
.gdt0{
  transition-property : all;
  transition-duration : 0.5s
  }
.ttfe{transition-timing-fuction : ease}
.ttfl{transition-timing-fuction : linear}
.ttfei{transition-timing-fuction : ease-in}
.ttfeo{transition-timing-fuction : ease-out}
.ttfeio{transition-timing-fuction : ease-in-out}
.td2s{transition-delay : 2s}


</style>

# 过渡
过渡是让css样式在一段时间内平缓的变化。
<div class="parent">
<div class="dx font-s">无过渡</div>&nbsp;&nbsp;
<div class="dx gd font-s">有过渡</div>
</div>

## 语法
### 过渡属性
通过 `transition-property` 可以设置参与过渡的属性。  
```css:no-line-numbers
.item{ transition-property : color width visibility...}
```
取值 all,代表所有支持过渡的属性，都参与过渡。
```css:no-line-numbers
.item{ transition-property : all;}
```
**可参与过渡的属性**
- 颜色属性
- 可以取值为具体数字( px、%、rem )的属性
- 阴影
- 转换
- visibility <font size="0.5">( 过渡之后隐藏，而不是显示隐藏的过渡效果 ) </font>

### 过渡时长
通过 `transition-duration` 可以设置参与过渡的时长（速度），取值为: `s` / `ms` 。  
```css:no-line-numbers
.item{ transition-duration : 1500ms}
```
<div class="parent">
<div class="dx gdt0 font-s">0.5s</div>&nbsp;&nbsp;
<div class="dx gdt15 font-s">1500ms</div>&nbsp;&nbsp;
<div class="dx gdt3 font-s">3s</div>&nbsp;&nbsp;
</div>

### 过渡曲线
通过 `transition-timing-fuction` 可以设置过渡时间曲线函数。

|  NO.  | 名称        | 内容                             |
| :---: | :---------- | :------------------------------- |
|   1   | ease        | 慢速开始，中间加速，减速结束     |
|   2   | linear      | 匀速                             |
|   3   | ease-in     | 慢慢开始，一直缓慢加速           |
|   4   | ease-out    | 快速的开始，加速，减速结束       |
|   5   | ease-in-out | 慢速开始，中间快速加速，减速结束 |

```css:no-line-numbers
.item{ transition-timing-fuction : ease}
```
<div class="parent">
<div class="dx gdt15 ttfe font-s">ease       </div>&nbsp;&nbsp;
<div class="dx gdt15 ttfl font-s">linear     </div>&nbsp;&nbsp;
<div class="dx gdt15 ttfei font-s">ease-in    </div>&nbsp;&nbsp;
<div class="dx gdt15 ttfeofont-s">ease-out   </div>&nbsp;&nbsp;
<div class="dx gdt15 ttfeio font-s">ease-in-out</div>&nbsp;&nbsp;
</div>

### 延迟过渡
通过 `transition-delay` 可以延迟过渡开始的时间，取值为: `s` / `ms` 。

```css:no-line-numbers
.item{ transition-delay : 2s}
```
<div class="dx gdt15 ttfe td2s font-s">延迟2s</div>&nbsp;&nbsp;

### 过渡的简写方式
`transition`:`property`<font size="0.5">( 参与过渡的属性 ) </font> `duration`<font size="0.5">( 过渡时长 ) </font> `timing-function`<font size="0.5">( 过渡曲线 ) </font>`delay`<font size="0.5">( 延迟 ) </font>;

```css:no-line-numbers
.item{ transition: all 2s linear 2s}
```
- **最简方式**
`transition`:`duration`<font size="0.5">( 过渡时长 ) </font>
```css:no-line-numbers
.item{ transition: 2s}
```