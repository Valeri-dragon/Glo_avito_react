import { Header } from "../components/Header/Header"
import { Search } from "../components/Search/Search"
import { Aside } from "../components/Aside/Aside"
import { Card } from "../components/Card/Card"
import { cardArray } from "../constants"
export const Home = () => {
  return (
    <>

      <Header />
      <main className="main">
        <div className="container">
          <Search />
          <div className="wrapper__content flex">
            <section className="content">
              <h2 className="section__title">Рекомендации для вас</h2>
              <ul className="list__reset list__content flex">
                {
                  cardArray.map((card) => {
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
            <Aside />
          </div>

        </div>
      </main>
    </>
  )
}