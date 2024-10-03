interface UtilityUser{
    name : string;
    age : number;
    id : number;
    place: string;
}

//  Partial<T>
let person1 : Partial<UtilityUser> = {
    name : "john"
}

//  Required<T>
let Person2 : Required<UtilityUser> = {
    name : "john",
    age : 1,
    id : 1,
    place: "usa"
}

// Readonly
let person3 : Readonly<UtilityUser> = {
    name : "john",
    age : 1,
    id : 1,
    place: "usa"
}
// p3.name = "Doo"; // Issue an error because of the readonly


//  Pick<t,k>
let person4 : Pick<UtilityUser , "name" | "age"> = {
    name : "John",
    age : 1
}

// Omit<T,K>
let person5 : Omit<UtilityUser, "place"> = {
    name : "john",
    age : 1,
    id : 1
}

// Extract<T,U>
type Union = string  | number | boolean
type newType = Extract<Union , string | number>
let a : newType = "john"
 a  = 1

 // Exclude<T,U>
 type UnionTwo = string | number | boolean
 type newTypeTwo = Exclude<UnionTwo, string>

 let b : newTypeTwo = true
 b = 1

 //Nullable
 type UnionThree = string | null | undefined
 type newTypeThree = NonNullable<UnionThree>
 let c : newTypeThree = "hojn"

 // ReturnType<T>
 function getUser(){
    return {name : "John" , age : 30}
 }

 type RTUser = ReturnType<typeof getUser>

 // Parameter<T>
 function greet(name : string, age : number) : string {
    return `Hello ${name} your age is ${age}`
 }

 type greetParameters = Parameters<typeof greet>

 // ConstructorPParameters<T>
 class  Person6{
    constructor(name : string, age : number){}
 }

 type Person6ConstructorParameters = ConstructorParameters<typeof Person6>

// Record<K,T>
const role : Record<string, number> = {
    admin : 1, 
    user : 2, 
    guest : 3
}