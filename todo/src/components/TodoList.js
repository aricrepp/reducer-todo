// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css'

const TodoList = ({state,dispatch}) => {

  return (
    <div className="shopping-list">
      {state.todos.map(item => (
        <div
        className={`item${item.completed ? ' purchased' : ''}`}
        onClick={() => dispatch({type: "TOGGLE_COMPLETE", payload: item.id})}
      >
        <p key={item.id}>{item.item}</p>
            
      </div>
      ))}
      <button className="clear-btn" onClick={() => {
        dispatch({
          type: "IS_COMPLETED"
        })
      }}>
        Remove Completed
      </button>
    </div>
  );
};

export default TodoList;