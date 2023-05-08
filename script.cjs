"use strict";
let btn = document.getElementsByClassName("btn");
let display = document.getElementsByClassName("display")[0];
// console.log(btn);
let displayValue = "";
let bb=true;

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
          let evaluatee = (displayValue) => {
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
        else if(btn[i].value == "more"){
            if(bb==true){
            btn[2].value="**0.5";
            btn[2].innerHTML=`<i class="fa-solid fa-square-root-variable fa-sm"></i>`;
            btn[3].value="3.14159";
            btn[3].innerText="π";
            btn[7].value="**0.333334";
            btn[7].innerText="∛";
            btn[11].value="**";
            btn[11].innerText="X^n";
            bb=false;
            }
            else{
                btn[2].value="+";
                btn[2].innerHTML=`<i class="fa-solid fa-plus"></i>`;
                btn[3].value="-";
                btn[3].innerHTML=`<i class="fa-solid fa-minus"></i>`;
                btn[7].value="*";
                btn[7].innerHTML=`<i class="fa-solid fa-xmark"></i>`;
                btn[11].value="/";
                btn[11].innerHTML=`<i class="fa-solid fa-divide"></i>`;
                bb=true;
            }

        }
        else {
            displayValue += btn[i].value;
            display.innerHTML = displayValue;
        }
    })
}
// console.log(displayValue);