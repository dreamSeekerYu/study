<template>
  <el-rate
    v-model="formData[el.vModel]"
    :disabled="el.disabled ? true : false"
    :max="el.max ? el.max : false"
    :allow-half="el['allow-half'] ? `${el['allow-half']}` : ''"
    :show-text="el['show-text'] ? `${el['show-text']}` : ''"
    :show-score="el['show-score'] ? `${el['show-score']}` : ''"
  >
  </el-rate>
</template>

<script>
export default {
  props: {
    input: {},
    el: {},
    formData: {},
  },
}
</script>

<style lang="scss" scoped></style>
