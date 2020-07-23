const windowScroll = () => {
    window.addEventListener("scroll", () => {
        const burgerMenu = document.querySelector(".top-menu");

        if (pageYOffset > 0) {
            burgerMenu.style.position = "fixed";
        } else {
            burgerMenu.style.position = "relative";
        }
    });
};

export default windowScroll;