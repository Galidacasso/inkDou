# 包管理工具
Node Package Manager，简称 **`NPM`**，是一个NodeJS包管理和分发的工具，已经成为了非官方的发布Node模块（包）的标准。

## package.json 
**说明书文件** 定义项目所需要的各个模块的配置,是一个json对象,对象中的每一个成员对应的就是当前的配置。

## 安装模块
示例： 安装 **`express`** 模块
初始化说明书文件
```js:no-line-numbers
npm init -y
```

安装 **`express`** 框架
```js:no-line-numbers
npm i express
```

可一次安装多个中间件
```js:no-line-numbers
npm i 中间件名1 中间件名2 中间件名3 ...
```

:::tip
在安装框架时会出现added50 packages 这样的字眼，是因为安装express的同时，需要安装它的依赖包。
:::

## 卸载模块
```js:no-line-numbers
npm uninstall 模块名
// 删除全局模块xxx；
npm uninstall -g 模块名
```