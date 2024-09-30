class Person{
    ssn : string;  
    firstName : string;
    lastName : string

    constructor(ssn : string , firstName : string , lastName : string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName
    }

    getFullname(){
        return `Hi ${this.firstName} ${this.lastName}`
    }
}

const p1 = new Person("123","Midhun K" , "Paniker")
console.log(p1.getFullname())

// Another implementation for the above class
class PersonOne {
    constructor(
        public ssn: string, 
        public firstName: string, 
        public lastName: string
    ) {}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Private modifier
// -------------------

class PersonPr{
    private ssn : string;
    private firstName : string;
    private lastName : string;

    constructor(ssn : string , firstName : string , lastName : string){
        this.ssn = ssn;
        this.firstName  = firstName;
        this.lastName = lastName
    }

    getFullName(){
        return `"Hi" ${this.firstName} ${this.lastName}`
    }
}

const prone = new PersonPr("123-111","Midhun", "Paniker")
// console.log(prone.ssn) // only accessible within the class
console.log(prone.getFullName())

// Public modifier
// --------------------

// for example by default the getFullName() method in the Personpr class

class Personpu{
    public ssn : string;
    public fname : string;
    public lname : string;

    constructor(ssn : string , fname : string , lname : string){
        this.ssn = ssn
        this.fname = fname
        this.lname = lname
    }

    public getFullName(){
        return `"Hi" ${this.fname} ${this.lname}`
    }
}

// Protected
// -------------

class Personprotec{
    protected ssn : string;
    protected fname : string;
    protected lname : string;

    constructor(ssn : string , fname : string , lname : string){
        this.ssn = ssn
        this.fname = fname
        this.lname = lname
    }

    protected getFullName(){
        return `"Hi" ${this.fname} ${this.lname}`
    }
}