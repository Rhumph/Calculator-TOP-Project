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

clearBtn.addEventListener("click", () => { 
    inputNumbers.value = "";
    varOne = undefined;
    varTwo = undefined;
    operator = "";
});

numberBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnNumber = btn.textContent;
        calcScreen.value = [calcScreen.value + btnNumber];
    })
});

optBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnOpt = btn.textContent;
        operator = btnOpt;

        if (typeof varOne === 'undefined') {
            varOne = parseInt(inputNumbers.value);
        } else if (typeof varTwo === 'undefined') {
            varTwo = parseInt(inputNumbers.value);
        }
        
        console.log(varOne + " " + operator + " " + varTwo)
        calcScreen.value = "";
    })
});

function operate() {

    console.log(varOne + " " + operator + " " + varTwo)
        if (typeof varTwo === 'undefined') {
            varTwo = parseInt(inputNumbers.value);
        }
        
        console.log(varOne + " " + operator + " " + varTwo)

    switch (operator) {
        case "+":
            inputNumbers.value = (varOne + varTwo);
            break;

        case "-":
            inputNumbers.value = (varOne - varTwo);
            break;

        case "*":
            inputNumbers.value = (varOne * varTwo);
            break;

        case "/":
            inputNumbers.value = (varOne / varTwo);
            break;
    }
}





