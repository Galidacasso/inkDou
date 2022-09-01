# 排错
## 打桩法
用console.log(nnn)在关键步骤打印。写到一个可以出结果的点，先看效果是否正确，正确了再继续写。
- 可以看到关键变量值是否正确
- 如果这句console.log不打印，说明代码没有执行到这里。
- 如果打印正确，说明到这一行都是正确的，再出错误，就是后面代码的问题。

## 报错信息
- :hash: `Cannot read property ‘lengeh’ of undefined`  
数据库没有开启

- :x:<font color=red>Uncaught SyntaxError : Invalid or unexpected token</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><font color=grey>03_ex.html:13</font></u>   
在第13行有出乎意料的符号   

- :x:<font color=red>Uncaught SyntaxError : Unexpected end of input</font>  
出乎意料的结尾，一般为缺少结束的"**`括号`**"  

- :x:<font color=red>Uncaught ReferenceError : <font color="#660000"><b>login</b></font> is not defined at HTMLButtonElement.onclick</font>
出乎意料的结尾，login这个方法未定义,说明login方法中缺少"**`}`**"

- :x:<font color=red>Uncaught SyntaxError : missing ) after argument list</font>  
符号错误.

- :x:<font color=red>Access to XMLHttpRequest at '<u><font color=grey>http://127.0.0.1:8080/test/ajax</font></u> ' from origin 'null' has been blocked by policy : No 'Access-Control-Allow-Oringin' header is present on the requested resource.</font>  
跨域错误。  
AJAX页面，需要使用访问服务的方式打开，否则会报跨域错误。

- :x:<font color=red>Uncaught SyntaxError : Invalid left-hand side in assignment</font>  
"**`==`**"写成了"**`=`**"

