let set = new Set([1,2,3,3,2,1]); // 他的key 和值时一样的
// 无论什么数据类型 增删改查
console.log(set.values());
set.forEach(item => {
    console.log(item);
});