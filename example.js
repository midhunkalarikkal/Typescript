// EXAMPLE ONE
// ===============

// function getProduct(id) {
//     return {
//         id: id,
//         name: `Awesome Gadget ${id}`,
//         price: 99.5
//     }
// }

// console.log(`The product ${product.Name} cost ${product.price}`)

// In this the name is called as Name the error we will get only in the runtime as undefined 


// EXAMPLE TWO
// =============

// function getProduct(id) {
//     return {
//         id: id,
//         name: `Awesome Gadget ${id}`,
//         price: 99.5
//     }
// }
// const showProduct = (name, price) => {
//     console.log(`The product ${name} costs $${price}.`)
// }

// const product = getProduct(1);
// showProduct(product.price, product.name)

// This time we pass the arguments in the wrong order to the showProduct function, it will work bu it print in the wrong order