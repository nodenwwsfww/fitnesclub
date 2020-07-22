import selectClub from "./modules/selectClub";
import popupHandler from "./modules/popupHandler";
import visitHandler from "./modules/visitHandler";
import callbackHandler from "./modules/callbackHandler";

// Выбор клуба
selectClub();

// Обработка всех popup (закрытие на крестик/вне окна)
popupHandler();

// Запись на бесплатный визит
visitHandler();

// Перезвонить
callbackHandler();