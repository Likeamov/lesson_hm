console.log([1,2,3].map(parseInt))
// pareseInt (1,0
// pareseInt (2,1)
// pareseInt (3,2)
console.log([1,2,3].map((v,index, item)=>{
    console.log(v,index, item);
    return parseInt(v,index)
}))
