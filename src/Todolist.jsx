import React, { useState } from 'react';

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setnewTasks] = useState("");

  function handleInputChange(event) {
    setnewTasks(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setnewTasks("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className='to-do-list'>
      <h1>To-do-List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder='Enter a new Task...'
          value={newTask}
          onChange={handleInputChange}
        />
        <button className='add-button' onClick={addTask}>ADD</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='task'>{task}</span>
            <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
            <button className='moveUp-button' onClick={() => moveTaskUp(index)}>MoveUp</button>
            <button className='moveDown-button' onClick={() => moveTaskDown(index)}>MoveDown</button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Todolist;
