// redux store 来到组件
// vue pinia
import React from 'react';
import useCounterStore from './store/Counter';
function Counter() {
    // 状态的读取
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);// 定义
  
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;