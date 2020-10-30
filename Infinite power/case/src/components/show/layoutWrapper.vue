<template>
  <el-col :span="element.span">
    <el-form-item
      v-if="element.layout == 'colFormItem'"
      :label-width="
        element.labelWidth ? `${element.labelWidth}px` : `${conf.labelWidth}px`
      "
      :required="rules[element.vModel] ? true : false"
      :label="element.label"
      :prop="element.vModel"
    >
      <inputTemplate
        v-if="element.tag == 'el-input'"
        :el="element"
        :formData="formData"
      ></inputTemplate>
      <inputNumberTemplate
        v-if="element.tag == 'el-input-number'"
        :el="element"
        :formData="formData"
      ></inputNumberTemplate>
      <selectTemplate
        v-if="element.tag == 'el-select'"
        :el="element"
        :formData="formData"
      ></selectTemplate>
      <radioGroupTemplate
        v-if="element.tag == 'el-radio-group'"
        :el="element"
        :formData="formData"
      ></radioGroupTemplate>
      <checkboxGroupTemplate
        v-if="element.tag == 'el-checkbox-group'"
        :el="element"
        :formData="formData"
      ></checkboxGroupTemplate>
      <switchTemplate
        v-if="element.tag == 'el-switch'"
        :el="element"
        :formData="formData"
      ></switchTemplate>
      <!-- 级联选择器 -->
      <!-- <cascaderTemplate
        v-if="element.tag == 'el-cascader'"
        :el="element"
        :formData="formData"
      ></cascaderTemplate> -->
      <sliderTemplate
        v-if="element.tag == 'el-slider'"
        :el="element"
        :formData="formData"
      ></sliderTemplate>
      <timePickerTemplate
        v-if="element.tag == 'el-time-picker'"
        :el="element"
        :formData="formData"
      ></timePickerTemplate>
      <datePickerTemplate
        v-if="element.tag == 'el-date-picker'"
        :el="element"
        :formData="formData"
      ></datePickerTemplate>
      <rateTemplate
        v-if="element.tag == 'el-rate'"
        :el="element"
        :formData="formData"
      ></rateTemplate>
      <colorPickerTemplate
        v-if="element.tag == 'el-color-picker'"
        :el="element"
        :formData="formData"
      ></colorPickerTemplate>
      <uploadTemplate
        v-if="element.tag == 'el-upload'"
        :el="element"
        :formData="formData"
      ></uploadTemplate>
    </el-form-item>
    <el-row
      v-if="element.layout == 'rowFormItem'"
      :type="element.type === 'default' ? '' : element.type"
      :justify="element.type === 'default' ? '' : element.justify"
      :align="element.type === 'default' ? '' : element.align"
      :gutter="element.gutter ? element.gutter : ''"
    >
      需要递归调用自身
    </el-row>
  </el-col>
</template>

<script>
import inputTemplate from './inputTemplate'
import inputNumberTemplate from './inputNumberTemplate'
import selectTemplate from './selectTemplate'
import radioGroupTemplate from './radioGroup'
import checkboxGroupTemplate from './checkboxGroup'
import switchTemplate from './switchTemplate'
import cascaderTemplate from './cascaderTemplate'
import sliderTemplate from './sliderTemplate'
import timePickerTemplate from './timePickerTemplate'
import datePickerTemplate from './datePickerTemplate'
import rateTemplate from './rateTemplate'
import colorPickerTemplate from './colorPickerTemplate'
import uploadTemplate from './uploadTemplate'

export default {
  props: {
    element: {},
    formData: {},
    rules: {},
    conf: {}, // 只拷贝第一层的数据  labelwidth 字段有用
  },
  components: {
    inputTemplate,
    inputNumberTemplate,
    selectTemplate,
    radioGroupTemplate,
    checkboxGroupTemplate,
    switchTemplate,
    sliderTemplate,
    timePickerTemplate,
    datePickerTemplate,
    rateTemplate,
    colorPickerTemplate,
    uploadTemplate,
  },
}

// const layouts = {
//   colFormItem(element) {
//     let labelWidth = ''
//     if (element.labelWidth && element.labelWidth !== confGlobal.labelWidth) {
//       // TODO
//       labelWidth = `label-width="${element.labelWidth}px"`
//     }
//     const required = !trigger[element.tag] && element.required ? 'required' : '' // TODO
//     const tagDom = tags[element.tag] ? tags[element.tag](element) : null
//     let str = `<el-form-item ${labelWidth} label="${element.label}" prop="${element.vModel}" ${required}>
//         ${tagDom}
//       </el-form-item>`
//     str = colWrapper(element, str)
//     return str
//   },
//   rowFormItem(element) {
//     const type = element.type === 'default' ? '' : `type="${element.type}"`
//     const justify =
//       element.type === 'default' ? '' : `justify="${element.justify}"`
//     const align = element.type === 'default' ? '' : `align="${element.align}"`
//     const gutter = element.gutter ? `gutter="${element.gutter}"` : ''
//     const children = element.children.map((el) => layouts[el.layout](el))
//     let str = `<el-row ${type} ${justify} ${align} ${gutter}>
//       ${children.join('\n')}
//     </el-row>`
//     str = colWrapper(element, str)
//     return str
//   },
// }
</script>

<style lang="scss" scoped></style>
