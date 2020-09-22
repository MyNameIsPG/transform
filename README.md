### 1、全局脚手架安装
```
npm install -g yo generator-code
```
### 2、创建项目
```
yo code
```
### 3、功能开发
<br>
### 4、发布
* 1、先注册一个微软的账号
* 2、创建访问令牌 [token](https://dev.azure.com/493871850/_usersSettings/tokens)
* 3、不管是打包还是发布都需要安装一个发布工具 vsce
同时都需要关联远端 Git 仓库（package.json / repository）
```
  npm install -g vsce
```
* 4、同样使用 vsce 提供的命令来创建发布者 
```
vsce create-publisher [publisher-name]
```
* 5、若已有发布账号可直接登录
```
vsce login [publisher-name]
```