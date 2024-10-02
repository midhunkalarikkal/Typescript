/*
 23. Write an object oriented program to store and display the values of a 2D array
Program should contains 3 functions including the main function
main()
Declare an array
Call function getArray()
Call function displayArray()
		getArray()
Get values to the array
		displayArray()
Display the array values
Eg:
Enter the size of array
3
Enter the array values
1	2	3
4	5	6
7	8	9
Array elements are:
1	2	3
4	5	6
7	8	9

*/

import {prompt} from './input'

class TwoDArray{
    private array : number[][] = []

    constructor(){
        this.array = []
    }

    public getArray(size : number) : void{
        for(let i = 0; i < size; i++){
            const row : number[] = []
            for(let j = 0; j < size; j++){
                const el : number = Number(prompt(`Enter the ${i} ${j} the element : `))
                row.push(el)
            }
            this.array.push(row)
        }
    }

    public display() : void{
        console.log("The array you entered")
        for(const row of this.array){
            console.log(row.join("\t"))
        }
    }
}

function main(){
    const size : number = Number(prompt("Enter the array size : "))
    const arr = new TwoDArray()
    arr.getArray(size)
    arr.display()
}

main()