const el = document.getElementById('myElement');
// 不推荐：多次修改样式会触发多次重排
el.style.width = '100px';
el.style.height = '100px';
el.style.margin = '100px';

// 推荐：使用 classList 添加类
el.classList.add('new-class');

// 推荐：使用 cssText 一次性修改多个样式
el.style.cssText = 'width: 100px; height: 100px; margin: 100px;';

// 推荐：使用 requestAnimationFrame 优化动画
requestAnimationFrame(() => {
  el.style.transform = 'translateX(100px)';
});

// 推荐：批量修改 DOM
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = `Item ${i}`;
  fragment.appendChild(div);
}
document.body.appendChild(fragment);
