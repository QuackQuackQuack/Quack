export default {
  getTodo({commit}, todo){
    commit('GET_TODO', todo)
  },
  addTodo({commit}){
    commit('ADD_TODO')
  },
  removeTodo({commit}, todo){
    commit('REMOVE_TODO', todo)
  },
  completeTodo({commit}, todo){
    commit('COMPLETE_TODO', todo)
  },
  clearTodo({commit}){
    commit('CLEAR_TODO')
  }
}
