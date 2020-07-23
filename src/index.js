import windowScroll from "./modules/windowScroll";
import selectClub from "./modules/selectClub";
import popupHandler from "./modules/popupHandler";
import visitHandler from "./modules/visitHandler";
import callbackHandler from "./modules/callbackHandler";
import giftHandler from "./modules/giftHandler";
import burgerMenu from "./modules/burgerMenu";
import formHandler from "./modules/formHandler";

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