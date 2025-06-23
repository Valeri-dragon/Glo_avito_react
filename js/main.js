console.log('hello world');
const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.form__input--search');
const advertsBlock = document.querySelector('.list__content');
const cardArray = [
    {
        id: 0,
        image:'img/advert_img_1.jpeg',
        title:'Пвх материал 2й сорт',
        price:'170',
        currency: '₽',
        address: 'Казань, р-н Вахитовский',
        time_publ:'10 июля 11:39',
    },
    {
        id: 1,
        image: 'img/advert_img_2.jpg',
        title: 'Участок 10 сот. (ИЖС)',
        price: '3 500 000',
        currency: 'Br',
        address: 'Краснодарский край, ст. Марьянская',
        time_publ: '10 июля 11:39',
    },
    {
        id: 2,
        image: 'img/advert_img_3.jpeg',
        title: 'Модульный дом для круглогодичного',
        price: '2 000 000',
        currency: '¥',
        address: 'Краснодарский край, ст. Марьянская',
        time_publ: '10 июля 11:39',
    }, 
    {
        id: 3,
        image: 'img/advert_img_4.jpg',
        title: 'Срочно нужна заполнительница карточек. Зп 13 т в неделю',
        price: '13 000',
        currency: '₽',
        address: 'Москва, Мытищи',
        time_publ: '10 июля 11:39',
    },
    {
        id: 4,
        image: 'img/advert_img_5.jpg',
        title: 'Автокресло Joie every stage',
        price: '6 000',
        currency: '₽',
        address: 'Краснодар',
        time_publ: '10 июля 11:39',
    },
    {
        id: 5,
        image: 'img/advert_img_6.jpg',
        title: 'Peugeot 308 1.6 AT, 2011, 242 110 км',
        price: '499 000',
        currency: '₽',
        address: 'Краснодар',
        time_publ: '10 июля 11:39',
    },
]
const renderAdvert = (advertList)=>{
    advertsBlock.innerHTML = '';
    advertList.forEach(e => {
               advertsBlock.insertAdjacentHTML('beforeend', `
            <li class="content__item">
              <article class="advert">
                <a href="./product.html" class="advert__link">
                  <img src="${e.image}" alt="Image ${e.title}" class="advert__img">
                  <h3 class="advert__title">${e.title}</h3>
                  <p class="advert__price">${e.price} <span class="advert__price--icon">${e.currency}</span> </p>
                  <p class="advert__adress">${e.address}</p>
                  <time datetime="2025-07-10T11:39" class="advert__time">${e.time_publ}</time>
                </a>
              </article>
            </li>
            `)
    })
}
renderAdvert(cardArray)

searchBtn.disabled = true


const filteredArray = (array, value)=>{
return array.filter((item)=>{
    return item.title.toUpperCase().toLowerCase().includes(value) || item.price.includes(value)
})
}
searchInput.addEventListener('input', (e)=>{
    searchBtn.disabled = true
    if (searchInput.value != '') {
        searchBtn.disabled = false
    }
    renderAdvert(cardArray)
    }
)

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    renderAdvert(filteredArray(cardArray, searchInput.value.toUpperCase().toLowerCase()))
})