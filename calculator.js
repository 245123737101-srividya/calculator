// Basic Calculator in JavaScript

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

let result;

if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers");
} else {
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Division by zero is not allowed");
                result = null;
            }
            break;
        default:
            alert("Invalid operator");
            result = null;
    }

    if (result !== null) {
        alert("Result: " + result);
        console.log("Result:", result);
    }
}
