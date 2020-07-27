import { startSlider, switchSlide } from "./functions";
const photoGallery = () => {
    const slides = document.querySelectorAll(".gallery-slider>.slide"),
        switchBlock = document.querySelector(".gallery-slider>.switch-container");

    const resumeSlider = () => sessionStorage.setItem(`gallery_sliderStatus`, "run");
    const pauseSlider = () => sessionStorage.setItem(`gallery_sliderStatus`, "stop");

    sessionStorage.removeItem("gallery_currentSlideIndex");
    resumeSlider();
    startSlider("gallery", slides);

    switchBlock.addEventListener("click", event => {
        const target = event.target;
        event.preventDefault();

        if (target.tagName.toLowerCase() === "span") { // стрелки
            switchSlide("gallery", slides, (target.closest(".next") ? 1 : -1));

        } else if (target.tagName.toLowerCase() === "button") { // точки
            const sliderDotsColl = target.parentNode.parentNode.children;
            const oldSlide = sessionStorage.getItem("gallery_currentSlideIndex");
            const newSlide = [...sliderDotsColl].indexOf(target.parentNode);

            switchSlide("gallery", slides, newSlide - oldSlide);
        }
    });

    switchBlock.addEventListener("mouseover", () => {
        pauseSlider();
    });
    switchBlock.addEventListener("mouseout", () => {
        resumeSlider();
    });


};

export default photoGallery;