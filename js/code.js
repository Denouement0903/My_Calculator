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
        default:
            array.push(anyValue);
            output.value += anyValue;

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