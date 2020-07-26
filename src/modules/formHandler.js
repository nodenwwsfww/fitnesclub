import { getChosenClub } from "./functions";
const formHandler = () => {
    document.body.addEventListener("submit", event => {
        event.preventDefault();

        const form = event.target;
        const checkbox = form.querySelector("input[type=\"checkbox\"");

        if (checkbox) {
            const checkboxLabel = checkbox.parentNode.querySelector("label");
            checkboxLabel.style.backgroundColor = "";

            if (!checkbox.checked) {
                checkboxLabel.style.backgroundColor = "red";
                return;
            }
        }

        const clubsForChoice = form.querySelectorAll("input[name=\"club-name\"");

        if (clubsForChoice.length > 0) {
            const chosenClub = getChosenClub(clubsForChoice);

            if (form.lastElementChild.tagName.toLowerCase() === "span") form.lastElementChild.remove();

            if (!chosenClub) {
                const errorSpan = document.createElement("span");
                errorSpan.innerHTML = "<strong>Вы не выбрали клуб</strong>";
                errorSpan.style.color = "red";
                return form.append(errorSpan);
            }
        }

        const formValidation = form => {
            let validStatus = true;
            const inputs = [...form.querySelectorAll("input")];
            /* Проверка данных формы на пустоту и валидность,
            учитываем, что существуют необязательные поля как промокод */
            inputs.forEach(item => {
                if (item.tagName.toLowerCase() !== "input") return;
                if (!item.pattern) return;
                item.style.border = "";
                if (!item.dataset.required && !item.value.trim()) return;

                if (!new RegExp(item.pattern).test(item.value.trim())) {
                    item.style.border = "2px solid red";
                    validStatus = false;
                }

            });
            /*  */

            return validStatus;
        };

        /* На случай если в браузере пойдёт что-то не так */
        if (!formValidation(form)) {
            return;
        }

        const postData = data => fetch("./server.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            cache: "default",
            body: JSON.stringify(data)
        });

        const toggleAnimPreloader = mainContent => {
            const preloader = document.getElementById("preloader");
            preloader.innerHTML = `
                <div class="cube1"></div>
                <div class="cube2"></div>
            `;

            preloader.classList.add("spinner");
            preloader.classList.toggle("active-element");
            if (mainContent) {
                mainContent.classList.remove("active-element");
                document.querySelector(".main-slider").style.display = "none"; // для более красивой анимации
            } else {
                document.querySelector(".main-slider").style.display = "block";  // для более красивой анимации
            }
        };

        const resultWindow = document.getElementById("thanks"),
            resultWindowMessage = resultWindow.querySelector(".form-content");
        // Ставим значение, на случай если до этого была ошибка
        resultWindowMessage.innerHTML = `
            <h4>Спасибо!</h4>
            <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>
            <button class="btn close-btn">OK</button>
        `;
        const formData = new FormData(form);
        const data = {};

        formData.forEach((val, key) => {
            data[key] = val;
        });

        const currentPopup = form.closest(".popup");
        toggleAnimPreloader(currentPopup);
        postData(data)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error("invalid server response status");
                }
            })
            .catch(error => {
                console.error(error);
                resultWindowMessage.innerHTML = `
                    <h4>Ошибка!</h4>
                    <p>Во время отправки запроса обнаружена ошибка.</p>
                    <button class="btn close-btn">OK</button>
                `;
            })
            /* .finally(() => [...form.querySelectorAll("input")].forEach(input => {

                if (input.type.toLowerCase() === "checkbox" || input.name.toLowerCase() === "club-name") {
                    input.checked = false;
                } else {
                    input.value = "";
                }
            })); */
            .finally(() => {
                resultWindow.classList.toggle("active-element");
                toggleAnimPreloader();
                [...form.querySelectorAll("input")].forEach(input => {

                    if (input.type.toLowerCase() === "checkbox" ||
                        input.type.toLowerCase() === "radio" ||
                        input.name.toLowerCase() === "club-name") {
                        input.checked = false;
                    } else {
                        input.value = "";
                    }
                });
            });

    });
};

export default formHandler;