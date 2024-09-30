/**
4. Write a program to check whether a student has passed or failed in a subject after he    
or she enters their mark (pass mark for a subject is 50 out of 100).

Program should accept an input from the user and output a message as “Passed” or “Failed”

------------------------
| Variable | Data type |
------------------------
| mark     | number    | 
------------------------

 */

import {prompt} from './input'

const input : string = prompt("Enter your marks : ")

const mark : number = Number(input)

if(mark > 0 && mark < 101){
    if(mark < 50){
        console.log("You haad failed.")
    }else{
        console.log("Congratulations, You have passed.")
    }
}else{
    console.log("Enter a valid mark!")
}