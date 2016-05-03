# vue and LeanCloud 前后端单独启动server

## 【1】后端server  Lean命令行

* ①新建项目

```
lean new oneapp
cd oneapp
npm install
lean up
```

测试成功

* ②优化后端目录结构为

```
- server.js    // 入口js
- package.json
+ backend/     // 后端文件夹
  + cloud/     // 云函数文件夹
  + public/    // 后端静态资源文件夹
  + routes/    // 路由文件夹
  + views/     // 视图文件夹
  - app.js     // 入口文件
  - cloud.js   // 云函数列表文件

```

* 修改server.js 中 app.js的引用

```
var app = require('./backend/app');
```


## 【2】前端server  vue-cli命令行

* ①新增前端项目

```
vue init webpack-simple fe
cd fe
npm install
npm run dev
```

测试成功



## 相关文档

* [LeanEngine 指南](https://leancloud.cn/docs/leanengine_guide-node.html)
* [JavaScript 指南](https://leancloud.cn/docs/js_guide.html)
* [JavaScript SDK API](https://leancloud.cn/api-docs/javascript/index.html)
* [命令行工具详解](https://leancloud.cn/docs/cloud_code_commandline.html)
* [LeanEngine FAQ](https://leancloud.cn/docs/cloud_code_faq.html)
