const formHandler = () => {
    const formBlock = document.querySelector(".forms");

    formBlock.addEventListener("click", event => {
        const target = event.target;
        const currentPopup = target.closest(".popup");

        if (target.closest(".close-form") || target.classList.contains("overlay")) {
            currentPopup.classList.remove("active-element");
        }
    });
};
export default formHandler;