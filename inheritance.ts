class Personp {
    constructor(private firstName: string, private lastName: string) {}
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
      return `This is ${this.firstName} ${this.lastName}.`;
    }
  }

  class Employee extends Personp {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {

        super(firstName, lastName);
    }

    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
  }

  let emp = new Employee('John', 'Doe', 'Web Developer');
  console.log(emp.describe());
  