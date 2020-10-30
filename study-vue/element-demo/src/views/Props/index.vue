<template>
  <div>
    props
    <parent :placeholder="placeholder" :a="a" :b="b" @asdfa="click"></parent>
   
  </div>
</template>

<script>
import parent from "./parent.vue";

export default {
  data(){
    return {
      a:123,
      b:456,
      placeholder:'13223132312'
    }
  },
  components:{
    parent
  },
  methods:{
    click(){
      console.log(1231231321313)
    }
  }
}
</script>

<style lang="scss" scoped></style>
