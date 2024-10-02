/*
 22. Write a program to add the values of two 2D arrays
Program should contains 3 functions including the main function
main()
Call function getArray()
Call function addArray()
Call function displayArray()
		getArray()
Get values to the array
		getArray()
Add array 1 and array 2
		displayArray()
Display the array values

Eg:
Enter the size of array
2
Enter the values of array 1
1	2
3	4
Enter the values of array 2
5	6
7	8
Output:
Sum of array 1 and array 2:
6	8
10	12

*/

import {prompt} from './input'

function getArray(size : number) : number[][] {
    const arr : number[][] = []
    for(let i = 0; i < size; i++){
        let row : number[] = []
        for(let j = 0; j < size; j++){
            const el : number = Number(prompt(`Enter the ${i} ${j} th element : `))
            row.push(el)
        }
        arr.push(row)
    }
    return arr
}

function addArray(arr1 : number[][], arr2 : number[][]) : number[][] {
    let size = arr1.length
    const sumArr : number[][] = []

    for(let i = 0; i < size; i++){
        const row : number[] = []
        for(let j = 0; j < size; j++){
            row.push(arr1[i][j] + arr2[i][j])
        }
        sumArr.push(row)
    }
    return sumArr
}

function displayArray(arr : number[][]){
    console.log("Result array")
    for (const row of arr) {
        console.log(row.join("\t"));
    }
}

function main(){
    const size : number = Number(prompt("Enter the size of the array : "))

    console.log("Enter the elements for the first array")
    const arr1 : number[][] = getArray(size)
    console.log("Enter the elements for the second array")
    const arr2 : number[][] = getArray(size)

    const sumArr : number[][] = addArray(arr1,arr2)

    displayArray(sumArr)
}

main()