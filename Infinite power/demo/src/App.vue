<template>
  <div id="app">
    <div class="leftContainer">
      <div class="configContainer">configContainer</div>
      <div class="jsonContainer">
        <!-- jsonContainer -->
        <pre>FormData: {{ FormData }} </pre>

        <pre>formItemList:{{ formItemList }} </pre>
      </div>
    </div>
    <div class="rightContainer">
      <div class="searchbox">searchbox</div>
      <div class="actionbox">
        actionbox
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
      </div>
      <div class="tablebox">tablebox</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FormData: {
        name: 'zhangsan',
        age: 18,
      },
      formItemList: [
        {
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
      ],
    }
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100vh;
  border: 1px solid #000;
  display: flex;
}

.leftContainer {
  width: 450px;
  .configContainer {
    height: 60%;
    border: 1px solid #000;
  }
  .jsonContainer {
    height: 40%;
    border: 1px solid #000;
    background: rgb(196, 209, 223);
    overflow-y: scroll;
  }
}
.rightContainer {
  flex: 1;
  border: 1px solid #000;
  .searchbox {
    height: 300px;
    border: 1px solid #000;
  }
  .actionbox {
    height: 50px;
  }
  .tablebox {
    min-height: 580px;
    border: 1px solid #000;
  }
}
</style>
