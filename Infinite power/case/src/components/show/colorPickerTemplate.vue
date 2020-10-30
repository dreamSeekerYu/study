<template>
  <el-color-picker
    v-model="formData[el.vModel]"
    :disabled="el.disabled ? true : false"
    :size="el.size ? el.size : false"
    :show-alpha="el['show-alpha'] ? `${el['show-alpha']}` : ''"
    :color-format="el['color-format'] ? `${el['color-format']}` : ''"
  >
  </el-color-picker>
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
