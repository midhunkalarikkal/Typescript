// Boolean
// -----------

let active : boolean;

active = false

console.log(active)


// Boolean operators
// --------------------

// NOT operator
let pending : boolean = true;
const notpending : boolean = !pending;

console.log("pending : ",pending)
console.log("not pending : ",notpending)

// AND operator
const hasError : boolean = true;
const completed : boolean = false

const andResult = hasError && completed;
console.log("And result : ",andResult)

// OR operator
const orResult = completed || hasError
console.log("OR result : ",orResult)