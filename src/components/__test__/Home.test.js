import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import mockData from "../../mockData/data";
import Home from "../Home";

const handleCategorySpy = jest.fn();
const setCategoryNameSpy = jest.fn();
const setAllCategoriesSpy = jest.fn();
const mockProductData = [
  // Add mock data based on the structure of your product items
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
    quantityCount: 1,
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 15,
    title: "Levis - Teal & Pink Button-up Shirt",
    price: 1700,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
    rating: {
      rate: 4.6,
      count: 235,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
];
describe("Home Page of Shoppe APP", () => {
  beforeEach(() => {
    // jest
    //   .spyOn(React, "useState")
    //   .mockReturnValueOnce([mockProductData, handleCategorySpy]);
    // global.fetch = jest.fn(() =>
    //   Promise.resolve({
    //     json: () => Promise.resolve(mockData),
    //   })
    // );
  });

  test("ProductsList receives correct filtered data based on WOMEN category", async () => {
    render(<Home />);
    expect(screen.getByTestId("HomePage")).toBeInTheDocument();

    // const womenCategoryImg = screen.getByTestId("categoryImg-women");
    // userEvent.click(womenCategoryImg);
    // handleCategorySpy("women");
    // expect(handleCategorySpy).toHaveBeenCalledWith("women");
    //expect(screen.getByTestId("products")).toBeInTheDocument();

    // const productsData = await screen.findByTestId("productsData");
    // expect(productsData).toBeInTheDocument();
    // expect(productsData).toBe(mockProductData[2]);
  });

  test("ProductsList receives correct filtered data based on MENS category", async () => {
    render(<Home />);
    expect(screen.getByTestId("HomePage")).toBeInTheDocument();

    const menCategoryImg = screen.getByTestId("categoryImg-men");
    userEvent.click(menCategoryImg);

    const productsData = await screen.findByTestId("productsData");
    expect(productsData).toBeInTheDocument();
    expect(productsData).toBe(mockProductData[0]);
  });
  test("onClick of electronics category display product details", async () => {
    render(<Home />);
    expect(screen.getByTestId("HomePage")).toBeInTheDocument();

    const electroniCategoryImg = screen.getByTestId("categoryImg-electronics");
    userEvent.click(electroniCategoryImg);

    const productsData = await screen.findByTestId("productsData");
    expect(productsData).toBeInTheDocument();
    expect(productsData).toBe(mockProductData[3]);
  });
  test("onClick of jewllery category display product details", async () => {
    render(<Home />);

    const jweleryImg = screen.getByTestId("categoryImg-jewelery");
    userEvent.click(jweleryImg);
    // const productsData = await screen.findByTestId("productsData");
    expect(screen.getByTestId("productsData")).toBeInTheDocument();
    expect(screen.getByTestId("productsData")).toBe(mockProductData[1]);
  });
  // test("to load the fake store api on initial render of screen", async () => {
  //   // expect(screen.getByTestId("HomePage")).toBeInTheDocument();
  //   expect(global.fetch).toHaveBeenCalledTimes(1);
  //   expect(global.fetch).toHaveBeenCalledWith(
  //     "https://fakestoreapi.com/products"
  //   );
  // });
});
