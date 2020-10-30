<template>
  <el-form-item label="创建时间：">
    <el-date-picker
      :type="FormItem.typeConfig"
      v-model="FormItem.value"
      unlink-panels
      range-separator="-"
      :start-placeholder="FormItem['start-placeholder']"
      :end-placeholder="FormItem['end-placeholder']"
      :picker-options="FormItem.pickerOptions"
      :value-format="FormItem['value-format']"
    >
    </el-date-picker>
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
