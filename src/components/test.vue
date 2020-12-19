<template>
  <div>
    <!-- <h1 ref='h11'>{{ msg }}</h1> -->
    <ul ref="u11" class="hello">
      <li v-for="(item,index) in list1" v-bind:key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script >
export default {
  data() {
    return {
      msg: "test component",
      list1: [],
    };
  },
  created() {
    for (let index = 0; index < 23; index++) {
      this.list1.push(index);
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log("mounted");
      console.log(this.$refs);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 10rem;
}
ul {
  list-style-type: none;
  padding: 0;
  background-color: #aaa;
}
li {
  display: inline-block;
  margin: 0 2px;
  border: 2px solid #888;
  background-color: #ac3;
}
a {
  color: #42b983;
}
</style>
