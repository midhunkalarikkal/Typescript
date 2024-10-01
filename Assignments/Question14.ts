/*
  14. Write a program to add to two dimensional arrays
Program should accept two 2D arrays and display its sum
Eg: Output: Enter the size of arrays
Input: 3
Output: Enter the values of array 1
Input: 
1 2 3
4 5 6
7 8 9
Output: Enter the values of array 2
Input:
10 20 30
40 50 60
70 80 90
Output: Sum of 2 arrays is:
11 22 33
44 55 66
77 88 99
*/

import { prompt } from './input'

const input: string = prompt("Enter the size of the array : ")
const size: number = Number(input)

let Arr1: number[][] = []
let Arr2: number[][] = []
let sumArr: number[][] = []

for (let i = 1; i <= size; i++) {
    sumArr.push(new Array(size).fill(0))
}

console.log("Enter the values for Array 1:");
for (let j = 1; j <= size; j++) {
    let temp: number[] = [];
    for (let k = 1; k <= size; k++) {
        let el: string = prompt(`Enter the ${j} ${k} th element for the ${j} th Array : `)
        let num: number = Number(el)
        temp.push(num)
    }
    Arr1.push(temp)
}

console.log("Enter the values for Array 2:");
for (let i = 0; i < size; i++) {
    let temp: number[] = [];
    for (let j = 0; j < size; j++) {
        let el: string = prompt(`Enter the element [${i + 1}, ${j + 1}] for Array 2: `);
        let num: number = Number(el);
        temp.push(num);
        sumArr[i][j] = Arr1[i][j] + num;
    }
    Arr2.push(temp);
}

console.log("Array1 : ", Arr1)
console.log("Array2 : ", Arr2)
console.log("Sum Array : ", sumArr)
