<template>
  <div id="loading-btn">
    <button><span>Hover me</span></button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#loading-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

button {
  background: transparent;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  padding: 15px 50px;
  position: relative;
}

button:before {
  transition: all 0.8s cubic-bezier(0.7, -0.5, 0.2, 2);
  content: '';
  width: 1%;
  height: 100%;
  background: #ff5964;
  position: absolute;
  top: 0;
  left: 0;
}

button span {
  mix-blend-mode: darken;
}

button:hover:before {
  background: #ff5964;
  width: 100%;
}
</style>
