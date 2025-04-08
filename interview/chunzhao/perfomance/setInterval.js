// 1. 传统的 setInterval
function traditionalInterval() {
    let count = 0;
    const timer = setInterval(() => {
        console.log('setInterval:', count++);
        // 模拟耗时操作
        someHeavyOperation();
    }, 1000);
}

// 2. 用 setTimeout 模拟 setInterval
function mockInterval() {
    let count = 0;
    function interval() {
        console.log('setTimeout:', count++);
        // 模拟耗时操作
        someHeavyOperation();
        // 下一次调用
        setTimeout(interval, 1000);
    }
    setTimeout(interval, 1000);
}

// 3. 改进版本的模拟（考虑时间偏差）
function improvedMockInterval() {
    let count = 0;
    let expected = Date.now() + 1000;

    function interval() {
        const drift = Date.now() - expected;
        console.log('improved setTimeout:', count++);
        // 模拟耗时操作
        someHeavyOperation();
        
        expected += 1000;
        // 考虑时间偏差，动态调整下一次执行时间
        setTimeout(interval, Math.max(0, 1000 - drift));
    }
    setTimeout(interval, 1000);
}

// 模拟耗时操作
function someHeavyOperation() {
    let result = 0;
    for(let i = 0; i < 1000000; i++) {
        result += Math.random();
    }
}

// 问题说明：
/*
1. 时间偏差问题：
   - setTimeout 的执行不是精确的
   - 每次执行都会有误差
   - 误差会随时间累积

2. 函数执行时间影响：
   - 如果回调函数执行时间超过间隔时间
   - setTimeout 版本会等待函数执行完才开始下一次计时
   - setInterval 会尝试保持固定间隔

3. 内存管理：
   - setTimeout 每次都创建新的定时器
   - 需要手动管理清理机制
   - 可能导致内存泄漏

4. 性能问题：
   - 原生 setInterval 有更好的性能优化
   - 模拟版本可能因为 JS 执行时间而不稳定
*/

// 测试代码
// traditionalInterval();
// mockInterval();
// improvedMockInterval(); 