# 分区元素 列表
## 块级容器 div(块元素) 
div 块级元素  h1~h6 p hr...   
独占一行  宽度默认是父级元素的100%,高度靠内容撑起，可以支持宽高属性。

## 行内元素 span
span: 行内元素  a img  b u i ...   
和其他行内元素共享一行  宽高靠内容撑起 不支持宽度

## 关于分区元素的尺寸
```html
<head>
<style>
    div{
        width: 100px;
        height: 100px;
        border: 1px solid rgb(199, 21, 21);
    }
    span{
        /* 宽高不生效 */
        width: 100px;
        height: 100px;
        border: 1px solid rgb(199, 21, 21);
    }
</style>
</head>
<body>
    <div>div1</div>
    <div>div2</div>
    <h1>h1</h1>
    <p>p</p>
    <span>span</span>
    <span>span</span>
    <b>b</b>
    <i>em</i>
</body>
</html>
```
![分区元素](/images/分区元素.png)
### 练习 购物车
```html
<table border="1" bordercolor="red" width="1000px" height="500px">
    <tr align="center">
        <td>全选</td>
        <td>商品信息</td>
        <td>单价</td>
        <td>数量</td>
        <td>金额</td>
        <td>操作</td>
    </tr>
    <tr align="center">
        <td>
            <img src="https://img14.360buyimg.com/n0/jfs/t1/171611/7/28118/155227/6205ff96Ed36c0cbf/c56ffe933e5e90ae.jpg" alt="" width="200px" height="200px">
        </td>
        <td>TERROR滑雪板单板套装男初学者平花装备</td>
        <td>
            <b><del>&yen;2339.00</del></b>
            <b>&yen;8999.00</b>
        </td>
        <td>
            <span>-</span>
            <span>16</span>
            <span>+</span>
        </td>
        <td>&yen;10086.00</td>
        <td>删除</td>
    </tr>
    <tr align="center">
        <td>
            <img src="雪板.jpg" alt="" width="200px" height="200px">
        </td>
        <td>TERROR滑雪板单板套装男初学者平花装备</td>
        <td>
            <b><del>&yen;2339.00</del></b>
            <b>&yen;8999.00</b>
        </td>
        <td>
            <span>-</span>
            <span>16</span>
            <span>+</span>
        </td>
        <td>&yen;10086.00</td>
        <td>删除</td>
    </tr>
    <tr align="center">
        <td>
            <img src="雪板.jpg" alt="" width="200px" height="200px">
        </td>
        <td>TERROR滑雪板单板套装男初学者平花装备</td>
        <td>
            <b><del>&yen;2339.00</del></b>
            <b>&yen;8999.00</b>
        </td>
        <td>
            <span>-</span>
            <span>16</span>
            <span>+</span>
        </td>
        <td>&yen;10086.00</td>
        <td>删除</td>
    </tr>
</table>
```
![购物车](/images/购物车.png)

## 列表
有条理的显示数据，多用于导航或者菜单等  
```html
<ol> 
    <!-- li 列表项 -->
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
</ol>
```
::: details
<ol> 
    <!-- li 列表项 -->
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
</ol>
:::

### 有序列表 order list    
默认从阿拉伯数字1开始，起始值为1， 可以通过type属性来指定列表样式，通过start属性指定起始位置
```html
<ol type="I">
    <!-- li 列表项 -->
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
</ol>
<ol type="A" start="24">
    <!-- li 列表项 -->
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
</ol>
```
::: details
<ol type="I">
    <!-- li 列表项 -->
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
</ol>
<ol type="A" start="24">
    <!-- li 列表项 -->
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
</ol>
:::

### 无序列表 unorder list  
默认显示实心圆,可以通过type属性来指定列表样式,用到的最多的样式是none
```html
<ul>
    <!-- li 列表项 -->
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
</ul>
<ul type="circle">
    <!-- li 列表项 -->
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
</ul>
<ul type="none">
    <!-- li 列表项 -->
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
</ul>
```
::: details
<ul>
    <!-- li 列表项 -->
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
</ul>
<ul type="circle">
    <!-- li 列表项 -->
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
</ul>
<ul type="none">
    <!-- li 列表项 -->
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
</ul>
:::

### 练习 层叠列表
```html
<ul>
    <li>手机</li>
    <li>
        <ul>
            <li>三星</li>
            <li>苹果</li>
            <li>小米</li>
        </ul>
    </li>
    <li>笔记本</li>
    <li>
        <ul>
            <li>人傻钱多戴</li>
            <li>美帝良心想</li>
            <li>偷工减料碁</li>
        </ul>
    </li>
</ul>
```
::: details 输出
<ul>
    <li>手机</li>
    <li>
        <ul>
            <li>三星</li>
            <li>苹果</li>
            <li>小米</li>
        </ul>
    </li>
    <li>笔记本</li>
    <li>
        <ul>
            <li>人傻钱多戴</li>
            <li>美帝良心想</li>
            <li>偷工减料碁</li>
        </ul>
    </li>
</ul>
:::

