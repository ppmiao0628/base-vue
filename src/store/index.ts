import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    name: 'ppmiao',
    count: 0
  },
  getters:{
    doneTodo(state){
      return state.todos.filter(todo=>todo.done)
    },
    doneTodoLen:(state, getters)=>{
      return getters.doneTodo.length;
    }
  },
  mutations: {
    increment(state, payload){
      state.count ++;
      state.name = payload.name;
    }
  },
  actions: {
    setStateSync(context, payload){
      context.commit('increment',payload);
    }
  },
  modules: {
  }
})
