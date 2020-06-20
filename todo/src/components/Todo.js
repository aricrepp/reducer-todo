import React, {useReducer} from 'react';
import {todoReducer, initialState} from '../reducers/index.js'
import "./Todo.css"

const Todo = () => {

  const [state, dispatch] = useReducer(initialState, todoReducer);

  return (
    <div
      className={`item${state.completed ? ' purchased' : ''}`}
      onClick={() => dispatch({type: "TOGGLE_COMPLETE", payload: state.id})}
    >
      <p>{state.initialState}</p>
    </div>
  );
};

export default Todo;