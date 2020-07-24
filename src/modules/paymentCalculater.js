import getChosenClub from "./functions";
const paymentCalculater = () => {
    const calcBlock = document.getElementById("calculater");

    const calcTotalPrice = () => {
        const selectedClub = getChosenClub(calcBlock.querySelectorAll("input[name=\"club-name\"")),
            cards = [...calcBlock.querySelectorAll("input[name=\"card-type\"")],
            cardsPrice = (selectedClub === "mozaika" ? [1999, 9900, 13900, 19900] : [2990, 14990, 21990, 24990]);

        /* Вычисление исходя из выбранной карточки */
        return cardsPrice[ cards.findIndex(item => item.checked) ];
    };

    calcBlock.addEventListener("change", () => {
        let totalPrice;
        try {
            totalPrice = +calcTotalPrice();
        } catch (error) {
            totalPrice = 1990;
        } finally {
            calcBlock.querySelector("#price-total").textContent = totalPrice;
        }

    });
};

export default paymentCalculater;