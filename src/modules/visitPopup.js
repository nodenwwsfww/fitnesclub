const visitPopup = () => {
    const signupText = document.getElementById("visit-signup"),
        popupMenu = document.getElementById("free_visit_form");

    const togglePopupMenu = () => popupMenu.classList.toggle("active-element");

    signupText.addEventListener("click", () => {
        const target = event.target;

        if (target.classList.contains("open-popup")) {
            togglePopupMenu();
        }
    });

    popupMenu.addEventListener("click", event => {
        const target = event.target;

        /* Закрытие/Открытие по нажатию на крестик/вне окна формы */
        if (target.closest(".close-form") || target.classList.contains("overlay")) {
            togglePopupMenu();
        }

    });
};

export default visitPopup;
