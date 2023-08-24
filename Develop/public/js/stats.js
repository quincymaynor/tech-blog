console.log("---stats.js attached---");

let strRolled = false;
let dexRolled = false;
let conRolled = false;
let intRolled = false;
let wisRolled = false;
let chaRolled = false;

//Generate a random number between 1-20
function roll1d20 () {
    let ranNum = Math.floor(20 * Math.random()) + 1;
    console.log(ranNum);
    return ranNum;
}

//Strength
const strField = document.getElementById('strField');
const strBtn = document.getElementById('strBtn');
strBtn.addEventListener('click', generateStr);

function generateStr () {
    if (strRolled === false) {
    console.log("STR generating...");
    const newStr = Math.floor(20 * Math.random()) + 1;
    console.log(newStr);
    strField.value= newStr;
    console.log("STR was rolled!");
    }
    else {
        console.log("Cannot re-roll!");
    }
    strRolled = true;
}

//Dexterity
const dexField = document.getElementById('dexField');
const dexBtn = document.getElementById('dexBtn');
dexBtn.addEventListener('click', generateDex);

function generateDex () {
    if (dexRolled === false) {
    console.log("DEX generating...");
    const newDex = Math.floor(20 * Math.random()) + 1;
    console.log(newDex);
    dexField.value= newDex;
    console.log("DEX was rolled!");
    }
    else {
        console.log("Cannot re-roll!");
    }
    dexRolled = true;
}

//Constitution
const conField = document.getElementById('conField');
const conBtn = document.getElementById('conBtn');
conBtn.addEventListener('click', generateCon);

function generateCon () {
    if (conRolled === false) {
    console.log("CON generating...");
    const newCon = Math.floor(20 * Math.random()) + 1;
    console.log(newCon);
    conField.value= newCon;
    console.log("CON was rolled!");
    }
    else {
        console.log("Cannot re-roll!");
    }
    conRolled = true;
}

//Intelligence
const intField = document.getElementById('intField');
const intBtn = document.getElementById('intBtn');
intBtn.addEventListener('click', generateInt);

function generateInt () {
    if (intRolled === false) {
    console.log("INT generating...");
    const newInt = Math.floor(20 * Math.random()) + 1;
    console.log(newInt);
    intField.value= newInt;
    console.log("INT was rolled!");
    }
    else {
        console.log("Cannot re-roll!");
    }
    intRolled = true;
}

//Wisdom
const wisField = document.getElementById('wisField');
const wisBtn = document.getElementById('wisBtn');
wisBtn.addEventListener('click', generateWis);

function generateWis () {
    if (wisRolled === false) {
    console.log("WIS generating...");
    const newWis = Math.floor(20 * Math.random()) + 1;
    console.log(newWis);
    wisField.value= newWis;
    console.log("WIS was rolled!");
    }
    else {
        console.log("Cannot re-roll!");
    }
    wisRolled = true;
}

//Charisma
const chaField = document.getElementById('chaField');
const chaBtn = document.getElementById('chaBtn');
chaBtn.addEventListener('click', generateCha);

function generateCha () {
    if (chaRolled === false) {
    console.log("CHA generating...");
    const newCha = Math.floor(20 * Math.random()) + 1;
    console.log(newCha);
    chaField.value= newCha;
    console.log("CHA was rolled!");
    }
    else {
        console.log("Cannot re-roll!");
    }
    chaRolled = true;
}
