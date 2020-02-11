function deepClone(obj, hash = new WeakMap()) {
    if (obj == undefined) return obj;
    if (typeof obj !== 'object') return obj;
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    let val = hash.get(obj);
    if (val) {
        return val
    }
    let cloneObj = new obj.constructor;
    hash.set(obj, cloneObj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}
// let obj = { a: 1 };
// obj.b = obj;
let obj = {
  num: 1,
  str: "abc",
  bool: true,
  null: null,
  undefined: undefined,
  arr: [],
  obj: { name: "zf" },
  reg: /abc/g,
  date: new Date(),
  sym: Symbol()
};
obj.b = obj;
console.log(deepClone(obj));




