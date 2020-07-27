import {
    startSlider
} from "./functions";
const mainSlider = () => {
    const slides = document.querySelectorAll(".main-slider>.slide");

    sessionStorage.removeItem("gallery_currentSlideIndex");
    sessionStorage.setItem(`main_sliderStatus`, "run");
    startSlider("main", slides);

};

export default mainSlider;