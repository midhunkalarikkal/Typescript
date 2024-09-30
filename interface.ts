interface Person {
    readonly pssn : string;  // modify when only the first object is created
    fname: string;
    middlename ?: string;  // optional property
    lname: string;
  }
  
  function getFullName(person: Person) {
    return ` pssn is : ${person.pssn} and name is  ${person.fname} ${person.lname}`;
  }
  
  let jony = {
    pssn : "123",
    fname: "jony",
    lname: "doe",
  };
  
  console.log(getFullName(jony));
  

// To make code more concise
// function getFullname({fname , lname} : Person){
//     return `${this.fname} ${this.lname}`
// }

// Function type
// -----------------
interface stringFormat {
    (str : string , isUpper : boolean) : string
}

let format : stringFormat;

format = function (str : string , isUpper : boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase()
}

console.log(format("HI",true))

// Class types
// ---------------

interface json{
    toJson() : string;
}

class cp implements json{
    constructor(private fname : string, private lname : string) {}
    toJson() : string {
        return JSON.stringify({
            fname : this.fname,
            lname : this.lname
        })
    }
}

const cp1 = new cp("john","doe")
console.log(cp1.toJson())

// interface Extends interface
// ---------------------

interface Mailable{
    send(email: string): boolean
    queue(email: string): boolean
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}

// interface extends class
// ----------------------------

class Control {
    private state: boolean;
}

interface StatefulControl extends Control {
    enable(): void
}

class Button extends Control implements StatefulControl {
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control { }


// Error: cannot implement
class Chart implements StatefulControl {
    enable() { }

}