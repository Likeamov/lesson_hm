// Reference：b is not defined
//RHS 查找 失败的时候 ，会爆出ReferenceError 错误，报错
function foo(a){
    console.log(a + b)
    b = a;
}

foo(2);
  console.log(b);