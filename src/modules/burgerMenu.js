const burgerMenu = () => {
    const popupMenu = document.querySelector(".popup-menu"),
        menuButton = document.getElementById("menu-button-click");

    menuButton.addEventListener("click", () => popupMenu.style.display = "flex");

    popupMenu.addEventListener("click", event => {

        const target = event.target;

        if (target.closest(".close-menu-btn") || target.closest(".scroll")) {
            popupMenu.style.display = "none";
        }
    });
};
export default burgerMenu;