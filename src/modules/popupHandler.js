const popupHandler = () => {
    const popupsBlock = document.querySelector(".popups");

    popupsBlock.addEventListener("click", event => {
        const target = event.target;
        const currentPopup = target.closest(".popup");

        if (target.closest(".close-form") || target.classList.contains("overlay") || target.closest(".close-btn")) {
            currentPopup.classList.remove("active-element");
        }
    });
};
export default popupHandler;