/*
 21. Write a program to multiply the adjacent values of an array and store it in an another array
Program should accept an array
Multiply the adjacent values
Store the result into another array
Eg:
Enter the array limit
5
Enter the values of array
1	2	3	4	5
Output
2	6	12	20

*/

import {prompt} from './input'

const size : number = Number(prompt("Enter the array size : "))
const arr : number[] = new Array()
const resArr : number[] = new Array()
for(let i = 1; i <= size; i++){
    const el : number = Number(prompt(`Enter the ${i} th element for the array :  `))
    arr.push(el)
}
for (let i = 0; i < size - 1; i++) {
    resArr.push(arr[i] * arr[i + 1]);
}
console.log("The array you entered : ",arr)
console.log("The result array : ",resArr)