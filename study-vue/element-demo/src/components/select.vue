<template>
  <el-form-item :label="FormItem.label">
    <el-select v-model="formData[FormItem.value]" placeholder=" 请选择状态">
      <el-option
        v-for="(item, index) in FormItem.selectList"
        :key="index"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
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
