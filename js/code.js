// output
// collect and store user input
let output = document.querySelector("#outputBox");
// let comma = true;

// let array = [];
// output.value = output.value + anyNumber;
// array.push(output.value)
// if (array.includes(".")) {
//     output.value = "";
//     } else {
//     output.value=eval(output.value)
// }

// actions for functions
function operation(anyNumber) {
    // increment button value into output box
    ((output.value === "."
    ) ? (output.value = "") : output.value += anyNumber)
    // output.value += anyNumber;
}

// final equal result
function finalResult() {
    // exception handling for invalid input
    try{
        output.value=eval(output.value).toFixed(2)
    }
    // error is a built in argument
    catch(error){
        output.value = ("Error!");
    }
}

// to clear box
function clr(){
    output.value="";
    // comma = true;
}

function del(){
    // array method~slice(start,end)
    output.value=output.value.slice(0,-1);
    // comma = true;
}



// if (output.value === ".") {
//     output.value = "";

// } else {
//     output.value += anyNumber;

// }




// for operators

// let array = [];

// function operator(anyValue) {
//     if (output.value == ".") {
//         output.value = "";
//         output.value = output.value + anyValue; 
        
//     } else {
//         output.value=eval(output.value)
//     }
// }


