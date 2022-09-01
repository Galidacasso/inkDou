# 接口说明文档

## 用户注册

接口地址：http://127.0.0.1:8080/user/register

返回格式：json

请求方式：post

请求示例：http://127.0.0.1:8080/user/register

请求参数说明：

| 名称  | 必填 | 类型   | 说明   |
|-------|------|--------|--------|
| uname | 是   | String | 用户名 |
| upwd  | 是   | String | 密码   |
| email | 是   | String | 邮箱   |
| phone | 是   | string | 电话   |

返回参数

| 名称 | 类型   | 说明                                                                       |
|------|--------|----------------------------------------------------------------------------|
| code | Int    | 返回码<br>200-注册成功<br>401-用户名为空<br>402-密码为空<br>403-邮箱为空<br>404-电话为空 |
| msg  | string | 返回说明                                                                   |

Json返回示例
```json
{ "code":"200", "msg":"register suc" }
```
## 用户登录

接口地址：http://127.0.0.1:8080/user/login

返回格式：json

请求方式：post

请求示例：http://127.0.0.1:8080/user/login

请求参数说明：

| 名称  | 必填 | 类型   | 说明   |
|-------|------|--------|--------|
| uname | 是   | String | 用户名 |
| upwd  | 是   | String | 密码   |

返回参数

| 名称 | 类型   | 说明                                                                  |
|------|--------|-----------------------------------------------------------------------|
| code | Int    | 返回码  200-登录成功 301-用户名或密码错误 401-用户名为空 402-密码为空 |
| msg  | string | 返回说明                                                              |

Json返回示例
```json
{ "code":"200", "msg":"login suc" }
```
## 用户检索

接口地址：http://127.0.0.1:8080/user/detail

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/user/detail?uid=1

请求参数说明：

| 名称 | 必填 | 类型 | 说明     |
|------|------|------|----------|
| Uid  | 是   | Int  | 用户编号 |

返回参数

| 名称 | 类型   | 说明                                    |
|------|--------|-----------------------------------------|
| code | Int    | 返回码  301-未检索到用户 401-用户名为空 |
| msg  | string | 返回说明                                |

返回示例
```json
{
    "uid": 1,
    "uname": "dingding",
    "upwd": "123456",
    "email": "ding@qq.com",
    "phone": "13501234567",
    "avatar": "img/avatar/default.png",
    "user_name": "丁伟",
    "gender": 1
}
```
## 删除用户

接口地址：http://127.0.0.1:8080/user/delete

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/user/delete?uid=1

请求参数说明：

| 名称 | 必填 | 类型 | 说明     |
|------|------|------|----------|
| Uid  | 是   | Int  | 用户编号 |

返回参数

| 名称 | 类型   | 说明                                               |
|------|--------|----------------------------------------------------|
| code | Int    | 返回码  200-成功删除 301-删除失败 401-用户编号为空 |
| msg  | string | 返回说明                                           |

Json返回示例
```json
{ "code":"200", "msg":"delete suc" }
```
## 修改用户信息

接口地址：http://127.0.0.1:8080/user/update

返回格式：json

请求方式：post

请求示例：http://127.0.0.1:8080/user/update

请求参数说明：

| 名称      | 必填 | 类型   | 说明           |
|-----------|------|--------|----------------|
| uid       | 是   | int    | 用户编号       |
| email     | 是   | String | 邮箱           |
| phone     | 是   | string | 电话           |
| gender    | 是   | Int    | 性别 1-男 0-女 |
| user_name | 是   | String | 真实姓名       |

返回参数

| 名称 | 类型   | 说明                                                                                                       |
|------|--------|------------------------------------------------------------------------------------------------------------|
| code | Int    | 返回码  200-更新成功 301-更改失败 401-用户编号为空 402-邮箱为空 403-电话为空 404-性别为空 406-真姓实名为空 |
| msg  | string | 返回说明                                                                                                   |

Json返回示例
```json
{ "code":"200", "msg":"update suc" }
```
## 用户列表

接口地址：http://127.0.0.1:8080/user/list

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/list/detail?pno=1&pageSize=10

请求参数说明：

| 名称     | 必填 | 类型 | 说明     |
|----------|------|------|----------|
| pno      | 否   | Int  | 页码     |
| pageSize | 否   | Int  | 每页大小 |

返回参数——数组

Json返回示例
```json
{
    "recordCount": 4,
    "pageSize": 9,
    "pageCount": 1,
    "pno": 1,
    "data": [
        {
            "uid": 4,
            "uname": "yaya",
            "email": "ya@qq.com",
            "phone": "13501234560",
            "avatar": "img/avatar/default.png",
            "user_name": "秦小雅",
            "gender": 0
        },
        {
            "uid": 3,
            "uname": "doudou",
            "email": "dou@qq.com",
            "phone": "13501234569",
            "avatar": "img/avatar/default.png",
            "user_name": "窦志强",
            "gender": 1
        }
    ]
}
```
## 检测邮箱

接口地址：http://127.0.0.1:8080/user/checkemail

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/user/checkemail?email=ya@qq.com

请求参数说明：

| 名称  | 必填 | 类型   | 说明     |
|-------|------|--------|----------|
| email | 是   | string | 用户邮箱 |

返回参数

| 名称 | 类型   | 说明                          |
|------|--------|-------------------------------|
| code | Int    | 返回码  200-不存在 201-已存在 |
| msg  | string | 返回说明                      |

Json返回示例
```json
{ "code":"200", "msg":"non-exists" }
```
## 检测手机

接口地址：http://127.0.0.1:8080/user/checkphone

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/user/checkphone?phone=18111111111

请求参数说明：

| 名称  | 必填 | 类型   | 说明     |
|-------|------|--------|----------|
| phone | 是   | string | 用户电话 |

返回参数

| 名称 | 类型   | 说明                          |
|------|--------|-------------------------------|
| code | Int    | 返回码  200-不存在 201-已存在 |
| msg  | string | 返回说明                      |

Json返回示例
```json
{ "code":"200", "msg":"non-exists" }
```
## 检测用户名

接口地址：http://127.0.0.1:8080/user/checkuname

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/user/checkuname?uname=jing

请求参数说明：

| 名称  | 必填 | 类型   | 说明     |
|-------|------|--------|----------|
| uname | 是   | string | 用户邮箱 |

返回参数

| 名称 | 类型   | 说明                          |
|------|--------|-------------------------------|
| code | Int    | 返回码  200-不存在 201-已存在 |
| msg  | string | 返回说明                      |

Json返回示例
```json
{ "code":"200", "msg":"non-exists" }
```
## 退出登录

接口地址：http://127.0.0.1:8080/user/logout

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/user/logout

Json返回示例
```json
{ "code":"200", "msg":"logout succ" }
```
## 获取当前用户信息

接口地址：http://127.0.0.1:8080/user/sessiondata

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/user/sessiondata

Json返回示例
```json
{ "uid":"1", "uname":"dingding" }
```
## 商品模块

## 商品列表

接口地址：http://127.0.0.1:8080/product/list

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/product/list?pno=1&pageSize=10

请求参数说明：

| 名称  | 必填 | 类型 | 说明     |
|-------|------|------|----------|
| pno   | 否   | Int  | 页码     |
| count | 否   | Int  | 每页大小 |

返回参数——数组

Json返回示例
```json
{
    "recordCount": 43,
    "pageSize": 5,
    "pageCount": 9,
    "pno": 2,
    "data": [
        {
            "lid": 29,
            "title": "联想(ThinkPad)轻薄系列E470c(20H3A004CD)14英寸笔记本电脑(i5-6200U 8G 500G 2G独显 Win10)黑色",
            "price": 4699,
            "sold_count": 1862,
            "is_onsale": 0,
            "pic": "img/product/md/584b5678Nbc9f1e70.jpg"
        },
        {
            "lid": 43,
            "title": "神舟(HASEE)战神Z6-KP7GT 15.6英寸游戏本笔记本电脑(i7-7700HQ 8G 1T+128G SSD GTX1050 1080P)黑色",
            "price": 5699,
            "sold_count": 1844,
            "is_onsale": 1,
            "pic": "img/product/md/58a2c667Ne2b5cb73.jpg"
        }
    ]
}
```
## 商品详情

接口地址：http://127.0.0.1:8080/product/detail

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/product/detail?lid=1

请求参数说明：

| 名称 | 必填 | 类型 | 说明     |
|------|------|------|----------|
| lid  | 是   | Int  | 商品编号 |

Json返回示例
```json
{
    "details": {
        "lid": 2,
        "family_id": 1,
        "title": "Apple MacBook Air 13.3英寸笔记本 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)",
        "subtitle": "5月焕新季，领券买新机！神券满8000减800！一体成型金属机身，纤薄轻巧，长达12小时续航",
        "price": 8268,
        "promise": "\*退货补运费 \*30天无忧退货 \*48小时快速退款 \*72小时发货",
        "spec": "双核i5/8GB内存/256GB闪存",
        "lname": "AppleMacBook Air",
        "os": "MacOS",
        "memory": "8G",
        "resolution": "1920\*1080",
        "video_card": "集成显卡",
        "cpu": "Intel i5低功耗版",
        "video_memory": "其它",
        "category": "轻薄本",
        "disk": "256G固态",
        "details": "\<div class=\\"content_tpl\\"\> \<div class=\\"formwork\\"\> \<div class=\\"formwork_img\\"\>\<br\>\</div\>\<div class=\\"formwork_img\\"\> \<img alt=\\"\\" class=\\"\\" src=\\"img/product/detail/57b15612N81dc489d.jpg\\"\> \</div\> \</div\> \<div class=\\"formwork\\"\> \<div class=\\"formwork_img\\"\> \<img alt=\\"\\" class=\\"\\" src=\\" //img20.360buyimg.com/vc/jfs/t2683/60/4222930118/169462/233c7678/57b15616N1e285f09.jpg\\"\> \</div\> \</div\> \<div class=\\"formwork\\"\> \<div class=\\"formwork_text\\"\> 技术规格请前往 www.apple.com/cn/macbook-air/specs.html 查看完整内容。\</div\>\</div\>\</div\>",
    "shelf_time": 150223456789,
        "sold_count": 1922,
        "is_onsale": 0,
        "picList": [
            {
                "pid": 4,
                "laptop_id": 2,
                "sm": "img/product/sm/57b12a31N8f4f75a3.jpg",
                "md": "img/product/md/57b12a31N8f4f75a3.jpg",
                "lg": "img/product/lg/57b12a31N8f4f75a3.jpg"
            },
            {
                "pid": 5,
                "laptop_id": 2,
                "sm": "img/product/sm/57ad359dNd4a6f130.jpg",
                "md": "img/product/md/57ad359dNd4a6f130.jpg",
                "lg": "img/product/lg/57ad359dNd4a6f130.jpg"
            },
            {
                "pid": 6,
                "laptop_id": 2,
                "sm": "img/product/sm/57ad8846N64ac3c79.jpg",
                "md": "img/product/md/57ad8846N64ac3c79.jpg",
                "lg": "img/product/lg/57ad8846N64ac3c79.jpg"
            }
        ]
    },
    "family": {
        "fid": 1,
        "fname": "AppleMacBookAir",
        "laptopList": [
            {
                "lid": 1,
                "spec": "双核i5/8GB内存/128GB闪存"
            },
            {
                "lid": 2,
                "spec": "双核i5/8GB内存/256GB闪存"
            },
            {
                "lid": 3,
                "spec": "定制款：双核i7/8G内存/128G闪存"
            },
            {
                "lid": 4,
                "spec": "定制款：双核i7/8G内存/256G闪存"
            }
        ]
    }
}
```
## 1.3删除商品

接口地址：http://127.0.0.1:8080/product/delete

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/product/delete?lid=1

请求参数说明：

| 名称 | 必填 | 类型 | 说明     |
|------|------|------|----------|
| lid  | 是   | Int  | 商品编号 |

返回参数

| 名称 | 类型   | 说明                                               |
|------|--------|----------------------------------------------------|
| code | Int    | 返回码  200-成功删除 301-删除失败 401-商品编号为空 |
| msg  | string | 返回说明                                           |

Json返回示例
```json
{ "code":"200", "msg":"delete suc" }
```
## 1.4商品添加

作用：添加商品

返回格式：json

请求方式：post

请求示例：http://127.0.0.1:8080/product/add

请求参数说明：

| 名称         | 必填 | 类型   | 说明               |
|--------------|------|--------|--------------------|
| family_id    | 是   | int    | \#所属型号家族编号 |
| title        | 是   | String | \#主标题           |
| subtitle     | 是   | String | \#副标题           |
| price        | 是   | float  | \#价格             |
| promise      | 是   | String | \#服务承诺         |
| spec         | 是   | string | \#规格/颜色        |
| lname        | 是   | string | \#商品名称         |
| os           | 是   | string | \#操作系统         |
| memory       | 是   | string | \#内存容量         |
| resollution  | 是   | string | \#分辨率           |
| video_card   | 是   | string | \#显卡型号         |
| cpu          | 是   | string | \#处理器           |
| video_memory | 是   | string | \#显存容量         |
| category     | 是   | string | \#所属分类         |
| disk         | 是   | string | \#硬盘容量及类型   |
| details      | 是   | string | \#产品详细说明     |
| shelf_time   | 是   | int    | \#上架时间         |
| sold_count   | 是   | int    | \#已售出的数量     |
| is_onsale    | 是   | int    | \#是否在售         |

返回参数

| 名称 | 类型   | 说明                                                                                 |
|------|--------|--------------------------------------------------------------------------------------|
| code | Int    | 返回码  200-添加成功 401-所属家族编号为空 402-标题为空 403-二级为空 404-价格为空 ... |
| msg  | string | 返回说明                                                                             |

Json返回示例
```json
{ "code":"200", "msg":"add suc" }
```
## 购物车模块

## 1.1添加购物车

接口地址：http://127.0.0.1:8080/cart/add

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/cart/add?lid=1&buyCount=5

请求参数说明：

| 名称     | 必填 | 类型 | 说明     |
|----------|------|------|----------|
| lid      | 是   | Int  | 商品编号 |
| buyCount | 是   | int  | 购买数量 |

json返回实例
```json
{ "code":"200", "msg":"add suc" }
```
## 1.2购物车列表

接口地址：http://127.0.0.1:8080/cart/list

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/cart/list

json返回实例
```json
{
    "code": 200,
    "data": [
        {
            "iid": "987",
            "lid": "17",
            "title": "联想(Lenovo)小新700电竞版 15.6英寸游戏笔记本电脑(i5-6300HQ 8G 500G+128G SSD GTX950M 4G IPS)黑",
            "spec": "小新700【i5 双硬盘 GTX950M】",
            "price": "5199.00",
            "count": "1",
            "pic": "img/product/sm/587f476aNcfbf7869.jpg"
        }
    ]
}
```
## 1.3删除购物车

接口地址：http://127.0.0.1:8080/cart/del

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/cart/del?iid=2

请求参数说明：

| 名称 | 必填 | 类型 | 说明       |
|------|------|------|------------|
| iid  | 是   | Int  | 购物车编号 |

json返回实例
```json
{ "code":"200", "msg":"delete suc" }
```
## 1.4修改购物车条目中的购买数量

接口地址：http://127.0.0.1:8080/cart/updatecount

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/cart/updatecount?iid=1&count=2

请求参数说明：

| 名称  | 必填 | 类型 | 说明       |
|-------|------|------|------------|
| iid   | 是   | Int  | 购物车编号 |
| count | 是   | int  | 商品数量   |

json返回实例
```json
{ "code":"200", "msg":"update suc" }
```
## 1.5修改购物车条目中的是否勾选

接口地址：http://127.0.0.1:8080/cart/updatechecked

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/cart/updatechecked?iid=1&checked=1

请求参数说明：

| 名称    | 必填 | 类型 | 说明                    |
|---------|------|------|-------------------------|
| iid     | 是   | Int  | 购物车编号              |
| checked | 是   | int  | 是否勾选 1勾选 0 未勾选 |

json返回实例
```json
{ "code":"200", "msg":"update suc" }
```
## 1.6修改购物车条目中的是否勾选

接口地址：http://127.0.0.1:8080/cart/listchecked

返回格式：json

请求方式：get

请求示例：http://127.0.0.1:8080/cart/listchecked

json返回实例
```json
{
    "code": 200,
    "data": [
        {
            "iid": "987",
            "lid": "17",
            "title": "联想(Lenovo)小新700电竞版 15.6英寸游戏笔记本电脑(i5-6300HQ 8G 500G+128G SSD GTX950M 4G IPS)黑",
            "spec": "小新700【i5 双硬盘 GTX950M】",
            "price": "5199.00",
            "count": "1",
            "pic": "img/product/sm/587f476aNcfbf7869.jpg"
        }
    ]
}
```
## 首页

接口地址：http://127.0.0.1:8080/index

返回格式：json

请求方式：get

接口示例：http://127.0.0.1:8080/index

返回参数

| 名称             | 类型  | 说明     |
|------------------|-------|----------|
| carouselItems    | array | 轮播广告 |
| recommendedItems | array | 首页推荐 |
| newArrialItems   | array | 最新上架 |
| topSaleItems     | array | 热销单品 |

Json返回示例
```json
{
    "carouselItems": [
        {
            "cid": 1,
            "img": "img/index/banner1.png",
            "title": "轮播广告商品1",
            "href": "product_details.html?lid=28"
        },
        {
            "cid": 2,
            "img": "img/index/banner2.png",
            "title": "轮播广告商品2",
            "href": "product_details.html?lid=19"
        },
        {
            "cid": 3,
            "img": "img/index/banner3.png",
            "title": "轮播广告商品3",
            "href": "lookforward.html"
        },
        {
            "cid": 4,
            "img": "img/index/banner4.png",
            "title": "轮播广告商品4",
            "href": "lookforward.html"
        }
    ],
    "recommendedItems": [
        {
            "pid": 1,
            "title": "Apple MacBook Air系列",
            "details": "酷睿双核i5处理器\|256GB SSD\|8GB内存\|英特尔HD显卡620含共享显卡内存",
            "pic": "img/index/study_computer_img1.png",
            "price": 6988,
            "href": "product_details.html?lid=1"
        },
        {
            "pid": 2,
            "title": "小米Air 金属超轻薄",
            "details": "酷睿双核i5处理器\|512GB SSD\|2GB内存\|英特尔HD独立显卡",
            "pic": "img/index/study_computer_img2.png",
            "price": 3488,
            "href": "product_details.html?lid=5"
        },
        {
            "pid": 3,
            "title": "联想E480C 轻薄系列",
            "details": "酷睿双核i7处理器\|256GB SSD\|4GB内存\|英特尔HD显卡680M",
            "pic": "img/index/study_computer_img3.png",
            "price": 5399,
            "href": "product_details.html?lid=9"
        },
        {
            "pid": 4,
            "title": "华硕RX310 金属超极本",
            "details": "酷睿双核i5处理器\|512GB SSD\|4GB内存\|英特尔HD游戏级显卡",
            "pic": "img/index/study_computer_img4.png",
            "price": 4966,
            "href": "product_details.html?lid=13"
        },
        {
            "pid": 5,
            "title": "联想小新700 电竞版游戏本",
            "details": "酷睿双核i7处理器\|1TGB SSD\|8GB内存\|英特尔HD显卡620含共享显卡内存",
            "pic": "img/index/study_computer_img5.png",
            "price": 6299,
            "href": "product_details.html?lid=17"
        },
        {
            "pid": 6,
            "title": "戴尔灵越燃7000 轻薄窄边",
            "details": "酷睿双核i5处理器\|512GB SSD\|2GB内存\|英特尔HD显卡",
            "pic": "img/index/study_computer_img3.png",
            "price": 5199,
            "href": "product_details.html?lid=19"
        }
    ],
    "newArrialItems": [
        {
            "pid": 1,
            "title": "Apple MacBook Air系列",
            "details": "酷睿双核i5处理器\|256GB SSD\|8GB内存\|英特尔HD显卡620含共享显卡内存",
            "pic": "img/index/study_computer_img1.png",
            "price": 6988,
            "href": "product_details.html?lid=1"
        },
        {
            "pid": 2,
            "title": "小米Air 金属超轻薄",
            "details": "酷睿双核i5处理器\|512GB SSD\|2GB内存\|英特尔HD独立显卡",
            "pic": "img/index/study_computer_img2.png",
            "price": 3488,
            "href": "product_details.html?lid=5"
        },
        {
            "pid": 3,
            "title": "联想E480C 轻薄系列",
            "details": "酷睿双核i7处理器\|256GB SSD\|4GB内存\|英特尔HD显卡680M",
            "pic": "img/index/study_computer_img3.png",
            "price": 5399,
            "href": "product_details.html?lid=9"
        },
        {
            "pid": 4,
            "title": "华硕RX310 金属超极本",
            "details": "酷睿双核i5处理器\|512GB SSD\|4GB内存\|英特尔HD游戏级显卡",
            "pic": "img/index/study_computer_img4.png",
            "price": 4966,
            "href": "product_details.html?lid=13"
        },
        {
            "pid": 5,
            "title": "联想小新700 电竞版游戏本",
            "details": "酷睿双核i7处理器\|1TGB SSD\|8GB内存\|英特尔HD显卡620含共享显卡内存",
            "pic": "img/index/study_computer_img5.png",
            "price": 6299,
            "href": "product_details.html?lid=17"
        },
        {
            "pid": 6,
            "title": "戴尔灵越燃7000 轻薄窄边",
            "details": "酷睿双核i5处理器\|512GB SSD\|2GB内存\|英特尔HD显卡",
            "pic": "img/index/study_computer_img3.png",
            "price": 5199,
            "href": "product_details.html?lid=19"
        }
    ],
    "topSaleItems": [
        {
            "pid": 1,
            "title": "Apple MacBook Air系列",
            "details": "酷睿双核i5处理器\|256GB SSD\|8GB内存\|英特尔HD显卡620含共享显卡内存",
            "pic": "img/index/study_computer_img1.png",
            "price": 6988,
            "href": "product_details.html?lid=1"
        },
        {
            "pid": 2,
            "title": "小米Air 金属超轻薄",
            "details": "酷睿双核i5处理器\|512GB SSD\|2GB内存\|英特尔HD独立显卡",
            "pic": "img/index/study_computer_img2.png",
            "price": 3488,
            "href": "product_details.html?lid=5"
        },
        {
            "pid": 3,
            "title": "联想E480C 轻薄系列",
            "details": "酷睿双核i7处理器\|256GB SSD\|4GB内存\|英特尔HD显卡680M",
            "pic": "img/index/study_computer_img3.png",
            "price": 5399,
            "href": "product_details.html?lid=9"
        },
        {
            "pid": 4,
            "title": "华硕RX310 金属超极本",
            "details": "酷睿双核i5处理器\|512GB SSD\|4GB内存\|英特尔HD游戏级显卡",
            "pic": "img/index/study_computer_img4.png",
            "price": 4966,
            "href": "product_details.html?lid=13"
        },
        {
            "pid": 5,
            "title": "联想小新700 电竞版游戏本",
            "details": "酷睿双核i7处理器\|1TGB SSD\|8GB内存\|英特尔HD显卡620含共享显卡内存",
            "pic": "img/index/study_computer_img5.png",
            "price": 6299,
            "href": "product_details.html?lid=17"
        },
        {
            "pid": 6,
            "title": "戴尔灵越燃7000 轻薄窄边",
            "details": "酷睿双核i5处理器\|512GB SSD\|2GB内存\|英特尔HD显卡",
            "pic": "img/index/study_computer_img3.png",
            "price": 5199,
            "href": "product_details.html?lid=19"
        }
    ]
}
```
