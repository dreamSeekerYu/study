<template>
  <div>
    <EleForm
      :formData="formData"
      :formRules="formRules"
      :formConfig="formConfig"
      :formItemList="formItemList"
    ></EleForm>
  </div>
</template>

<script>
import EleForm from '@/components/form.vue'
const pickerOptions = {
  shortcuts: [
    {
      text: '今天',
      onClick(picker) {
        const end = new Date(
          new Date(new Date().toLocaleDateString()).getTime() +
            24 * 60 * 60 * 1000 -
            1
        )
        const start = new Date(
          new Date(new Date().toLocaleDateString()).getTime()
        )
        picker.$emit('pick', [start, end])
      },
    },
    {
      text: '最近一周',
      onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        picker.$emit('pick', [start, end])
      },
    },
    {
      text: '最近一个月',
      onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        picker.$emit('pick', [start, end])
      },
    },
    {
      text: '最近三个月',
      onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        picker.$emit('pick', [start, end])
      },
    },
  ],
}

export default {
  components: {
    EleForm,
  },
  data() {
    return {
      formData: {
        name: 'adsfadsf',
        status: 0,
        dateTime: '2018',
      }, // 表单参数集合
      formConfig: {},
      formRules: {},
      formItemList: [
        {
          RowId: 1, // 第几行不提供时默认独占一行
          ColWidth: 6, // 占比，默认为6
          type: 'input',
          label: '姓名',
          value: 'name', //  映射 formDate 字段的 key 值
          placeHolder: '请输入姓名',
        },
        {
          type: 'select',
          label: '姓名',
          value: 'status',
          placeHolder: '请输入姓名',
          selectList: [
            { label: '全部', value: '' },
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
          value: 'dateTime',
          placeHolder: '请选择日期',
          pickerOptions,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
