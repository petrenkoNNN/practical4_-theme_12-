const giftArr = [
    {
        title: 'Скидка 20% на первую покупку в нашем магазине!',
        icon: 'img/discount.svg'
    },
    {
        title: 'Скидка 10% на всё!',
        icon: 'img/discount_2.svg'
    },
    {
        title: 'Подарок при первой покупке в нашем магазине!',
        icon: 'img/gift.svg'
    },
    {
        title: 'Бесплатная доставка для вас!',
        icon: 'img/delivery.svg'
    },
    {
        title: 'Сегодня день больших скидок!',
        icon: 'img/discount_3.svg'
    }
];

const POPUP_DELAY = 3000;

const getRandomGift = () => {
    const index = Math.floor(Math.random() * giftArr.length);
    return giftArr[index];
};

const createPopup = (gift) => {
    const popupEl = document.createElement('div');
    popupEl.classList.add('popup');

    popupEl.innerHTML = `
        <div class="popup__card">
            <img class="popup__icon" src="${gift.icon}" alt="">
            <div class="popup__content">
                <h2 class="popup__title">${gift.title}</h2>
                <button class="popup__button" data-type="close">Отлично!</button>
            </div>
        </div>
    `;

    return popupEl;
};

document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.dataset.type === 'close') {
        target.closest('.popup').remove();
    }
});

window.setTimeout(() => {
    document.body.append(createPopup(getRandomGift()));
}, POPUP_DELAY);
