<template>
  <el-time-picker
    v-model="formData[el.vModel]"
    :clearable="el.clearable ? 'clearable' : false"
    :placeholder="el.placeholder ? el.placeholder : ''"
    :width="el.style && el.style.width ? '100%' : false"
    :disabled="el.disabled ? true : false"
    :maxlength="el.maxlength ? el.maxlength : false"
    :start-placeholder="
      el['start-placeholder'] ? `${el['start-placeholder']}` : ''
    "
    :end-placeholder="el['end-placeholder'] ? `${el['end-placeholder']}` : ''"
    :range-separator="el['range-separator'] ? `${el['range-separator']}` : ''"
    :is-range="el['is-range'] ? el['is-range'] : false"
    :format="el.format ? `${el.format}` : ''"
    :value-format="el['value-format'] ? `${el['value-format']}` : ''"
    :picker-options="el['picker-options'] ? `${el['picker-options']}` : ''"
  >
  </el-time-picker>
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
