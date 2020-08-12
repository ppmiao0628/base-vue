<template>
  <div id="app">
    <h1>index page</h1>
    <h2>{{msg}}</h2>
    <div id="progressbar">
      <div id="fill" v-text="progressText"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "ppm",
      progressText: "0%",
    };
  },
  created() {
    let count = 0;
    const timer = setInterval(() => {
      count++;
      this.progressText = count + "%";
      if (count === 100) {
        clearInterval(timer);
      }
    }, 17);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#progressbar {
  width: 180px;
  height: 20px;
  margin: 0 auto;
  // border: 1px solid #000000;
}
#fill {
  animation: move 2s;
  text-align: center;
  background-color: rgb(208, 53, 53);
  color: #ffffff;
}
@keyframes move {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
