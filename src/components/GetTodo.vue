<template>
    <div>
      <h1 class="title">Store Example</h1>
      <hr>
      <label class="label">Add List</label>
      <div class="control is-grouped">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Text input" :value="newTodo" @change="getTodo">
        </p>
        <p class="control">
          <button class="button is-success" @click="addTodo">
            Add
          </button>
        </p>
      </div>
      <div>
        <CurrentTodos></CurrentTodos>
        <CompletedTodos></CompletedTodos>
      </div>
    </div>
</template>
<script>
import CurrentTodos from './CurrentTodos.vue';
import CompletedTodos from './CompletedTodos.vue';


export default {
  data () {
    return {
      //random 이었으나 기본으로 바꿈
      //randomClasses: ['','is-primary','is-info','is-success', 'is-warning', 'is-danger']
      randomClasses: ['']
    }
  },
  methods: {
    getTodo(e){
      this.$store.dispatch('getTodo', {
        title : e.target.value,
        class: _.sample(this.randomClasses)
      })
    },
    addTodo(){
      if (this.newTodo !== '') {
        this.$store.dispatch('addTodo')
        this.$store.dispatch('clearTodo')
      } else {
        alert('입렵값을 넣어주세요.');
      }
    }
  },
  computed: {
    newTodo(){
      return this.$store.getters.newTodo;
    }
  },
  components: {
    'CurrentTodos': CurrentTodos,
    'CompletedTodos': CompletedTodos
  }
}

</script>
