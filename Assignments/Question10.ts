/*
  10. Write a program to interchange the values of two arrays.

Program should accept an array from the user, swap the values of two arrays and display it on the console
Eg: Output: Enter the size of arrays
Input: 5
Output: Enter the values of Array 1
Input: 10, 20, 30, 40, 50
Output: Enter the values of Array 2
Input: 15, 25, 35, 45, 55
Output: Arrays after swapping:
Array1: 15, 25, 35, 45, 55
Array2: 10, 20, 30, 40, 50

*/

import {prompt} from './input'

const input : string = prompt("Enter the array size : ")

const size : number = Number(input)

let Arr1 : number[] = [];
let Arr2 : number[] = [];

for(let i = 1; i <= 2; i++){
    for(let j = 1; j <= size; j++){
        const el : string = prompt(`Enter the ${j}th element for the Array ${i} : `)
        if(i == 1){
            Arr1.push(Number(el))
        }else{
            Arr2.push(Number(el))
        }
    }
}

console.log("Array you entered")
console.log("Array 1 : ",Arr1)
console.log("Array 2 : ",Arr2)
console.log("Swapping")
let temp: number[] = Arr1;
Arr1 = Arr2;
Arr2 = temp;console.log("Array 1 : ",Arr1)
console.log("Array 2 : ",Arr2)
