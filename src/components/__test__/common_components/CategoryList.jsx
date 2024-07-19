import React from "react";

const CategoryList = ({ imageSource, category, handleCategory }) => {
  return (
    <div>
      <ul>
        <li>
          <img
            src={imageSource}
            alt={category}
            className="categories-img"
            data-testid={`categoryImg-${category}`}
            onClick={() => handleCategory(`${category}`)}
          />
          <p>{`${category}`.toUpperCase()}</p>
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;
