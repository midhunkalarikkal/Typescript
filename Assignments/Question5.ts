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
const totalMark : number = Math.floor(Number(input) / 10)

switch(totalMark){
    case 9 : 
        console.log("Grade A");
        break;
    case 8 : 
        console.log("Grade B");
        break;
    case 7 : 
        console.log("Grade C");
        break;
    case 6 : 
        console.log("Grade D");
        break;
    case 5 : 
        console.log("Grade E");
        break;
    default :
        console.log("Failed");
        break;
}
