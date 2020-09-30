let bodyElem = document.querySelector('body');
let navElem = document.querySelector('nav');
let allianceBtnElem = document.querySelector('#allianceBtn');
let randomBtnElem = document.querySelector('#randomBtn');
let hordeBtnElem = document.querySelector('#hordeBtn');
let factionArray = ["Horde", "Alliance"];
let chosenFaction;


allianceBtnElem.addEventListener('click', () => {
    chosenFaction = factionArray[1];
    factionHandler(chosenFaction);
});

hordeBtnElem.addEventListener('click', () => {
    chosenFaction = factionArray[0];
    factionHandler(chosenFaction);
});

randomBtnElem.addEventListener('click', () => {
    chosenFaction = factionArray[getRandomNumber(factionArray.length)];
    factionHandler(chosenFaction);
})


function factionHandler(faction) {
    if(faction == "Horde" ? bodyElem.style.backgroundImage = `url("assets/img/horde-banner.jpg")` : bodyElem.style.backgroundImage = `url("assets/img/alliance-banner.jpg")`);
    bodyElem.style.backgroundPosition = "center";
    bodyElem.style.backgroundSize = "cover";
    bodyElem.style.backgroundRepeat = "no-repeat";
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number);
}