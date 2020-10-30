<template>
  <div>
    child
  </div>
</template>

<script>
  export default {
    beforeCreate(){
      console.log(this.$attr)
      console.log(this.$props)
      console.log(this.$listeners)
    },
    mounted(){
      this.$emit('asdfa',13213)
    }
  }
</script>

<style lang="scss" scoped>

</style>











