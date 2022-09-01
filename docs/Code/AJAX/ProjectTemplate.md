# AJAX项目模板
使用restful方式完成用户表操作。  

## 项目结构
- pro 静态页面
  - [login.html](项目模板.md#login-html)
  - [list.html](项目模板.md#list-html)
  - [del.html](项目模板.md#del-html)
  - [update.html](项目模板.md#update-html)
  - [reg.html](项目模板.md#reg-html)
- routes 路由
  - [pro.js](项目模板.md#pro-js)
- [app.js](项目模板.md#app-js) 项目主程序
- [pool.js](项目模板.md#pool-js) 数据库

框架：Express、Mysql、body-parser

配套数据库：
[学子商城数据库](/Code/PROJECT/学子商城.md#数据库文件)
### app\.js
@[code](xz/app.js)

### pool\.js
@[code](xz/pool.js)

### pro\.js
@[code](xz/routes/pro.js)

## 登录
| 请求方法 | 请求接口               | 响应 **1** | 响应 **0**       |
| :------: | :--------------------- | :--------- | :--------------- |
|   get    | /v1/login/:uname&:upwd | 登录成功   | 用户名或密码错误 |

后端取值req.params.uname  
前端网页添加用户名，密码框，点击按钮发送AJAX请求，完成登录功能（用户名和密码框要求通过获取焦点和失去焦点事件来完成对应的提示和验证）。

### login\.html
@[code](xz/pro/login.html)

## 获取用户列表
| 请求方法 | 请求接口     | 响应 **1** | 响应 **0** |
| :------: | :----------- | :--------- | :--------- |
|   get    | /v1/userlist | 成功       | 错误       |

前端页面接收后端响应回来的数据，当页面加载时以表格形式显示到网页中。

### list\.html
@[code](xz/pro/list.html)

## 根据id删除用户
| 请求方法 | 请求接口         | 响应 **1** | 响应 **0** |
| :------: | :--------------- | :--------- | :--------- |
|  delete  | /v1/deluser/:uid | 删除成功   | 删除失败   |

### del\.html
@[code](xz/pro/del.html)

## 根据id查询用户
| 请求方法 | 请求接口            | 响应 **1**    | 响应 **0** |
| :------: | :------------------ | :------------ | :--------- |
|   get    | /v1/searchUser/:uid | 成功 获取JSON | 错误       |

### 获取浏览器地址栏中查询字符串参数
```js
function showUser(){
    //let uid=3;
    //获取浏览器地址栏中查询字符串参数-BOM操作
    let urlParams=new URLSearchParams(location.search);
    let uid=urlParams.get("uid");
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            let res=xhr.responseText;
            if(res=="0"){
                alert('没查询到您要的数据');
            }else{
                let arr=JSON.parse(res);//将json字符串解析为数组
                huid.value=arr[0].uid;
                uname.value=arr[0].uname;
                email.value=arr[0].email;
                phone.value=arr[0].phone;
                //真实姓名
                if(user_name.value==null){
                    user_name.value="不详";
                }else{
                    user_name.value=arr[0].user_name;
                }
                //性别
                if(arr[0].gender==1){
                    man.checked=true;
                }else if(arr[0].gender==0){
                    woman.checked=true;
                }else{
                    unk.checked=true;
                }
             }
        }
    }
    xhr.open('get',`/pro/v1/searchUser/${uid}`,true);
    xhr.send();
}
```



## 根据id修改用户信息
| 请求方法 | 请求接口   | 响应 **1** | 响应 **0** |
| :------: | :--------- | :--------- | :--------- |
|   put    | /v1/update | 修改成功   | 修改失败   |


### update\.html
@[code](xz/pro/update.html)


## 根据uname查询用户信息
| 请求方法 | 请求接口             | 响应 **1**   | 响应 **0** |
| :------: | :------------------- | :----------- | :--------- |
|   get    | /v1/queryUser/:uname | 用户名已占用 | 用户名可用 |

### 验证用户名是否已被占用
```js
let xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status===200){
        let res=xhr.responseText;
        if(res=="1"){
            uname_msg.innerHTML="× 该用户名称已被占用";
            isUname=false;
        }else{
            uname_msg.innerHTML="√ 用户名可以注册";
            isUname=true;
        }
    }
}
xhr.open('get',`/pro/v1/queryUser/${$uname}`,true);
xhr.send();
```


## 注册新用户
| 请求方法 | 请求接口 | 响应 **1** | 响应 **0** |
| :------: | :------- | :--------- | :--------- |
|   post   | /v1/reg  | 注册成功   | 注册失败   |

### reg\.html
@[code](xz/pro/reg.html)
