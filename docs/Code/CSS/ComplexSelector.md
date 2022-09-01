<style scoped>
.con1::before{
    content:"con1的before伪元素: ";
    color:#3eaf7c;
    font-weight: bolder
}
.con2::before{
    content: "con2的before伪元素: ";
    color:#4e6e8e;
    font-weight: bolder
}
.con2::after{
    content: "con2的after伪元素";
    color:#3a5169;
    display: block;
    font-weight: bolder
}
</style>
# 复杂选择器
复杂选择器是建立在基础选择器之上的对基础选择器进行组合的形式。

## 兄弟选择器
具备同一个父元素的平级元素之间，称为兄弟元素。   
兄弟选择器，就是依托兄弟元素进行选择的一种方式，只能通过哥哥找弟弟，往后找，不能往前找。

### 相邻兄弟选择器
紧挨着选择器1，符合选择器2的兄弟
```css:no-line-numbers
选择器1+选择器2{ }
```

### 通用兄弟选择器
选择器1后，所有符合选择器2的兄弟
```css:no-line-numbers
选择器1~选择器2{ }
```

### 应用场合
多用于除了第一个元素以外，其他兄弟都要使用的样式。  
相邻兄弟选择器效率更高。  

## 属性选择器
选择含有某属性的元素

### 匹配具备attr属性的元素
如\<a **`href`**="www.baidu.com">中的 **`href`** 属性。
```css:no-line-numbers
[href]{ }
```
### 匹配同时具备attr1,attr2...的元素
如\<a **`href`**="www.baidu.com" **`target`**="_blank">
```css:no-line-numbers
[href][target]...{ }
```

### 匹配同时具备attr1,attr2...的elem元素
如\<a **`href`**="www.baidu.com" **`target`**="_blank">
```css:no-line-numbers
a[href][target]{ }
```
### 匹配具有attr并且值为value的元素
如\<a **`href`**="www.baidu.com" **`target`**="_blank">
```css
[href="www.baidu.com"]{ }
[href="www.baidu.com"][target="_blank"]{ }
a[href="www.baidu.com"][target="_blank"]{ }
```
### 匹配value模糊查询
利用正则表达式对值进行模糊查询。
- **`attr`** 的值以 **`value`** 开头的元素
```css:no-line-numbers
[attr^=value]{}
```
- **`attr`** 的值以 **`value`** 结尾的元素
```css:no-line-numbers
[attr$=value]{}
```
- **`attr`** 的值中含有 **`value`** 的元素
```css:no-line-numbers
[attr*=value]{}
```
- **`attr`** 的值中含有 **`value`** 这个**单词**的元素
```css:no-line-numbers
[attr~=value]{}
```

## 伪类选择器
### 目标伪类
用于匹配元素在不同状态下的样式。

| 选择器     | 匹配状态         |
| :--------- | :--------------- |
| :link{}    | 未访问时的状态   |
| :visited{} | 访问后的状态     |
| :hover{}   | 鼠标悬停时的状态 |
| :active{}  | 激活状态         |
```css:no-line-numbers
a:hover{...}
```

### 结构伪类
通过父子关系匹配元素

| 选择器            | 匹配状态                   |
| :---------------- | :------------------------- |
| :first-child{}    | 匹配父元素的第一个子元素   |
| :last-child{}     | 匹配父元素的最后一个子元素 |
| :nth-child(`n`){} | 匹配父元素的第n个子元素    |
```css:no-line-numbers
div:first-child{...}
li:first-child{...}
li:first-child(3){...}
```

### empty
匹配内部没有任何元素的标签，又称为 `丁克元素`
内部无标签、无文本、无文字、无空格、无回车
```css:no-line-numbers
a:empty{...}
```

### only-child
匹配唯一子元素，又成为 `独生子元素`  
只计算元素，文本/回车/空格不计算在内
1. 冒号前面的选择器是匹配子元素的，
2. 子元素只能是唯一标签，但可以放普通文本与子元素平级
```css:no-line-numbers
span:only-child{
    color:red;
}
```

### not(selector)
否定伪类，匹配不符合selector的元素。
```css:no-line-numbers
/*否定伪类:除了第一列以外，其他文本都斜体显示*/
td:not(:first-child){
    font-style: italic;
}
```
## 伪元素选择器
伪元素，是用于设置元素制定部分的样式，可以用于设置元素的首字母、首行的样式，在元素的内容之前或之后插入内容。  

### 内容生成
使用css，给html添加元素，称之为伪元素内容生成。

### before & after
`:before` | `::before` 在当前内容区域的起始处，添加一个伪元素，该伪元素属于当前元素的子元素，新添加的元素默认为行内元素，可以使用`display`修改。

`:after` | `::after` 在当前内容区域的结束处，添加一个伪元素，该伪元素属于当前元素的子元素，可以使用`display`修改。

```html:no-line-numbers
<!-- 忽略html结构 -->
<style>
    .con1::before{
        content:"con1的before伪元素";
        color:#3eaf7c;
    }
    .con2::before{
        content: "con2的before伪元素";
        color:#990000;
    }
    .con2::after{
        content: "con2的after伪元素";
        display: block;
        color:#3a5169;
    }
</style>
<p class="con1">con1的内容</p>
<p class="con2">con2的内容</p>
```
>**输出**
><p class="con1">con1的内容</p>
><p class="con2">con2的内容</p>
>

### 解决高度坍塌
使用伪元素内容生成，可以解决高度坍塌问题
```css:no-line-numbers
#parent:after{
  /*空的，块级，clear：both*/
  content:"";
  display:block;
  clear:both;
}

```

## 选择器权值
**权值**，表示当前选择器的重要程度，权值越大，优先级越高。

|       内容 |  权值 |
| ---------: | ----: |
| !important | >1000 |
|   内联样式 |  1000 |
|   id选择器 |   100 |
|    类/伪类 |    10 |
| 元素选择器 |     1 |
| 通用选择器 |     0 |
| 继承的样式 |    -- |
 
### 权值特点
1. 当一个选择器，包含多个选择器时，需要将所有的选择器权值进行相加，结果大的优先显示。  
2. 权值相同，使用就近原则。  
3. 群组选择器的权值，单独计算，不能相加。  
4. 如果样式后添加了!important，直接获得最高优先级。  
5. 选择器权值的计算，不会超过本身权值的最大数量级。（100个1权值选择器也不会大于10权值的选择器）

