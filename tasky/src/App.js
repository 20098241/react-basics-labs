import './App.css';
import Task from './components/task.js';
import AddTaskForm from './components/Form'; // Import the Form component
import React, { useState } from 'react';

function App(props) {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", done: false },
      { id: 3, title: "Tidy up", deadline: "Today", done: false }
    ]
  });

  const doneHandler = (taskIndex) => {
    const updatedTasks = [...taskState.tasks];
    updatedTasks[taskIndex].done = !updatedTasks[taskIndex].done;
    setTaskState({ tasks: updatedTasks });
  };

  const deleteHandler = (taskIndex) => {
    const updatedTasks = [...taskState.tasks];
    updatedTasks.splice(taskIndex, 1);
    setTaskState({ tasks: updatedTasks });
  };

  const addTaskHandler = (newTask) => {
    // Generate a unique ID for the new task
    const newTaskId = Math.max(...taskState.tasks.map((task) => task.id), 0) + 1;
    
    // Create a new task object
    const taskToAdd = {
      id: newTaskId,
      title: newTask.title,
      description: newTask.description,
      deadline: newTask.deadline,
      done: false,
    };

    // Update the state with the new task
    const updatedTasks = [...taskState.tasks, taskToAdd];
    setTaskState({ tasks: updatedTasks });
  };

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)}
          deleteTask={() => deleteHandler(index)}
        />
      ))}
      <AddTaskForm onAddTask={addTaskHandler} /> const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });
    </div>
  );
}

export default App;