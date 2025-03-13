# 虚拟DOM  Virtual DOM

- 虚拟DOM 是**真实DOM** 在内存中的轻量级副本
 - 内存中的对象（描述真实DOM）
 - 新 | 旧 虚拟DOM diff patches 
 - 一次性的作用到DOM 更新中
 
- 以下DOM 片段的虚拟DOM 对象是？
 - 虚拟DOM非常方便的描述真实DOM
 - type, props, children([]) + 递归（树）            
 - 文本节点直接给文字

- 什么时候生成虚拟DOM？
  template 编译成 -> 生成Vnode -> render模块 -> 生成真实DOM
  响应式 update 数据状态改变 -> 没有虚拟Dom -> 重新生成真实DOM -> 整个替换（重绘，重排太大了）
  虚拟DOM  生成新的Virtual Node 内存中 比较新旧两颗VNode 
  针对性 一次性收集所有的修改 patches 打包给 DOM 一次性更新

- v-for key？
增 删 改 移动
ABCD -> DABC

- Vue 中 h 函数用于创建虚拟 DOM 节点，接受标签名，属性和子节点表
## diff 算法
两颗新旧虚拟DOM 树
patch 补丁[]
时间复杂度 O(n)

- 暴力
 - 每个VNode 都去对比
 - 每个VNode 上的属性比对 O(n)
 - VNode 的children 比对 O(n)
 O(n^3)
 1000*1000*1000 10亿次

- 只做**同层** 比较 O(n) -> O(1)
- **type** 变了 就不再比较子节点
div          h2          
 ul            span 一个节点都没有
  li             
   li
- 属性的比较O(n)
O(n^3) -> O(n)

- 解决所有问题？
ABCDE  EABCD

A E type 不一样
不能判断类型,如果有唯一的key来判断就好了
列表里有移动操作
key O(n)
