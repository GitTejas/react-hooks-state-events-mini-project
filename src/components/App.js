import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)

  const [selectedCategory, setSelectedCategory] = useState('All')


  function handleDeleteTask(deletedTask) {
    const filteredTasks = tasks.filter(task => deletedTask !== task.text)
    setTasks(filteredTasks)
  }

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }


const newFilteredTasks= tasks.filter(task => {
if (selectedCategory === "All") {
  return task
}
  return task.category === selectedCategory
})

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
      categories={categories}
      selectedCategory= {selectedCategory}
      setSelectedCategory={setSelectedCategory}
       />
      <NewTaskForm 
      categories={categories}
      onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
      tasks={newFilteredTasks}
      handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;