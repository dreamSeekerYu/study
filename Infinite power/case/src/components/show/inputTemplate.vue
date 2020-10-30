<template>
  <el-input
    v-model="formData[el.vModel]"
    :clearable="el.clearable ? 'clearable' : false"
    :placeholder="el.placeholder ? el.placeholder : false"
    :disabled="el.disabled ? true : false"
    :maxlength="el.maxlength ? el.maxlength : false"
    :show-word-limit="el['show-word-limit'] ? 'show-word-limit' : false"
    :readonly="el.readonly ? 'readonly' : false"
    :prefix-icon="el['prefix-icon'] ? el['prefix-icon'] : ''"
    :suffix-icon="el['suffix-icon'] ? el['suffix-icon'] : ''"
    :show-password="el['show-password'] ? el['show-password'] : false"
    :type="el.type ? el.type : ''"
    :autosize="
      el.autosize && el.autosize.minRows
        ? { minRows: el.autosize.minRows, maxRows: el.autosize.maxRows }
        : null
    "
  >
    <template v-if="el.prepend" slot="prepend">{{ el.prepend }}</template>
    <template v-if="el.append" slot="append">{{ el.append }}</template>
  </el-input>
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

<style lang="scss" scoped>
/deep/ .el-form-item__content {
  display: inline-block;
}
</style>
