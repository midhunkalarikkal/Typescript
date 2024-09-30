/* 
3. Write a program to find the simple interest.
Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)

----------------------------------------
|       Variable         | Data Type   |
----------------------------------------
|  Principal amount (P)  |   number    |
|  Interest rate (R)     |   number    |
|  Number of years (n)   |   number    |
|  Simple Interest (SI)  |   number    |
----------------------------------------

*/

import {prompt} from './input'

const principalAmount : string = prompt("Enter the principal amount : ");
const interestRate : string = prompt("Enter the interest Rate : ")
const noOfYears : string = prompt("Enter the number of years : ")

const P : number = Number(principalAmount)
const R : number = Number(interestRate)
const n : number = Number(noOfYears)

const SI : number = ((P*R*n) / 100)
console.log(`The simple interest for the principal amount ${P} with interest rate ${R} for the ${n} years is ${SI}.`)
