<template>
  <div>hover me!</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  transition: all 10s;
  /* 写在这里 划入时正想转动，划出时转回去 */
}
div:hover {
  /* transition: all 10s; */
  /* 写在这里面只有正向的动画 */
  transform: rotate(10turn);
}
</style>
