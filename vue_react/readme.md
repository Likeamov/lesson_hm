- react 学习路径
  - react基础语法 过一遍 （B站| 文档）
  - hooks 相关
  
  - react 源码
  - Antd ...
  - ts

- AI Coding
- VUE & React 一起搞
- 自然语义编程
    tailwindcss  语义
    antd 组件
- 给一张设计稿 -> 生成组件

- http (CDN 可以更快引入)引入 前端组件库
  - vue
   Vue  
    vue 3
    不是本地, 通过cdn 引入  cdn:内容分发网络
    静态资源(html,css,js,images)  动态(java,node,数据库 服务器集群,,)
    cdn 快速内容访问和发布的机制
- 挂载点
  将前端工作交给vue/react ,在html里只需要一个**挂载**点 #root

  
  挂载Vue App 应用实例
 - vue 哲学  让我们focus业务的现代前端框架
  - html 界面上升到应用的复杂,现在的前端复杂
  - Web应用是数据驱动的界面
  - vue 事件机制 方便 @event="handler"
  - 响应式编程
   - ref(0) 包装简单数据类型成为一个响应式对象
   - .value = "" 修改value 值改变的同时,界面热更新
   - 规避DOM 编程
   - 不再为API 编程,而focus 业务开发
   
 
 -  App 和传统编程的区别
  - createApp 创建Vue App
  - #root 结合
  - #root 里面就是vue的世界了
  {{count}}
  - {{}} vue 数据占位符
  可以改变的
  不需要document.querySelector("")
  {{ data }}
  setup(){
    return {
      data
    }
  }