
export const initialState = {
   todos: [
      { 
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    } 
   ] 
}

const toggleTodo = (id, todoList) => {
    const newList = todoList.map(item => {
      if(item.id === id){
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    })
    return newList
  }

  const removeTodo = (todoList) => {
      const notDone = todoList.filter(item => {
          return item.completed === false;
      })
      return notDone
  }

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":  
            return{
                ...state,
                todos: [...state.todos, {item: action.payload, completed: false, id: Date.now()}]
            }
        case "TOGGLE_COMPLETE":
            return {
                todos: toggleTodo(action.payload, state.todos)
                }
        case "IS_COMPLETED":
            return {
                todos: removeTodo(state.todos)
                }
        default:
            return state;
    }
}
