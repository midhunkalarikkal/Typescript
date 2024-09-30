/*
  6. Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows. 
-----------------------------------
|   Input         | Output        |
-----------------------------------
| 1               | Sunday        |
| 2               | Monday        |
| 3               | Tuesday       |
| 4               | Wednesday     |
| 5               | Thursday      |
| 6               | Friday        |
| 7               | Saturday      |
| Any other input | Invalid Entry |
-----------------------------------

*/

import {prompt} from './input'

const input : string = prompt("Enter a number between 1 and 7 : ")
const day : number = Number(input)

switch(day){
    case 1 :
        console.log("Sunday")
        break;
    case 2 :
        console.log("Monday")
        break;
    case 3 :
        console.log("Tuesday")
        break;
    case 4 :
        console.log("Wednesday")
        break;
    case 5 :
        console.log("Thursday")
        break;
    case 6 :
        console.log("Friday")
        break;
    case 7 :
        console.log("Saturday")
        break;
    default :
        console.log("Please enter a valid number between 1 and 7 ")
        break;
}