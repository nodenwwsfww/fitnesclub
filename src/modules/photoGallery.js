import { switchSlide } from "./functions";
const photoGallery = () => {
    const slides = document.querySelectorAll(".gallery-slider>.slide");

    let currentSlideIndex = 0,
        lastTick = 0;

    requestAnimationFrame(function applySlider(time) {
        if (time - lastTick > 3000) {
            lastTick = time;
            currentSlideIndex = switchSlide(slides, currentSlideIndex);
        }
        requestAnimationFrame(applySlider);
    });

};

export default photoGallery;