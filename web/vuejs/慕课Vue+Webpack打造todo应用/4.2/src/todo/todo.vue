<template>
  <section class="real-app">
    <input 
    type="text"
    class="add-input"
    autofocus="autofocus"
    placeholder="接下来要做什么？"
    @keyup.enter="addTodo"
    >
    <item 
    :todo="todo"
    v-for="todo in filteredTodos"
    :key="todo.id"
    @del="deleteTodo"
    /> 
    <!-- item里面无内容可去除结尾  父组件通过:todos="todos"传输数据给子组件，子组件通过props接受-->
    <tabs 
    :filter="filter" 
    :todos="todos"
    @toggle="toggleFilter"
    @clearAllCompleted="clearAllCompleted"
    />
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
  export default {
    data() {
      return {
        todos: [],
        filter: 'all'
      }
    },
    components: {
      Item,
      Tabs,
    },
    computed: {
      filteredTodos() {
        if (this.filter === "all") {
          return this.todos
        }
        const completed = this.filter === 'completed'
        return this.todos.filter(todo => completed === todo.completed)
      }
    },
    methods: {
      addTodo(e) {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(), // trim()去除前后空格
          completed: false
        })
        e.target.value = ''
      },
      deleteTodo(id) {
        this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
      },
      toggleFilter(state) {
        this.filter = state
      },
      clearAllCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
      }
    }
  }
</script>
<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto 
  box-shadow 0 0 5px #666
}
.add-input{
  position relative
  margin 0
  width 100%
  font-size 24px
  font-family inherit
  font-weight inherit
  line-height 1.4em
  // border 0
  outline none 
  color inherit 
  // padding 6px
  // border 1px solid #999
  // box-shadow inset 0 -1px 5px 0 rgba(0,0,0,0.2)
  box-sizing border-box
  font-smoothing antialiased 
  padding 16px 16px 16px 60px
  border none 
  box-shadow inset 0 -2px 1px rgba(0,0,0,0.3)
}
</style>
