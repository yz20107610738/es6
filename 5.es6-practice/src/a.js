// export const a = 1;

let a = 1;
let b = {
  name: "zf"
};
let c = 20;


export { a, b };
export default {
    c
};
// 使用export导出的是接口
// import 导入是静态导入

// 如果使用 setInterval, export 导出的接口会动态变化 export default不会

