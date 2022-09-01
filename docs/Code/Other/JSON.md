# JSON
**J**ava**S**cript **O**bject **N**otation，即JS对象表现方式，是一种轻量级,用于数据交互的格式,取代笨重的XML。 
JSON是以js对象或数组形式表现出来的字符串，简称JSON串。  
AJAX请求url后,响应的数据是JSON格式。   
`JSON.parse`可以将json格式的数据转化为`对象形式`。  
当服务器操作数据库之后，得到的result，在传递给前端之后自动就变成一个JSON。

## JSON解析
把json字符串转换成js对象/js对象数组，这个行为就叫json解析  
做json解析的目的，因为要对数据，使用js的api进行处理  

## JSON字符串的格式
1.json中用一对{}来表示一个对象。  
2.json中所有的属性名称，必须使用双引号括起来，使用单引号，不会发生错误，但是建议使用双引号。  
3.json中的属性值，如果是字符串，也要带双引号。  
4.整个json是一个字符串，所以最外层要是用单引号包裹。  
```js:no-line-numbers
var str='{“uid”:123}';

var arr='[
    {“eid”:1,”ename”:”TOM”,”aget”:19},
    {“eid”:1,”ename”:”TOM”,”aget”:19}
]';
```

## 语法解析
```js:no-line-numbers
var arr=JSON.parse(result);
```
arr就是一个js的对象数组，可以使用js的数组操作模式了
