import React from "react";
import { categoryImages } from "../mockData/data";

const CategoryList = ({ handleCategory, categoryType }) => {
  return (
    <div className="catergoryType">
      {categoryImages.map((item) => {
        return (
          <div key={item} className="categoryDiv">
            <img
              src={item.image}
              alt={`${item.title}`}
              className="categories-img"
              data-testid={`categoryImg-${categoryType}`}
              onClick={() => handleCategory(`${categoryType}`)}
            />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
