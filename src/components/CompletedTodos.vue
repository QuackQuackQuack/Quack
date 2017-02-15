<template>
<div id="current-todos">
  <label class="label" v-if="completed.length > 0">Completed({{completed.length}})</label>
  <div v-for="todo in completed">
    <div class="notification mg-bottom-20" :class="todo.class">
      <span>{{todo.body}}</span>
      <button class="delete" @click="remove(todo)"></button>
    </div>
  </div>
</div>
</template>

<script>
export default{
  methods: {
    remove(todo){
        this.$store.dispatch('removeTodo', todo)
    }
  },
  computed: {
    completed(){
        return this.$store.getters.completedTodos
    }
  }
}
</script>

<style scoped>
.mg-bottom-20 {
  margin-bottom:20px;
}
</style>
