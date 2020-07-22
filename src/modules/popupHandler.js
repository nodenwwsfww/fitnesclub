const popupHandler = () => {
    const formsBlock = document.querySelector(".forms");

    formsBlock.addEventListener("click", event => {
        const target = event.target;
        const currentPopup = target.closest(".popup");

        if (target.closest(".close-form") || target.classList.contains("overlay")) {
            currentPopup.classList.remove("active-element");
        }
    });
};
export default popupHandler;