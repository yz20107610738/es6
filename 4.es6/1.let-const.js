// 以前声明变量 var
// 为什么要有let & const
// var 1.污染全局变量 (常见的作用域 window,function,with)
//     2.我们没有声明之前 会预先定义 变量提升
//     3.var 可以被定义多次
//     4.var 不能声明常量
//     5.var 默认不会产生作用域

// let 不会污染全局变量 ，不存在变量提升,不能被重复定义(同一个作用域下不能重复定义)  let + {} 可以产生一个作用域，异步循环
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// var 不能声明常量 （不能更改的量） 不能改变空间
const obj = {};
obj.a = 100;
console.log(obj)
// const 只要这个变量不改变 就不要用let 就用const

// 块级作用域:
/**
 * 块就是由花括号括起来的所有的内容。
 * 所以它可以是if，while或者是for声明中的花括号，
 * 也可以是单独的一个花括号甚至是一个函数
 * 对，函数作用域是块状作用域
 */

let bool = true
if (bool) {
  var varlocal = 10;
  let letlocal = 20;
}
console.log(varlocal);
// console.log(letlocal);

