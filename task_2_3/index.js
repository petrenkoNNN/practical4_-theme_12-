const formEl = document.querySelector('.promo');
const inputEl = document.querySelector('.promo__input');
const messageEl = document.querySelector('.promo__message');

const promocodeArr = [
    {
        promocode: 'PROM10',
        gift: 'Скидка 10%'
    },
    {
        promocode: 'PROM50',
        gift: 'Скидка 50%'
    },
    {
        promocode: 'GIFT',
        gift: 'Подарок в корзине'
    }
];

const COOKIE_NAME = 'promocode';
const COOKIE_DAYS = 7;

const getCookie = () => {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [name, value] = item.split('=');
        acc[name] = value;
        return acc;
    }, {});
};

const saveCookie = (promocode) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + COOKIE_DAYS);

    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(promocode)}; expires=${expires.toUTCString()}; path=/`;
};

const applyPromocode = (promocode) => {
    const promocodeObj = promocodeArr.find((item) => item.promocode === promocode);
    if (!promocodeObj) {
        formEl.classList.remove('promo--applied');
        messageEl.textContent = '';
        return false;
    }

    formEl.classList.add('promo--applied');
    messageEl.textContent = `Промокод применён. ${promocodeObj.gift}`;
    return true;
};

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const promocode = inputEl.value.trim();

    if (applyPromocode(promocode)) {
        saveCookie(promocode);
    }
});

const savedPromocode = decodeURIComponent(getCookie()[COOKIE_NAME] || '');

if (applyPromocode(savedPromocode)) {
    inputEl.value = savedPromocode;
}
