import React from 'react';

const Task = (props) => {
  return (
    <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>Due Date: {props.deadline}</p>
      <button onClick={props.markDone} className='doneButton'>Done</button>
      <button onClick={props.deleteTask} className='deleteButton'>Delete</button>
    </div>
  );
}

export default Task;