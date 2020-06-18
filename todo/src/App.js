import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';
import { initialState, ifCompleted } from './reducers';

function App() {

  const [newTodo, setNewTodo] =  useState();
  const [state, dispatch] = useReducer(initialState, ifCompleted);

  return (
    <div className="App">

        <div className="header">
          <h1>Todo List</h1>
          <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} state={state} dispatch={dispatch}/>
          {/* <TodoList state={state} dispatch={dispatch}/> */}
        </div>
        
    
    </div>
  );
}

export default App;
