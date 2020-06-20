import React, {useState} from 'react';

const TodoForm = ({dispatch}) => {
  
  const [input, setInput] = useState('');

  const handleChanges = e => {
    setInput( e.target.value );
  };

  const submitItem = e => {
    e.preventDefault();
    dispatch({type: "ADD_TASK", payload: input})
    setInput('');
  };


    return (
      <form onSubmit={submitItem}>
        <input
          type="text"
          value={input}
          name="item"
          onChange={handleChanges}
        />
        <button >Add</button>
      </form>
    );
  
}

export default TodoForm;
