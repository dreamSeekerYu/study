<template>
  <div class="box">
    <div>{{ label }}</div>
    <div :class="active == i ? 'active' : ''" v-for="(item, i) in data" :key="i" @click="$emit('update:active', i)">{{ item.name + i }}</div>
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
