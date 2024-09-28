function sample(a: number, b : string) : void{
    console.log("number : ",a)
    console.log("string : ",b)
}

sample(1,"midhun")
// sample("hi",10)  // make an error because of the parameter order change

function sum(a : number, b : number ) : number {
    return a + b
}

console.log(sum(1,2))

// Function type
let addnum = function(a : number , b : number) : number{
    return a + b
}

let sumnum : (a : number , b : number) =>  number = function(x : number , y : number ) {
    return x + y
}

//  in this the funtion is assigning to a variable
// and the function type is 
// : (a : number , b : number)  => number;
// let sumnum is the variable
// and the rest is the function that assigned to the variable

// Optional parameter

function opparameter(a : number , b : number , c ? : number) : number {
    if(c !== undefined){
        return a * b * c
    }
    return a * b
}

console.log(opparameter(1,2,3))
console.log(opparameter(1,2))

// Default parameter
function dp( a : number , b : number = 2) : number {
    return  a * b
}
console.log(dp(1))

// Default parameter in the first position

function dpfp( a : number = 4, b : number ) : number {
    return a * b
}
console.log(dpfp(undefined , 1))

// let dpnew : (a : number , b : number = 2 ) => number = function( i : number , j : number ) : number {
//     return i * j
// }
// Make an error because the default parameter cannot include in function type definitions