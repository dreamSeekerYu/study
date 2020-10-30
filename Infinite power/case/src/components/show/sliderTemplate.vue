<template>
  <el-slider
    v-model="formData[el.vModel]"
    :disabled="el.disabled ? true : false"
    :min="el.min ? el.min : 0"
    :max="el.max ? el.max : 0"
    :step="el.step ? el.step : ''"
    :range="el.range ? el.range : ''"
    :show-stops="el['show-stops'] ? el['show-stops'] : ''"
  >
  </el-slider>
  <!-- 
    const min = el.min ? `:min='${el.min}'` : ''
    const max = el.max ? `:max='${el.max}'` : ''
    const step = el.step ? `:step='${el.step}'` : ''
    const range = el.range ? 'range' : ''
    const showStops = el['show-stops'] ? `:show-stops="${el['show-stops']}"` : ''
   -->
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
