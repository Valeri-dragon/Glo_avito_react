import ReactDOM from "react-dom";
import { Header } from "../components/Header/Header";
import "./Search.css";
import { Aside } from "../components/Aside/Aside";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { cardArray } from "../constants";
export const Layout = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchArray = (e) => {
    e.preventDefault();
    setProducts(
      cardArray.filter(
        (item) =>
          item.title.toUpperCase().toLowerCase().includes(searchText) ||
          item.price.includes(searchText)
      )
    );
    console.log(products)
      };
  useEffect(() => {
    setProducts(cardArray);
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <form className="search flex">
            <input
              type="search"
              value={searchText}
              onChange={handleSearch}
              name="search"
              id="search"
              className="form__input form__input--search"
              placeholder="Поиск по объявлениям"
            />
            <button
              className="reset__btn btn search__btn"
              onClick={handleSearchArray}
            >
              <span className="search__icon">
                <svg
                  width="14.650574"
                  height="14.650574"
                  viewBox="0 0 14.6506 14.6506"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs />
                  <path
                    d="M14.65 14.02L10.08 9.46C10.94 8.45 11.47 7.15 11.47 5.73C11.47 2.57 8.89 0 5.73 0C4.2 0 2.76 0.59 1.67 1.67C0.59 2.76 -0.01 4.2 0 5.73C0 8.89 2.57 11.47 5.73 11.47C7.15 11.47 8.45 10.94 9.46 10.08L14.02 14.65L14.65 14.02ZM5.73 10.58C3.06 10.58 0.88 8.41 0.88 5.73C0.88 4.43 1.38 3.21 2.3 2.3C3.21 1.38 4.43 0.88 5.73 0.88C8.41 0.88 10.58 3.05 10.58 5.73C10.58 8.41 8.41 10.58 5.73 10.58Z"
                    fill="#FFFFFF"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                </svg>
              </span>{" "}
              <span className="search__text">Найти</span>{" "}
            </button>
          </form>

          <div className="wrapper__content flex">
            <Outlet context={{ products }} />
            <Aside />
          </div>
        </div>
      </main>
    </>
  );
};
