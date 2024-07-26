import React, { useEffect, useState } from "react";
import mockData from "../mockData/data";
import { brandLogo } from "./brandlogo";
import ProductsList from "./ProductsList";
// import CategoryList from "./__test__/common_components/CategoryList";
// import SliderWithLabel from "./sliderLabel";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [allCategories, setAllCategories] = useState(true);
  const [categoryName, setCategoryName] = useState(null);

  //To filter the products based on category
  const filteredWomenData = productData.filter(
    (item) => item.category === `women's clothing`
  );
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
          <section style={{ width: "100%" }}>
            {/* <CategoryList /> */}
            <ul className="ul-list">
              <li>
                <img
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg"
                  alt="Women's Category"
                  className="categories-img"
                  data-testid="categoryImg-women"
                  onClick={() => handleCategory("women")}
                />
                <p>Women</p>
              </li>
              <li>
                <img
                  src="https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg"
                  alt="Men's Category"
                  className="categories-img"
                  data-testid="categoryImg-men"
                  onClick={() => handleCategory("men")}
                />
                <p>Men</p>
              </li>
              <li>
                <img
                  src="https://images.pexels.com/photos/1094084/pexels-photo-1094084.jpeg"
                  alt="Kid's Category"
                  className="categories-img"
                />
                <p>Kids</p>
              </li>
              <li>
                <img
                  src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg"
                  alt="Electronics Category"
                  className="categories-img"
                  data-testid="categoryImg-electronics"
                  onClick={() => handleCategory("electronics")}
                />
                <p>Electronics</p>
              </li>
              <li>
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
              </li>
              <li>
                <img
                  src="https://images.pexels.com/photos/1058770/pexels-photo-1058770.jpeg"
                  alt="Home Decor Items"
                  className="categories-img"
                />
                <p>Home Decor</p>
              </li>
              <li>
                <div className="dicount-ad">
                  <p id="dicount-ad-para">
                    Get 30% off on all home decor items
                  </p>
                  {brandLogo.map((item, id) => (
                    <div key={id} className="brands-img-responsive">
                      <img src={item.hAndm} alt="h-and-m" />
                      <img src={item.levis} alt="Levis Jeans&Denims" />
                      <img src={item.nike} alt="nike" />
                      <img src={item.macOs} alt="mac-os" />
                      <img src={item.samsung} alt="samsung" />
                      <img src={item.leeCooper} alt="Lee cooper" />
                      <img src={item.crowdShoes} alt="crowd shoes" />
                      <img src={item.gap} alt="adidas" />
                    </div>
                  ))}
                  {brandLogo.map((item, index) => (
                    <div key={index} className="brands-img-responsive">
                      <img src={item.rayban} alt="ray-ban" />
                      <img src={item.taboom} alt="taboom" />
                      <img src={item.firstBorn} alt="first born" />
                      <img src={item.cocoon} alt="cocoon" />
                      <img src={item.tinytots} alt="tinutots" />
                    </div>
                  ))}
                  {brandLogo.map((item, key) => (
                    <div key={key} className="brands-img-responsive">
                      <img src={item.ashleyHomes} alt="ashley-homes" />
                      <img
                        src={item.furnitureVillage}
                        alt="furniture-village"
                      />
                      <img src={item.loreal} alt="loreal" />
                      <img src={item.nivea} alt="nivea" />
                      <img src={item.swarvoski} alt="swarvoski" />
                      <img src={item.shinyOwl} alt="shiny-owl" />
                      <img src={item.woodWorking} alt="wood working" />
                    </div>
                  ))}
                  <p id="dicount-ad-para">
                    Let's explore unique and influential fashion
                  </p>
                </div>
              </li>
              <li>
                <img
                  src="https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg"
                  alt="Jwellery"
                  className="categories-img"
                  data-testid="categoryImg-jewelery"
                  onClick={() => handleCategory("jewelery")}
                />
                <p>Jwellery</p>
              </li>
              <li>
                <img
                  src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg"
                  alt="Footwear"
                  className="categories-img"
                />
                <p>Footwear</p>
              </li>
              <li>
                <img
                  src="https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg"
                  alt="Furniture"
                  className="categories-img"
                />
                <p>Furniture</p>
              </li>
              <li>
                <img
                  src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg"
                  alt="Gardening"
                  className="categories-img"
                />
                <p>Garderning Tools</p>
              </li>
            </ul>
          </section>
        </div>
      )}
      <div className="catergoryList" data-testid="products">
        {categoryName && (
          <ProductsList
            data-testid="productsData"
            productData={
              (filteredWomenData || filteredWomenMockData) &&
              categoryName === "women"
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
