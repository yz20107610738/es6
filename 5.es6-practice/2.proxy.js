// proxy 缺点 兼容性差, vue重写 defineProperty

// proxy 代理
let obj = {
  name: "zf",
  age: { a: 10 }
};

let handler = {
    set(target, key, val){
        if(key === 'length') return true;
        console.log('更新')
        return Reflect.set(target, key, val);
    },
    get(target, key){
        if(typeof target[key] === 'object'){
            return new Proxy(target[key], handler)
        }
        return Reflect.get(target, key);
    }
}

let proxy = new Proxy(obj, handler);

// let name = proxy.name;   // 触发 get 方法
proxy.name = "hello"; // 触发 set 方法
proxy.age.a = 100;
