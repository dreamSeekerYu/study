<template>
  <button>
    <img src="../assets/feiji.svg" alt="feiji" />
    Send
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
img {
  width: 25px;
  height: 25px;
}

#send-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  background: #5f55af;
  border: 0;
  border-radius: 5px;
  padding: 10px 30px 10px 20px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}

button img {
  display: inline-block;
  vertical-align: middle;
  padding-right: 5px;
}

button:hover img {
  animation: fly 2s ease 1;
}

@keyframes fly {
  0% {
    transform: translateX(0%);
  }

  50% {
    transform: translateX(300%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
