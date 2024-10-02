class PersonTwo {
    private _age: number;
  
    constructor(age: number) {
      this._age = age;
    }
  
    get age(): number {
      return this._age;
    }
  
    set age(newAge: number) {
      if (newAge >= 0) {
        this._age = newAge;
      } else {
        console.log("Invalid age");
      }
    }
  }
  
  const p = new PersonTwo(30);

  console.log(`Age: ${p.age}`);  // calls get
  
  p.age = 28;  // calls set
  
  console.log(`Updated Age: ${p.age}`);
  
  p.age = -5;
  