import React, { useEffect, useState } from "react";
import mockData, { categoryImages } from "../mockData/data";
import { brandLogo } from "./brandlogo";
import ProductsList from "./ProductsList";
import CategoryList from "./CategoryList";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [categorySelected, setCategorySelected] = useState();
  const [allCategories, setAllCategories] = useState(true);

  const handleCategory = (value) => {
    setAllCategories(false);
    setCategorySelected(value);
  };

  //To display particular products on click of category
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setProductData(data);
      })
      .catch((err) => {
        return setProductData(mockData);
      });
  }, []);

  const filteredProducts = productData.filter(
    (product) => product?.category === categorySelected
  );
  return (
    <div className="homePage" data-testid="HomePage">
      {allCategories && (
        <div className="catergoryList">
          <h1 className="newArrival">New Arrivals</h1>
          <div className="flex flex-wrap gap-2">
            {categoryImages.map((item) => {
              return (
                <CategoryList
                  key={item.category}
                  categoryDisplay={item}
                  handleCategory={() => handleCategory(item.category)}
                />
              );
            })}
            <div className="flex gap-1">
              <video
                width="300"
                controls={false}
                loop
                autoPlay
                className="w-2.6/12"
              >
                <source
                  src="https://media.istockphoto.com/id/1409399882/video/winter-fabric-clothes-rack.mp4?s=mp4-640x640-is&k=20&c=cZJSr93j4iYi8fGuYexBrT48qGEwKu23HOQK06-ibBo="
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
              <div className="bg-teal-600 gap-1 rounded-md">
                <p id="dicount-ad-para">Get 30% off on all top brands</p>
                <div className="brand-alignments">
                  {brandLogo.map((item, id) => (
                    <div key={id} className="brands-img-responsive">
                      <img src={item.name} alt={`${item.alternateText}`} />
                    </div>
                  ))}
                </div>
                <p id="dicount-ad-para">
                  Let's explore unique and influential fashion
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="catergoryList" data-testid="products">
        {!allCategories && (
          <ProductsList
            data-testid="productsData"
            category={categorySelected}
            productData={filteredProducts}
          />
        )}
      </div>
      {/* eslint-disable-next-line */}
      <a href="#" className="btn border-orange-900 text-center my-2 mx-2">
        Move to top
      </a>
    </div>
  );
};

export default Home;
