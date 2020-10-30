<template>
  <div style="margin-left:10px">
    <el-row v-if="someSpanIsNot24" :gutter="conf.gutter">
      <el-form
        :label-position="
          conf.labelPosition !== 'right' ? conf.labelPosition : ''
        "
        :disabled="conf.disabled ? conf.disabled : false"
        :ref="conf.formRef"
        :model="formData"
        :rules="rules"
        :size="conf.size"
        :label-width="conf.labelWidth + 'px'"
      >
        <layoutWrapper
          v-for="(item, index) in conf.fields"
          :key="index"
          :element="item"
          :formData="formData"
          :rules="rules"
          :conf="conf"
        ></layoutWrapper>
      </el-form>
    </el-row>
    <el-form
      v-else
      :label-position="conf.labelPosition !== 'right' ? conf.labelPosition : ''"
      :disabled="conf.disabled ? conf.disabled : false"
      :ref="conf.formRef"
      :model="formData"
      :rules="rules"
      :size="conf.size"
      :label-width="conf.labelWidth + 'px'"
    >
      <layoutWrapper
        v-for="(item, index) in conf.fields"
        :key="index"
        :element="item"
        :formData="formData"
        :rules="rules"
        :conf="conf"
      ></layoutWrapper>
    </el-form>
  </div>
</template>

<script>
import layoutWrapper from './layoutWrapper'
export default {
  components: {
    layoutWrapper,
  },
  props: {
    conf: {
      default() {
        return {
          labelPosition: '',
          disabled: false,
          formRef: '',
          formModel: {},
          formRules: {},
          size: '',
          labelWidth: '',
          gutter: 0,
          fields: [],
        }
      },
    },
    formData: {
      default() {
        return {}
      },
    },
    rules: {
      default() {
        return {}
      },
    },
  },
  computed: {
    someSpanIsNot24() {
      return this.conf.fields.some((item) => item.span !== 24)
    },
  },
  mounted() {
    console.log(this)
  },
}

// function buildFormTemplate(conf, child, type) {
//   let labelPosition = ''
//   if (conf.labelPosition !== 'right') {
//     labelPosition = `label-position="${conf.labelPosition}"`
//   }
//   const disabled = conf.disabled ? `:disabled="${conf.disabled}"` : ''
//   let str = `<el-form ref="${conf.formRef}" :model="${
//     conf.formModel
//   }" :rules="${conf.formRules}" size="${conf.size}" ${disabled} label-width="${
//     conf.labelWidth
//   }px" ${labelPosition}>
//       ${child}
//       ${buildFromBtns(conf, type)}
//     </el-form>`
//   if (someSpanIsNot24) {
//     str = `<el-row :gutter="${conf.gutter}">
//         ${str}
//       </el-row>`
//   }
//   return str
// }
</script>

<style lang="scss" scoped></style>
