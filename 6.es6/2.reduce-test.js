let arr = [1, [2, [3, [4, [5]]]]];
// let r = arr.flat(10);

// 递归写法
function flat1(arr) {
  let p = arr.pop();
  console.log(arr, p);
  if (!Array.isArray(p)) return [p];
  return arr.concat(flat1(p));
}

function flat2(arr) {
  let temp = arr.pop();
  if (!Array.isArray(temp)) return [...arr, temp];
  return flat2([...arr, ...temp]);
}

// console.log(flat2(arr));

// reduce写法
// let r2 = arr.reduce((prev, next)=>{
//     return [prev, ...next]
// })

// console.log(arr.toString())

// 实现自己的reduce
Array.prototype.myreduce = function(callback, prevResult) {
  // this 指的是数组
  // callback(prev, next, index, current)
  let current = this;
  let len = current.length - 1;
  for(let i=0; i < len; i++){
    
    callback(current[i], current[i+1], i, current);
  }
};

// 要用 componse 组合函数

let arr2 = ['a', 'b', 'c']
arr2.myreduce((prev, next, index, current)=>{
    console.log(prev, next, index, current);
})