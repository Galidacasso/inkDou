# 版本控制
版本控制是指对软件开发过程中各种程序代码、配置文件及说明文档等文件变更的管理，是软件配置管理的核心思想之一。  
版本控制最主要的功能就是**追踪文件的变更**。  
即： **`什么人`** 在 **`什么时候`** 改变了 **`什么文件`** 的 **`什么内容`**

## 本地化版本控制
- 集中式版本控制(SVN)
    - 版本集中存放在`中央服务器`中
    - `用户`向`中央服务器`提交代码
    - 在`中央服务器`发生故障时,`用户`无法提交代码
  
- 分布式版本控制(Git)
    - `用户`之间互相推送代码
    - 无需担心分布式用户的单一故障

## GIT 
[官网 https://git-scm.com](https://git-scm.com) 
### 特点介绍
- 几乎所有操作都可以本地操作(离线)
- 时刻保持数据的完整性
- 文件流传的三个工作区
    - **`工作目录`** **`暂存区域`** **`本地仓库`**

- 工作方法
  - 在工作目录修改文件,执行add操作对文件执行快照,保存至暂存区域
  - 然后通过commit提交,将暂存区域的文件快照永久的存储到git仓库中


## GIT操作方法
1. 检测电脑中是否存在git —— 鼠标右键查看是否有`git bash` 命令
2. GIT 初始化配置 —— 在工程目录内，右键`git bash here` 打开git窗口
```shell:no-line-numbers
git config --global user.name 'zwk222'
git config --global user.email 'zwk222@icloud.com'
git config --list
```
### 初始化git仓库
```shell:no-line-numbers
git init
```
通过初始化命令，会创建一个隐藏的目录 **`.git`**   
此时，当前目录不仅是本地磁盘的真实物理目录，还是本地仓库。
### 互相影响
- 存在物理目录中的内容,不一定存在git仓库中
- 需要上至暂存区才会提交至本地仓库
- 在物理目录中删除,不定会在本地仓库中删除
- 在本地仓库中删除,会在物理目录中删除
  
### 查看当前目录的工作状态
```shell:no-line-numbers
git status
```
**`未提交`** **`已提交`** **`已忽略`**
  
### 添加内容到暂存区
```shell:no-line-numbers
git add
```
- 添加指定`文件`到暂存区 git add `文件名`
- 添加指定`目录`到暂存区 git add `目录名`
- 添加`当前目录的所有文件`到暂存区 git add `目录名`

### 将暂存区的内容提交到仓库
```shell:no-line-numbers
git commit -m '提交说明'
```

### 查看提交日志
```shell:no-line-numbers
git log
```

### 从仓库回退指定的版本
```shell:no-line-numbers
git reset --hard id
```

### 查看所有版本的记录和回退记录
```shell:no-line-numbers
git reflog
```


### 忽略内容,不需要提交到仓库
在目录中创建 .gitignore 文件,把不需要提交的内容写在此文件中
```shell
# 例如
node_modules/ # 此目如下的所有文件
Note.md # 单个文件
```

## 分支操作
分支可以把某些内容从开发主键上分离出来  
### 查看所有分支
```shell:no-line-numbers
git branch
```
### 创建分支 
```shell:no-line-numbers
git branch 分支名称
```
### 切换分支 
```shell:no-line-numbers
git checkout 分支名称
```
### 分支合并 
```shell:no-line-numbers
git merge 分支名称
```
- 当前分支存在同名文件时,会发生合并冲突现象,此时可选择修复冲突内容
    - 保留当前更改
    - 保留传入的更改
    - 保留双方更改
    - 通过文件对比查看那些内容具有差异
### 重置合并
  - 合同冲突后,会出现`you need to resolve your current index first`,可以通过重置合并解决 
```shell:no-line-numbers
git reset --merge
```

::: warning 注意
修改了仓库中的内容,一定要及时提交
:::


## VScode中关于文件状态的提示
- D 本地文件已删除,但仓库中还存在
- U 本地文件存在,但为未提交到仓库中
- M 文件修改,但未提交到仓库中
...

## 远程仓库
### [github](https://github.com/)  
GitHub是一个面向开源及私有软件项目的托管平台，因为只支持Git作为唯一的版本库格式进行托管，故名GitHub。  
### [gitee](https://gitee.com/)  
Gitee是开源中国（OSChina）推出的基于Git的代码托管服务。

### 创建远程仓库
创建github或者gitee的账号，并创立远程仓库，通过git将项目推送至远程仓库。

### 推送至远程仓库
```shell:no-line-numbers
# git push -u 远程仓库的地址 分支名称
git push -u https://gitee.com/galidacasso/Yanglao.git master
```
::: warning 注意
首次推送需要填写账号和密码。
:::

### 强制推送
```shell:no-line-numbers
git push -u https://gitee.com/galidacasso/Yanglao.git master --force
```
    
### 克隆仓库(拉取代码)
```shell:no-line-numbers
git clone https://gitee.com/shaipe/wechat-rs.git
```