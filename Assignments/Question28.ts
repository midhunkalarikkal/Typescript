/*
  28. Create a constructor function that satisfies the following conditions:
The name of the constructor function should be Car.
It should take three parameters: name, mileage and max_speed.
Store these parameter values in their respective thiskeywords: this.name, this.mileage and this.max_speed.

*/

class Car{
    name : string;
    mileage : number;
    max_speed : number;

    constructor(name : string , mileage : number, max_speed : number){
        this.name = name
        this.mileage = mileage
        this.max_speed = max_speed
    }
}

const myCar = new Car('Tesla Model 3', 250, 162);
console.log(`Car: ${myCar.name}, Mileage: ${myCar.mileage} miles, Max Speed: ${myCar.max_speed} mph`);