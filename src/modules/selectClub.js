const selectClub = () => {
    const selectClubBtn = document.querySelector(".club-select"),
        clubList = document.querySelector(".clubs-list-hidden");

    selectClubBtn.addEventListener("click", () => clubList.classList.toggle("active-element"));
};

export default selectClub;
