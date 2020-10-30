<template>
  <div class="table">
    <!-- 需要用到比较罕见的配置就去 element-ui 官网查询配置一下 -->
    <el-table
      :data="table.tableData"
      style="width: 100%"
      :stripe="table.tableConfig.stripe"
      :border="table.tableConfig.border"
      :height="table.tableConfig.height"
      :style="table.tableConfig.style"
      :highlight-current-row="table.tableConfig['highlight-current-row']"
      :show-summary="table.tableConfig['show-summary']"
      :sum-text="table.tableConfig['sum-text']"
      @current-change="table.tableConfig.handleCurrentChange"
      @selection-change="table.tableConfig.handleSelectionChange"
    >
      <!--  展开表格 具名插槽 name="expand" -->
      <slot name="expand"></slot>

      <!-- 起始下标 -->
      <el-table-column v-if="table.tableConfig.index" type="index" width="50">
      </el-table-column>

      <!-- 多选展示 -->
      <el-table-column v-if="table.tableConfig.selection" type="selection" width="55" >
      </el-table-column>
      <!-- 依次循环展示配置的表头 -->
      <el-table-column
        v-for="item in table.tableColumns"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :fixed="item.fixed"
      >
        <!-- 合并表头直接嵌套即可 -->
        <el-table-column
          v-if="item.chidren"
          v-for="childColumn in item.chidren"
          :key="childColumn.prop"
          :label="childColumn.label"
          :prop="childColumn.prop"
          :fixed="childColumn.fixed"
        >
        </el-table-column>

        <template slot-scope="scope">
          <!-- 配合过滤器筛选展示结果 -->
          <span v-if="item.filters">{{
            item.filters(scope.row[item.prop])
          }}</span>
          <!-- 参数配置自定义操作 -->
          <span v-else-if="item.action">
            <el-button
              type="text"
              size="small"
              @click="handler(item.action, table.tableData, scope.row)"
              >删除</el-button
            >
          </span>
          <!-- 默认展示对应信息 -->
          <span v-else>
            {{ scope.row[item.prop] }}
          </span>
        </template>
      </el-table-column>
      <slot></slot>
      <!--  默认插槽 -->
    </el-table>
    <el-pagination
      :page-sizes="paginationConfig['page-sizes']"
      :page-size.sync="paginationConfig.pageSize"
      :current-page.sync="paginationConfig.pageIndex"
      :layout="paginationConfig.layout"
      :total="paginationConfig.total"
      background
      @size-change="paginationConfig.handleSizeChange"
      @current-change="paginationConfig.handleIndexChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    table: {
      default() {
        return {
          tableColumns: [],
          tableData: [], 
          tableConfig: { stripe: true, border: false, },
        }
      },
    },
    paginationConfig: {
      default() {
        return {}
      },
    },
  },

  data() {
    return {}
  },
  created() {
    // this.$forceUpdate(0)
  },
  methods: {
    handler(action, tableData, row) {
      action(tableData, row)
    },
  },
}
/**
 *
 * 多级表头考虑递归调用封装一下
 *    列的宽度定义方式
 *
 *  自定义的展示方式考虑使用自定义组件插槽的方式
 *
 *  自定义的操作方式可以 使用插槽列表或则具名插槽的方式
 *
 *
 */
</script>
