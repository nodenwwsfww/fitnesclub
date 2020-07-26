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
const switchSlide = (slides, currentSlideIndex) => {
    slides[currentSlideIndex].style.display = "none";

    if (currentSlideIndex >= slides.length - 1) currentSlideIndex = 0;
    else currentSlideIndex++;

    slides[currentSlideIndex].style.display = "inline";

    return currentSlideIndex;
};

export { getChosenClub, switchSlide };