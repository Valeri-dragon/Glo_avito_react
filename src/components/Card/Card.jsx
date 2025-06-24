import './Card.css'
export const Card = (card) =>{
   return (
  <li className="content__item">
              <article className="advert">
                <a href="./product.html" className="advert__link">
                   <img src={card.img} alt="Image advertisement" className="advert__img" />  
                  <h3 className="advert__title">{card.title}</h3>
                  <p className="advert__price">{card.price} <span className="advert__price--icon">{card.currency}</span> </p>
                  <p className="advert__adress">{card.address}</p>
           <time datetime="2025-07-10T11:39" className="advert__time">{card.time_publ}</time>
                </a>
              </article>
            </li> 
           
  )
}