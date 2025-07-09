
let incrementNumber = 0;
let countEl = document.querySelector(".count");
let saveList = document.querySelector(".save-list");

function count() {
    incrementNumber++
    countEl.innerText = incrementNumber
}

function deCount() {
    incrementNumber--
    countEl.innerText = incrementNumber
}

function save() {
    let countStr = " " + incrementNumber + ",";
    saveList.innerText += countStr;

    countEl.innerText = 0
    incrementNumber = 0
}