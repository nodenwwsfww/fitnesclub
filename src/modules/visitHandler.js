const visitHandler = () => {
    const signupText = document.getElementById("visit-signup");

    signupText.addEventListener("click", () => {
        const target = event.target;

        if (target.classList.contains("open-popup")) {
            document.querySelector(target.dataset.popup).classList.add("active-element");
        }
    });
};

export default visitHandler;