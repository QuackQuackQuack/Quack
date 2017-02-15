export default {
  GET_TODO(state, todo){
    state.newTodo =  todo.title;
    state.class = todo.class;
  },
  ADD_TODO(state){
      state.todos.push({
          body: state.newTodo,
          class: state.class,
          completed: false
      })
      console.log(state.todos);
  },
  REMOVE_TODO(state, todo){
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)

  },
  COMPLETE_TODO(state, todo){
      todo.completed = !todo.completed
  },
  CLEAR_TODO(state){
      state.newTodo = ''
  }
}
