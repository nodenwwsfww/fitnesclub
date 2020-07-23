import windowScroll from "./modules/windowScroll";
import selectClub from "./modules/selectClub";
import popupHandler from "./modules/popupHandler";
import visitHandler from "./modules/visitHandler";
import callbackHandler from "./modules/callbackHandler";
import giftHandler from "./modules/giftHandler";
import burgerMenu from "./modules/burgerMenu";

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
if (!document.documentElement.id) {
    try {
        giftHandler();
    } finally {
        //
    }
}

// Бургер-меню
try {
    burgerMenu();
} finally {
    //
}