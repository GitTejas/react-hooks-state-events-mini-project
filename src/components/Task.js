import React from "react";

function Task({text, category, handleDeleteTask}) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
      onClick={(e) => handleDeleteTask(text)} 
      className="delete">X</button>
    </div>
  );
}

export default Task;
