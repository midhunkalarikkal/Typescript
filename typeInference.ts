// Example one
// ------------

// In this case the type script infers number type for the parameter and return tpe based on its default value
// function increment(max = 100){
//     return max
// }

// Like this
// function increment (max : number = 100) : number  {
//     return max
// }

// console.log(increment(1))


// Example two best common type
// -----------------------------

// To infer the type of items variable, TypeScript needs to consider the type of each element in the array.
  
// let items = [1,2,3,null]

// For this case typescript will use number[] type
// And if we add string to the items array
// typescript will change the array type to (number | string)[] type

// let items = [1,0,null,"hi"]

// When TypeScript cannot find the best common type, it returns the union array



