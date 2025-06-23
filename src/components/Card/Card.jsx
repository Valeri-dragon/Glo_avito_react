import './Card.css'
export const Card = (image, title, price,  currency, address, time_publ) =>{
   return (
  <li className="content__item">
              <article className="advert">
                <a href="./product.html" className="advert__link">
                  {/* <img src={image} alt="Image advertisement" className="advert__img" /> */}
                  <h3 className="advert__title">{title}</h3>
                  <p className="advert__price">{price} <span className="advert__price--icon">{currency}</span> </p>
                  <p className="advert__adress">{address}</p>
                  <time datetime="2025-07-10T11:39" className="advert__time">{time_publ}</time>
                </a>
              </article>
            </li> 
           
  )
}