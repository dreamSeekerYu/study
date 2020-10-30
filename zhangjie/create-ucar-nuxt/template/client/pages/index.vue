<template>
  <div class="container">
    <index-logo />
    <h1>Hello world!</h1>
    <input type="file" @change="uploadFile" />
    <pre>{{ result }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $request }) {
    const result = await $request({
      uri: '/action/h5/sic/queryVildCitys',
      data: {
        type: 'asyncData'
      }
    });

    return {
      result
    };
  },
  mounted() {
    this.$request({
      uri: '/action/h5/sic/queryVildCitys',
      data: {
        type: 'methoed-post'
      }
    }).then((data) => {
      console.log(data);
    });
  },
  methods: {
    uploadFile(env) {
      console.log(env);
      this.$uploadFile(env.target.files).then((res) => {
        console.log(res);
      })
    }
  }
};
</script>

<style lang="less" scoped>
  .container {
    width: calc(750px - var(--scrollbar));
    padding: 15px;
    margin: 0 auto;
  }
</style>
