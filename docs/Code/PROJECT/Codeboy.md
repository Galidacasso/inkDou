# 学子商城
![学子商城预览图](/images/学子商城.png)  
学子商城为达内相关教程中的演练项目，有配套的数据和开发文档。  
[学子商城](http://211.103.248.18:9999/)

## 学子商城数据库概述
数据库名：xz  
适用数据库环境：MySQL  

## 数据表清单

| **表名**            | **描述**                                               | **所属模块**     |
|---------------------|--------------------------------------------------------|------------------|
| xz_user             | 用户表，记载注册后的客户信息                           | 基础信息个人中心 |
| xz_receiver_address | 用户收件地址，关联到用户表                             | 个人中心         |
| xz_shopping_cart    | 购物车表，记载所有用户的购物车数据关联到用户表，商品表 | 产品购买         |
| xz_order            | 订单表，记载所有用户的订单                             | 产品购买         |
| xz_order_detail     | 订单详细表，记载订单的详细信息关联到订单表             | 产品购买         |
| xz_laptop_family    | 商品种类表，记载所有的商品种类                         | 商铺中心         |
| xz_laptop           | 商品表，记载所有商品的信息关联到种类表                 | 商铺中心         |
| xz_laptop_pic       | 商品详情图表，记载商品的缩放图中的素材路径关联到商品表 | 商铺中心         |
| xz_index_carousel   | 首页轮播图标，商品展示列表，关联到商品表               |                  |
| xz_index_product    | 首页展示产品表，关联到商品表                           |                  |

## E-R模型图
![学子商城数据库结构图](/images/学子商城数据库结构图.jpg) 

## 数据表定义

### 用户信息表（xz_user）

| **字段名称** | **类型**     | **备注**                             | **字段描述**                               |
|--------------|--------------|--------------------------------------|--------------------------------------------|
| uid          | INT          | PRIMARY KEY  NOT NULL AUTO_INCREMENT | 用户的ID，为用户的唯一标识，由系统自动生成 |
| uname        | VARCHAR(32)  |                                      |                                            |
| upwd         | VARCHAR(32)  |                                      |                                            |
| email        | VARCHAR(64)  |                                      |                                            |
| phone        | VARCHAR(16)  | NOT NULL UNIQUE                      | 手机号码                                   |
| avatar       | VARCHAR(128) |                                      | \#头像图片路径                             |
| user_name    | VARCHAR(32)  |                                      | \#用户名，如王小明                         |
| gender       | INT          |                                      | \#性别 0-女 1-男                           |

### 用户地址表 （xz_receiver_address）

| **字段名称** | **类型**      | **备注**                   | **字段描述**                   |
|--------------|---------------|----------------------------|--------------------------------|
| aid          | INT           | PRIMARY KEY AUTO_INCREMENT |                                |
| user_id      | INT           |                            | \#用户编号                     |
| receiver     | VARCHAR(16)   |                            | \#接收人姓名                   |
| province     | VARCHAR(16)   |                            | \#省                           |
| city         | VARCHAR(16)   |                            | \#市                           |
| county       | VARCHAR(16)   |                            | \#县                           |
| address      | VARCHAR(128)  |                            | \#详细地址                     |
| cellphone    | VARCHAR(16)   |                            | \#手机                         |
| fixedphone   | VARCHAR(16)   |                            | \#固定电话                     |
| postcode     | CHAR(6)       |                            | \#邮编                         |
| tag          | VARCHAR(16)   |                            | \#标签名                       |
| is_default   | BOOLEAN       |                            | \#是否为当前用户的默认收货地址 |

### 用户购物车表（xz_shopping_cart）

| **字段名称** | **类型** | **备注**                    | **字段描述** |
|--------------|----------|-----------------------------|--------------|
| cid          | INT      | PRIMARY KEY AUTO_INCREMENT, |              |
| user_id      | INT      |                             | \#用户编号   |
| product_id   | INT      |                             | \#商品编号   |
| count        | INT      |                             | \#购买数量   |

### 用户订单表 （xz_order）

| **字段名称**   | **类型** | **备注**                   | **字段描述**                                                 |
|----------------|----------|----------------------------|--------------------------------------------------------------|
| aid            | INT      | PRIMARY KEY AUTO_INCREMENT |                                                              |
| user_id        | INT      |                            | \#用户编号                                                   |
| address_id     | INT,     |                            |                                                              |
| status         | INT,     |                            | \#订单状态 1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消  |
| order_time     | BIGINT,  |                            | \#下单时间                                                   |
| pay_time       | BIGINT,  |                            | \#付款时间                                                   |
| deliver_time   | BIGINT,  |                            | \#发货时间                                                   |
| received_time  | BIGINT   |                            | \#签收时间                                                   |

### 用户订单详情表 （xz_order_detail）

| **字段名称** | **类型** | **备注**                   | **字段描述** |
|--------------|----------|----------------------------|--------------|
| did          | INT      | PRIMARY KEY AUTO_INCREMENT |              |
| order_id     | INT      |                            | \#订单编号   |
| product_id   | INT,     |                            | \#产品编号   |
| count        | INT,     |                            | \#购买数量   |

### 商品类别表 （xz_laptop_family）

| **字段名称** | **类型**    | **备注**                   | **字段描述** |
|--------------|-------------|----------------------------|--------------|
| fid          | INT         | PRIMARY KEY AUTO_INCREMENT |              |
| name         | VARCHAR(32) |                            | \#类别名称   |

### 商品表 （xz_laptop）

| **字段名称**  | **类型**        | **备注**                   | **字段描述**       |
|---------------|-----------------|----------------------------|--------------------|
| lid           | INT             | PRIMARY KEY AUTO_INCREMENT |                    |
| family_id     | INT             |                            | \#所属型号家族编号 |
| product_id    | INT,            |                            | \#产品编号         |
| title         | VARCHAR(128)    |                            | \#主标题           |
| subtitle      | VARCHAR(128),   |                            | \#副标题           |
| price         | DECIMAL(10,2)   |                            | \#价格             |
| promise       | VARCHAR(64),    |                            | \#服务承诺         |
| spec          | VARCHAR(64),    |                            | \#规格/颜色        |
| name          | VARCHAR(32),    |                            | \#商品名称         |
| os            | VARCHAR(32),    |                            | \#操作系统         |
| memory        | VARCHAR(32),    |                            | \#内存容量         |
| resolution    | VARCHAR(32),    |                            | \#分辨率           |
| video_card    | VARCHAR(32),    |                            | \#显卡型号         |
| cpu           | VARCHAR(32),    |                            | \#处理器           |
| video_memory  | VARCHAR(32),    |                            | \#显存容量         |
| category      | VARCHAR(32),    |                            | \#所属分类         |
| disk          | VARCHAR(32),    |                            | \#硬盘容量及类型   |
| details       | VARCHAR(1024),  |                            | \#产品详细说明     |
| shelf_time    | BIGINT,         |                            | \#上架时间         |
| sold_count    | INT,            |                            | \#已售出的数量     |
| is_onsale     | BOOLEAN         |                            | \#是否促销中       |

### 商品详情图表 （xz_laptop_pic）

| **字段名称** | **类型**       | **备注**                   | **字段描述**     |
|--------------|----------------|----------------------------|------------------|
| pid          | INT            | PRIMARY KEY AUTO_INCREMENT |                  |
| laptop_id    | INT            |                            | \#笔记本电脑编号 |
| sm           | VARCHAR(128),  |                            | \#小图片路径     |
| md           | VARCHAR(128),  |                            | \#中图片路径     |
| lg           | VARCHAR(128)   |                            | \#大图片路径     |

### 首页轮播图表 （xz_index_carousel）

| **字段名称** | **类型**       | **备注**                   | **字段描述** |
|--------------|----------------|----------------------------|--------------|
| cid          | INT            | PRIMARY KEY AUTO_INCREMENT |              |
| img          | VARCHAR(128)   |                            | \#图片路径   |
| title        | VARCHAR(64),   |                            | \#图片描述   |
| href         | VARCHAR(128),  |                            | \#图片链接   |

### 首页商品栏目表 （xz_index_product）

| **字段名称**     | **类型**       | **备注**                   | **字段描述** |
|------------------|----------------|----------------------------|--------------|
| pid              | INT            | PRIMARY KEY AUTO_INCREMENT |              |
| title            | VARCHAR(64)    |                            | \#商品标题   |
| details          | VARCHAR(128),  |                            | \#详细描述   |
| pic              | VARCHAR(128),  |                            | \#图片       |
| price            | DECIMAL(10,2)  |                            | \#商品价格   |
| href             | VARCHAR(128)   |                            |              |
| seq_recommended  | TINYINT,       |                            |              |
| seq_new_arrival  | TINYINT,       |                            |              |
| seq_top_sale     | TINYINT        |                            |              |

### 数据库文件
配套数据库文件 [xz.sql](xz.sql)
@[code](xz.sql)