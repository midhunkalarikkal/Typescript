// In this example, the headcount is a static property that is initialized to zero.
// Its value is increased by 1 whenever a new object is created.

class Emp {
    static headCount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string 
    ) {
        Emp.headCount++;
    }
}

let john = new Emp('John', 'Doe', 'Front-end Developer');
let jane = new Emp('Jane', 'Doe', 'Back-end Developer');

console.log(Emp.headCount);  // Outputs: 2
