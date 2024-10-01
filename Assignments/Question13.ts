/*
 13. Write a program to identify whether a string is a palindrome or not
A string is a palindrome if it reads the same backward or forward eg: MALAYALAM
Program should accept a string and display whether the string is a palindrome or not
Eg: Output: Enter a string
Input: MALAYALAM
Output: Entered string is a palindrome
Eg 2: Output: Enter a string
Input: HELLO
Output: Entered string is not a palindrome

*/

import {prompt} from './input'

const input : string = prompt("Enter a string : ")

let str = input.toLowerCase()
let rev : string = str.split("").reverse().join("")

if(str !== rev){
    console.log("Not a palindrom.")
}else{
    console.log("Its a palindrom.")
}