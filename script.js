let outputLocation = document.querySelector(".test-output");
const numberBtn = document.querySelectorAll(".calc-ui-button");
const calcScreen = document.querySelector("#userInput");
let inputNumbers = document.querySelector(".user-input");
const optBtn = document.querySelectorAll(".operator-btn");
const equalbtn = document.querySelector("#equals-btn");
const clearBtn = document.querySelector("#clearBtn");
let varOne;
let varTwo;
let operator;
let isCalculated = false

// Listener to clear all staged calculations
clearBtn.addEventListener("click", () => { 
    inputNumbers.value = "";
    varOne = undefined;
    varTwo = undefined;
    operator = "";
});


// Listener to enter numbers to calc
numberBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnNumber = btn.textContent;
        calcScreen.value = [calcScreen.value + btnNumber];
    })
});


// Listener to enter operators to calc
optBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnOpt = btn.textContent;
        calcScreen.value = [calcScreen.value + btnOpt];
    })
});

function operate() {

    toCalcArr = [...inputNumbers.value];

    console.log(toCalcArr)

    for (let i = 0; i < toCalcArr.length; i++) {
        if (isNaN(toCalcArr[i])){ 
            
        } else if(!isNaN(toCalcArr[i]))  {
            console.log(toCalcArr)
            if(!isNaN(toCalcArr[i+1]))  {
                const nextNum = Number(toCalcArr[i + 1]);
                const currentNum = Number(toCalcArr[i]);
                const newNum = currentNum.toString() + nextNum.toString();
                toCalcArr.splice(i, 2, newNum);
                i--;
            }
        }
    }

    console.log(toCalcArr)

    for (let i = 0; i < toCalcArr.length; i++) {
        if (toCalcArr[i] === "*") {
            const operand1 = Number(toCalcArr[i - 1]);
            const operand2 = Number(toCalcArr[i + 1]);
            const result = operand1 * operand2;
            toCalcArr.splice(i - 1, 3, result);
            i--;
        }
    }

    console.log(toCalcArr)

    for (let i = 0; i < toCalcArr.length; i++) {
        if (toCalcArr[i] === "/") {
            const operand1 = Number(toCalcArr[i - 1]); 
            const operand2 = Number(toCalcArr[i + 1]);
            const result = operand1 / operand2;
            toCalcArr.splice(i - 1, 3, result);
            i--;
        }
    }

    console.log(toCalcArr)

    for (let i = 0; i < toCalcArr.length; i++) {
        if (toCalcArr[i] === "+") {
            const operand1 = Number(toCalcArr[i - 1]); 
            const operand2 = Number(toCalcArr[i + 1]);
            const result = operand1 + operand2;
            toCalcArr.splice(i - 1, 3, result);
            i--;
        }
    }

    console.log(toCalcArr)

    for (let i = 0; i < toCalcArr.length; i++) {
        if (toCalcArr[i] === "-") {
            const operand1 = Number(toCalcArr[i - 1]);  
            const operand2 = Number(toCalcArr[i + 1]);
            const result = operand1 - operand2;
            toCalcArr.splice(i - 1, 3, result);
            i--;
        }
    }
    console.log(toCalcArr)
    inputNumbers.value = toCalcArr;
}


// DO I even bother with this button?
function deletechar() { 
    let modArr = [...inputNumbers.value]
    let delArr = modArr.pop()

    inputNumbers.value = toString(modArr);
}


