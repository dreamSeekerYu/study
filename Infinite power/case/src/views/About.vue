<template>
  <div>
    <dialogWarrper v-if="type == 'dialog'">
      <formWrapper :type="type" :conf="conf" :formData="formData"></formWrapper>
    </dialogWarrper>
    <formWrapper
      v-if="Object.entries(FormConfig).length"
      :type="type"
      :conf="conf"
      :formData="formData"
      :rules="this[conf.formRules]"
    ></formWrapper>

    <div v-if="ButtonConfigList.length">
      <el-button
        v-if="item.disabled"
        v-for="(item, index) in ButtonConfigList"
        :key="index"
        :type="item.type"
        :[item.shape]="true"
        >{{ item.text }}
      </el-button>
    </div>

    <tableTemplate
      v-if="Object.entries(table).length"
      :table="table"
      :paginationConfig="{
        ...table.paginationConfig,
        handleSizeChange,
        handleIndexChange,
      }"
    >
      <el-table-column v-if="table.expandTableData" type="expand" slot="expand">
        这里是展开子表格的展示位置，采用插槽的方式控制即可 slot="expand"
      </el-table-column>
      <!-- <components />
      这里可以使用自定义操作项组件或则插槽的方式 -->
      <!-- <el-table-column label="操作"
        ><template slot-scope="scope">
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column> -->

      <!-- 弹窗详情展示的关联方案
      <br />
      删除二次确认 多表tab切换
      <br />
      一个时候默认不展示
      <br />
      按钮权限配置code码
      <br />
      表单的增删查改和提交 disabled 的切换 表单提交 -->
    </tableTemplate>
  </div>
</template>

<script>
import dialogWarrper from '../components/show/dialogWrapper'
import formWrapper from '../components/show/formWrapper'
import tableTemplate from '../components/tableTemplate'
const base = localStorage.getItem('pageConfig')
const pageConfig = base ? JSON.parse(base) : {}
const { FormConfig, ActionConfig, TableConfig } = pageConfig
// const conf = JSON.parse(localStorage.getItem('text')).data //html
// const type = JSON.parse(localStorage.getItem('text')).type // dialog
// const js = JSON.parse(localStorage.getItem('js')) //js

/**
const ButtonConfigListstr = localStorage.getItem('ActionConfig')
const ButtonConfigList = ButtonConfigListstr
  ? JSON.parse(ButtonConfigListstr)
  : []
const TableColumns = JSON.parse(localStorage.getItem('TableColumns'))
 */

export default {
  // inheritAttrs: type == 'dialog' ? false : true,
  data() {
    return {
      FormConfig,
      ...(FormConfig.js ? FormConfig.js.data : {}),
      conf: FormConfig ? FormConfig.data : [],
      type: FormConfig ? FormConfig.type : '', // dialog
      ButtonConfigList: ActionConfig ? ActionConfig : [],
      table: TableConfig ? TableConfig : {},
      paginationConfig: TableConfig ? TableConfig.paginationConfig : {},
      // {
      //   paginationConfig: {
      //     total: 100,
      //     pageSize: 10,
      //     pageIndex: 1,
      //     'page-sizes': [10, 30, 50, 100],
      //     layout: 'total, sizes, prev, pager, next, jumper',
      //   },
      //   tableConfig: {
      //     stripe: true, // 斑马条纹
      //     border: true,
      //     height: 500,
      //     style: 'width: 95%',
      //     'highlight-current-row': true, // 高亮选中
      //     index: true, // 添加左侧默认下表 该属性传入数字时，将作为索引的起始值
      //     // selection: true, // 是否多选
      //     handleCurrentChange: (row) => {
      //       // 点击单选
      //       this.selectRow = row
      //     },
      //     handleSelectionChange: (rows) => {
      //       // 多选
      //       this.selectionRow = rows
      //     },
      //     // 'show-summary': true, //开启合计功能
      //     // 'sum-text': '总计/合计/小计', //字段配置
      //     // 'summary-method': () => {}, //自定义合计功能逻辑
      //   },
      //   tableColumns: TableColumns,
      //   //  Object.freeze([
      //   //   {
      //   //     prop: 'date',
      //   //     label: '日期',
      //   //     filters: function(val) {
      //   //       const str = `function(val) {
      //   //         return val + '666666'
      //   //       }` // 可以执行自定义的配置函数
      //   //       return eval(`(${str})(val)`)
      //   //     },
      //   //     fixed: false, // true, left, right  固定列位置
      //   //   },
      //   //   // {
      //   //   //   prop: 'name',
      //   //   //   label: '合并表头',
      //   //   //   chidren: [
      //   //   //     {
      //   //   //       prop: 'dd',
      //   //   //       label: '姓名',
      //   //   //     },
      //   //   //     {
      //   //   //       prop: 'cc',
      //   //   //       label: '姓名',
      //   //   //     },
      //   //   //   ],
      //   //   // },
      //   //   {
      //   //     prop: 'address',
      //   //     label: '地址',
      //   //   },
      //   //   {
      //   //     //  可以使用插槽的方式更改为自定义组件的方式，但是不能很好的控制使用的位置
      //   //     prop: 'action',
      //   //     label: '操作',
      //   //     action: (arr, item) => {
      //   //       this.removeAction(item)
      //   //     },
      //   //     // actionlist: [  // 应该更改为列表的形式
      //   //     //   {
      //   //     //     text: '删除',
      //   //     //     action: (arr, item) => {
      //   //     //       this.removeAction(item)
      //   //     //     },
      //   //     //   },
      //   //     // ],
      //   //   },
      //   // ]),
      //   tableData: Object.freeze([
      //     {
      //       date: 22,
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1518 弄',
      //     },
      //     {
      //       date: 11,
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1517 弄',
      //     },
      //     {
      //       date: 33,
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1519 弄',
      //     },
      //   ]),
      //   expandTableData: null,
      // },

      // [conf.formModel]: {}, // 设置表单数据对象
      // [conf.formRules]: {}, // 设置表单校验数组对象
      // selectOptions: '',
      // props: '',
    }
  },
  components: {
    dialogWarrper,
    formWrapper,
    tableTemplate,
  },
  computed: {
    ...(FormConfig.js ? FormConfig.js.computed : { a() {} }),
  },
  created() {
    console.log(JSON.stringify(this.conf, null, 2))
  },
  mounted() {},
  methods: {
    ...(FormConfig.js ? FormConfig.js.methods : { b() {} }),
    handleSizeChange() {
      console.log('handleSizeChange')
    },
    handleIndexChange() {
      console.log('handleIndexChange')
    },
    removeAction(row) {
      this.table.tableData = [
        ...this.table.tableData.filter((item) => item !== row),
      ]
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
  },
}
</script>

<style lang="scss" scoped></style>
