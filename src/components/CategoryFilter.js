import React, {useState} from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {

  function handleCategoryClick(category) {
    setSelectedCategory(category)
  }
  console.log(selectedCategory)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button key={category} className={selectedCategory === category ? "selected" : ""} onClick={() => handleCategoryClick(category)}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;