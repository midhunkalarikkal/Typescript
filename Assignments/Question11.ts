/* 
 11. Write a program to find the number of even numbers in an array
Program should accept an array and display the number of even numbers contained in that array
Eg: Output: Enter the size of an array
Input: 5
Output: Enter the values of array
Input: 11, 20, 34, 50, 33
Output: Number of even numbers in the given array is 3

*/

import {prompt} from './input'

const input : string = prompt("Enter the array size : ")
const size : number = Number(input)

const Arr : number[] = []
let count : number = 0

for(let i = 1; i <= size; i++){
    const el : string = prompt(`Enter the ${i} th element : `)
    Arr.push(Number(el))
    if(Number(el) % 2 === 0){
        count++
    }
}

console.log("The array you entered : ",Arr)
console.log("Count of even elements in the array : ",count)