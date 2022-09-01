<style scoped>
.div-simple{
  width:200px;
  height:80px; 
  display: table-cell;
  vertical-align: middle;
}
.div-parent{width:100%}
.m-clear{margin:0}
.mr{margin-right:20px}
.ml{margin-left:20px}

.bg-simple{background-color:#42b98347;}

.color-vuepress{color:#3eaf7c}

.text-center{text-align:center;}
.text-right{text-align:right;}

.border-simple{border:1px solid #3eaf7c}
.float-left{float:left}
.float-right{float:right}
.clear-fix{clear:both}
</style>

# 浮动定位
让 **块级元素** 脱离 **文档流定位**（普通流定位）,像行内元素一样横向排列。  

方法：向父级元素添加`float`属性。  

```css:no-line-numbers
.any{ float:left/right/none }
```
- none 不浮动，默认值
<div class="border-simple div-parent">
<div class="bg-simple div-simple border-simple text-center">
<span class="color-vuepress">&lt;div&gt;</span>
块级元素
<span class="color-vuepress">&lt;/div&gt;</span>
</div>
<p class="bg-simple border-simple text-center m-clear">
<span class="color-vuepress">&lt;p&gt;</span>
块级元素
<span class="color-vuepress">&lt;/p&gt;</span>
</p>
</div>

- left 左浮动，浮动后，向左对齐

<div class="border-simple  div-parent text-right">父元素
<div class="bg-simple div-simple border-simple text-center float-left">
设置浮动，已设宽高
</div>
<p class="bg-simple border-simple text-center m-clear">
未设浮动，文本避开浮动元素
</p>
</div>
<p class="clear-fix"></p>
<br>

<div class="border-simple  div-parent">
<div class="bg-simple div-simple border-simple text-center float-left">
设置浮动，已设宽高
</div>
<p class="bg-simple border-simple text-center float-left m-clear">
设置浮动，未设宽高，靠内容撑开
</p>
</div>

:warning: <p class="clear-fix">:x:父级元素高度坍塌</p>


- right 右浮动，浮动后，向右对齐

<div class="border-simple div-parent">
<div class="bg-simple div-simple border-simple text-center float-right">
设置浮动，已设宽高
</div>
<p class="bg-simple border-simple text-center m-clear">
未设浮动，文本避开浮动元素
</p>
</div>
<p class="clear-fix"></p>
<br>

<div class="border-simple div-parent">
<div class="bg-simple div-simple border-simple text-center float-right">
设置浮动
</div>
<p class="bg-simple border-simple text-center float-right m-clear">
设置浮动，未设宽高，靠内容撑开
</p>
</div>

:warning: <p class="clear-fix">:x:父级元素高度坍塌</p>

## 浮动的特点
- 元素一旦浮动，脱离文档流，不占据页面空间，后续元素会上前补位。
- 元素浮动之后，会停靠在父元素的最左边/最右边，或者停靠在之前已浮动元素的后面。
- 父元素横向显示不下所有已浮动元素，最后显示不下的部分，会自动换行。
- 浮动是为了解决多个块级元素横向显示的问题。

## 浮动引发的特殊情况
- 浮动的元素，会在浮动方向占据位置。
- 换行的浮动元素，不能去占据已经被占的位置显示。
- 浮动的元素，如果本身没有定义宽度，浮动之后，元素宽度以内容为准
- 浮动的元素，就会变成块级元素（允许设置尺寸，上下外边距有效）
- 脱离文档流
  - 元素一旦脱离文档流，会发生4件事：
    1. 元素在页面不占空间。
    2. 后续元素上前补位。
    3. 元素不设置宽度，脱离文档流后，宽度以内容为准。
    4. 元素脱离文档流，变为块级元素。
    5. 文本、行内元素、行内块元素，不会被浮动元素压在下面，二是巧妙的避开，环绕着浮动元素显示。

## 清除浮动
- 清除之前浮动元素带来的影响。
- 如元素周围有浮动的兄弟元素，设置 **clear** 属性，此元素不会补位。

```css:no-line-numbers
.any{ clear:both/left/right }
```
- clear:left  清除 左浮动   的影响
- clear:right 清除 右浮动   的影响
- clear:both  清除 所有浮动 的影响

<div class="border-simple div-parent">
<div class="bg-simple div-simple border-simple text-center float-left">
设置浮动，已设宽高
</div>
<p class="bg-simple border-simple text-center m-clear">
P 未设浮动，未设清除浮动，文本避开浮动元素</p>
<p class="bg-simple border-simple text-center m-clear clear-fix">
P 设置清除浮动
</p>
</div>

## 高度坍塌
块级元素如果不设置高，如内部所有元素都脱离文档流（如设置了浮动），此时块级元素就认为内部没有其他元素，原被内部元素撑开的高度就失去了，此为高度坍塌。  

**嵌套关系:div>div+p**
<div class="border-simple  div-parent">
<div class="bg-simple div-simple border-simple text-center float-left">
设置浮动，已设宽高
</div>
<p class="bg-simple border-simple text-center float-left m-clear">
设置浮动，未设宽高，靠内容撑开
</p>
</div>

:warning: <p class="clear-fix">:x:父级元素高度坍塌</p>

### 解决方案
- 在父元素最后添加一个空的块级元素，给此块级元素设置**clear:both**

**嵌套关系:div>div+p+div**(设置clear:both)
<div class="border-simple  div-parent">
<div class="bg-simple div-simple border-simple text-center float-left">
设置浮动，已设宽高
</div>
<p class="bg-simple border-simple text-center float-left m-clear">
设置浮动，未设宽高，靠内容撑开
</p>
<div class="clear-fix"></div>
</div>

::: tip 其他解决方案 (有缺陷)

|                  方法                   | 缺陷                     |
| :-------------------------------------: | :----------------------- |
|             设置父元素高度              | 无法确定父元素的合理高度 |
|              父元素也浮动               | 会影响其他元素的页面效果 |
| [overflow:auto](尺寸和边框.md#溢出处理) | 溢出部分无法显示         |
:::