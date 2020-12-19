<template>
  <div id="app">
    <h1>index page</h1>
    <h2>{{msg}}</h2>
    <h2>css3动画实现</h2>
    <div id="progressbar">
      <div id="fill" v-text="progressText"></div>
    </div>
    <h2>js操作dom实现</h2>
    <div class="progressBox">
      <div class="progressBar" v-text="progressText"></div>
    </div>
    <div>name: {{name}}, count:{{count}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "app",
  data() {
    return {
      msg: "ppm",
      progressText: "0%",
    };
  },
  computed: {
    ...mapGetters(['doneTodo','doneTodoLen']),
    ...mapState(['count','name']),
  },
  // created() {
  // },
  methods:{
    ...mapMutations(['increment'])
  },
  mounted() {
    // this.name = this.$store.state.name;
    console.log("name", this.$store.state.name);
    console.log("count", this.$store.state.count);
    console.log("doneTodo", this.doneTodo);
    console.log("doneTodo", this.$store.getters.doneTodo);
    console.log("doneTodoLen", this.doneTodoLen);
    setTimeout(() => {
      // this.$store.commit("increment",{name: 'keller'});
      // this.increment({name: 'keller'});
    }, 1000);
    // this.$store.dispatch('setStateSync', {name: 'keller'});
    this.$store.dispatch({type:'setStateSync', name: 'keller'});

    // this.$el必须要等到mounted也就是dom元素创建后调用
    // console.log('el', this.$el.querySelector('#fill').style.setProperty('animation-duration', 2 + 's'));
    let count = 0;
    const jsProgressBar = this.$el.querySelector(".progressBar");
    const timer = setInterval(() => {
      count++;
      jsProgressBar.style.width = count + "%";
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
  margin-top: .6rem;
}

.progressBox {
  margin: 1rem auto;
  width: 18rem;
  justify-content: center;
  text-align: center;
  border: 1px solid #000000;
  border-radius: 0.5rem;
}

.progressBar {
  width: 1%;
  height: 1.4rem;
  text-align: center;
  background-color: #1db10a;
  border-radius: 0.5rem;
  color: azure;
}

#progressbar {
  width: 18rem;
  margin: 0 auto;
  border: 1px solid #000000;
  border-radius: 0.5rem;
}

#fill {
  height: 1.4rem;
  justify-content: center;
  animation: move 2s;
  text-align: center;
  background-color: #1db10a;
  color: #ffffff;
  border-radius: 0.5rem;
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