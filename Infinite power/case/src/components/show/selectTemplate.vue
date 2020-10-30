<template>
  <el-select
    :disabled="el.disabled ? true : false"
    v-model="formData[el.vModel]"
    :clearable="el.clearable ? 'clearable' : false"
    :placeholder="el.placeholder ? el.placeholder : false"
    :width="el.style && el.style.width ? '100%' : false"
    :filterable="el.filterable ? 'filterable' : false"
    :multiple="el.multiple ? 'multiple' : false"
  >
    <el-option
      v-if="el.options && el.options.length"
      v-for="(item, index) in el.options"
      :key="index"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    input: {},
    el: {},
    formData: {},
  },
}

// function buildElSelectChild(conf) {
//   const children = []
//   if (conf.options && conf.options.length) {
//     children.push(
//       `<el-option v-for="(item, index) in ${conf.vModel}Options" :key="index" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>`
//     )
//   }
//   return children.join('\n')
// }
</script>

<style lang="scss" scoped></style>
