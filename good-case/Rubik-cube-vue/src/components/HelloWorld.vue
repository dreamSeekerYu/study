<template>
  <div class="cube-container">
    <div class="cube">
      <div class="face face-u">U</div>
      <div class="face face-d">D</div>
      <div class="face face-l">L</div>
      <div class="face face-r">R</div>
      <div class="face face-f">F</div>
      <div class="face face-b">B</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$width: 100px;

.cube-container {
  position: absolute;
  top: 0;
  left: 0;
  margin: $width;
  width: $width;
  height: $width;

  transform-style: preserve-3d;
  perspective: 500px;
  perspective-origin: 150% -150%;
}

.cube {
  transform-style: preserve-3d;
}

.face {
  position: absolute;
  width: $width;
  height: $width;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #fff;

  &.face-u {
    transform: rotateX(90deg) translateZ($width / 2);
    background-color: red;
  }

  &.face-d {
    transform: rotateX(-90deg) translateZ($width / 2);
    background-color: yellow;
  }

  &.face-l {
    transform: rotateY(-90deg) translateZ($width / 2);
    background-color: red;
  }

  &.face-r {
    transform: rotateY(90deg) translateZ($width / 2);
    background-color: orange;
  }

  &.face-f {
    transform: translateZ($width / 2);
    background-color: green;
  }

  &.face-b {
    transform: rotateX(180deg) translateZ($width / 2);
    background-color: blue;
  }

  &.face-inside {
    background-color: white;
    opacity: 0.2;
  }
}

@keyframes rotate {
  0% {
    transform: rotate3d(0, 0, 0, 0);
  }
  100% {
    transform: rotate3d(1, 1, 0, 360deg);
  }
}

.cube {
  animation: rotate 2s linear reverse infinite;
}
</style>
