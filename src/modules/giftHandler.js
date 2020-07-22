const giftHandler = () => {
    const gift = document.querySelector(".fixed-gift");

    gift.addEventListener("click", () => {
        document.getElementById("gift").classList.add("active-element");
        gift.style.display = "none";
    });
};

export default giftHandler;