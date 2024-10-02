/*
      27. Given a variable named my_height, you must throw errors under the following conditions:
notANumberError- When my_heightis NaN
HugeHeightError – When my_heightis greater than
TinyHeight Error - When my_heightis less than
          Eg: 
             a) Sample Input 0
                       seven
             Sample Output 0
                       notANumberError
             b) Sample Input 1
                        77
             Sample Output 1
                        hugeHeightError
             c) Sample Input 2
                        0
             Sample Output 2
                        tinyHeightError
             d) Sample Input 3

                        8
              
              Sample Output 3
              
                        8

*/

import { prompt } from './input'

const my_height: number = Number(prompt("Enter the height : "))

try {

    if (isNaN(my_height)) {
        throw "notANumberError";
    }

    if (my_height > 10) {
        throw "hugeHeightError";
    }

    if (my_height <= 0) {
        throw "tinyHeightError";
    }

    console.log(my_height);
} catch (error) {
    console.log(error);
}