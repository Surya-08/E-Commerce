import React from "react";

const CategoryList = ({ categoryDisplay, handleCategory }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <div key={categoryDisplay.title} className="categoryDiv">
        <img
          src={categoryDisplay.image}
          alt={`${categoryDisplay.title}`}
          className="categories-img cursor-pointer"
          data-testid={`categoryImg-${categoryDisplay.category}`}
          onClick={handleCategory}
        />
        <p>{categoryDisplay.title}</p>
      </div>
    </div>
  );
};

export default CategoryList;
