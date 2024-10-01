/*
 15. Write a program to accept an array and display it on the console using functions
Program should contain 3 functions including main() function
main()
Declare an array
Call function getArray()
Call function displayArray()
		getArray()
Get values to the array
		displayArray()
Display the array values

*/

import {prompt} from './input'

function getArray(size : number) : number[]{
    const arr : number[] = []

    for(let i = 1; i <= size; i++){
        const value : number = Number(prompt("Enter the array element : "))
        arr.push(value)
    }
    return arr
}

function display(arr : number []) : void{
    console.log("Displaying the array")
    console.log(arr)
}

function main(){
    const input : string = prompt("Enter the array size : ")
    const size : number = Number(input)
    const arr : number[] = getArray(size)
    display(arr)
}

main()

