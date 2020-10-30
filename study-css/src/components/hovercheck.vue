<template>
  <div>
    <ul>
      <li>hover check</li>
      <li>hover check</li>
      <li>hover check</li>
      <li>hover check</li>
      <li>hover check</li>
      <li>hover check</li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
li {
  border: 10px solid pink;
  display: list-item;
}
li + li {
  margin-top: -10px;
}
li:hover {
  /* 划过选中的效果 */
  outline: 10px solid purple;
  outline-offset: -10px;

  /* outline: 1000px solid #00000050; */
  /* 类似于弹框效果 */
}
</style>
