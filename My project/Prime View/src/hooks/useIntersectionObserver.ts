//var io = new IntersectionObserver(callback, option);

function loadImage(target: HTMLImageElement) {
    target.src = target.dataset.src ?? '';
}
function callback(entries : IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach(entry => {
            if (entry.intersectionRatio <= 0) {
                return
            } 
        loadImage(entry.target as HTMLImageElement);
        // console.log('load image', entry.target);
        observer.unobserve(entry.target);//// 加载后取消观察
    })
}

const options = {
    root: null, // 默认为视窗
    rootMargin: '0px', // 在计算交叉度时，扩大或缩小root的边界
    threshold: 0 // 当目标元素10%的部分进入视窗时触发回调
}

function createIntersectionObserver() {
    const observer = new IntersectionObserver(callback, options);
    return observer;
}

const observer = createIntersectionObserver();

export function useIntersectionObserver() {
    return {
        observer
    };
}