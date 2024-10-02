/*
 17. Write a menu driven program to do the basic mathematical operations such as addition, subtraction, multiplication and division (hint: use if else ladder or switch)
Program should have 4 functions named addition(), subtraction(), multiplication() and division()
Should create a class object and call the appropriate function as user prefers in the main function

*/

import {prompt} from './input'

console.log("Operations")
console.log("------------")
console.log("1. Addition")
console.log("2. Subtraction")
console.log("3. Multiplication")
console.log("4. Division")

const op : number = Number(prompt("Enter a option number : "))
const num1 : number = Number(prompt("Enter the first number : "))
const num2 : number = Number(prompt("Enter the second number : "))
let result : number = 0

switch(op){
    case 1 :
        result = num1 + num2
        console.log(`The Addition result is ${result}`)
        break
    case 2 :
        result = num1 - num2
        console.log(`The Subtraction result is ${result}`)
        break
    case 3 :
        result = num1 * num2
        console.log(`The Multiplication result is ${result}`)
        break
    case 4 :
        result = num1 / num2
        console.log(`The Division result is ${result}`)
        break
    default :
        console.log("Enter a valid number.")
}