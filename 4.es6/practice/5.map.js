// map 我们叫他 哈希表  映射
// key 值不能重复

let o = { b: 2 };
let map = new Map();
map.set({ a: 1 }, "123");
map.set(1, "456");
map.set({ a: 1 }, 123);
map.set(o, 222);

console.log(map.get(1));

// WeakMap
