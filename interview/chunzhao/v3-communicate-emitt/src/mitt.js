// 被共享
// 任何要用到它的方法 订阅他
import mitt from 'mitt' // 基于eventBus 实现通信
// 发布者 
// 和 emitter 生成订阅关系
// 订阅者 
const emitter = mitt()  // 创建一个mitt实例 单例
export default emitter // 实现事件总线
