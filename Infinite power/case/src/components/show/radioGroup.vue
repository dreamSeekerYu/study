<template>
  <!--  return `<${el.tag} ${vModel} ${size} ${disabled}>${child}</${el.tag}>` -->
  <el-radio-group
    v-model="formData[el.vModel]"
    :size="el.size"
    :disabled="el.disabled ? true : false"
  >
    <!-- <${tag} v-for="(item, index) in ${conf.vModel}Options" :key="index" :label="item.value" :disabled="item.disabled" ${border}>{{item.label}}</${tag}> -->
    <el-radio-button
      v-if="el.options && el.options.length && el.optionType === 'button'"
      v-for="(item, index) in el.options"
      :key="index"
      :label="item.value"
      :disabled="item.disabled"
      :border="el.border"
    >
      {{ item.label }}
    </el-radio-button>
    <el-radio
      v-if="el.options && el.options.length && el.optionType !== 'button'"
      v-for="(item, index) in el.options"
      :key="index"
      :label="item.value"
      :disabled="item.disabled"
      :border="el.border"
    >
      {{ item.label }}</el-radio
    >
  </el-radio-group>
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
