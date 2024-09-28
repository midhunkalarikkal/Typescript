//  Type union
// ---------------

function add(a : number | string , b : number |string) : number | string {
    if(typeof a === "number" && typeof b === "number"){
        return a+b;
    }
    if(typeof a === "string" && typeof b === "string"){
        return a.concat(b)
    }
    throw new Error("parameter must be number or string")
}

console.log(add(1,2))
console.log(add("midhun","paniker"))
// console.log(add("midhun",1))  // this will make an error