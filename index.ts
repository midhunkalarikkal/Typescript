// EXAMPLE ONE FOR THE HTML DOCUMENT
// =================================

// let message : string = "Hello world"
// let heading = document.createElement('h1')
// heading.textContent = message
// document.body.appendChild(heading)

// EXAMPLE TWO INTERFACE
//======================

// interface Product{
//     id : number, 
//     name : string,
//     price : number
// };

// function getProduct(id : number) : Product{
//     return {
//         id : id,
//         name : `Awesome Gadget ${id}`,
//         price : 99.5
//     }
// }

// const showProduct = (name : string, price : number)=>{
//     console.log(`The product ${name} cost ${price}`);
// }

// const product = getProduct(1)
// showProduct(product.name, product.price)


// EXAMPLE FOUR
// ===============
//Property doesnt exist for the heading, it will show an error

// const heading = document.querySelector('h1')
// heading?.removeAttribute()


// EXAMPLE FIVE OBJECT TYPE ANNOTATION
// ======================================

// let person : {
//     id : number;
//     name : string
// }

// person = {
//     id : 1, name : "midhun"
// }


// EXAMPLE SIX FUNCTION ARGUMENT AND RETURN TYPE
// ================================================

// let greeting : (name : string) => string;

// greeting = function(name : string) {
//     return `Hi ${name}`
// }

// console.log(greeting('midhun'))


// EXAMPLE SEVEN
// ================

// let message : (name : string, age : number) => string;

// message = function(name : string , age : number) {
//     return `Hi ${name} your entered age is ${age}`
// }

// console.log(message("midhun",24))