/*
 16. Write a program to check whether a given number is prime or not
Program should accept an input from the user and display whether the number is prime or not
Eg: Output: Enter a number
Input: 7
Output: Entered number is a Prime number

*/


import {prompt} from './input'

const num : number = Number(prompt("Enter a number  : "))

let prime : boolean = true
if(num < 2){
    prime = false
}else{
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(i !== num){
            if( num % i === 0){
                prime = false
                break;
            }
        }
    }
}
if(prime){
    console.log(`${num} is a prime number.`)
}else{
    console.log(`${num} is not a prime number.`)
}