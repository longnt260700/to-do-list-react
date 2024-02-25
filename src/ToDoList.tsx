import { Button, TextField } from "@mui/material";
import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim()) {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function removeTask(index) {
    setTasks((t) => t.filter((_, i) => i!== index));
  }
  function moveUp() {}
  function moveDown() {}

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="New task"
          variant="outlined"
          value={newTask}
          onChange={handleInputChange}
        />
        <Button className="add-button" onClick={addTask} variant="outlined">
          Add
        </Button>
      </div>
      <ol>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => removeTask(index)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ToDoList;
