/*
 * @Author: chenleilong chenleilong@51yund.com
 * @Date: 2023-03-13 17:00:01
 * @LastEditors: chenleilong chenleilong@51yund.com
 * @LastEditTime: 2023-03-13 17:43:22
 * @FilePath: /GitHub/studyCode/Node/moduleTest.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 精准查找
console.log(require("./a.js"));
// 按查找顺序查找
console.log(require("a.js"));

console.log(require("a.json"));

console.log(require); // 最终获取到的是module.exports

// function require(path) {
//   // 将path转为绝对路径
//   // 判断该模块是否已有缓存
//   // 读取文件内容
//   // 将文件内容包裹到一个函数中处理
// 创建module对象
// exports.module = {}
// 将数据放入module对象
// }
