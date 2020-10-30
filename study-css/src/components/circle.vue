<template>
  <div id="circle-btn">
    <div class="btn-container">
      <button><img src="../assets/feiji.svg" alt="feiji" />Hover me</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
img {
  width: 20px;
  height: 20px;
}

#circle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.btn-container {
  position: relative;
}

button {
  border: 0;
  border-radius: 50px;
  color: white;
  background: #5f55af;
  padding: 15px 20px 16px 60px;
  text-transform: uppercase;
  background: linear-gradient(to right, #f72585 50%, #5f55af 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 2s ease;
}

svg {
  background: #f72585;
  padding: 8px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0%;
}

button:hover {
  background-position: left bottom;
}
</style>
