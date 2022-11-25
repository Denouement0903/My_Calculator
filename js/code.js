// output
// collect and store user input
let output = document.querySelector("#outputBox");


// actions for functions
function operation(anyNumber) {
    // increment button value into output box
    output.value = output.value + anyNumber; 
}



// final equal result
function finalResult() {
    // exception handling for invalid input
    try{
        output.value=eval(output.value)
    }
    // error is a built in argument
    catch(error){
        output.value = ("Error!");
    }
}

// to clear box
function clr(){
    output.value="";
}

function del(){
    // array method~slice(start,end)
    output.value=output.value.slice(0,-1);
}


// for operators

// let array = [];

// function operator(anyValue) {
//     if (output.value == ".") {
//         // output.value = "";
//         output.value = output.value + anyValue; 
        
//     } else {
//         output.value=eval(output.value)
//     }
// }


// output.value = output.value + anyValue;
// array.push('+', ".")
// if (array.includes("+" || ".")) {
    // output.value=eval(output.value)
// } else {
    // output.value = "";

// }

// if (output.value == "++" || output.value == "--" || output.value == "**" ||
// output.value == "//" || output.value == "%%" || output.value == ".." || output.value == (anyValue +"+" )) {
    
// } else {
// }