<template>
  <div>
    parent
     <!-- <child   @listeners="$listeners"></child> -->
     <!-- <child  @listeners="$listeners"></child> -->
     <!-- <child  v-on="$props" @listeners="$listeners"></child> -->
      <child  v-on="$props"></child>
        <child  v-on="$attrs"></child>
      
      <input   v-on="$attrs"/>
        <input   placeholder='sadfasd'
        />
  </div>
</template>

<script>
import child from "./child.vue";
  export default {
    components:{
      child
    },
    props:['a'],
    // props 接收参数的时候  $attr里面就只能接受 props 里面没有接受的参数， 他俩加起来就是所有传递过来的参数
    // 监听的事件则没有办法传递，
    // $attrs  和 $props 只能用来传递和使用   不能直接作为标签属性去使用 
    beforeCreate(){
      console.log(this.$attrs)
      console.log(this.$props)// 始终找不到， 但是 模板里面可以直接使用
      console.log(this.$listeners)
    }
  }
</script>

<style lang="scss" scoped>

</style>