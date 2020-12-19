<template>
  <div id="app">
    <h1>info page</h1>
    <test />
  </div>
</template>

<script>
import test from "../../components/test";
import html2canvas from "html2canvas";
export default {
  data() {
    return {};
  },
  mounted() {
    new html2canvas(document.getElementById("app"), {
      backgroundColor: "transparent",
      allowTaint: true,
      useCORS: true,
    }).then((canvas) => {
      // canvas为转换后的Canvas对象
      const oImg = new Image();
      oImg.src = canvas.toDataURL(); // 导出图片
      document.body.appendChild(oImg); // 将生成的图片添加到body
    });
  },
  components: {
    test,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  text-align: center;
}
</style>
