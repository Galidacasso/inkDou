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

.z-size-20{
  z-index:0
}

.z-size-30{
  z-index:30
}

</style>

# 堆叠顺序
Html元素产生的堆叠现象。

## 默认堆叠顺序
- 后渲染的元素堆叠层高，置于上方(前方)
- 后渲染的元素，永远小于0，而大于-1。

## 改变堆叠的顺序
```css:no-line-numbers
.any{z-index:0} 
```
通过z-index属性可以改变堆叠层，数值越大则越靠上方(前方)。

![z-index](/images/css/zindex.png)

### z-index取值
z-index的值为无单位的整数
- 可以取负值
- 默认的顺序永远小于0，而大于-1
- 项目中一般最大到1000

### 定位的堆叠与浮动的关系
- 浮动和定位不是一个体系不可进行比较。
- 浮动永远只有一层，不能设置层级。
- 定位可以设置堆叠顺序。
- 浮动的堆叠顺序 **＜** z-index:0 **＜** 未设置z-index 的元素

::: tip 
- z-index只对已定位元素有效
- z-index值相同，后渲染的高
- 堆叠顺序对父子关系无效，永远是子元素压着父元素。
:::
