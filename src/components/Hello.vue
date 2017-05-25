<template>
  <div>
    Hello
    <p>{{msg}}</p>
    <p>Here is a list of things for you todo:</p>
    <ul>
      <li v-for="todo in todos" :class="{completed: todo.completed}">
        <input type="checkbox" :checked="todo.completed" @click="toggleTodo(todo.id)">
        {{todo.task}}
        &nbsp;<a href="#" @click="deleteTodo(todo.id)">x</a>
      </li>
    </ul>
    <p>Want to add another one?</p>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="task" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['todos'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      task: []
    }
  },
  methods: {
    addTodo: function() {
      this.$store.commit('addTodo', this.task)
    },
    deleteTodo: function(id) {
      this.$store.commit('deleteTodo', id)
    },
    toggleTodo: function(id) {
      this.$store.commit('toggleTodo', id)
    }
  }
}
</script>

<style>
.completed {
  text-decoration: line-through
}
</style>

