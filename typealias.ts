//  Type alias
// ---------------

// The following example uses the type alias chars for the string type:
type name = string;

let firstName: name;
let lastName: name;

// Object types
type person = {
    name: string,
    age: number
}

let personOne: person = {
    name: "Midhun",
    age: 1
}

console.log("personOne : ",personOne)


// Union type
type alphanumeric = string | number;

let input: alphanumeric;
input = 1
console.log(input)
input = "Hi"
console.log(input)

// Intersection type
type personal = {
    name: string,
    age: number
}

type Concat = {
    email: string,
    phone: string
}

type candidate = personal & Concat

let candidateOne: candidate = {
    name: "Joe",
    age: 25,
    email: "joe@example.com",
    phone: "(408)-123-4567"
}


console.log("candidateOne : ",candidateOne)