### 1、全局脚手架安装

``` 
npm install -g yo generator-code
```

### 2、创建项目

``` 
yo code
```

### 3、功能开发

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

* 6、重新发布

``` 
vsce publish
```

o76cdneqcwhwonquklk2t5yasjpithi7tq7n2eqo5x2uasbabodq
gvwhfgukop23zz3so3a4s6zaxgdijxp4ffkfn5krktndds5xznhq


### 工具类
* 判断是否存在中文
```
let isChn = (str: string) => /^[\u4E00-\u9FA5]+$/.test(str)
```

* 字符串第一个大写转小写
```
firstCapitalizeTurnSmall = (str: string) => {
  let newStr: string = "";
  for (var i = 0; i < str.length; i++) {
    if (i === 0) {
      newStr += str[i][0].toLowerCase()
    } else {
      newStr += str[i]
    }
  }
  return newStr
}
```
