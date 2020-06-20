import React, { useState, useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';
import { initialState, todoReducer } from './reducers';

function App() {

  const [state, dispatch] = useReducer(todoReducer,initialState);

  return (
    <div className="App">

        <div className="header">
          <h1>Todo List</h1>
          <TodoForm dispatch={dispatch}/>
          <TodoList state={state} dispatch={dispatch}/>
        </div>
        
    
    </div>
  );
}

export default App;
