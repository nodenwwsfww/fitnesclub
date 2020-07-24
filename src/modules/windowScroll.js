const windowScroll = () => {
    const burgerMenu = document.querySelector(".top-menu"),
        arrowUp = document.getElementById("totop"),
        firstBlock = document.querySelector(".header-main");

    window.addEventListener("scroll", () => {
        if (pageYOffset > 0) {
            burgerMenu.style.position = "fixed";
            arrowUp.style.position = pageYOffset > firstBlock.clientHeight ? "fixed" : "";
        } else {
            burgerMenu.style.position = "";
        }
    });
};

export default windowScroll;