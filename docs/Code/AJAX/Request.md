# AJAX 请求/传参
#### AJAX 请求步骤
1. 创建异步对象(xhr)
2. 打开与服务器的连接(open() )
3. 发送请求(send() )
4. 接收响应结果(xhr.responseText)

## GET
GET请求是通过接口查询相应的数据。
这里采用的是GET请求中的query参数，不需要定义相关的注解，拿到参数后进行封装拼接，最后在接口路径后面跟上？执行请求。
::: danger 注意
采用query格式的时候，参数是不加密的，所以需要考虑应用场景的安全性。
:::


### 原生 GET
在open的参数url中添加查询字符串，注意字符串的拼接。   

### 后端  
```js:js:no-line-numbers
//1.创建路由接口-原生HTTP登录
router.get('/mylogin',(req,res)=>{
    //获取前端提交的用户名和密码
    let $uname=req.query.uname;
    let $upwd=req.query.upwd;
    console.log('前段传递过来的数据：'+$uname+$upwd);
    if(!$uname){
        res.send('用户名不能为空！');
        return;
    }
    if(!$upwd){
        res.send('用户密码不能为空！');
        return;
    }
    let sql='SELECT * FROM xz_user WHERE uname=? and upwd=?';
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send('登录成功！');
        }else{
            res.send('登录失败');
        }
    });
});
```

### 前端  
```html:no-line-numbers
<h1>登录页面</h1>
<p>用户名称：<input type="text" id="uname"></p>
<p>用户密码：<input type="password" id="upwd"></p>
<button onclick="sendAjax()">登录</button>
<script>
    // 定义一个函数，发送ajax请求
    function sendAjax(){
        //1.创建异步对象
        let xhr=new XMLHttpRequest();
        //2.绑定监听，接收响应结果
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4 && xhr.status===200){
                let result=xhr.responseText;
                alert(result);
            }
        }
        //3.创建请求
        //获取用户名和密码的值
        let myname=uname.value;
        let mypwd=upwd.value;
        console.log(myname+mypwd);
        //xhr.open('get','/ajax/mylogin?uname='+myname+'&upwd='+mypwd,true);
        xhr.open('get',`/ajax/mylogin?uname=${myname}&upwd=${mypwd}`,true);
        //4.发送请求
        xhr.send();
    }
</script>
```

::: warning 注意
get请求，可使用浏览器地址栏进行验证，其他请求不能用地址栏验证。
:::

#### 其他说明
app.js中挂载路由
```js:no-line-numbers
app.use('/test',ajaxRouter);
```
ajax.js中为路由接口
```js:no-line-numbers
router.get("/ajax",function(req,res)=>{...})
```
http://127.0.0.1:8080<font color=red>/test</font><font color=blue>/ajax</font>


### restful GET
restful没有请求的主体的接口，有独特的格式。 

### 后端  
```js:js:no-line-numbers
router.get('/restful_login/:uname&:upwd',(req,res)=>{
    //获取前端提交的用户名和密码
    let $uname=req.params.uname;
    let $upwd=req.params.upwd;
    let sql='SELECT * FROM xz_user WHERE uname=? and upwd=?';
    pool.query(sql,[$uname, $upwd],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send('登录成功');
        }else{
            res.send('登录失败');
        }
    });
});
```
::: tip 参数接收
在后端，见到 "**`:`**" ,就是用 **`req.params`** 接收参数
:::

### 前端  
```html:no-line-numbers
<p>用户名称：<input type="text" id="uname"></p>
<p>用户密码：<input type="password" id="upwd"></p>
<button onclick="rest_login()">restful登录</button>
<script>
    //restful登录
    function rest_login(){
        //1.创建异步对象
        let xhr=new XMLHttpRequest();
        //2.绑定监听，取回响应结果
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4 && xhr.status===200){
                let result=xhr.responseText;
                alert(result);
            }
        }
        //3.创建请求-打开连接
        //获取用户名和密码 并做非空验证
        let myname=uname.value;
        if(!myname){
            alert('用户名称不能为空');
            return;
        }
        let mypwd=upwd.value;
        if(!mypwd){
            alert('用户密码不能为空');
            return;
        }
        xhr.open('get',`/ajax/restful_login/${myname}&${mypwd}`,true);
        //4.发送请求
        xhr.send();
    }
</script>
```
::: tip 参数的链接符号
可以用 **`&`** 和 **`–`**
:::

### get 非空验证
http原生get请求，前台、后台都可以做非空验证。  
restful，强制在前台做非空验证。
```js:no-line-numbers
if(!$uname){alert("用户名不能为空");return;}
if(!$upwd){alert("密码不能为空");return;}
```

## DELETE
DELETE请求是用来执行删除操作，配合数据库进行相应的删除动作。  
与get一样，将 **`get`** 改为 **`delete`** 即可。

### 后端
```js:no-line-numbers
//用restful规则写删除功能 ，delete方法 根据uid删除用户
//delete方法不能直接用浏览器访问（需要用表单/ajax发请求）
router.delete('/restful_del/:uid',(req,res)=>{
    //获取用户id
    let $uid=req.params.uid;
    let sql='DELETE FROM xz_user WHERE uid=?';
    pool.query(sql,[$uid],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send('1');//删除成功
        }else{
            res.send('0')//删除失败
        }
    });
});
```

### 前端  
```html:no-line-numbers
请输入用户ID：<input type="text" id="uid"><br>
<button onclick="restful_del()">restful删除用户</button>
<script>
    function restful_del(){
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4 && xhr.status===200){
                let res=xhr.responseText;
                if(res=='1'){
                    alert('删除成功');
                }else{
                    alert('删除失败');
                }
            }
    }
    //获取用户ID
    let myuid=uid.value;
    if(!myuid){
        alert('用户id不能为空');
        return;
    }
    xhr.open('delete',`/ajax/restful_del/${myuid}`,true);
    xhr.send();
}
</script>
```

## POST
POST方法一般用于创建订单或者创建的某个动作。  
POST请求是把表单打包后隐藏在后台发送给服务器。  
POST的安全性要比GET的安全性高。  
restful和http的原生post一模一样

### 后端
```js:no-line-numbers
//注册-post方法 原生-restful写法相同
router.post('/reg',(req,res)=>{
    //获取前端提交的数据
    let obj=req.body;
    console.log(obj);
    if(!obj){
       res.send('注册数据有误！'); 
       return;
    }
    let sql='INSERT INTO xz_user set ?';
    pool.query(sql,[obj],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send('1');//注册成功
        }else{
            res.send('0');//注册失败
        }
    });
});
```

### 前端  
```html:no-line-numbers
<p>用户名称：<input type="text" id="uname"></p>
<p>用户密码：<input type="password" id="upwd"></p>
<p>用户邮箱：<input type="email" id="email"></p>
<p>电话号码：<input type="text" id="phone"></p>
<p>用户性别：
    <input type="radio" id="man">男
    <input type="radio" id="woman">女
    <input type="radio" id="unk">保密
</p>
<button onclick="reg()">注册</button>
<script>
    function reg(){
        //1.创建异步对象
        let xhr=new XMLHttpRequest();
        //2.绑定监听，取回结果
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4&&xhr.status===200){
                let res=xhr.responseText;
                if(res=="1"){
                    alert('注册成功');
                }else{
                    alert('注册失败');
                }
            }
        }
        //.创建请求
        xhr.open('post','/ajax/reg',true);
        //.发送请求
        //收集页面的数据，通过send方法发送给服务器端
        let myname=uname.value;
        let mypwd=upwd.value;
        let myemail=email.value;
        let myphone=phone.value;
        let mygender="";
        if(man.checked==true){
            mygender=1;
        }else if(woman.checked==true){
            mygender=0;
        }else{
            mygender=-1;//保密
        }
        let str=`uname=${myname}&upwd=${mypwd}&email=${myemail}&phone{myphone}&gender=${mygender}`;
        console.log(str);
        //如果是post请求，必须设置请求头信息-对提交的数据进行编码
        xhr.setRequestHeader("Content-Type","applicatiox-www-form-urlencoded");
        xhr.send(str);
    }
</script>
```

## PUT
put请求与post使用方式一样。
put请求专注于update操作。

### 后端
```js:no-line-numbers
//修改用户 put方法
router.put('/update',(req,res)=>{
    //获取前端提交的数据
    let obj=req.body;
    let $uid=req.body.uid;
    let sql='UPDATE xz_user set ? WHERE uid=?';
    pool.query(sql,[obj,$uid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send('1');//修改成功
        }else{
            res.send('0');//修改失败
        }
    });
});
```

### 前端  
```html:no-line-numbers
<p>用户ID：<input type="text" id="uid"></p> 
<p>用户名称：<input type="text" id="uname"></p>
<p>用户邮箱：<input type="text" id="email"></p>
<p>电话号码：<input type="text" id="phone"></p>
<p>用户性别：<input type="radio" id="man">男
            <input type="radio" id="woman">女
            <input type="radio" id="unk">保密

</p>
<button onclick="update()">修改用户</button>
<script>
    function update(){
        //1.创建异步对象
        let xhr=new XMLHttpRequest();
        //2.绑定监听，取回结果
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4 && xhr.status===200){
                let res=xhr.responseText;
                if(res=="1"){
                    alert('修改成功');
                }else{
                    alert('修改失败');
                }
            }
        }
        //3.创建请求
        xhr.open('put','/ajax/update',true);
        //4.发送请求
        let myid=uid.value;
        let myname=uname.value;
        let myemail=email.value;
        let myphone=phone.value;
        let mygender=-1;//保密
        if(man.checked){
            mygender=1;
        }else if(woman.checked){
            mygender=0;
        }else{
            mygender=-1;
        }
        let str=`uname=${myname}&email=${myemail}&phone=${myphone}&gender{mygender}&uid=${myid}`;
        console.log(str);
        //设置请求头信息
        xhr.setRequestHeader("Content-Type","applicationx-www-form-urlencoded");
        xhr.send(str);
    }
</script>
```