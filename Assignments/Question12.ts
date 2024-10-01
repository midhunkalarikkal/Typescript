/*
 12. Write a program to sort an array in descending order
Program should accept and array, sort the array values in descending order and display it
Eg: Output: Enter the size of an array
Input: 5
Output: Enter the values of array
Input: 20, 10, 50, 30, 40
Output: Sorted array:
50, 40, 30, 20, 10

*/

import {prompt} from './input'

const input : string = prompt("Enter the array size : ")
const size : number = Number(input)

const Arr : number[] = []

for(let i = 1; i <= size; i++){
    const el : string = prompt(`Enter the ${i} th element : `)
    const num : number = Number(el)
    if(Arr.length === 0){
        Arr.push(num)
    }else{
        let inserted : boolean = false
        for(let j = 0; j < Arr.length; j++){
            if(num < Arr[j]){
                Arr.splice(j,0,num)
                inserted = true
                break
            }
        }
        if(!inserted){
            Arr.push(num)
        }
    }
}

console.log("Array : ",Arr)