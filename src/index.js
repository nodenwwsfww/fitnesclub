import windowScroll from "./modules/windowScroll";
import selectClub from "./modules/selectClub";
import popupHandler from "./modules/popupHandler";
import visitHandler from "./modules/visitHandler";
import callbackHandler from "./modules/callbackHandler";
import giftHandler from "./modules/giftHandler";
import burgerMenu from "./modules/burgerMenu";
import formHandler from "./modules/formHandler";
import paymentCalculater from "./modules/paymentCalculater";

import mainSlider from "./modules/mainSlider";
import photoGallery from "./modules/photoGallery";
import SliderCarousel from "./modules/sliderCarousel";

// Событие scroll на странице
try {
    windowScroll();
} finally {
    //
}

// Выбор клуба
try {
    selectClub();
} finally {
    //
}

// Обработка всех popup (закрытие на крестик/вне окна)
try {
    popupHandler();
} finally {
    //
}

// Обработка всех форм (валидация и отправка запросов)
try {
    formHandler();
} finally {
    //
}

// Запись на бесплатный визит
try {
    visitHandler();
} finally {
    //
}

// Перезвонить
try {
    callbackHandler();
} finally {
    //
}

// Подарок
try {
    if (!document.documentElement.id) giftHandler();
} finally {
    //
}

// Бургер-меню
try {
    burgerMenu();
} finally {
    //
}

// Калькулятор
try {
    if (!document.documentElement.id) paymentCalculater();
} finally {
    //
}

// Главный слайдер
try {
    mainSlider();
} finally {
    //
}

// Фотогалерея
try {
    photoGallery();
} finally {
    //
}

// sliderCarousel
try {
    let slidesToShow = 2;

    if (document.body.clientWidth <= 576) {
        slidesToShow = 2;
    } else if (document.body.clientWidth <= 768) {
        slidesToShow = 3;
    } else if (document.body.clientWidth <= 1024) {
        slidesToShow = 4;
    } else {
        slidesToShow = 5;
    }

    new SliderCarousel({
        main: ".services-wrapper",
        wrap: ".services-slider",
        next: ".arrow-next",
        prev: ".arrow-prev",
        position: 0,
        slidesToShow
    });
} finally {
    //
}