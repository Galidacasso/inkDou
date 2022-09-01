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

# 定位  
控制(改变)元素在页面中的位置，让元素出现在我们规定的位置。

## 普通流定位
普通流定位，即html默认的显示方式，也称文档流定位。
- 每个元素在页面上都有自己的空间，相互之间不能堆叠。
- 每个元素默认是从父元素的左上角开始显示。
- 块级元素独立成行，按照从上往下的顺序排列。
- 行内元素和行内块，共用一行，从左往右排列，一行显示不下，换行显示。

<div class="bg-simple div-simple border-simple text-center"><span class="color-vuepress">&lt;div&gt;</span> 块级元素 <span class="color-vuepress">&lt;/div&gt;</span> </div>
<p class="bg-simple border-simple text-center"><span class="color-vuepress">&lt;p&gt;</span> 块级元素 <span class="color-vuepress">&lt;/p&gt;</span></p>

<a class="bg-simple border-simple"><span class="color-vuepress">&lt;a&gt;</span> 行内元素 <span class="color-vuepress">&lt;/a&gt;</span></a>
<span class="bg-simple border-simple"><span class="color-vuepress">&lt;span&gt;</span> 行内元素 <span class="color-vuepress">&lt;/span&gt;</span></span><input type="text" class="bg-simple border-simple" placeholder="<input>行内块元素">

|   元素类型 | 元素排列 | 设置样式      | 默认宽度   | 包含          |
| ---------: | :------: | :------------ | :--------- | :------------ |
|   块级元素 | 独占一行 | 可设置宽/高   | 容器的100% | 任何标签      |
|   行内元素 | 共占一行 | 不可设置宽/高 | 内容的宽度 | 文本/行内元素 |
| 行内块元素 | 共占一行 | 可设置宽/高   | 内容的宽度 | --            |
