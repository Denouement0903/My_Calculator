let output = document.querySelector("#output");
// output operation for buttons
function operation(anyValue) {
    // increment button values to output field
    output.value = output.value + anyValue;
}
// equal
function result() {
    try {
        output.value = eval(output.value);
    }
    catch(error) {
        alert("Does not compute!")
    }
}
// slice is an array method
function del() {
    output.value = output.value.slice(0,-1);
}
// to clear
function clr() {
    output.value = "";
}

