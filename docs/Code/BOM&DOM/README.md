# DOM
DOM: **D**ocument **O**bject **M**odel 文档对象模型  
即把网页当做成对象，把网页中的所有元素标签都当做节点。

## 简易DOM 
简易DOM事件修改浏览器元素内的流程
1. 由元素触发单击事件 onclick 
2. 获取元素DOM对象： 
    - 之前常用方式: document.getElementById(id值)
    - 现在推荐方式: id值.方法 如: d1.innerHTML
3. 使用innerHTML 或者 value 方式获取DOM对象中的值
4. 重新赋值来达到修改内容的目的

### 改值
```html 
<div id="d1">A</div>
<!-- onclick js中的单击事件 -->
<button onclick="setName()">修改A为B</button>
<script>
    // 获取div对象
    // 获取指定ID值的一个DOM对象
    var divEle = document.getElementById('d1');
    console.log(divEle);
    function setName() {
        // 获取数据
        // innerHTML 可以用来获取或者设置标签中的元素
        let data = divEle.innerHTML;
        console.log(data);
        // 修改数据
        divEle.innerHTML = "B";
        // 思考3个问题: 
        // 1. divEle对象是什么样的? 
        //    整个div的dom节点
        // 2. 获取的数据时是什么?
        //    标签中的值
        // 3. 修改数据的原理是是什么?
        //    重复赋值
    }      
</script>
```

### 改值并储存
```html
<!-- 点击按钮把A变成B -->
<input type="text" value="1" id="in1">
<button onclick="setName()">改值</button>
<script>
    function setName() {
        // 获取input对象
        var intEle = document.getElementById('in1');
        console.log(intEle);
        // 获取对象中的数据并设置值
        intEle.value = 'B';
    }
</script>
<!-- 点击按钮把小艺放在div中 -->
<br>
<button onclick="setValue()">点我存值</button>
<div id="d1"></div>
<script>
    function setValue() {
        // 获取div对象修改至 简化写法
        d1.innerHTML = 'B';
    }
</script>
```

### 输出html标签
```html
<button onclick="add()">增加超链接</button>

<div id="d1"></div>
<script>
    function add() {
        console.log("被触发了");
        d1.innerHTML = '<a href="">百度</a>';
    }
</script>
```
### 取值拼接
```html
<input type="text" placeholder="请输入值" id="int1">
<div id="d1"></div>
<button onclick="addValue()">点我把input里的值添加到div中变成列表</button>
<script>
    function addValue() {
        console.log('触发事件');
        // // 1. 获取input的值
        // let intEle = document.getElementById('int1').value;
        // console.log('获取input的值',intEle);
        // // 2. 获取div对象
        // let divEle = document.getElementById('d1');
        // // 3. 赋值
        // divEle.innerHTML = `
        //             <ul>
        //                 <li>${intEle}</li>
        //             </ul>`;
        //    上方写法简化
        d1.innerHTML += `<ul><li>${int1.value}</li></ul>`;
    }
</script>
```

### 查询拼接1
```html
<button onclick="show()">点我展示表格数据</button>
    <div id="d1"></div>
    
<script>
    let arr = [
        {id:1,name:'小艺',age:18},
        {id:2,name:'小宇',age:19},
        {id:3,name:'申哥',age:20},
    ]
    function show() {
        console.log('触发了');
        // 表格上半部分
        let str = `
                <table border="1" bordercolor="red">
                    <tr>
                        <td>编号</td>
                        <td>姓名</td>
                        <td>年龄</td>
                    </tr>`;
        // 数据
        for (let i = 0; i < arr.length; i++) {
            str +=`<tr>
                        <td>${arr[i].id}</td>
                        <td>${arr[i].name}</td>
                        <td>${arr[i].age}</td>
                    </tr>`;
        }           
                    
        // 下半部分
        str += `</table>`;
        d1.innerHTML = str;
    }
</script>
```

### 查询拼接2
通过js进行判断
```html
    <button onclick="show()">点我展示表格数据</button>
    <div id="d1"></div>

    <script>
        // sex: 0代表男 1代表女
        let arr = [
            {id:1,name:'小艺',sex:1},
            {id:2,name:'小宇',sex:0},
            {id:3,name:'申哥',sex:0},
        ]

        function show() {
            console.log('触发了');
            // 表格上半部分  
            let str = `
                    <table border="1" bordercolor="pink"> 
                        <tr>
                            <td>编号</td>
                            <td>姓名</td>
                            <td>性别</td>
                            <td>操作</td>
                        </tr>`;
            // 数据
            for (let i = 0; i < arr.length; i++) {
                str += `<tr>
                            <td>${arr[i].id}</td>
                            <td>${arr[i].name}</td>
                            <td>${arr[i].sex == 0 ?'男':'女'}</td>
                            <td>
                                <a href="">查看</a>
                                <a href="">删除</a>
                                <a href="">修改</a>
                            </td>
                        </tr>`;
            }

            // 下半部分
            str += `</table>`;
            d1.innerHTML = str;
        }
    </script>
```