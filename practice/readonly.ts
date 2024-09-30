class Child{
    readonly birthDate : Date;

    constructor(birthDate : Date){
        this.birthDate = birthDate
    }
}

const chOne = new Child(new Date(1999 , 12 , 13))
console.log(chOne.birthDate)
// chOne.birthDate = new Date(1999 , 10 , 2) // Make an error because of readonly modifier

// Sample class implementation with readonly in the constructor
// class Child{
//     constructor(readonly birthDate : Date){

//     }
// }