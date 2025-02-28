// 实例化时, 传递函数,里面装耗时性任务
const p = new Promise((resolve,reject) =>{ // execuyor 执行器
    console.log('3333') // 同步任务
  setTimeout(() =>{  // 异步任务 event loop
   console.log('222')
   // resolve()
   resolve('BMW325')
   reject()
  },1000)
  })
  // 异步任务的执行顺序控制的话 用promise
  console.log(p._proto_,p);
  p
   .then(() => {
    // 等到 executor 异步任务执行完后  , 再执行then 里面的函数
   console.log('111')
   console.log(p)
  })
   .catch(() =>{
    console.log('error')
   })

 