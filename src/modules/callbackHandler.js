const callbackHandler = () => {

    const callbackBtn = document.querySelector(".callback-btn");

    callbackBtn.addEventListener("click",
        event => document.querySelector(event.target.dataset.popup).classList.add("active-element"));
};

export default callbackHandler;