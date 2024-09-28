// Object
// ---------

let employee : object;

employee = {
    name : "emp-name",
    age : 22,
    jobTittle : "dev"
}

console.log("employee object : ",employee)

// Explicitly specifying properties
// -----------------------------------

let worker : {
    name : string,
    age : number,
    mobile : number,
    place : string
}

worker = {
    name : "Midhun",
    age : 22,
    mobile : 8787656543,
    place : "ktpm"
}

console.log("worker : ",worker)

// Empty type object
// -------------------

let emptyOb : {};
// console.log(emptyOb.name)  --error


// Object type
// --------------

// But you can access all properties and me
// thods declared on the Object type, which is available on the object via the prototype chain

let obtype : {} = {} ;
console.log(obtype.toString())