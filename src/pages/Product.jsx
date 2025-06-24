import { useOutletContext } from "react-router";
import { useParams } from "react-router";
import parse from "html-react-parser";
export const Product = () => {
  const { products } = useOutletContext();
  const { id } = useParams();
  const findProduct = products.find((p) => p.id === +id);
  
  return (
    <>
      {findProduct ? (
        <section className="content">
          <div className="product__container flex">
            <div className="product__content">
              <h2 className="section__title">{findProduct.title}</h2>
              <img
                src={findProduct.image}
                alt={findProduct.title}
                className="product__img"
              />
              <p className="product__descr">{parse(findProduct.descr)}</p>
            </div>
            <div className="product__price_phone flex">
              <p className="product__price">
                {findProduct.price}{" "}
                <span className="product__price--icon">
                  {findProduct.currency}
                </span>
              </p>
              <button className="reset__btn btn btn__phone">
                Показать телефон
              </button>
            </div>
          </div>
        </section>
      ) : (
        <h2>Такого товара не существует!</h2>
      )}
    </>
  );
};
