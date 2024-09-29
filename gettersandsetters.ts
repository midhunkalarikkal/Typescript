class Gsperson{
    private _age : number;
    private _fname : string;
    private _lname : string;

    constructor(age : number , fname : string , lname : string){
        this._age = age
        this._fname = fname
        this._lname = lname
    }

    public get age(){
        return this._age;
    }

    public set age(theAge : number){
        if(theAge <= 0 || theAge >= 100){
            throw new Error("Error")
        }
        this._age = theAge;
    }

    public getFullName() : string {
        return `"Hi" ${this._fname} ${this._lname}`
    }
}
const newPerson = new Gsperson(21 , "Midhun" , "Paniker")
console.log(newPerson)
newPerson.age = 10
console.log(newPerson)
// newPerson.age = 0  // Make an error becaus eof set function
// console.log(newPerson)