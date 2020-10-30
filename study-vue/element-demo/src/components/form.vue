<template>
  <div>
    form
    <hr />
    <el-form label-width="130px" :model="formData" style="margin-bottom: 15px;">
      <div style="margin: 20px 0 20px;">
        <!-- 第一行查询条件 -->
        <el-row class="queryGroup" label-width="110px">
          <el-col
            v-for="(item, index) in formItemList"
            :key="index"
            :span="item.ColWidth"
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="6"
          >
            <FormInput
              v-if="item.type == 'input'"
              :FormItem="item"
              :formData="formData"
            ></FormInput>
            <FormSelect
              v-if="item.type == 'select'"
              :FormItem="item"
              :formData="formData"
            ></FormSelect>
            <FormDatePicker
              v-if="item.type == 'datePicker'"
              :FormItem="item"
              :formData="formData"
            ></FormDatePicker>
          </el-col>
        </el-row>
      </div>
    </el-form>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </div>
</template>

<script>
import FormInput from './input'
import FormSelect from './select'
import FormDatePicker from './date-picker'

export default {
  name: 'EleForm',
  components: {
    FormInput,
    FormSelect,
    FormDatePicker,
  },
  props: {
    formData: {},
    formItemList: {
      default() {
        return [
          {
            RowId: 1, // 第几行不提供时默认独占一行
            ColWidth: 6, // 占比，默认为6
            type: 'input',
            label: '姓名',
            value: 'zhangshan',
            placeHolder: '请输入姓名',
          },
          {
            type: 'select',
            label: '姓名',
            value: '全部',
            placeHolder: '请输入姓名',
            selectList: [
              { label: '全部', value: '' }, // 不需要
              { label: '待完善', value: 0 },
              { label: '待提交', value: 1 },
              { label: '待测试', value: 2 },
              { label: '测试中', value: 3 },
              { label: '已通过', value: 4 },
              { label: '未通过', value: 5 },
              { label: '已撤回', value: 6 },
            ],
          },
          {
            RowId: 2,
            type: 'datePicker',
            label: '日期选择',
            value: '',
            placeHolder: '请选择日期',
            pickerOptions: {},
          },
        ]
      },
    },
  },
  data() {
    return {
      typeEnums: {
        input: 'FormInput',
        select: 'FormSelect',
        textarea: 'FormTextArea',
        datePicker: 'FormDatePicker', // 年月日  时分秒
        // stepArea: '',
      },
    }
  },

  methods: {
    onSubmit() {
      console.log(
        '%c res....',
        'color: red; font-style: italic',
        JSON.stringify(this.formData, null, 2)
      )
    },
  },
}
/**
 *
 *  formConfig
      formItemList
        label
        prop
        type
  *   formItemConfig
        label
        value
        placeHolder
        defaultValue

        name

  *   rules

 *    查询 重置  导入 导出
 *
 *    上传
 * 
 *    默认是可用状态， 可以配置禁用状态
 * 
 *    区间
 */
</script>

<style lang="scss" scoped></style>
