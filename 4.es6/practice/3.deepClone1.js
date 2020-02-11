function deepClone(obj, hash = new WeakMap()) {
  if(obj == undefined) return obj;
  if (typeof obj !== 'object') return obj;
  if (obj instanceof RegExp) return new RegExp(obj);
  if(obj instanceof Date) return new Date(obj);
  let cloneObj = new obj.constructor;
  if (hash.get(obj)) {
      return obj
  }
  hash.set(obj, cloneObj)
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}

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

// console.log(JSON.parse(JSON.stringify(obj)));
