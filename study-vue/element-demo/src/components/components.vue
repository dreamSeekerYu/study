<template>
  <div>
    <el-table-column label="操作"
      ><template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </div>
</template>

<script>
export default {
  methods: {
    handleDelete(index, row) {
      console.log(index, row)
    },
  },
}
</script>

<style lang="scss" scoped></style>
