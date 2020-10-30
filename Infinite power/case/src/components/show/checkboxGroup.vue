<template>
  <!--  return `<${el.tag} ${vModel} ${size} ${disabled}>${child}</${el.tag}>` -->
  <el-checkbox-group
    v-model="formData[el.vModel]"
    :size="el.size || 'small'"
    :disabled="el.disabled ? true : false"
    :min="el.min ? el.min : 0"
    :max="el.max ? el.max : Infinity"
  >
    <!-- <${tag} v-for="(item, index) in ${conf.vModel}Options" :key="index" :label="item.value" :disabled="item.disabled" ${border}>{{item.label}}</${tag}> -->
    <el-checkbox-button
      v-if="el.options && el.options.length && el.optionType === 'button'"
      v-for="(item, index) in el.options"
      :key="index"
      :label="item.value"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </el-checkbox-button>
    <el-checkbox
      v-if="el.options && el.options.length && el.optionType !== 'button'"
      v-for="(item, index) in el.options"
      :key="index"
      :label="item.value"
      :disabled="item.disabled"
      :border="el.border ? true : false"
    >
      {{ item.label }}</el-checkbox
    >
  </el-checkbox-group>
</template>

<script>
export default {
  props: {
    el: {},
    formData: {},
  },
}
</script>

<style lang="scss" scoped></style>
