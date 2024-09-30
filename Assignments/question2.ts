/* 2. Accept two inputs from the user and output their sum.

-------------------------------
|    Variable    | Data Type  |
-------------------------------
|    Number 1    |   number   |
|    Number 2    |   number   |
|       Sum      |   number   |
-------------------------------



*/

import {prompt} from './input'

const inputOne : string = prompt("Enter first number : ")

const inputTwo : string = prompt("Enter second number : ");

const n1 : number = Number(inputOne)
const n2 : number = Number(inputTwo)

const result : number = n1 + n2 

console.log(`The sum is : ${result}`)