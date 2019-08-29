# Admin-qeb
## 这是一个单页面（SPA）的电商后台管理系统的项目
## 所有的有关数据接口均来自：https://gitee.com/imooccode/happymmallwiki/wikis/Home
## 项目中使用的bootstrap皮肤地址：https://webthemez.com/demo/insight-free-bootstrap-html5-admin-template/ui-elements.html#
### 业务模块主要为：
* 用户模块：登录、退出、用户列表
* 商品模块：商品列表、添加/修改商品、商品详情  
* 品类模块：品类列表、添加品类、修改品类名称
* 订单模块：订单列表、订单详情、发货

### 技术栈：
* React16 ：JSX表达式、生命周期、虚拟DOM
* React-Router ： 动态路由、路由组件

### 架构 ：
* 使用前后端完全分离的方案
* 使用分层架构和模块化开发的方式来组织代码

### 工具： 
* 使用webpack3作为代码的打包工具
* 引入webpack-dev-server来辅助代码的开发
* 使用git托管代码，做代码分支管理

### 业务模块插件：
* 
* 分页插件（rc-pagination），为用户列表、商品列表做分页
* 图片插件（react-fileupload），用来上传图片
  富文本插件（simditor）
* 同时，抽取了通用组件：列表组件、搜索组件、作为公共组件
