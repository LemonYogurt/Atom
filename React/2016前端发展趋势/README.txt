（PPT链接：http://guoyongfeng.github.io/reveal/index.html）
ES6语法新特性
在2016年，不能使用ES2015/ES2016进行开发的前端技术栈，会是最先停止增长并且走下坡路的。

LET && CONST
解决变量提升的问题，给JS新增块级作用域

console.log(n);

function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n);
}
const PI = 3.1415;
console.log(PI);

TEMPLATE STRING

让我们可以更便捷的定义字符串模板
let name = '信';
let word = `我是歌手：\n
是${name}.`;
console.log(word);

ARROW FUNCTION
箭头函数，不止是简化了function的定义，还解决了function内this关键字指向的问题
drink(type = 'water') {
  setInterval(() => {
    console.log(`${name} want to drink ${type}`);
  }, 1000);
}
