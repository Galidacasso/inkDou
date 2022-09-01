<style scoped>
.table_simple_113px{
  width:113px;
  border:1px solid #ccc;
}
.table_simple_184px{
  width:184px;
  border:1px solid #ccc;
}
.table_simple_102px{
  width:102px;
  border:1px solid #ccc;
}
.table_separate{
  border-collapse:separate;
}
.table_collapse{
  border-collapse:collapse;
}
.border-spacing{
  border-spacing:20px
}
.table-layout-b{
  caption-side:bottom
}
.table-layout-auto{
  table-layout:auto
}
.table-layout-fixed{
  table-layout:fixed
}
.td-w{
  width:80px;
  height:10px;
}
</style>

# 表格  

## 常用样式
- table
  - html属性：**`border`** **`width`** **`height`** **`align`** 
  - **`border`** 只会设置最外层边框。
  - **`width`** **`height`** 设置后仍会根据内容变动。
  - css常用样式
- `td` /`th`
  - 尺寸，边框，字体，文本，内边距都有效。
  - 外边距无效。

### 特殊
设置 td/th中 文本 垂直对齐方式
```css:no-line-numbers
.any{ vertical-align: top/middle/bottom }
```
::: tip
**`input`** **`img`** 也可以设置 **`vertical-aligen`**
:::

## 特有样式
### 边框合并
- table边框与td/th边框**分离**
```css:no-line-numbers
border-collapse:separate
```
<table class="table_separate table_simple_113px">
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>

- table边框与td/th边框**合并**
```css:no-line-numbers
border-collapse:collapse
```
<table class="table_collapse table_simple_102px">
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>

### 边框距离
- 设置table边框与td/th边框的**间距**
```css:no-line-numbers
border-spacing:20px
```
<table class="table_separate table_simple_184px border-spacing">
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>

### 标题位置
- 顶部标题 top
```css:no-line-numbers
caption-side:top
```
<table class="table_collapse table_simple_102px">
<caption>标题caption</caption>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>

- 底部标题 bottom
```css:no-line-numbers
caption-side:bottom
```
<table class="table_collapse table_simple_102px table-layout-b">
<caption>标题caption</caption>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>

### 显示规则

- 自由布局 auto
```css:no-line-numbers
table-layout:auto
```
<table class="table_separate table-layout-auto">
<caption>未设置宽高的表格</caption>
<tr><td>列标题1</td><td>列标题2</td><td>列标题3</td></tr>
<tr><td>自由布局</td><td>默认值</td><td>table-layout:auto</td></tr>
<tr><td>单元格靠内容撑开</td><td>表格尺寸</td><td>随内容变化</td></tr>
</table>

- 固定布局 fixed
```css:no-line-numbers
table-layout:fixed
```
<table class="table_separate table-layout-fixed ">
<caption>已设置td宽高的表格</caption>
<tr><td class="td-w">列标题1</td><td class="td-w">列标题2</td><td class="td-w">列标题3</td></tr>
<tr><td class="td-w">固定布局</td><td class="td-w">设定值</td><td class="td-w">table-layout:fixed</td></tr>
<tr><td class="td-w">单元格高度靠内容撑开</td><td class="td-w">表格尺寸宽度</td><td class="td-w">固定</td></tr>
</table>

#### 显示规则的对比

| 表格自动布局                           | 表格的固定布局                 |
| :------------------------------------- | :----------------------------- |
| 单元格大小会自动的适应内容             | 单元格大小完全取决于设置的尺寸 |
| 表格复杂时，加载速度较慢，效率低       | 任何情况下，加载速度都很快     |
| 自动布局比较灵活                       | 固定表格不够灵活               |
| 适用于不确定每列大小，并且不复杂的表格 | 适用于确定每列 尺寸的表格      |
