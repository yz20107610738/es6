let obj1 = { name: { a: 1 } };
let obj2 = { age: 10, name: { b: 2 } }; // {...obj1,...obj2}
console.log(mergeOptions(obj1, obj2)) // {age:10,name:{a:1,b:2}}
// 实现一个方法 做一个 mergeOptions
console.log({ ...obj1, ...obj2 });


function mergeOptions(obj1, obj2) {
    function checkObject(param) {
        return Object.prototype.toString.call(param) === '[object Object]'
    }
    // 二者都是Object时做处理
    if (checkObject(obj1) && checkObject(obj2)) {
        let o = { ...obj1, ...obj2 }
        let arr2 = [...Object.keys(obj2)];
        Object.keys(obj1).forEach(key => {
            if (arr2.indexOf(key) > -1) {
                // key值重复
                delete o[key]
                o[key] = mergeOptions(obj1[key], obj2[key])
            }
        })
        return o;
    }
    return obj2
}


// let obj1 = { name: { a: 1 } };
// let obj2 = { age: 10, name: { b: 2 } };
// mergeOptions(obj1, obj2) // {age:10,name:{a:1,b:2}}
/**
 * 思路还不顺  mergeOptions(obj1, obj2)   {name: }  {}
 * 1. 如果有一个不是 Object,则直接覆盖  {name:'s'}  []
 * 2. 两个都是Object,
 */