<template>
  <div>
    <el-table :data="TableConfig.tableColumns" style="width: 100%">
      <el-table-column label="表头展示字段">
        <template slot-scope="scope">
          <el-input v-model="scope.row.label" placeholder="表头名称展示" />
        </template>
      </el-table-column>
      <el-table-column label="关联字段名称">
        <template slot-scope="scope">
          <el-input v-model="scope.row.prop" placeholder="字段prop值" />
        </template>
      </el-table-column>
      <el-table-column label="字段类型">
        <template slot-scope="scope">
          <p>{{ scope.row.type }}</p>
        </template>
      </el-table-column>
      <el-table-column label="字段类型">
        <template slot-scope="scope">
          <el-button type="primary" @click="deleteLine(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button type="danger" @click="addNewLine">新增配置</el-button>
    <hr />
    <h4>分页配置</h4>
    是否展示分页
  </div>
</template>

<script>
export default {
  props: {
    TableConfig: {
      type: Object,
    },
    // TableConfig: {
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
    //   tableColumns: [
    //     {
    //       filters: null,
    //       fixed: false,
    //       label: '',
    //       prop: '',
    //       type: '',
    //     },
    //   ],
    //   tableData: null,
    //   expandTableData: null,
    // },
  },

  methods: {
    addNewLine() {
      this.TableConfig.tableColumns.push({
        filters: null,
        fixed: false,
        label: '',
        prop: '',
        type: '',
      })
    },
    deleteLine(index) {
      this.tableData.splice(index, 1)
    },
  },
  watch: {
    tableData: {
      deep: true,
      handler() {
        this.$emit('changeTableConfig', this.TableConfig) // 不用父子组件通信就可以，对象的指针直接改变内部的值了
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
