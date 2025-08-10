function add(num1 , num2){
    result = num1 + num2;
    return result;
}
function sub(num1 , num2){
    result = num1 - num2;
    return result;
}
function mul(num1 , num2){
    result = num1 * num2;
    return result;
}
function div(num1 , num2){
    result = num1 / num2;
    return result;
}


function calculator(a ,b , operation) {
    if (operation === "addition") {
        return add(a, b)
    } 
    else if (operation === "subtraction") {
        return sub(a, b)
    }
    else if (operation === "muliply") {
        return mul(a, b)
    }
    else if (operation === "divide") {
        return div(a, b)
    }
    else {
        return "This method is not valid"
    }
}

const res = calculator(88, 11, "divide");

console.log(res);