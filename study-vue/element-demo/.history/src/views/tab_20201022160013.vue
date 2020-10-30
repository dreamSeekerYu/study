<template>
  <div class="box">
    <div v-for="(item, i) in data" :key="i">{{ item.name + i }}</div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  > div {
    margin-left: 20px;
  }
}
</style>
