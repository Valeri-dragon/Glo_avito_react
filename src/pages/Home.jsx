import { useOutletContext } from "react-router"
import { Card } from "../components/Card/Card"
export const Home = () => {
  const {products} = useOutletContext()
  return (
    <>
           <section className="content">
              <h2 className="section__title">Рекомендации для вас</h2>
              <ul className="list__reset list__content flex">
                {
                 products.map((card) => {
                    return (<Card
                      key={card.id}
                      id={card.id}
                      img={card.image}
                      title={card.title}
                      price={card.price}
                      currency={card.currency}
                      address={card.address}
                      time_publ={card.time_publ}
                    />)
                  })
                }


              </ul>
            </section>
             </>
  )
}