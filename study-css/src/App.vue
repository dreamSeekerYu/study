<template>
  <div id="app">
    <sendbtn />
    <rainbow />
    <border />
    <circlebutton />
    <borderradio />
    <freeze />
    <flash />
    <load />
    <hr />

    <a
      href="http://note.youdao.com/noteshare?id=9928d2a4790538a2a5e59b76dfc6cc6f&sub=8436217DDDD34F62923B875B27895448"
      target="_blank"
      >参考文档：CSS.md</a
    >
    <turnaround />
    <hovercheck />
    <outline />
  </div>
</template>

<script>
import sendbtn from './components/send-btn'
import rainbow from './components/rainbow'
import border from './components/border'
import circlebutton from './components/circle'
import borderradio from './components/border-radio'
import freeze from './components/freeze'
import flash from './components/flash'
import load from './components/loading'
import turnaround from './components/turnaround'
import hovercheck from './components/hovercheck'
import outline from './components/outline'

export default {
  components: {
    sendbtn,
    rainbow,
    border,
    circlebutton,
    borderradio,
    freeze,
    flash,
    load,
    turnaround,
    hovercheck,
    outline,
  },
}
</script>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
