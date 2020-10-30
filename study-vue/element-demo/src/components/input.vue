<template>
  <el-form-item :label="FormItem.label">
    <el-input
      v-model="formData[FormItem.value]"
      :placeholder="FormItem.placeholder"
      :trigger-on-focus="false"
      @input="FormItem.changeHandler"
    />
  </el-form-item>
</template>

<script>
export default {
  props: {
    FormItem: {
      default() {
        return {}
      },
    },
    formData: {},
  },
}
</script>

<style lang="scss" scoped></style>
