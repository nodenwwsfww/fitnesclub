const windowScroll = () => {
    const burgerMenu = document.querySelector(".top-menu"),
        arrowUp = document.getElementById("totop"),
        firstBlock = document.querySelector(".head");

    window.addEventListener("scroll", () => {
        if (pageYOffset > 0) {
            burgerMenu.style.position = "fixed";
            arrowUp.style.position = pageYOffset > firstBlock.clientHeight ? "fixed" : "relative";
        } else {
            burgerMenu.style.position = "relative";
        }
    });
};

export default windowScroll;