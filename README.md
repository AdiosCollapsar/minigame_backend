# minigame_backend

## 基本信息
项目名称：minigame_backend
框架：Express
语言：JS

## 基本规范
已经在ESLint和Prettier中进行了配置，Git相关操作中需要手动add与commit，会自动进行代码规范性的检查，不符合要求不能push，统一使用Tab4格缩进。

## 项目相关

### 准备工作
```bash
npm install
husky install
```

### 启动项目
```bash
npm run start
```

### 部署项目

使用pm2的docker镜像，先部署在175.24.30.102这个服务器上

### 项目文件夹说明

工作均在`/src`文件夹内进行，在`/routes`文件夹内配置对应请求的路由，比如index就是`/`下的请求，users就是`/users`下的请求；在`/controller`文件夹内配置处理对应请求的方法，`/common`中目前只有错误码的管理

### Git分支说明

小项目可以直接在main或者master上干活，当然也可以开dev_xxx或者feat/xxx这种分支

### 返回格式说明

格式统一为`{data: null, status: 0, msg: ''}`，其中status对应唯一的错误码，成功就传0，data一般是对象，当然没有数据就传null，msg可写可不写，一般为“操作成功”这类内容

### 请求测试

使用postman对localhost:3000/进行请求即可
