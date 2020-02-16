console.log(obj1.a);
// 在import 前面打印是OK的, import自带变量提升
import * as obj1 from './a.js'
// import _ from "./a.js";
// import obj2 from './b.js';


// console.log(Object.prototype.toString.call(obj1));
// console.log(_);
// console.log(obj1.default);

// console.log(obj2);

// import("./b.js").then(res => {
//   console.log("res", res.default);
// });
