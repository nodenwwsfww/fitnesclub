const getChosenClub = clubNodeList => {
    let chosenClub = false;
    [...clubNodeList].forEach(club => {
        if (club.checked) {
            // eslint-disable-next-line no-unused-vars
            chosenClub = club.value;
        }
    });
    return chosenClub;
};
const switchSlide = (sliderName, slides, switchCount) => {
    let currentSlideIndex = +sessionStorage.getItem(`${sliderName}_currentSlideIndex`);
    const prevSlideIndex = currentSlideIndex;
    slides[currentSlideIndex].style.display = "none";

    if (currentSlideIndex + switchCount >= slides.length) currentSlideIndex = 0;
    else if (currentSlideIndex + switchCount < 0) currentSlideIndex = slides.length - 1;
    else currentSlideIndex += switchCount;

    if (sliderName === "gallery") {
        const sliderDotsColl = document.querySelector(".slider-dots").children;
        sliderDotsColl[prevSlideIndex].classList.remove("slick-active");
        sliderDotsColl[currentSlideIndex].classList.add("slick-active");
    }


    slides[currentSlideIndex].style.display = "flex";

    sessionStorage.setItem(`${sliderName}_currentSlideIndex`, currentSlideIndex);
    return currentSlideIndex;
};
const startSlider = (sliderName, slides) => {
    let
        lastTick = 0,
        sliderID = 0;

    sliderID = requestAnimationFrame(function applySlider(time) {
        if (time - lastTick > 2500) {
            lastTick = time;
            if (sessionStorage.getItem(`${sliderName}_sliderStatus`) === "run") {
                switchSlide(sliderName, slides, 1);
                sessionStorage.setItem(`${sliderName}_sliderID`, sliderID);
            }
        }
        sliderID = requestAnimationFrame(applySlider);
    });
};

export {
    getChosenClub,
    switchSlide,
    startSlider
};