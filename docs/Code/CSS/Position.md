<style scoped>
.div-simple{
  width:200px;
  height:80px; 
  display: table-cell;
  vertical-align: middle;
}

.normal{
  width:80px;
  height:80px; 
}
.div-parent{width:100%}
.div-parent-h{height:190px}

.border-parent{border:1px solid #cab643}
.bg-parent{background-color:#cab64330;}
.color-parent{color:#cab643}

.border-simple{border:1px solid #3eaf7c}
.bg-simple{background-color:#42b98347;}
.color-simple{color:#3eaf7c}

.border-normal{border:1px solid #3867ad}
.bg-normal{background-color:#3867ad50;}
.color-normal{color:#3867ad}

.m-clear{margin:0}
.mr{margin-right:20px}
.ml{margin-left:20px}

.text-center{text-align:center;}
.text-right{text-align:right;}
.text-left{text-align:left;}

.clear-fix{clear:both}

.relative-parent{
  position:relative;
}

.relative-t-l{
  position:absolute;
  top:10%;
  left:10%;
}

.relative-f-l{
  position:absolute;
  bottom:-10%;
  right:0;
  line-height:40px
}

</style>

# 定位
- 给元素设置 **position** 属性，且取值为 **relative** /**absolute** / **fixed** 时，我们称这个元素叫做已定位元素。
    - static   默认文档流
    - relative   相对定位
    - absolute  绝对定位
    - fixed      固定定位

- 已定位元素，会解锁4个偏移属性 **left** / **right** / **top** / **bottom**。 
    - 左右冲突，以左为准
    - 上下冲突，以上为准


```css:no-line-numbers
.any{ 
  position:relative/absolute/fixed;
  left:10;
  right:0;
  top:10;
  bottom:0;
  }
```
## 相对定位 relative
- 相对定位并未脱离文档流
- 相对定位是相对于自己原来的位置，发生偏移。

<div class="div-parent relative-parent text-center">
<div class="div-simple text-center bg-simple color-simple border-simple"><b>未设置定位时</b></div>
<div class="text-center bg-normal border-normal color-normal relative-t-l div-simple"><b>position:relative</b><br><b>top:10</b><br><b>left:70</b></div>
</div>
<br>

### relative使用场景
- 类似于margin，做位置微调
- 多用于充当绝对定位元素的祖先级元素

## 绝对定位 absolute
- 默认相对于body定位。
- 如有已设定的祖先元素，则相对于**最近的**，**已定位**的**祖先级元素**，**左上角**去定位。
- 设置绝对定位后，元素会脱离文档流。

<div class="div-parent border-parent bg-parent ">
<h5 class="ml color-parent"> 含有定位属性的父元素</h5>
<p class="ml color-parent"> p 父元素中的文本内容</p>
<p class="ml color-parent"> p 父元素中的文本内容</p>
<div class="text-center bg-normal border-normal color-normal div-simple"><b>未设置绝对定位时</b></div>
</div>
<br>

<div class="div-parent border-parent bg-parent div-parent-h relative-parent">
<h5 class="ml color-parent"> 含有定位属性的父元素</h5>
<p class="ml color-parent"> p 父元素中的文本内容</p>
<p class="ml color-parent"> p 父元素中的文本内容</p>
<div class="text-center bg-normal border-normal color-normal relative-t-l div-simple"><b>position:absolute</b><br><b>top:30</b><br><b>left:70</b></div>
</div>
<br>

::: details 哪种已定位元素，最适合，当做absolute的已定位祖先元素?
**relative**不写偏移属性，对周围布局没有任何影响，因此**relative**最适合做**absolute**的已定位祖先元素。
:::
### absolute使用场景
- 需要调整元素位置，并且还会与其他元素发生堆叠时，可以使用绝对定位。
- 要注意父元素设置为**relative**

## 固定定位 fixed
- 固定在body某个(可视区域)位置的定位。
- 元素设置固定定位后，将脱离文档流，并变为块级元素。

<a class="normal border-normal bg-normal color-normal relative-f-l text-center" href="定位Position.html#fixed使用场景">固定定位<br>应用</a>

### fixed使用场景
详见当前页面右侧蓝色”固定定位应用“。
