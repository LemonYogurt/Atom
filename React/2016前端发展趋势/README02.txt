ES6/ES7在浏览器中是不可以直接去使用的，如何在浏览器端，node端愉快的去使用ES6/ES7的语法，去实现业务功能的开发。
那么如何愉快的使用ES6：

BABEL：
Babel是一个JavaScript编译器，用于转化你的JavaScript代码

BABEL的用途：
帮你做ES2015语法的转化，这些转化器能让你现在就使用最新的JavaScript的语法，而不用等待浏览器提供支持。
（node v6已经支持了93%的ES6语法，Babel将ES6语法转换成ES5的语法）

可以对JSX支持，我们可以方便的使用React的JSX语法封装组件，Babel会帮我们将JSX代码转换成浏览器可执行的代码。

可以组合使用Babel的插件满足我们的转化需求，甚至可以自己封装插件和预设。

ES6源码：
import path from 'path';

console.log(path.resolve(__dirname, './src'));

const fn = a => {
  alert(a);
};

Babel编译后，就会写很多垫片的方法：
'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_path2.default.resolve(__dirname, './src'));

var fn = function fn(a) {
  alert(a);
};
