// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import uuid from 'uuid'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: uuid.v4(),
        task: 'Task 1',
        completed: true
      },
      {
        id: uuid.v4(),
        task: 'Task 2',
        completed: false
      }
    ]
  },
  getters: {
    todos: state => state.todos
  },
  mutations: {
    addTodo: (state, payload) => {
      const task = {
        task: payload,
        id: uuid.v4(),
        completed: false
      }

      // add to existing todos state variable
      state.todos.unshift(task)
    },

    deleteTodo: (state, payload) => {
      const idx = state.todos.findIndex(t => t.id === payload)
      state.todos.splice(idx, 1)
    },
    toggleTodo: (state, payload) => {
      state.todos = state.todos.map(t =>{
        if (t.id === payload) {
          return {task: t.task, completed: !t.completed, id: t.id}
        }

        return t;
      });
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store: store,
  computed: {
    todos: function() {
      return this.$store.todos
    }
  }
})
