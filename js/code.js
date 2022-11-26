// output
// collect and store user input
let output = document.querySelector("#outputBox");
let array = [];

// adding button values to input field 
function operation(anyValue) {
    switch(anyValue) {
        case ".":
            if (!array.includes('.') ) {
                output.value += anyValue;
                array.push(anyValue);
                console.log(array);
            }
            break;
        case "+":
        case "%":
        case "/":
        case "-":
        case "*":
            if (!output.value.endsWith(anyValue)){
                output.value += anyValue;
                array = [];
                break;
            } 
            // (!output.value.endsWith(anyValue) ? (output.value += anyValue, array = []) : output.value = output.value)
        default:
            array.push(anyValue);
            output.value += anyValue;
            console.log(array)

    }
}

// final equal result
function finalResult() {
    // exception handling for invalid input
    try{
        output.value=eval(output.value).toFixed(2)
    }
    // error is a built in argument
    catch(error){
        output.value = "";
    }
}

// to clear box
function clr(){
    output.value="";
    array = [];
}

function del(){
    // array method~slice(start,end)
    output.value=output.value.slice(0,-1);
    array.pop()
}

//checks if output value is not null
// if(output.value){
    //checks if pressed operation is a dot and if a dot is already there. If so, will quit the function using return
//     if(output.value.includes('.') && anyValue=='.'){
//         if(output.value.includes('+')){
//             output.value += anyValue; 
//         };
//         return;
//     }
// }
// output.value += anyValue;


// output.value += anyValue;
// increment button value into output box
// ((output.value === "."
// ) ? (output.value = "") : output.value += anyValue)
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


// let array = [];
// output.value = output.value + anyNumber;
// array.push(output.value)
// if (array.includes(".")) {
//     output.value = "";
//     } else {
//     output.value=eval(output.value)
// }
