// commonjs node 早期模块化方案
// js 早期没有模块化方案
// 函数, 类(js没有类),js业务简单 页面交互
// 幻灯片  js 就干这个事
// 越来越复杂了, 文件分离 , 模块化方案需要

const sqlite3 = require('sqlite3');
// 后端逻辑和数据库逻辑是分开的
// 数据库操作句柄
// 路径
// I/O 操作
const db = new sqlite3.Database('./mydatabase.db',
    async(err)=>{
        if(err){
            console.log('数据库连接失败', err);
            
        }
        console.log('数据库连接成功');
        // 风筝 数据库操作句柄

        await db.run(`
            CREATE TABLE IF NOT EXISTS employees (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                department TEXT NOT NULL,  
                salary INTEGER  NOT NULL,            
            )
            `)
        // err 是否出错,容错是关键
        // node js 快 ms 级别
        // 数据库 别的服务器/硬盘上  秒 级别
        // await          
        // I/O 操作<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script>
    // 阻塞 来动态设置 html font-size 
    // 立即执行函数
    (function() {
      // console.log('立即执行函数')
      function calc() {
        const w = document.documentElement.clientWidth;
        console.log(w);
        document.documentElement.style.fontSize 
          = 75*(w / 750) + 'px';
      } 
      calc()
      // 
      window.onresize = function() {
        // console.log('resize')
        calc();
      }
    })()
    </script>
  <style>
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
    /* background-color: green; */
  }
  .item-section {
    min-height: 100%;
    background-color: #ee0a3b;
    position: relative;
    font-size: 24px;
  }
  .item-section_header img {
    width: 10rem;
  }
  .item-section ul {

  }
  </style>
</head>
<body>
<div class="item-section">
  <div class="item-section_header">
    <h2>
      <img src="http://gw.alicdn.com/mt/TB1PNLZKXXXXXaTXXXXXXXXXXXX-750-481.jpg" alt="">
    </h2>
    <ul>
      <li class="flag">
        <a href="#" class="figure flag-item">
          <img src="https://placeimg.com/350/350/people/grayscale" alt="">
        </a>
        <div class="figcation flag-item">
          
        </div>
      </li>
    </ul>
  </div>
</div>
</body>
</html>
    })
