# Node.js
![nodejs](https://img0.baidu.com/it/u=615520464,4178533933&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=320)   
是基于V8引擎的JavaScript运行环境  
**特点**: 事件驱动 、非阻塞式I/O  轻量又高效   
[官网](https://nodejs.org/)   
[中文地址](https://nodejs.org/zh-cn/)   

## Node.js代码运行方式
交互模式: 在命令行里输入代码
脚本模式: 使用node命令运行js文件

## Node.js数据类型
原生JS基础类型 + JS引用类型 + Node独有的(Buffer)

## Node.js对象
Node.js全局大对象Global,所有和Node有关系的内容都会被挂载到这个对象下

### console对象
console是程序的控制台，主要用于打印一些测试信息，可以帮助开发者做简单的调试工作，更高级的调试会用到debug工具。  

```js:no-line-numbers
// 用于标准流的输出
console.log(1);
// 在浏览器控制台输出前加一个错误标志
console.error(1);
// 在浏览器控制台输出前加一个警告标志
console.warn(1);
```

### 其他对象
[process](https://www.php.cn/js-tutorial-465179.html)  
[Buffer](https://www.php.cn/js-tutorial-480645.html)  
.....

## Node.js运行不成功的原因:
1.安装过程中出现问题,使用管理员权限安装NodeJs  
2.目前NodeJs没做Win11的兼容,Win11的版本可能存在问题  
3.系统缺少可运行的c++运行库或版本过低  
4.当前的插件或者其他软件修改了环境变量  
