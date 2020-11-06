<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/class-component">class-component</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/upload_video_by_input"
        >upload_video_by_input</router-link
      >
      <func :value="21341231234" />
    </div>
    <router-view />
  </div>
</template>
<script>
import func from '@/views/func.vue'
export default {
  mounted() {
    const obj = {
      a: {
        b: {
          c: 123,
        },
      },
    }
    console.log(obj?.a?.b?.c || 100)
    console.log(obj?.b?.b?.c || 100)
    console.log(obj?.a?.b?.c || 100)
  },
  components: {
    func,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding-left: 20px;
    padding-right: 20px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
