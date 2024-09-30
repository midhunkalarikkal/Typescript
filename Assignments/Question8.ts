/*
  8. Write a program to find the sum of all the odd numbers for a given limit

  Program should accept an input as limit from the user and display the sum of all the odd numbers within that limit
  For example if the input limit is 10 then the result is 1+3+5+7+9 = 25
  Output: Enter a limit
  Input: 10
  Output: Sum of odd numbers = 25 

*/

import {prompt} from './input'

const input : string = prompt("Enter a limit : ")
const limit : number = Number(input)

let sum : number = 0;
let i : number = 0;
for(i; i < limit; i++){
    if(i % 2 !== 0){
        sum += i
    }
}
console.log(`Sum of all odd numbers up to ${limit} = ${sum}`)