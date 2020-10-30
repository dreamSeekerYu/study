<template>
  <el-cascader
    v-model="formData[el.vModel]"
    :clearable="el.clearable ? 'clearable' : false"
    :placeholder="el.placeholder ? el.placeholder : ''"
    :width="el.style && el.style.width ? '100%' : false"
    :disabled="el.disabled ? true : false"
    :maxlength="el.maxlength ? el.maxlength : false"
    options
    props
    :show-all-levels="el['show-all-levels'] ? '' : false"
    filterable
    :separator="el.separator === '/' ? '' : el.separator"
  >
  </el-cascader>
  <!-- 
    const options = el.options ? `:options="${el.vModel}Options"` : ''
    const props = el.props ? `:props="${el.vModel}Props"` : ''
    const showAllLevels = el['show-all-levels'] ? '' : ':show-all-levels="false"'
    const filterable = el.filterable ? 'filterable' : ''
    const separator = el.separator === '/' ? '' : `separator="${el.separator}"`
   -->
</template>

<script>
export default {
  props: {
    input: {},
    el: {},
    formData: {},
  },
  created() {},
  computed: {},
}
</script>

<style lang="scss" scoped></style>
