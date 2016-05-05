核心类库：REACT
库，而不是框架
（库相当于解决了某一些问题，提供给我们一些API，而框架的话，它的层级更高范围更广，相当于提供了很多思想，解决方案，相当于是一个整体，例如：Angular）

专注UI

组件化开发 && JSX语法

虚拟DOM，高效渲染

单向数据流

支持服务端渲染

生态完善：tools/Redux/Router/React Native...

（技术选型）

REACT VUE ANGULAR2.0 比武场：

产品          服务器端          体积          体验                        生态          上手
React         支持              50k           掌握JSX语法和组件的封装     最活跃         中等
Vue           可能会支持         74k           基本的HTML/CSS/JS          其次          容易
Angular2.0    号称会支持         500k+         未体验过                  远低于二者      难

那么，如何保证团队的代码规范呢：
使用ESlint配合Airbnb指南来保持我们团队的代码风格

ESLINT：
使用Lint工具和代码风格检测工具，则可以辅助编码规范执行，有效控制代码质量。
install：
npm install --save-dev eslint eslint-config-airbnb
.eslintrc
{
  "extends": "airbnb/base",
  "globals": {
    "_id": true,
    "Swipe": true
  }
}

路由管理：REACT-ROUTER
单页应用时代的到来，为之服务的前端路由系统是不可获取的一部分：有独立的director，比较轻量，Backbone、Angular、React、Vue等都有其各自的路由
React-Router针对React做了许多UI展示的优化。
（director.js是一个独立的路由系统）

简单示例：
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, Profile } from '../containers';

export default (
  <Route path="/" component={App}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
)
Route是由组件组合起来的，这是一个思路特别清晰的事情，不用再去根据不同的路由加载不同的资源，而且在性能方面也做了很多的提高
当然，这里React-Router可能在使用过程中，如果要去开发复杂的应用，会有一些坑，后面会建议使用和Redux做一些结合的时候，也会有一些其它的技术方案去进行推荐，比如说：
React-Router-Redux，去做一个结合。

应用生命周期：REDUX
我们有了视图和组件层，应用程序还需要管理数据状态和应用的生命周期。Redux也是毋庸置疑的优胜者。
我们使用React去封装组件的时候，我们提到单向数据流，那么单向数据流，它的流动是怎样的，
如果不用应用生命周期管理的话，那么我们需要在组件里面去请求数据，然后setState就设置它的state，然后再去改变它view层的渲染。

Redux是Flux思想的实现，它是一个类库，实现Flux思想的话，也有一些其它的类库，比如说：Facebook的Flux以及社区ReFlux这样的类库，当然Redux是其中一个，在社区里面呼声最高，应用最广泛文档也最全，然后，它的性能思路生态也是最完善的。

除了React，Facebook展示了名叫Flux的单向数据流的设计模式。Flux最早用来解决和简化应用的状态管理，但是随之而来，很多开发者提出了不少新的问题如何存储数据状态和从哪发送Ajax请求。
为了解决这些问题，不少基于Flux模式之上的框架诞生了：Fluxible，Reflux，Alt，Flummox，Lux，Nuclear，Fluxxor还有很多。
但是我们最后会选用Redux去做我们的应用数据状态的管理，这其中的类Flux的优雅实现最终赢得了社区的关注，它就是Redux。

基础示例：
import { createStore } from 'redux'

// reducer
const todos = (state = [''], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign([], state, [action.text]);
        default:
            return state;
    }
}

let store = createStore(todos, [ 'Use Redux' ])

// action creator
function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

const handleChange =  () => {
    console.log(store.getState());
}

let unsubscribe = store.subscribe(handleChange)

handleChange()

// dispatch
store.dispatch(addTodo('Read the docs'))
