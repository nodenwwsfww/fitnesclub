const mainSlider = () => {
    const slider = document.querySelector(".main-slider"),
        slides = slider.querySelectorAll(".slide");

    let currentSlideIndex = 0,
        lastTick = 0;

    requestAnimationFrame(function applySlider(time) {
        if (time - lastTick > 3000) {
            lastTick = time;
            slides[currentSlideIndex].style.display = "none";

            if (currentSlideIndex >= slides.length - 1) currentSlideIndex = 0;
            else currentSlideIndex++;
            slides[currentSlideIndex].style.display = "inline";
        }
        requestAnimationFrame(applySlider);
    });

};

export default mainSlider;