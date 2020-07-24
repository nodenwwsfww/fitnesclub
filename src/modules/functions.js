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

export default getChosenClub;