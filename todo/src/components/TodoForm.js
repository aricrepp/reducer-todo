import React, {useState} from 'react';

const TodoForm = props => {
  
  

  const handleChanges = e => {
    props.setNewTodo({ [e.target.name]: e.target.value });
  };

  // const submitItem = e => {
  //   e.preventDefault();
  //   this.setState({ item: '',  });
  //   this.props.addItem(e, this.state.item);
  // };


    return (
      <form onSubmit={() => {
        props.dispatch({type: "IS_COMPLETED"})
      }}>
        <input
          type="text"
          value={props.newTodo}
          name="item"
          onChange={handleChanges}
        />
        <button>Add</button>
      </form>
    );
  
}

export default TodoForm;
