let btn = document.getElementsByClassName("btn");
let display = document.getElementsByClassName("display")[0];
// console.log(btn);
let displayValue = "";

let clrr = (displayValue) => {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    return displayValue;
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
    
        if (btn[i].value == "a/c") {
            displayValue = "";
            display.innerHTML = "";
        }
        else if (btn[i].value == "=") {
            evaluatee = (displayValue) => {
                // console.log(displayValue);
                display.innerHTML = eval(displayValue);
                // return displayValue;
            }
            evaluatee(displayValue);
            // displayValue = eval(displayValue);
            // console.log(typeof displayValue);
            displayValue = ""+eval(displayValue);
            // console.log(typeof displayValue);
            // console.log(displayValue);
        }
        else if (btn[i].value == "clr") {
            // console.log(displayValue);
            displayValue = clrr(displayValue);
            display.innerHTML = displayValue;
        }
        else {
            displayValue += btn[i].value;
            display.innerHTML = displayValue;
        }
    })
}
console.log(displayValue);