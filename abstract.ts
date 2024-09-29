abstract class Employ{
    constructor(private firstName: string, private lastName: string) {}
    abstract getSalary(): number;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

class FullTimeEmployee extends Employ {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}


// he constructor declares the firstName and lastName properties.
// The getSalary() method is an abstract method. The derived class will implement the logic based on the type of employee.
// The getFullName() and compensationStatement() methods contain detailed implementation. Note that the compensationStatement() method calls the getSalary() method.
// Because the Employee class is abstract, you cannot create a new object from it. The following statement causes an error: