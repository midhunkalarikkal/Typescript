// 1. Accept a char input from the user and display it on the console.

import { prompt } from './input';

const inputChar : string = prompt("Enter a character : ");

if(typeof inputChar !== "string" || inputChar.length !== 1 || !/^[a-zA-Z]$/.test(inputChar)){
    throw new Error("Enter a valid character!")
}else{
    console.log(`You entered the character : ${inputChar}`);
}
