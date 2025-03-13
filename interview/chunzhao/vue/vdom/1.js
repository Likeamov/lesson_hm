// virtual node
const vnode = {
    // 节点类型，这里表示这是一个 div 元素
    type: 'div', 
    // 节点的属性，这里为 div 元素设置了 id 属性
    props: { id: 'todo-list' }, 
    // 子节点数组
    children: [ 
        { 
            // 子节点类型，这里表示这是一个 input 元素
            type: 'input', 
            // input 元素的属性，设置了 placeholder 属性
            props: { placeholder: 'Add new todo' } 
        },
        { 
            // 子节点类型，这里表示这是一个 ul 元素
            type: 'ul', 
            // ul 元素的子节点数组
            children: [
                { 
                    // ul 元素的子节点类型，这里表示这是一个 li 元素
                    type: 'li', 
                    // li 元素的属性，设置了 class 属性
                    props: { class: 'todo-item' }, 
                    // li 元素的子节点，这里是一个文本节点
                    children: ['Buy groceries'] 
                },
                { 
                    type: 'li', 
                    props: { class: 'todo-item' }, 
                    children: ['Read a book'] 
                }
            ] 
        }
    ]
};
<div id="todo-list">

</div>
// 虚拟dom是真实dom在内存中的一个对象