<template>
  <div id="borgward">
    <nuxt />
    <div v-if="toggle" class="skeleton-container">
      <div class="spareribs1"></div>
      <div class="spareribs2"></div>
      <div class="spareribs2-1"></div>
      <div class="spareribs2-2"></div>
      <div class="spareribs2-3"></div>
      <div class="spareribs3"></div>
      <div class="spareribs4"></div>
      <div class="spareribs5"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: true
    };
  },
  mounted() {
    window.addEventListener('load', () => {
      this.toggle = false;
    });
  }
};
</script>

<style lang="less" scoped>
.offline {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 40px;
}
.skeleton-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background-color: #fff;
  div {
    position: absolute;
    left: 50%;
    width: 640px;
    margin-left: -320px;
    background-color: #f3f3f3;
    border-radius: 6px;
  }
  .spareribs1 {
    top: 80px;
    height: 420px;
  }
  .spareribs2 {
    top: 540px;
    height: 80px;
    opacity: 0.8;
  }
  .spareribs2-1 {
    top: 640px;
    height: 80px;
    opacity: 0.8;
  }
  .spareribs2-2 {
    top: 740px;
    height: 80px;
    opacity: 0.8;
  }
  .spareribs2-3 {
    top: 840px;
    height: 80px;
    opacity: 0.8;
  }
  .spareribs3 {
    top: 940px;
    height: 40px;
    opacity: 0.6;
  }
  .spareribs4 {
    top: 1020px;
    height: 110px;
    opacity: 0.4;
  }
  .spareribs5 {
    top: 1170px;
    height: 40px;
    opacity: 0.3;
  }
}
</style>
