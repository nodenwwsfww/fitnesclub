import { switchSlide } from "./functions";
const mainSlider = () => {
    const slides = document.querySelectorAll(".main-slider>.slide");

    let currentSlideIndex = 0,
        lastTick = 0;

    requestAnimationFrame(function applySlider(time) {
        if (time - lastTick > 2500) {
            lastTick = time;
            // Меняем слайд и возвращаем индекс нового слайда
            currentSlideIndex = switchSlide(slides, currentSlideIndex);
        }
        requestAnimationFrame(applySlider);
    });

};

export default mainSlider;