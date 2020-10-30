<template>
  <el-dialog
    v-if="type == 'dialog'"
    v-bind="$attrs"
    v-on="$listeners"
    @open="onOpen"
    @close="onClose"
    title="Dialog Titile"
  >
    <slot></slot>
    <!-- <div slot="footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="handelConfirm">确定</el-button>
    </div> -->
  </el-dialog>
</template>

<script>
export default {
  name: 'dialogWarrper',
  methods: {
    onOpen() {},
    onClose() {},
  },
}
</script>

<style lang="scss" scoped></style>
