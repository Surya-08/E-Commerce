import React, { useEffect, useState } from "react";
import mockData from "../mockData/data";
import { brandLogo } from "./brandlogo";
import ProductsList from "./ProductsList";
import CategoryList from "./CategoryList";
// import SliderWithLabel from "./sliderLabel";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [allCategories, setAllCategories] = useState(true);
  const [categoryName, setCategoryName] = useState(null);

  //To filter the products based on category
  const filteredWomenData = productData.filter((item) => item.category);
  console.log(filteredWomenData, "filterrr");
  const filteredWomenMockData = mockData.filter(
    (item) => item.category === `women's clothing`
  );
  const filteredMensData = productData.filter(
    (item) => item.category === `men's clothing`
  );
  const filteredElectronics = productData.filter(
    (item) => item.category === `electronics`
  );
  const filteredJwelery = productData.filter(
    (item) => item.category === `jewelery`
  );
  //To display particular products on click of category
  const handleCategory = (category) => {
    setCategoryName(category);
    setAllCategories(false);
  };

  //To get API data
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setProductData(data);
      })
      .catch(() => {
        return setProductData(mockData);
      });
  }, []);

  return (
    <div className="homePage" data-testid="HomePage">
      {allCategories && (
        <div className="catergoryList">
          <h1 className="newArrival">New Arrivals</h1>
          <div className="categoryType">
            <CategoryList
              handleCategory={() => handleCategory(categoryName)}
              categoryType={categoryName}
            />
            <div style={{ display: "flex" }}>
              <video
                width="300"
                controls={false}
                loop
                autoPlay
                className="categories-img"
                style={{ width: "320", height: "320" }}
              >
                <source
                  src="https://media.istockphoto.com/id/1409399882/video/winter-fabric-clothes-rack.mp4?s=mp4-640x640-is&k=20&c=cZJSr93j4iYi8fGuYexBrT48qGEwKu23HOQK06-ibBo="
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
              <div className="dicount-ad">
                <p id="dicount-ad-para">Get 30% off on all home decor items</p>
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
        {categoryName && (
          <ProductsList
            data-testid="productsData"
            productData={
              (filteredWomenData || filteredWomenMockData) && categoryName
                ? filteredWomenData
                : filteredMensData && categoryName === "men"
                  ? filteredMensData
                  : filteredElectronics && categoryName === "electronics"
                    ? filteredElectronics
                    : filteredJwelery
            }
          />
        )}
      </div>
      {/* eslint-disable-next-line */}
      <a
        href="#"
        style={{ alignContent: "center", margin: "20px 0px 20px 20px" }}
      >
        Move to top
      </a>
    </div>
  );
};

export default Home;
