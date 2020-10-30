<template>
  <el-input-number
    v-model="formData[el.vModel]"
    :disabled="el.disabled ? true : false"
    :placeholder="el.placeholder ? el.placeholder : ''"
    :controls-position="el['controls-position'] ? el['controls-position'] : ''"
    :min="el.min ? el.min : -Infinity"
    :max="el.max ? el.max : Infinity"
    :step="el.step ? el.step : 1"
    :precision="el.precision ? el.precision : 0"
    :stepStrictly="el['step-strictly'] ? 'step-strictly' : false"
  >
  </el-input-number>
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
