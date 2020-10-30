Vue3.0 文章收录
- [x] [**Vue 3 | 自定义指令的新玩法**](https://mp.weixin.qq.com/s/vilIMlS-y5hgi92sHABkSQ)

```
  自定义指令的 API 改了名字，名字更贴近组件的生命周期
  自定义指令可以通过子组件的 v-bind="$attr"传递
```
在 Vue 2 中，自定义指令通过以下可选的钩子去创建：
```
    bind：当指令绑定在对应元素时触发。只会触发一次
    inserted：当对应元素被插入到 DOM 的父元素时触发
    update：当元素更新时，这个钩子会被触发（此时元素的后代元素还没有触发更新）
    componentUpdated：当整个组件（包括子组件）完成更新后，这个钩子触发
    unbind：当指令被从元素上移除时，这个钩子会被触发。也只触发一次
```
```js
  <h1 v-highlight="red">这是一串被高亮为红色的字</h1>

  Vue.directive('highlight', {
    bind(el, binding, vnode) {
      el.style.background = binding.value;
    }
  });
```
在 Vue 3 中:官方团队将自定义指令的 API 选择了比较接近的钩子名称：
```
    bind => beforeMount
    inserted => mounted
    beforeUpdate: 新的钩子，会在元素自身更新前触发
    update => 移除！
    componentUpdated => updated
    beforeUnmount: 新的钩子，当元素自身被卸载前触发
    unbind => unmounted

    新版的自定义指令  
      const NewDirective = {
        beforeMount(el, binding, vnode, prevVnode) {},
        mounted() {},
        beforeUpdate() {},
        updated() {},
        beforeUnmount() {},
        unmounted() {},
      }
```
```js
  const app = Vue.createApp({});

  app.directive('highlight', {
    beforeMount(el, binding, vnode) {
      el.style.background = binding.value;
    },
  });
```
Vue 3 是支持 fragments, 也就是说，我们可以在一个组件中保留多个根节点

现在的自定义指令已经是 Virtual DOM 节点的一部分了。当组件上挂载了自定义指令时，它的钩子会作为一个外部属性传递进组件内，最终“落地”于组件的 this.$attr。


- [x] [**123**](https://mp.weixin.qq.com/s/vilIMlS-y5hgi92sHABkSQ)