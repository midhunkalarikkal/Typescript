/*
   5. Write a program to show the grade obtained by a student after he/she enters their total mark percentage.

    Program should accept an input from the user and display their grade as follows

     Marks and Grades
   ----------------------
   | Mark      | Grade  |
   ----------------------
   | > 90      | A      |
   | 80 - 89   | B      |
   | 70 - 79   | C      |
   | 60 - 69   | D      |
   | 50 - 59   | E      |
   | < 50      | Failed |
   ----------------------

   Variables and Data Types
   --------------------------
   | Variable   | Data Type |
   --------------------------
   | Total mark | number     |
   ---------------------------

*/

import {prompt} from './input'

const input : string = prompt("Enter your total mark : ")
const totalMark : number = Number(input)

if(totalMark >= 90 && totalMark <= 100){
    console.log("Grade A")
}else if(totalMark >= 80 && totalMark <= 89){
    console.log("Grade B")
}else if(totalMark >= 70 && totalMark <= 79){
    console.log("Grade C")
}else if(totalMark >= 60 && totalMark <= 69){
    console.log("Grade D")
}else if(totalMark >= 50 && totalMark <= 59){
    console.log("Grade E")
}else if(totalMark < 50){
    console.log("Failed")
}else{
    console.log("Enter a valid mark.")
}


