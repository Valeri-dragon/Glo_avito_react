import './Header.css'
export const Header = () =>{
  return (
<header className="header">
    <div className="container ">
      <div className="header__top flex">
        <a href="#!" className="header__logo">
          <img src="img/logotype.svg" alt="Logotype" />
        </a>
        <nav className="nav">
          <ul className="list__reset nav__header">
          </ul>
        </nav>
        <div className="btn__wrapper flex">
          <button className="reset__btn btn btn__outline">Вход и регистрация</button>
          <button className="reset__btn btn add__advert">
            Подать объявление
          </button>
        </div>
        <span className="burger">
          <svg width="30.000000" height="14.999878" viewBox="0 0 30 14.9999" fill="none"
            xmlns="http://www.w3.org/2000/svg">
                      <path
              d="M29.06 6.56L0.93 6.56C0.41 6.56 0 6.98 0 7.49C0 8.01 0.42 8.43 0.93 8.43L29.06 8.43C29.58 8.43 29.99 8.01 29.99 7.49C29.99 6.98 29.58 6.56 29.06 6.56Z"
              fill="#000000" fillOpacity="1.000000" fillRule="nonzero" />
            <path
              d="M29.06 13.12L10.31 13.12C9.79 13.12 9.37 13.54 9.37 14.06C9.37 14.57 9.79 14.99 10.31 14.99L29.06 14.99C29.58 14.99 29.99 14.57 29.99 14.06C30 13.54 29.58 13.12 29.06 13.12Z"
              fill="#000000" fillOpacity="1.000000" fillRule="nonzero" />
            <path
              d="M0.93 1.87L29.06 1.87C29.58 1.87 29.99 1.45 29.99 0.93C29.99 0.41 29.57 0 29.06 0L0.93 0C0.41 0 0 0.42 0 0.93C0 1.45 0.42 1.87 0.93 1.87Z"
              fill="#000000" fillOpacity="1.000000" fillRule="nonzero" />
          </svg>

        </span>
      </div>

    </div>

  </header>
  )
}