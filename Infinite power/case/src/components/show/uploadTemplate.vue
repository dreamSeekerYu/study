<template>
  <el-upload
    :disabled="el.disabled ? true : false"
    :action="el.action ? el.action : ''"
    :multiple="el.multiple ? el.multiple : false"
    :list-type="el['list-type'] !== 'text' ? el['list-type'] : ''"
    :accept="el.accept ? el.accept : ''"
    :name="el.name !== 'file' ? el.name : ''"
    :auto-upload="el['auto-upload'] === false ? false : true"
    :before-upload="this.$parent[`${el.vModel}BeforeUpload`] || function() {}"
    :file-list="formData[`${el.vModel}fileList`]"
  >
    <i v-if="el['list-type'] === 'picture-card'" class="el-icon-plus"></i>
    <el-button v-else size="small" type="primary" icon="el-icon-upload">{{
      el.buttonText
    }}</el-button>
    <div v-if="el.showTip" slot="tip" class="el-upload__tip">
      只能上传不超过 {{ el.fileSize }}{{ el.sizeUnit }} 的{{ el.accept }}文件
    </div>
    <!--  const disabled = el.disabled ? ':disabled=\'true\'' : ''
    const action = el.action ? `:action="${el.vModel}Action"` : ''//TODO:
    const multiple = el.multiple ? 'multiple' : ''
    const listType = el['list-type'] !== 'text' ? `list-type="${el['list-type']}"` : ''
    const accept = el.accept ? `accept="${el.accept}"` : ''
    const name = el.name !== 'file' ? `name="${el.name}"` : ''
    const autoUpload = el['auto-upload'] === false ? ':auto-upload="false"' : ''
    const beforeUpload = `:before-upload="${el.vModel}BeforeUpload"`//TODO:
    const fileList = `:file-list="${el.vModel}fileList"`
    const ref = `ref="${el.vModel}"`
    let child = buildElUploadChild(el)
     -->
  </el-upload>
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
