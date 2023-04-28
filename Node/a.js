// 要么用这个形式
exports.a = 2;
console.log(22, module);
exports.b = 3;
this.c = 8;
// 要么用这个形式
module.exports = {
  e: 0,
};
// 最终返回的是module.exports
console.log((exports === module.exports) === this);
