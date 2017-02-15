<template>
  <div id="current-todos">
    <label class="label" v-if="todos.length > 0">Current({{todos.length}})</label>
    <div v-for="todo in todos">
      <div class="notification mg-bottom-20" :class="todo.class">
        <span>{{todo.body}}</span>
        <button class="delete" @click="remove(todo)"></button>
        <button class="button is-small" type="button" @click="complete(todo)">Complete</button>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  methods: {
    complete(todo){
      this.$store.dispatch('completeTodo', todo)
    },
    remove(todo){
      this.$store.dispatch('removeTodo', todo)
    }
  },
  computed: {
    todos(){
      return this.$store.getters.todos
    }
  }
}
</script>
<style scoped>
.mg-bottom-20 {
  margin-bottom:20px;
}
.button {position:absolute;right:50px;}

</style>
