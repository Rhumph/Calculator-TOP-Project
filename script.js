let numbers = [];

function inputNumbers(){ 
    let inputNumbers = document.querySelector(".user-input");

    numbers.push(inputNumbers.value);

    
    // Will keep the below code to use for test down the track
    let arry = document.createElement("p");
    arry.textContent = numbers;
    let outputLocation = document.querySelector(".test-output");
    outputLocation.appendChild(arry);



    inputNumbers.value = "";
}

function add(numbers){

    let outputLocation = document.querySelector(".test-output");

    if (numbers.length === 1){ 
        return numbers[0];
    }else{
    let addedNumbers = numbers.reduce((sum, current) => parseInt(sum) + parseInt(current));
    outputLocation.textContent = addedNumbers;
    }    
};

function subtract(numbers){

    let outputLocation = document.querySelector(".test-output");

    if (numbers.length === 1){ 
        return numbers[0];
    }else{
    let addedNumbers = numbers.reduce((sum, current) => parseInt(sum) - parseInt(current));
    outputLocation.textContent = addedNumbers;
    }    
};

function multiply(numbers){

    let outputLocation = document.querySelector(".test-output");

    if (numbers.length === 1){ 
        return numbers[0];
    }else{
    let addedNumbers = numbers.reduce((sum, current) => parseInt(sum) * parseInt(current));
    outputLocation.textContent = addedNumbers;
    }    
};

function divide(numbers){

    let outputLocation = document.querySelector(".test-output");

    if (numbers.length === 1){ 
        return numbers[0];
    }else{
    let addedNumbers = numbers.reduce((sum, current) => parseInt(sum) / parseInt(current));
    outputLocation.textContent = addedNumbers;
    }    
};

function clear(){ 
    numbers.value = "";
}

const numberBtn = document.querySelectorAll(".calc-ui-button");
const calcScreen = document.querySelector("#userInput");

numberBtn.forEach(btn => {
    btn.addEventListener("click", () => { 
        const btnNumber = btn.textContent;
        calcScreen.value = [calcScreen.value + btnNumber];
    })
});