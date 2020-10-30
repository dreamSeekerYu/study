<template>
  <div>
    <div v-for="(item, i) in data" :key="i">{{ item.name + id }}</div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped></style>
