# React NoteBook 全栈

- npm i react-router-dom -S
 -- save 的简写 一直依赖 react-router-dom @7
 --save-dev -D 开发阶段依赖
- 项目阶段 development vite
- 测试阶段 test 其他同事的电脑上 没有环境 npx
- 上线阶段 production  打包-> 项目部署-> dns -> 上线
-> 上线

- 编程风格
 - react 组件 由函数组件jsx 文件 + 样式文件 css 组成
 - 组件目录大写
 - 组件声明文件小写 名字叫index.jsx
  引入的时候 直接引入组件目录即可， 组件类的作用 同时不用不用去引入 index.jsx
- return (JSX) dom树的对齐， 优雅

- 页面级别组件
 - 首页 
  Home.vue

- es6 module 的语法
import React ，{ useState, useEffect, useMemo} from 'react'
default 解构的引入
import React.useState from 'react'
import * as React from'react'

as 起别名

- key  的用法
 循环输出组件，需有给唯一的Key 值需要唯一
 update 性能

 - 选择框架
  - zarm 移动端 react ui 组件库
  制定3.1.2版本 npm i zarm@3.1.2 
  - 引入组件 button
  - 引入样式
  - 引入配置 ConfigProvider theme primaryColor

  - 主题定制 theme primaryColor

- npm run build
 - 上线之前先打包
 - dist/ 结果目录
  - src/ 开发目录
   - 不需要注释，换行等，只要浏览器运行就好
   - 组件打包成js文件 ，css 打包成一个css文件
    性能优化 http 并发数 一个js文件
     - 依赖关系
      - 不需要依赖关系
      - 被依赖的放在上面 以来的放在下面
      - 递归依赖关系
      - 打包成一个js文件
    - vite很快 
    - 截图 
     size gzip 大小 http 主动启动gzip 压缩传输的
     底层是tcp/ip

- vite
 - 按需要加载  vite-plugin-style-import

- less stylus css 预编译
  - 快 
  - less 
  - 变量 嵌套 混合函数
  - module css
   - style.module.less
   - 支持 css 模块化
    - vite 申明  less -> 解析
    - {s.index}

- 移动端适配
  rem 10 rem = 宽度
   - lib-flexible
   - postcss-px2rem 自动化px 转rem 提高开发效率
    - PostCSS 允许开发者通过一系列插件来处理和增强 CSS 文件，使其具备更高的可维护性、兼容性和性能。
- axios 配置
  - baseURL
   前后端分离，前端访问的是后端的接口，一般都会以/api 开头
   方便， baseURL 统一配置
   - axios + vite proxy
    跨域问题 新解决方案
- 请求，响应拦截器
 - 统一的token设置
 - 统一的错误处理
 401 404 500 ！200
 - res 丰富的  config res ... 库
 - return res.data 直接返回数据
- cookie http 1.0  
  - 小饼干 字符串
  - key = value ; key2 = value
  - kb 关键 用户身份等
  - 请求时都会默认带上，太大的话会影响http 性能
  - expires 
  - domain 当下域名的cookie
  - path 限制 cookie/api /user
  - httpOnly 请求时带上 js 没有办法获取，更安全
  - secure 安全的cookie https 协议下才会带上
    XSS 跨站脚本攻击 黑客通过 发文 评论 注入 获取cookie的代码，并执行黑客使用我们cookie 访问某网站 ，安全问题
  <script> < &lt;
  - secure 安全的cookie https 协议下才会带上

## 业务开发
- NavBar 组件
  - components 公共组件
  - zarm TabBar TabBar.Item
  activeKey  itemKey
- change setActiveKey
- react-router-dom
  userNavigate hook
  navigateTo('/user')
  必须放到router 组件内
- 单页应用 SPA single page application 看过去就像一个页面，移动端
  -  新页面 服务器重新渲染，所有的html，白屏 慢 体验不好
  - vue/react优化体验
   - 不能白屏 不要去刷新整个页面 NavBar
   HashRouter HistoryRouter 支持 hashChange pushState
   不用a 标签 ，由router 统一管理
  - Routes router-view  一副牌 看到最上面一张
  - icon
    - iconfont 定制
  - showNavBar 
   - 默认是false, 路由切换 showNavBar 为 true
   - 伪代码 当业务复杂或不太熟悉时可用
   - useLocation 拿到当前的路由 解构处路径
   - useEffect 监听 路由变化

- react hooks？
 - useState 响应式
 - useEffect 生命周期 副作用
 - memo 缓存组件
 - useMemo 缓存计算结果
 - useCallback 缓存函数
 - react-router-dom  useNavigate useLocation
 - 函数式编程思想 use hooks 很方便的作用

 - react-router-dom
  BrowserRouter HashRouter
  Routes Route 组件
  useNavigate useLocation 属于路由 路由改变 更新
  useEffect 依赖 观察路由的变化


- CustomIcon 的组件
  Icon.createFromIconfont
- react props 类型约束
  - props- types
  - 函数组件对象 propsTypes 属性
  - PropsTypes.bool

- css 
  - react module css
  - less
  - iconfont 性能优化
  - less 嵌套 & :global 选择器用于在局部作用域的 LESS 文件中定义全局样式，使指定的 CSS 规则应用到全局范围，而不受局部作用域限制。这在模块化组件开发中非常有用。
  - linear-gradient 线性渐变色 代替图片

- 功能需求分析
  - 登入，注册切换功能
  - 切换下面的表单 useState type login/register
  - onlcick 切换 
  - typetype 
  - useEffect + useLocation url /login /register
  
- 项目用了哪些包？
 classnames 动态类名的逻辑安

 ## 开发流程 
 - idear 创意
   - aigc 结合
 - 需求分析
   - 用户需求
   - 功能点
  - 建立数据库
   - 设计表结构
  - 前端开发
   - react 
  - 后端
   - egg.js
  - 测试
  - 部署上线


    CREATE TABLE IF NOT EXISTS user (
       id INT AUTO_INCREMENT PRIMARY KEY, 
       username VARCHAR(100) NOT NULL UNIQUE,
        ctime VARCHAR(100) NOT NULL,
         avatar VARCHAR(100), 
         signature VARCHAR(100), 
         password VARCHAR(100) NOT NULL ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

## 代码风格的一部分

   - AI 编程工具的使用
    - MarsCode
    - Cursor / Trade
    - prompt engineering
    - "交互" 前端不可替代
    - 多语言 低代码 快速学习 
    - 不只是项目开发前 propmt 生成项目
    - 细节功能 喂伪代码 aigc代码更靠谱
- mysql 
  - mysql2 数据库驱动
  - egg-sequelize orm 框架
    不需要写sql ， 直接对象开干
    封装了sql 语句 
  - service
   CRUD
  - model
    User 

   