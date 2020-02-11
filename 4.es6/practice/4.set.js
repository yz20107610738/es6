// set就是集合  map指哈希表
// 集合就是不能有重复的项  要是数组去重的话直接用new Set(arr)

// 两个数组去重
// let arr = [1, 2, 4, 3, 2, 5, 1, 3, 4]
// let newArr = [...(new Set(arr))]
// console.log(newArr)

// let obj = {}
// arr.forEach(key => obj[key] = key)
// let newArr2 = [ ...Object.values(obj) ]
// console.log(newArr2)

let arr1 = new Set([1, 2, 3]);
let arr2 = new Set([3, 4, 5]);

// 1) 并集
// let set = new Set([...arr1, ...arr2]);
// let union = [...set]

// 2) 交集
// let s1 = new Set(arr1);
// let s2 = new Set(arr2);
// let itersection = [...s1].filter(item => {
//   return s2.has(item);
// });
// console.log(itersection);

// 3) 差集
// let s1 = new Set(arr1);
// let s2 = new Set(arr2);
// let differenceSet = [...s1].filter(item => {
//   return !s2.has(item);
// });
// console.log(differenceSet);

let obj = {
  a: 1,
  b: 2,
  [Symbol()]: 3
};
// console.log(Object.values(obj));
console.log(Reflect.ownKeys(obj));
