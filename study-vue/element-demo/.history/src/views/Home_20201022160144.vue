<template>
  <div class="home">
    <tabs :data="table.tableData" label="label" :active.sync="id"></tabs>
    <pre>
      单选行信息{{ selectRow }}
      多选行信息{{ selectionRow }}
    </pre>
    <HelloWorld :table="table" :paginationConfig="{ ...paginationConfig, handleSizeChange, handleIndexChange }">
      <el-table-column type="expand" slot="expand">
        这里是展开子表格的展示位置，采用插槽的方式控制即可 slot="expand"
      </el-table-column>
      <!-- <components />
      这里可以使用自定义操作项组件或则插槽的方式 -->
      <el-table-column label="操作"
        ><template slot-scope="scope">
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import components from '@/components/components.vue'
import tabs from './tab'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    components,
    tabs,
  },
  data() {
    return {
      id: '',
      selectRow: {}, // 单选
      selectionRow: {}, // 多选
      paginationConfig: {
        total: 100,
        pageSize: 10,
        pageIndex: 1,
        'page-sizes': [10, 30, 50, 100],
        layout: 'total, sizes, prev, pager, next, jumper',
      },
      table: {
        tableConfig: {
          stripe: true, // 斑马条纹
          border: true,
          height: 500,
          style: 'width: 95%',
          'highlight-current-row': true, // 高亮选中
          index: true, // 添加左侧默认下表 该属性传入数字时，将作为索引的起始值
          selection: true, // 是否多选
          handleCurrentChange: (row) => {
            // 点击单选
            this.selectRow = row
          },
          handleSelectionChange: (rows) => {
            // 多选
            this.selectionRow = rows
          },
          'show-summary': true, //开启合计功能
          'sum-text': '总计/合计/小计', //字段配置
          // 'summary-method': () => {}, //自定义合计功能逻辑
        },
        tableColumns: Object.freeze([
          {
            prop: 'date',
            label: '日期',
            filters(val) {
              return val + '123456'
            },
            fixed: false, // true, left, right  固定列位置
          },
          {
            prop: 'name',
            label: '合并表头',
            chidren: [
              {
                prop: 'dd',
                label: '姓名',
              },
              {
                prop: 'cc',
                label: '姓名',
              },
            ],
          },
          {
            prop: 'address',
            label: '地址',
          },
          {
            //  可以使用插槽的方式更改为自定义组件的方式，但是不能很好的控制使用的位置
            prop: 'action',
            label: '操作',
            action: (arr, item) => {
              this.removeAction(item)
            },
          },
        ]),
        tableData: Object.freeze([
          {
            date: 22,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: 11,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: 33,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: 44,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: 55,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ]),
      },
    }
  },
  methods: {
    handleSizeChange() {
      console.log('  handleSizeChange')
    },
    handleIndexChange() {
      console.log('  handleIndexChange')
    },
    removeAction(row) {
      this.table.tableData = [...this.table.tableData.filter((item) => item !== row)]
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
  },
}

/**
 * 自动配置的操作单元可以找到组件实例 this，可以跳转路由等，
 * 需要操作数据时候需要重新替换原有的数据，并且打断原有的指针，详见 methods/ removeAction 方法
 * 直接修改数据会导致 数据 proxy 报错
 *
 *
   树类型的数据懒加载相关参数  table 上面，暂时不考虑兼容这个功能，
    row-key
    lazy
    :load="load"
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
  详见 https://element.faas.ele.me/#/zh-CN/component/table

    表格合计功能
      show-summary  开启合计功能
      sum-text      字段配置
      summary-method 自定义合计功能逻辑


    最终改写成 mixin 混入或则 extend 扩展的方式，需要自己维护 
      table 字段里面的表头和报个数据
      分页相关参数
 */
</script>
