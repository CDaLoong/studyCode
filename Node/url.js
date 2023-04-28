/*
 * @Author: chenleilong chenleilong@51yund.com
 * @Date: 2023-03-13 18:04:40
 * @LastEditors: chenleilong chenleilong@51yund.com
 * @LastEditTime: 2023-03-13 18:26:21
 * @FilePath: /GitHub/studyCode/Node/url.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const URL = require("url");

const url = new URL.URL(
  "https://github.com:80/OBKoro1/koro1FileHeader?a=1&b=2#abc"
);

// const url = URL.parse("https://github.com:80/OBKoro1/koro1FileHeader?a=1&b=2#abc");
console.log(url);

const urlObj = {
  href: "https://github.com:80/OBKoro1/koro1FileHeader?a=1&b=2#abc",
  origin: "https://github.com:80",
  protocol: "https:",
  username: "",
  password: "",
  host: "github.com:80",
  hostname: "github.com",
  port: "80",
  pathname: "/OBKoro1/koro1FileHeader",
  search: "?a=1&b=2",
  hash: "#abc",
};

console.log(URL.format(urlObj));

// Url {
// href: 'https://github.com:80/OBKoro1/koro1FileHeader?a=1&b=2#abc',
// origin: 'https://github.com:80',
// protocol: 'https:',
// username: '',
// password: '',
// host: 'github.com:80',
// hostname: 'github.com',
// port: '80',
// pathname: '/OBKoro1/koro1FileHeader',
// search: '?a=1&b=2',
// searchParams: URLSearchParams { 'a' => '1', 'b' => '2' },
// hash: '#abc'
//   }
