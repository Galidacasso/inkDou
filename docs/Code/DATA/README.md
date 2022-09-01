---
lang: zh-CN
title: MySQL
description: MySQL资料
---
<br>
<div align = "center"><img src="/images/mysql.png" ></div>

# MySQL
MySQL是一种关系型数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。<br>
::: tip
MySQL所使用的 SQL 语言是用于访问数据库的最常用标准化语言。MySQL 软件采用了双授权政策，分为社区版和商业版，由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，一般中小型网站的开发都选择 MySQL 作为网站数据库。
::: 

#### 官方文档
[文档地址(5.7_en)](https://dev.mysql.com/doc/refman/5.7/en/)

## 基础规范
1. 注意关键字的空格
2. 在中语法中`[ ]`括起来的部分 代表可写可不写
3. 除`数据库名` `数据表名` `字段名`外，其他的`关键字`要求**全部大写**,必须使用英文的分号`;`做结尾
4. 数据表必须有`数据表名` `字段名` 字段的`数据类型` 虽然理论上而言约束类型可有可无,但是在实际开发中都会加上

## SQL语句分类
| 分类  | 内容         | 说明               | 语句                                 |
| :---: | ------------ | ------------------ | ------------------------------------ |
|  DDL  | 数据定义语言 | 定义数据的结构     | **CREATE** **DROP**   **ALTER** ...  |
|  DML  | 数据操作语言 | 操作数据表中的数据 | **INSERT** **DELETE** **UPDATE**     |
|  DQL  | 数据查询语言 | 查询数据           | **SELECT**                           |
|  DCL  | 用户权限控制 | 权限控制           | **CRANT**(授权) **REVOKE**(撤销授权) |



## 数据类型(分类)
### 数值
#### 整数
整数类型的字段,范围都是固定的,应根据不同的应用场景优化配置

|     类型 | 字节数 | 存储范围(无符号位) |
| -------: | -----: | -----------------: |
|  TINYINT |  1字节 |            0 ~ 255 |
| SMALLINT |  2字节 |          0 ~ 65535 |
|      INT |  4字节 |     0 ~ 4294967295 |
|   BIGINT |  8字节 |         0 ~ 2^64-1 |


#### 浮点
浮点类型是指近似值、生活中小数或IEEE
|        类型 |     名称     | 说明                             |
| ----------: | :----------: | -------------------------------- |
|  FLOAT[M,D] | 单精度浮点数 | M代表总有效位数<br>D代表小数位数 |
| DOUBLE[M,D] | 双精度浮点数 | M代表总有效位数<br>D代表小数位数 |

>**例 `FLOAT[6,3]` 123.456**

    

#### 定点(精确值)
定点类型，仅有DECIMAL，用于保存货币信息
|         类型 |   名称   | 说明                             |
| -----------: | :------: | -------------------------------- |
| DECIMAL[M,D] | 定点数值 | M代表总有效位数<br>D代表小数位数 |
 

### 文本
文本类型多用于信息文本的存储(手机号 用户名 文章/聊天信息)
#### **CHAR(M)**
固定长度的字符串(定长字符),如果存储内容的长度不足设定的长度时,会被后导空格补齐

>例 **`CHAR(20)`** 代表可以存20个字符, 如果只存了10个字符，后面会补充10个空格

#### **VARCHAR(M)**
可变长度的字符串(变长字符),如果存储内容的长度不足设定的长度时,并不会被后导空格补齐

>例 **`VARCHAR(20)`** 代表可以存20个字符, 如果只存了10个字符，后面不会补充空格

#### **TEXT(M)**
可变长度的字符串(变长字符) 存储长度: 2^32个字符

### 日期时间
因为不同的系统之间表示的格式不统一,推荐使用 **`VARCHAR`** 或 **`BIGINT`** 存储
|     类型 |     名称 |                                  支持范围 |
| -------: | -------: | ----------------------------------------: |
|     DATE |     日期 |                   1000-01-01 ~ 9999-12-31 |
|     TIME |     时间 |                       00:00:00 ~ 23:59:59 |
| DATETIME | 日期时间 | 1000-01-01 00:00:00 ~ 9999-12-31 23:59:59 |


## 数据库
数据库一般需要通过`终端`操作

### 登入数据库
```sql
-- 标准语法
mysql.exe -h服务器地址 -P监听端口 -u用户名 -p用户名密码
-- 示例
mysql.exe -h127.0.0.1 -P3306 -uroot -p 
-- 极简语法，用于本地
mysql -uroot
```

### 数据库操作
#### 查看所有的数据库
```sql
-- 查看所有数据库
SHOW DATABASES;
```

#### 创建数据库
```sql
-- 语法
CREATE DATABASE `数据库名`;
-- 示例
CREATE DATABASE `web1` DEFAULT CHARACTER SET UTF8;
```
:::tip
添加 **`DEFAULT CHARACTER SET UTF8`** 是因中英文编码差异，故数据会存在乱码的隐患，所以从数据库创建时就要避免
:::


#### 删除数据库
```sql
-- 语法
DROP DATABASE [IF EXISTS] `数据库名`;
-- 示例
DROP DATABASE `web2`;
```


#### 使用数据库
在创建数据表之前必须使用(指定)数据库

```sql
USE `数据库名`;
```
## 数据表
数据表包含在数据库中，在指定了数据库之后，可以进行表操作，表和表之间可以通过`主键值`相关联

### 创建表
```sql
CREATE TABLE `数据表名`(
    `字段名` 数据类型 [约束类型] [注释]
)[DEFAULT CHARACTER SET UTF8] [注释];   

-- 示例(无约束类型) 创建学生表  编号 姓名 年龄 性别 联系方式 
CREATE TABLE `stu`(
    `id` INT,
    `name` VARCHAR(40),
    `age` TINYINT,
    `sex` CHAR(1),
    `phone` VARCHAR(11)
)DEFAULT CHARACTER SET UTF8;
```

### 查看表
#### 查看所有的数据表
```sql
SHOW TABLES;
```

#### 查看表结构(字段信息)
```sql
DESC `stu`;
```

#### 查看表结构创建方式
```sql
SHOW CREATE TABLE `stu`;
```

### 数据查询
为更好的实现以下内容，请先添加 **`user`** 数据至数据库中
@[code](user.sql)
:::tip
**终端导入**
```
mysql -uroot < ***.sql
```
**应用程序导入**<br>
**<font color="#f5ca4f" size="5px">Navicat</font>**<br>
***<font color="#6c78af" size="5px">php</font><font color="#f89c0e" size="5px">MyAdmin</font>***
:::

#### WHERE约束
使用 **WHERE约束** 可以通过`比较`、`逻辑`条件查询指定的内容,提高查询效率
##### 比较运算符
**`>`** 大于 **`=`** 等于<br> 
**`<`** 小于 **`!=`** 不等于
```sql
-- 查询年龄小于50的用户信息
SELECT * FROM `user` WHERE `age` < 50;

-- 查询id大于25的用户信息
SELECT * FROM `user` WHERE `id` > 25;

-- 查询工作是web的用户信息
SELECT * FROM `user` WHERE `job` = 'web';

-- 查询工作不是java的用户信息
SELECT * FROM `user` WHERE `job` != 'java';
```
##### 逻辑运算符
###### `AND` 
且的关系 必须满足所有条件
```sql
-- 查询id大于10且薪资小于12000的用户信息
SELECT * FROM `user` WHERE `id` > 10 AND `sal` < 12000;

-- 查询工作是web的女性用户信息
SELECT * FROM `user` WHERE `job` = 'web' AND `sex` = 1;
```
###### `OR` 
或者关系 满足任意条件即可
```sql
-- 查询年龄小于25或者薪资大于10000的用户信息
SELECT * FROM `user` WHERE `age` < 25 OR `sal` > 10000;

-- 查询id大于25或者年龄小于25的用户信息
SELECT * FROM `user` WHERE `id` > 25 OR `age` < 25;

-- 查询薪资小于6000的男用户或者年龄大于90的用户信息
SELECT * FROM `user` WHERE `sal` < 6000 AND `sex` = 0 OR `age` > 90;
```

#### 分组查询 `GROUP BY`
将字段分组显示,默认显示主键值最小的一条
```sql
-- 查询所有用户的工作岗位
SELECT * FROM `user` GROUP BY `job`;
``` 

#### 排序 `ORDER BY`
将查询结果按照一定的顺序进行排序 (默认为升序)<br>
升序 **`ASC`** (ascend) 降序 **`DESC`** (descend)
```sql
-- 按照年龄升序
SELECT * FROM `user` ORDER BY `age`;
SELECT * FROM `user` ORDER BY `age` ASC;

-- 按照薪资降序
SELECT * FROM `user` ORDER BY `sal` DESC;
```
#### 模糊查询 LIKE
使用 **`%`** 代替任意内容、任意数量

##### 包含 **`%...%`**
```sql
-- 查询用户地址是"东城"的用户信息
SELECT * FROM `user` WHERE `addr` LIKE '%东城%';

-- 查询住在"天津"的女性用户信息
SELECT * FROM `user` WHERE `addr` LIKE '%天津%' AND `sex` = 1;
```
##### 结尾 **`%...`**

```sql
-- 查询地址用'城'字结尾的用户信息
SELECT * FROM `user` WHERE `addr` LIKE '%城';
```
##### 开头 **`...%`**
```sql
-- 查询地址用'南'字开头的用户信息
SELECT * FROM `user` WHERE `addr` LIKE '南%';
```
##### 转义 **`\%`** 
```sql
-- 查询住在 %区的用户信息
-- 将%这个特殊字符 使用\符号转义 成普通字符
SELECT * FROM `user` WHERE `addr` LIKE '%\%%';
```
##### 占位数 **`_`**
**`_`** 下划线 代表任意内容 1个字符数量
```sql
-- 查询地址中倒数第二个字是'西'字的用户信息
SELECT * FROM `user` WHERE `addr` LIKE '%西_';
```

## 聚合函数
    可以对查询结果进行特殊结算

### **`COUNT( )`** 计数
```sql
-- 统计表中符合条件的行数
SELECT COUNT(*) FROM `user`;
```

### **`MAX( )`** 最大值
```sql
-- 查询用户最大的年龄是多少?
SELECT MAX(age) FROM `user`;
```

### **`MIN( )`** 最小值
```sql
-- 查询用户薪资最少的是多少?
SELECT MIN(sal) FROM `user`;
```

### **`AVG( )`** 平均值
```sql
-- 查询用户的平均年龄是多少?
SELECT AVG(age) FROM `user`;
```

### **`SUM( )`** 求和
```sql
-- 查询用户的工资总和
SELECT SUM(sal) FROM `user`;
```

## 分页 **`LIMIT`** 
**`LIMIT num1，num2`** 通过分页可以将数据分页，前端实际应用在`翻页`

:::tip
id与索引的关系<br>
| 内容  | 数值  | 数值  | 数值  | 数值  | 数值  |
| :---: | :---: | :---: | :---: | :---: | :---: |
|  id   |   1   |   2   |   3   |   4   |   5   |
| 索引  |   0   |   1   |   2   |   3   |   4   |
:::
第一参数 **num1** : 返回行的偏移量(索引) 从0开始<br>
第二参数 **num2** : 返回指定的数量(分页的数量)与id、索引没关系

### 起始页计算公式
`起始索引` = (`当前页码` - `1`) × `每页的条数`

### `演示` 分页
假设有29条数据 一页显示8条 使用SQL模拟分页结果  
**emp.sql** <Badge text="需导入"/>
```sql
SET NAMES UTF8;
USE `tb`;
DROP TABLE IF EXISTS `emp`;

CREATE TABLE `emp`(
`id` INT COMMENT "员工编号",
`name` VARCHAR(50) COMMENT "员工姓名",
`job` VARCHAR(50) COMMENT "员工的工作",
`mgr` INT COMMENT "上级编号",
`sal` DECIMAL(7,2) COMMENT "工资",
`did` INT COMMENT "部门编号"
)DEFAULT CHARACTER SET UTF8  COMMENT "员工信息表" ;

INSERT INTO `emp` VALUES(1,'tom','java',2,1000,20);
INSERT INTO `emp` VALUES(2,'rose','web',5,1000,30);
INSERT INTO `emp` VALUES(3,'lucy','java',5,5000,30);
INSERT INTO `emp` VALUES(4,'jones','php',5,6000,20);
INSERT INTO `emp` VALUES(5,'mary','java',2,7000,30);
INSERT INTO `emp` VALUES(6,'leo','php',7,12000,30);
INSERT INTO `emp` VALUES(7,'king','php',7,8000,10);
INSERT INTO `emp` VALUES(8,'jms','web',1,9000,20);
INSERT INTO `emp` VALUES(9,'charles','web',NULL,5000,10);
INSERT INTO `emp` VALUES(10,'bill','web',6,1500,10);
INSERT INTO `emp` VALUES(11,'niki','c++',6,4000,20); 
INSERT INTO `emp` VALUES(12,'fred','.net',5,3000,10);
INSERT INTO `emp` VALUES(13,'gary','dba',2,3000,20);
INSERT INTO `emp` VALUES(14,'helen','c++',1,8000,10);
INSERT INTO `emp` VALUES(15,'skt','dba',3,28000,10);
INSERT INTO `emp` VALUES(16,'ski','web',6,1500,30);
INSERT INTO `emp` VALUES(17,'lon','dba',9,1500,30);
INSERT INTO `emp` VALUES(18,'skii','web',17,2500,30);
```
方法
```sql
-- 第1页: 返回id值从1到8的数据
SELECT * FROM `user` LIMIT 0,8; 

-- 第2页: 返回id值从9到16的数据
SELECT * FROM `user` LIMIT 8,8;

-- 第3页: 返回id值从17到24的数据
SELECT * FROM `user` LIMIT 16,8 ;

-- 第4页: 返回id值从25到32的数据
SELECT * FROM `user` LIMIT 24,8 ;
```

## 子查询
将一个查询语句嵌套在另外一个查询语句中,把内层语句的查询结果,作为最外层语句的查询条件继续查询，内层语句需要使用括号包裹

### `演示` 子查询
以[emp.sql](README.md#练习)为查询对象,查询薪资大于平均薪资的员工信息
```sql
-- 1.先查平均薪资
SELECT AVG(sal) FROM `emp`;

-- 2.再查薪资大于平均薪资的员工信息
SELECT * FROM `emp` WHERE `sal` >(SELECT AVG(sal) FROM `emp`);
```
### 练习
1.查询工资大于10号部门平均工资的信息
```sql
-- 进行子查询
SELECT * FROM `emp` WHERE `sal` > (SELECT AVG(sal) FROM `emp` WHERE `did` = 10);

-- 查询和TOM同一个部门的员工信息
-- 查tom在哪个部门? 
SELECT `did` FROM `emp` WHERE `name` = 'tom';

-- 子查询
SELECT * FROM `emp` WHERE `did` = (SELECT `did` FROM `emp` WHERE `name` = 'tom') AND `name` != 'tom';
```

2.查询薪资高于30号部门最高薪资的员工id 姓名 薪资
```sql
-- 查30号部门最高薪资
SELECT MAX(sal) FROM `emp` WHERE `did` = 30;

-- 子查询
SELECT `id`,`name`,`sal` FROM `emp`WHERE `sal` > (SELECT MAX(sal) FROM `emp` WHERE `did` = 30);
```

## **`UPDATE`** 修改

```sql
语法: UPDATE `表名` SET `字段名` = 值 [WHERE约束]
```

```sql
-- 老板生儿子,全体员工涨薪500块
UPDATE `user` SET `sal` = `sal` + 500; 

-- 生儿子 给申哥(id为28)涨薪1000块
UPDATE `user` SET `sal` = `sal` + 1000 WHERE `id` = 28;

-- 给小于50岁的女性用户且工作是web的涨薪500块
UPDATE `user` SET  `sal` = `sal` + 500 
WHERE `age` < 50 AND `sex` = 1 AND `job` = 'web'; 

-- 给年龄大于70或者薪资不到5000的或者住在"上海"的用户 ,岗位设置为"保密"
UPDATE `user` SET  `job` = '保密' 
WHERE `age` > 70 OR `sal` < 5000 OR `addr` LIKE '%上海%';

-- 给年龄小于25岁的女用户修改住址为'秘密花园' 且年龄减1岁 薪资清零
UPDATE `user` SET 
`addr` = '秘密花园', `age` = `age` - 1,  `sal` = 0
WHERE `age` < 25 AND 'sex' = 1;        
```

## **`DELETE`** / **`TRUNCATE`** 删除
### DELETE
删除表中的数据 但保留字段与id值。
:::tip
使用DELETE方法删除表中全部数据，再重新添加数据，id值会按照删除前最后一个id值顺延。
:::

```sql
-- 删除全部的数据
DELETE FROM `user`;

-- 删除指定的数据信息(WHERE约束)
-- 删除工作是保密的用户信息
DELETE FROM `user` WHERE `job` = '保密';

-- 删除工作是C++男性用户信息
DELETE FROM `user` WHERE `job` = 'c++' AND `sex` = 0;
```
### TRUNCATE
只能删除整个表中的数据 保留字段
:::tip
使用TRUNCATE方法删除表中全部数据后,再重新添加数据,id值会从0开始。
:::

```sql
TRUNCATE `user`;
```

## **`AS`** 起别名 
### `演示` 起别名
以[emp.sql](README.md#练习)为查询对象，查询工作和薪资与员工ski完全相同的员工的相关信息<br>
要求查询结果中的id字段使用中文 "编号" 来显示
```sql
-- 查询与员工ski完全相同工作
SELECT `job` FROM `emp` WHERE `name` = 'ski';

-- 查询与员工ski完全相同薪资
SELECT `sal` FROM `emp` WHERE `name` = 'ski';

-- 子查询
SELECT `id` AS '编号', `name` AS '姓名', `job`, `sal` FROM `emp` 
WHERE `job` = (SELECT `job` FROM `emp` WHERE `name` = 'ski') 
AND
`sal` = (SELECT `sal` FROM `emp` WHERE `name` = 'ski');
```

## 联合查询
多表联合查询，有可以关联的字段，一般是 **`id`** 做关联<br>
联合查询的结果源自于多张表中的数据

<Badge text="创建" />数据表,其中b表中的aid字段和a表中的id字段关联

```sql
CREATE TABLE `a`(
    `id` INT,
    `name` VARCHAR(20)
)DEFAULT CHARACTER SET UTF8;

CREATE TABLE `b`(
    `id` INT,
    `addr` VARCHAR(20),
    `aid` INT
)DEFAULT CHARACTER SET UTF8;

INSERT INTO `a` VALUES(1,'小艺');
INSERT INTO `a` VALUES(2,'申哥');
INSERT INTO `a` VALUES(3,'小宇');

INSERT INTO `b` VALUES(1,'北京',1);
INSERT INTO `b` VALUES(2,'上海',2);
INSERT INTO `b` VALUES(3,'南京',5);
```

### **`INNER JOIN`** 内连接  
只连接相匹配的行,具有排他性,返回表的交集
### `演示` 联合查询
查询a表中员工的住址
```sql
SELECT a.*, b.addr FROM `a`
INNER JOIN `b`
ON a.id  = b.aid;
```