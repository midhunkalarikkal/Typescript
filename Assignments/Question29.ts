/*
29.  Write a myFilter function that takes 2 parameters: myArray and callback. 
Here, myArray is an array of numbers and callback is a function that takes t
he elements of myArray as its parameter and returns a boolean true if the sum of the number is even or   
false if the sum of the number  is odd.

The myFilter function should return the sum of the array.

Sample Input
        12345
Sample Output
        15

*/

function my_filter(myArray : number[], callback : (sum : number) => boolean): number{

    const sum = myArray.reduce((acc,cv) => acc+cv,0)

    const result = callback(sum)

    console.log(result ? "The sum is even" : "The sum is odd");

    return sum

}

function isEvenSum(sum : number) : boolean {
    return sum % 2 === 0;
}

const myArray = [1,2,3,4,5]

my_filter(myArray,isEvenSum)