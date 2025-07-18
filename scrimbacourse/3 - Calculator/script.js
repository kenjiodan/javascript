let numN1 = document.querySelector(".num-n1");
let numN2 = document.querySelector(".num-n2");
let sumN1 = document.querySelector(".sum-n1");
let countNumN1 = Number(numN1.textContent)
let countNumN2 = Number(numN2.textContent)

function add() {
    sumN1.textContent = "Sum: "
    let addRes = countNumN1 + countNumN2
    sumN1.textContent += addRes
}

function subtract() {
    sumN1.textContent = "Sum: "
    let subRes = countNumN1 - countNumN2
    sumN1.textContent += subRes
}

function divide() {
    sumN1.textContent = "Sum: "
    let divRes = countNumN1 / countNumN2
    sumN1.textContent += divRes
}

function multiply() {
    sumN1.textContent = "Sum: "
    let mulRes = countNumN1 * countNumN2
    sumN1.textContent += mulRes
}