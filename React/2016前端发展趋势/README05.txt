MOCHA + 断言库

mocha是一个功能丰富的javascript测试框架，可以运行在nodejs和浏览器环境，使异步测试变得简单有趣。mocha串联运行测试，允许灵活和精确地报告结果，同时映射未捕获的异常来纠正测试用例。
支持TDD/BDD的开发方式，结合should.js/expect/chai/better-assert断言库，能轻松构建各种风格的测试用例。

var assert = require('assert');

describe('Array', function () {
  describe('#indexOf()', function () {
    it ('当值不存在时应该返回-1', function () {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    })
  });
});

IMMUTABLE.JS
什么是immutable.js，为什么需要它。
有人说：Immutable可以给React应用带来数十倍的提升，也有人说Immutable的引入是近期Javascript中伟大的发明，因为同期React太火，它的光芒被掩盖了。
Immutable是一个思想，而Immutable.js是一个类库。

看以下代码：
foo = {a: 1};
bar = foo;
bar.a = 2;
console.log(foo.a); // 2
这样做可以节约内存，但当应用复杂后，这就造成了非常大的隐患，Mutable带来的优点变得得不偿失。而一般大家都会使用深拷贝或是浅拷贝的方式来解决这个问题。
但同时也带来了内存的消耗。
（node v6.0 它做了一个升级，它对模块加载的性能提升了4倍，require exports，exports导出数据的时候是一个静态的对象，它就是一个静态的拷贝过程
因为你exports的对象，其它文件再对它进行修改的时候，不会修改它源文件里面的值，因为你只是拷贝过去了，那拷贝多次，也是性能的消耗）

Immutable Data就是一旦创建就不能再被更改的数据。
对Immutable对象的任何修改或添加删除操作都会返回一个新的Immutable对象。
Immutable实现的原理是Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。
同时为了避免deep Copy，把所有节点都复制一遍带来的性能损耗，Immutable使用了Structural Sharing（结构共享），即：如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。

几个重要的数据结构：
（Immutable.js会有一些新的数据结构）
Map：键值对集合，对应于Object，ES6也有专门的Map对象
List：有序可重复的列表，对应于Array
Set：无序且不可重复的列表

HTTP请求：
Promise（通过ES6的Promise自己去封装一个ajax的方法）
（后面几个就是类库了：）
axios
node-fetch
isomorphic-fetch（它做的性能更高）
（如果在React中不去使用jquery的ajax方法，那如何去发送ajax请求）
