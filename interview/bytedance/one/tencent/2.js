//// 编写二叉树的前序遍历
//function preorder(root) {
//    if (!root) return
//    console.log(root.val);
//     preorder(root.left);
//     preorder(root.right);
//    }
//    递归变迭代

function preOrderTraversal(root){
    // 栈 右节点入栈 左节点后入栈
    const stack = [];

    if(!root) {
        return result ;
    }
    stack.push(root);
} 