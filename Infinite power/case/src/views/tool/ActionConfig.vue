<template>
  <div>
    <el-table :data="ActionConfig" style="width: 100%">
      <el-table-column label="是否展示" width="150">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.disabled"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column label="是否默认执行" width="150">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.startAtInit"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column label="按钮形状">
        <template slot-scope="scope">
          <el-select v-model="scope.row.shape" placeholder="请选择">
            <el-option
              v-for="(item, index) in shapeOption"
              :key="index"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="按钮展示类型(颜色)">
        <template slot-scope="scope">
          <el-select v-model="scope.row.type" placeholder="请选择">
            <el-option
              v-for="(item, index) in typeOptions"
              :key="index"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="按钮动作类型">
        <template slot-scope="scope"
          ><div>
            {{ scope.row.buttonType | actionFilters }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="按钮名称">
        <template slot-scope="scope">
          <el-input v-model="scope.row.text" placeholder="按钮文字" />
        </template>
      </el-table-column>
      <el-table-column label="请求地址">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.actionsUrl"
            placeholder="请求地址 /api/..."
            :disabled="scope.row.buttonType == 'reset'"
          />
        </template>
      </el-table-column>
      <el-table-column label="请求方式">
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.actionsType"
            placeholder="请选择"
            :disabled="scope.row.buttonType == 'reset'"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>

    <div>
      <hr />
      <el-button
        v-if="item.disabled"
        v-for="(item, index) in ActionConfig"
        :key="index"
        :type="item.type"
        :[item.shape]="true"
        >{{ item.text }}</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ActionConfig: {
      type: Array,
    },
  },
  data() {
    return {
      shapeOption: [
        {
          value: '-',
          label: '默认',
        },
        {
          value: 'plain',
          label: '朴素风格',
        },
        {
          value: 'round',
          label: '带圆角',
        },
        {
          value: 'circle',
          label: '原型',
        },
      ],
      typeOptions: [
        {
          value: '',
          label: '默认',
        },
        {
          value: 'primary',
          label: '主要',
        },
        {
          value: 'success',
          label: '成功',
        },
        {
          value: 'info',
          label: '信息',
        },
        {
          value: 'warning',
          label: '警告',
        },
        {
          value: 'danger',
          label: '危险',
        },
      ],
      options: [
        {
          value: 'get',
          label: 'get',
        },
      ],
    }
  },
  filters: {
    actionFilters(val) {
      return {
        reset: '重置',
        download: '下载',
        upload: '上传',
        search: '查询',
        export: '导出',
      }[val]
    },
  },
  watch: {
    ActionConfig: {
      handler() {
        localStorage.setItem('ActionConfig', JSON.stringify(this.ActionConfig))
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
