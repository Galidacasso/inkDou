# 图片 超链接 表格 
### 目录
目录就是文件夹,不同的目录在开发项目中代表不同的部分
- 根目录
- 子目录

### 路径
路径就是从当前目录到目标位置所经过的线路
- 绝对路径 目录下的绝对位置,完整的文件描述 ,从文件的最高级目录开始到目标文件结束,中间完整的路径 
- 相对路径 从当前目录出发找到目标文件位置
  - 同级 **`./`**
  - 父级 **`../`**

## 图片 img
```html:no-line-numbers
<img src="图片源" alt="代替图片出现的文字" title="鼠标悬停在图片上显示的内容">
```
```html
<!-- 绝对路径加载 -->
<img 
width="600px" height="400px"
src="https://img20.360buyimg.com/pop/s1180x940_jfs/t1/208589/34/21014/101652/625f5d15E3cb4741a/39a0bd91acc0e880.jpg.webp" alt="">
<!-- 相对路径加载 -->
<img src="宝贝.png" alt="">
<img src="img/1.webp" alt="网络环境差,图片加载中~~" title="猜猜我是谁">
```

## 超链接 a
```html
<a href="地址" target="_blank"></a>
```
```html
<a href="https:www.baidu.com">点我跳转到百度</a>
<!-- 新窗口打开 -->
<a href="https:www.baidu.com" target="_blank">点我跳转到百度</a>
<!-- 下载 -->
<a href="宝贝.zip">点我下载宝贝</a>
<!-- 执行js -->
<a href="javascript:alert('垃圾已清理~~')">点我清除垃圾</a>
<a href="javascript:clear()">点我清除垃圾</a>
<script>
    function clear() {
        setTimeout(() => {
            alert('垃圾已清理~~');
        }, 5000);
    }
</script>
<!-- js的另类执行方式  自定义事件-->
<a href="javascript:;"></a>
<a href="javascript:void(0);"></a>
<!-- 锚点  跳转到学子商城中的锚点-->
<a href="#loca">关于申哥</a>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<p id="loca">这里是申哥的介绍</p>
<a href="demo1.html#local">跳转到demo1锚点</a>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<a href="#">回到顶部</a>

<a href="https://www.jd.com">
    <img src="img/2.webp" alt="">
</a>
```

## 表格 table tr td
表格由table、tr、td 组成，其中：
- table 表格主体
- tr 行 横为行
- td 列 竖为列 
  
表格都是从table标签开始, tr>td>逐级填充数据内容。
```html
<table>
    <tr>
        <td>
            <img src="https://img0.baidu.com/it/u=611029487,2706947771&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
        </td>
        <td></td>
    </tr>
    <tr>
        <td>&yen;5693.30</td>
        <td>0人付款</td>
    </tr>
    <tr>
        <td>
            Atomic滑雪板女全能平花板男快穿固定器12GW
        </td>
        <td></td>
    </tr>
    <tr>
        <td>中体冠军雪具</td>
        <td>北京</td>
    </tr>
</table>
```
::: details 输出
此输出受vuepress影响，并非实际效果。
<table>
    <tr>
        <td>
            <img src="https://img0.baidu.com/it/u=611029487,2706947771&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
        </td>
        <td></td>
    </tr>
    <tr>
        <td>&yen;5693.30</td>
        <td>0人付款0</td>
    </tr>
    <tr>
        <td>
            Atomic滑雪板女全能平花板男快穿固定器12GW
        </td>
        <td></td>
    </tr>
    <tr>
        <td>中体冠军雪具</td>
        <td>北京</td>
    </tr>
</table>
:::

### 表格属性
|   属性名    |    作用    |
| :---------: | :--------: |
|   border    | 表格的边框 |
| bordercolor | 边框的颜色 |
|    width    |  表格宽度  |
|   height    |  表格高度  |
|   bgcolor   |   背景色   |
| background  |   背景图   |

### 对齐方式
table居中是表格的整体居中和内容无关   
align   水平   left/center/right    
valign  垂直   top/middle/bottom   
```html
<table border="1" bordercolor="red" width="300px" height="200px"
    align="center" bgcolor="pink" background="https://img0.baidu.com/it/u=611029487,2706947771&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500">
        <tr bgcolor="orange">
            <td>1</td>
            <td valign="bottom">2</td>
            <td>3</td>
        </tr>
        <tr>
            <td align="right">1</td>
            <td bgcolor="gray">2</td>
            <td>3</td>
        </tr>
</table>
```
::: details 输出
此输出受vuepress影响，并非实际效果。
<table border="1" bordercolor="red" width="300px" height="200px"
    align="center" bgcolor="pink" background="https://img0.baidu.com/it/u=611029487,2706947771&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500">
        <tr bgcolor="orange">
            <td>1</td>
            <td valign="bottom">2</td>
            <td>3</td>
        </tr>
        <tr>
            <td align="right">1</td>
            <td bgcolor="gray">2</td>
            <td>3</td>
        </tr>
</table>
:::

### 单元格合并
单元格的合并，会将单元格往纵横方向伸展，因此多余的单元格要删除掉  
行合并: rowspan  从指定的单元格开始纵向合并多个单元格  
列合并: colspan  从指定的单元格开始横向合并多个单元格  
```html
<table border="1" width="300px" height="300px" align="center">
    <tr align="center">
        <td>卒</td>
        <td colspan="2" rowspan="2">曹操</td>
        <td>卒</td> 
    </tr>
    <tr align="center">
        <td>卒</td>
        <td>卒</td>
    </tr>
    <tr align="center">
        <td>卒</td>
        <td>卒</td>
        <td>卒</td>
        <td>卒</td>
    </tr>
    <tr align="center">
        <td rowspan="2">关<br>羽</td>
        <td>卒</td>
        <td>卒</td>
        <td rowspan="2">张<br>飞</td>
    </tr>
    <tr align="center">
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
</table>
```
::: details 输出
此输出受vuepress影响，并非实际效果。
<table border="1" width="300px" height="300px" align="center">
    <tr align="center">
        <td>卒</td>
        <td colspan="2" rowspan="2">曹操</td>
        <td>卒</td> 
    </tr>
    <tr align="center">
        <td>卒</td>
        <td>卒</td>
    </tr>
    <tr align="center">
        <td>卒</td>
        <td>卒</td>
        <td>卒</td>
        <td>卒</td>
    </tr>
    <tr align="center">
        <td rowspan="2">关<br>羽</td>
        <td>卒</td>
        <td>卒</td>
        <td rowspan="2">张<br>飞</td>
    </tr>
    <tr align="center">
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
</table>
:::

### 表格边距
外边距: cellspacing   单元格和单元格之间的距离   
内边距: cellpadding  边框到内容的距离

```html
<table width="300px" height="300px" border="1" cellspacing="10" cellpadding="10">
    <tr>
        <td>小艺</td>
        <td>小艺</td>
        <td>小艺</td>
    </tr>
    <tr>
        <td>小艺</td>
        <td>小艺</td>
        <td>小艺</td>
    </tr>
    <tr>
        <td>小艺</td>
        <td>小艺</td>
        <td>小艺</td>   
    </tr>
</table>
```
::: details 输出
此输出受vuepress影响，并非实际效果。
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<table width="300px" height="300px" border="1" cellspacing="10" cellpadding="10">
    <tr>
        <td>小艺</td>
        <td>小艺</td>
        <td>小艺</td>
    </tr>
    <tr>
        <td>小艺</td>
        <td>小艺</td>
        <td>小艺</td>
    </tr>
    <tr>
        <td>小艺</td>
        <td>小艺</td>
        <td>小艺</td>   
    </tr>
</table>
</body>
</html>
:::

::: tip
表格的宽度是靠内容撑起的,如果为空则按照最小尺寸显示  
如果设置的宽度大于内容宽度则按照设置的宽度显示  
如果设置的宽度小于内容宽度则按照内容宽度显示  
:::