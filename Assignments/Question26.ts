/*
 26. Given a variable named my_string, try reversing the string using  my_string.split().reverse().
 join() and then print the reversed string to the console. If the try clause has an error, print the
error message to the console. Finally, print the typeof of the my_string variable to the console.
Output format:

The statement to print in the tryblock is:
Reversed string is : ${my_string}
The statement to print in the catchblock is:
Error : ${err.message}
The statement to print in the finally block is:
Type of my_string is : ${typeof my_string}

Eg: 
    a) Sample Input 0
    "1234"
    Sample Output 0
    Reversed string is : 4321
    Type of my_string is : string

    b) Sample Input 1
    Number(1234)
    Sample Output 1
    Error : my_string.split is not a function
    Type of my_string is : number


*/

import {prompt} from './input'

const my_string : any = prompt("Enter a string : ")
let rev : string = ''
try{
    rev += my_string.split('').reverse().join('')
    console.log(`Reversed string is : ${rev}`);
}catch(error){
    console.log(error)
}finally{
    console.log(`Type of my_string is : ${typeof my_string}`);
}