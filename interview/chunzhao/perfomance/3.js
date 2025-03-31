for (let i = 0;i<100;i++){
    // 触发重绘
    // el.style.top =  el.offset
}

let top = el.offsetTop; // 先缓存一下
for(let i = 0;i<100;i++){
    // 触发重绘
    el.style.top = top + 'px'; // 每次都设置
}