<template>
  <div class="box">
    {{ label }}
    <div :class="active == i ? 'active' : ''" v-for="(item, i) in data" :key="i">{{ item.name + i }}</div>
  </div>
</template>

<script>
export default {
  props: ['data', 'label', 'active'],
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  > div {
    margin-left: 20px;
  }
}
.active {
  color: red;
}
</style>
