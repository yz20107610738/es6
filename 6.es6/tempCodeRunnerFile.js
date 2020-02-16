function flat1(arr) {
    let p = arr.pop();
    if(!Array.isArray(p)) return [p];
    return arr.concat(flat1(p));
}

console.log(flat1(arr));