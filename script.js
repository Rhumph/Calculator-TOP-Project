function inputNumbers(){}

function add(numbers){

    let outputLocation = document.querySelector(".test-output");

    if (numbers.length === 1){ 
        return numbers[0];
    }else{
    let addedNumbers = numbers.reduce((sum, current) => sum + current);
    outputLocation.textContent = addedNumbers;
    }

    
};

function subtract(numbers){

    let outputLocation = document.querySelector(".test-output");

    if (numbers.length === 1){ 
        return numbers[0];
    }else{
    let addedNumbers = numbers.reduce((sum, current) => sum - current);
    outputLocation.textContent = addedNumbers;
    }

    
};

function multiply(numbers){

    let outputLocation = document.querySelector(".test-output");

    if (numbers.length === 1){ 
        return numbers[0];
    }else{
    let addedNumbers = numbers.reduce((sum, current) => sum * current);
    outputLocation.textContent = addedNumbers;
    }

    
};

function divide(numbers){

    let outputLocation = document.querySelector(".test-output");

    if (numbers.length === 1){ 
        return numbers[0];
    }else{
    let addedNumbers = numbers.reduce((sum, current) => sum / current);
    outputLocation.textContent = addedNumbers;
    }

    
};

// console.log(add(numbers));
