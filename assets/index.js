// Declarations
let bodyElem = document.querySelector('body');
let navElem = document.querySelector('nav');
let allianceBtnElem = document.querySelector('#allianceBtn');
let randomBtnElem = document.querySelector('#randomBtn');
let hordeBtnElem = document.querySelector('#hordeBtn');
let factionArray = ["Horde", "Alliance"];
let chosenFaction;
let raceCollection = {
    allianceRaces: {
        human: ["Mage","Paladin","Priest","Rogue","Warlock","Warrior"],
        nightElf: ["Druid","Hunter","Priest","Rogue","Warrior"],
        dwarf: ["Hunter","Paladin","Priest","Rogue","Warrior"],
        gnome: ["Mage","Rogue","Warlock","Warrior"]
    },
    hordeRaces: {
        orc: ["Hunter","Rogue","Shaman","Warlock","Warrior"],
        undead: ["Mage","Priest","Rogue","Warlock","Warrior"],
        tauren: ["Druid","Hunter","Shaman","Warrior"],
        troll: ["Hunter","Mage","Priest","Rogue","Shaman","Warrior"]
    }
};


// EventListeners
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
});


// Functions
function factionHandler(faction) {
    if(faction == "Horde" ? bodyElem.style.backgroundImage = `url("assets/img/horde-banner.jpg")` : bodyElem.style.backgroundImage = `url("assets/img/alliance-banner.jpg")`);
    bodyElem.style.backgroundPosition = "center";
    bodyElem.style.backgroundSize = "cover";
    bodyElem.style.backgroundRepeat = "no-repeat";
};

function getRandomNumber(number) {
    return Math.floor(Math.random() * number);
};