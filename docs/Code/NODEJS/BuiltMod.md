## 内置模块
核心模块,是nodejs中自带的,不需要下载即可使用。

### 查询字符串模块 **`querystring`** 
查询字符串模块，解析和格式化查询字符串。
1. 将查询字符串转化为对象  qs.parse()
2. 将对象格式化为查询字符串
```js
// 使用querystring内置模块
// 引入模块 不需要使用./引入模块
const qs = require('querystring');

// 查询字符串
// 属性=属性值&属性=属性值&...
// 获取tn和wd的值
var str = 'tn=baidu&wd=web';
// 将查询字符串转化为对象
let obj = qs.parse(str);

console.log(obj);
console.log(obj.tn, obj.wd);

// 将对象格式化为查询字符串
let emp = {
    name: '小艺',
    say: 'missyou'
}
var str = qs.stringify(emp);
console.log(str);
```

### 文件及目录模块 **`fs`**
fs模块，处理文件及目录(读写/删改)，有同步和异步2种方式。

#### 目录操作
<table >
        <tr>
            <th>功能</th>
            <th>进程</th>
            <th>方法</th>
            <th>备注</th>
        </tr>
        <tr>
            <td rowspan="2">创建</td>
            <td>异步</td>
            <td>fs.mkdir()</td>
            <td rowspan="2">不允许重复创建</td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.mkdirSync()</td>
        </tr>
        <tr>
            <td rowspan="2">删除</td>
            <td>异步</td>
            <td>fs.rmdir()</td>
            <td rowspan="2">不允许重复删除<br>不能删除非空的目录</td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.rmdirSync()</td>
        </tr>
        <tr>
            <td rowspan="2">读取</td>
            <td>异步</td>
            <td>fs.readdir()</td>
            <td rowspan="2">读取出来的是包含文件及目录名称的数组<br>但是只能读取一层,子目录是无法读取的<br>如果想要实现多级目录读取则需要递归操作</td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.readdirSync()</td>
        </tr>
    </table> 

```js
// 引入模块
const fs = require('fs');

// 1. 创建 fs.mkdir()(异步) 
fs.mkdir('xiaoyi', (err) => {
    if (err) throw err;
    console.log('创建成功');
});

// 2. 删除 fs.rmdir()(异步) 
fs.rmdir('xiaoyi', (err) => {
    if (err) throw err;
    console.log('删除成功');
});

// 3. 读取 fs.readdir()(异步) 
fs.readdir('a', (err, result) => {
    if (err) throw err;
    console.log(result);
});
```

#### 文件操作
<table >
        <tr>
            <th>功能</th>
            <th>进程</th>
            <th>方法</th>
            <th>备注</th>
        </tr>
        <tr>
            <td rowspan="2">内容追加</td>
            <td>异步</td>
            <td>fs.appendFile()</td>
            <td rowspan="2">如果文件不存在会首先创建文件再写入内容<br>如果文件存在则直接在原有内容的最后方插入内容</td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.appendFileSync()</td>
        </tr>
        <tr>
            <td rowspan="2">文件读取</td>
            <td>异步</td>
            <td>fs.readFile()</td>
            <td rowspan="2"></td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.readFileSync()</td>
        </tr>
        <tr>
            <td rowspan="2">文件删除</td>
            <td>异步</td>
            <td>fs.unlink()</td>
            <td rowspan="2"> </td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.unlinkSync()</td>
        </tr>
        <tr>
            <td rowspan="2">文件复制</td>
            <td>异步</td>
            <td>fs.copyFile()</td>
            <td rowspan="2"> </td>
        </tr>
        <tr>
            <td>同步</td>
            <td>fs.copyFileSync()</td>
        </tr>
    </table>  

```js
const fs = require('fs');
// 1. 内容追加  fs.appendFile  fs.appendFileSync
fs.appendFile('xiaoyi.txt', '小艺', (err) => {
    console.log('内容追加成功');
});

// 2. 文件读取 fs.readFile  fs.readFileSync
fs.readFile('Note.md', (err, result) => {
    // 如果遇见buffer类型的数据,可以直接使用toString()转换内容 
    console.log(result.toString());
});

// 3. 文件删除 fs.unlink  fs.unlinkSync
fs.unlink('xiaoyi.txt', () => {
    console.log('删除成功');
});

// 4. 文件复制 fs.copyFile  fs.copyFileSync
fs.unlink('Note.md', 'copy_Note.md', () => {
    console.log('复制成功');
});
```
#### fs 练习
声明一个数组,保存多个员工对象信息: 编号 姓名  
```js
// 通过fs模块将内容插入到文本文档中,要求一行一个
// 例如: emp.txt
// 1 小艺
// 2 小宇
// 3 芹菜
const fs = require('fs');

let arr = [{
        id: 1,
        name: '小艺'
    },
    {
        id: 2,
        name: '小宇'
    },
    {
        id: 3,
        name: '芹菜'
    },
];
// 坑: 顺序问题 异步导致的
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].id);
    // console.log(arr[i].name);
    let str = arr[i].id + ' ' + arr[i].name + '\n';
    console.log(str);
    // fs.appendFile('emp.txt', str, (err) => {
    //     if (err) throw err;
    //     console.log('追加成功~');
    // })
    // 同步方法解决异步顺序问题
    fs.appendFileSync('emp.txt', str);
}
```
