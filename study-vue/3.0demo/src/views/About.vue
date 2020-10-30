<template>
  <div class="about">
    {{ b }}
    <h1>{{ obj }}</h1>
  </div>
</template>

<script>
// import { reactive } from "vue";
import { ref } from "vue";
export default {
  setup(props, ctx) {
    console.log("setup", props, ctx); // 早与 beforeCreate
    const b = ref("aasdfad");

    return {
      obj: {
        a: 123,
        b
      },
      b
    };
    // return ref({
    //   obj: {
    //     a: 123
    //   },
    //   b: 1231234
    // });
    // console.log(this);
  },
  beforeCreate() {
    console.log("beforeCreate");
    console.log(this);
  },
  created() {
    console.log("created");
    console.log(this);
  },
  data() {
    console.log("data", this);

    return {
      a: 123
    };
  },
  mounted() {
    console.log("mounted", this);
    // this.obj = 2;
    this.obj.a = 1234;
    this.obj.b = "bbbbbbbbbbbb";
    this.b = 1234123123;
  }
};
</script>

<style lang="scss" scoped>
</style>