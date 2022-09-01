# 代码部分
## 目录结构
- xz 工程目录
  - [app.js](#服务器启动文件)        服务器启动文件
  - [pool.js](#mysql连接池文件)       mysql连接池文件 
  - routes        路由器目录
    - [user.js](#用户路由)    用户路由 
    - [product.js](#商品路由) 商品路由 
    - ...
  - public        静态资源目录
    - [user_reg.html](#用户注册) 用户注册
    - [user_login.html](#用户登入) 用户登入
    - [user_list.html](#用户列表) 用户列表
    - [user_update.html](#用户更新) 用户信息更新
    - [user_delete.html](#用户删除) 用户删除
    - [user_detail.html](#用户信息) 用户信息查看
    - [prd_like.html](#商品搜索) 商品搜索
    - more...
- other...

## 服务器启动文件
### app.js
@[code js](./xz/app.js)

## mysql连接池文件
### pool.js
@[code js](./xz/pool.js)

## 用户路由
### user.js
@[code js](./xz/routes/user.js)

## 商品路由
### product.js
@[code js](./xz/routes/prd.js)

## 静态文件-用户
### 用户注册
#### user_reg.html
@[code js](./xz/public/user_reg.html)
### 用户登入
#### user_login.html
@[code js](./xz/public/user_login.html)
#### user_list.html
### 用户列表
@[code js](./xz/public/user_list.html)
### 用户更新
#### user_update.html
@[code js](./xz/public/user_update.html)
### 用户删除
#### user_delete.html
@[code js](./xz/public/user_delete.html)
### 用户信息
#### user_detail.html
@[code js](./xz/public/user_detail.html)

##  静态文件-商品
### 商品搜索
#### prd_like.html
@[code js](./xz/public/prd_like.html)
