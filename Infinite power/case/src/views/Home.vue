<template>
  <div class="home">
    <div>
      <el-button @click="changeConfigType('configForm')">表单配置</el-button>
      <el-button @click="changeConfigType('configActionButton')">
        操作按钮配置
      </el-button>
      <el-button @click="changeConfigType('configTable')">表格配置</el-button>
      <!-- <el-button @click="changeConfigType('configChartsMap')">
        图表配置
      </el-button> -->
      <el-button @click="savePageConfig()">保存</el-button>
    </div>

    <FormConfig
      v-if="configType == 'configForm'"
      :FormConfig="FormConfig"
      @changeFormConfig="changeFormConfig"
    />

    <TableConfig
      v-if="configType == 'configTable'"
      @changeTableConfig="changeTableConfig"
      class="tableConfigBox"
      :TableConfig="TableConfig"
    />

    <ActionConfig
      v-if="configType == 'configActionButton'"
      @changeActionConfig="changeActionConfig"
      :ActionConfig="ActionConfig"
    />

    <ChartsConfig v-if="configType == 'configChartsMap'" />
  </div>
</template>

<script>
// @ is an alias to /src
import FormConfig from './tool/build'
import TableConfig from './tool/table'
import ActionConfig from './tool/ActionConfig'
import ChartsConfig from './tool/ChartsConfig'

const aa = localStorage.getItem('pageConfig')
const {
  FormConfig: defaultFormConfig,
  TableConfig: defaultTableConfig,
  ActionConfig: defaultActionConfig,
} = aa ? JSON.parse(aa) : {}

export default {
  name: 'Home',
  data() {
    return {
      configType: 'configForm',
      FormConfig: defaultFormConfig || {},
      TableConfig: defaultTableConfig || {
        paginationConfig: {
          total: 100,
          pageSize: 10,
          pageIndex: 1,
          'page-sizes': [10, 30, 50, 100],
          layout: 'total, sizes, prev, pager, next, jumper',
        },
        tableConfig: {
          stripe: true, // 斑马条纹
          border: true,
          height: 500,
          style: 'width: 95%',
          'highlight-current-row': true, // 高亮选中
          index: true, // 添加左侧默认下表 该属性传入数字时，将作为索引的起始值
          // selection: true, // 是否多选
          handleCurrentChange: (row) => {
            // 点击单选
            this.selectRow = row
          },
          handleSelectionChange: (rows) => {
            // 多选
            this.selectionRow = rows
          },
          // 'show-summary': true, //开启合计功能
          // 'sum-text': '总计/合计/小计', //字段配置
          // 'summary-method': () => {}, //自定义合计功能逻辑
        },
        tableColumns: [
          {
            filters: null,
            fixed: false,
            label: '',
            prop: '',
            type: '',
          },
        ],
        tableData: null,
        expandTableData: null,
      },
      ActionConfig: defaultActionConfig || [
        {
          text: '下载',
          type: 'warning',
          buttonType: 'download', //[search, reset, download, upload, ]
          actionsType: 'post',
          actionsUrl: '',
          icon: '',
          shape: '',
          // order: 1, // 展示順序   改用拖拽时直接按照顺序展示
          disabled: false, // 是否展示
          startAtInit: false, // 默认立即执行的动作
        },
        {
          text: '上传',
          type: 'warning',
          buttonType: 'upload', //[search, reset, download, upload, ]
          actionsType: 'post',
          actionsUrl: '',
          icon: '',
          shape: '',
          disabled: false, // 是否展示
          startAtInit: false, // 默认立即执行的动作
        },
        {
          text: '导出表格',
          type: 'warning',
          buttonType: 'export', //[search, reset, download, upload, ]
          actionsType: 'post',
          actionsUrl: '',
          icon: '',
          shape: '',
          disabled: false, // 是否展示
          startAtInit: false, // 默认立即执行的动作
        },
        {
          text: '查询',
          type: 'warning',
          buttonType: 'search', //[search, reset, download, upload, ]
          actionsType: 'post',
          actionsUrl: '',
          icon: '',
          shape: '',
          disabled: true, // 是否展示
          startAtInit: true, // 默认立即执行的动作
        },
        {
          text: '重置',
          type: 'warning',
          buttonType: 'reset', //[search, reset, download, upload, ]
          actionsType: '',
          actionsUrl: '',
          icon: '',
          shape: '',
          disabled: true, // 是否展示
          startAtInit: false, // 默认立即执行的动作
        },
      ],
    }
  },
  components: {
    FormConfig,
    TableConfig,
    ActionConfig,
    ChartsConfig,
  },
  methods: {
    changeFormConfig(val) {
      localStorage.setItem('FormConfig', JSON.stringify(val))
      this.FormConfig = val
    },
    changeTableConfig(val) {
      localStorage.setItem('TableConfig', JSON.stringify(val))
      this.TableConfig = val
    },
    changeActionConfig(val) {
      localStorage.setItem('ActionConfig', JSON.stringify(val))
      this.ActionConfig = val
    },
    changeConfigType(val) {
      this.configType = val
    },
    savePageConfig() {
      // 保存参数到服务器

      localStorage.setItem(
        'pageConfig',
        JSON.stringify({
          TableConfig: this.TableConfig,
          ActionConfig: this.ActionConfig,
          FormConfig: this.FormConfig,
        })
      )
      // 提示操作结果

      // this.$router.push('/about')
    },
  },
}
</script>
<style lang="scss" scoped>
.tableConfigBox {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 150px;
  border: 1px solid #000;
  background: #ffffff;
  overflow-y: scroll;
}
</style>
