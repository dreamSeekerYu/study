<template>
  <el-switch
    v-model="formData[el.vModel]"
    :disabled="el.disabled ? true : false"
    :active-text="el['active-text'] ? el['active-text'] : ''"
    :inactive-text="el['inactive-text'] ? el['inactive-text'] : ''"
    :active-color="el['active-color'] ? el['active-color'] : ''"
    :inactive-color="el['inactive-color'] ? el['inactive-color'] : ''"
    :active-value="el['active-value'] !== true ? el['active-value'] : true"
    :inactiveValue="
      el['inactive-value'] !== false ? el['inactive-value'] : false
    "
  ></el-switch>
</template>

<script>
export default {
  props: {
    el: {},
    formData: {},
  },
  data() {
    return {
      value: true,
    }
  },
}
// switch 切换的状态改变失败，需要通过向上传参触发改变 // TODO:
</script>

<style lang="scss" scoped></style>
