/*
24. Write a menu driven program to calculate the area of a given object.
Program should contain two classes
Class 1: MyClass
Class 2: Area
Class MyClass should inherit class Area and should contain the following functions
main()
circle()
square()
rectangle()
triangle()
Class Area should contain the following functions to calculate the area of different objects
circle()
square()
rectangle()
triangle()
Class MyClass extends Area{
public static void main(string args[]){
}
circle() {
}
square() {
}
rectangle() {
}
triangle() {
}
}
Class Area{
circle(){
}
square(){
}
rectangle() {
}
triangle() {
}
}

Eg 1:
Enter your choice
Circle
Square
Rectangle
Triangle
2
Enter the length
2
Output
Area of the square is: 4 

Eg 2:
Enter your choice
Circle
Square
Rectangle
Triangle
1
Enter the radius
3
Output
Area of the circle is: 28.26

*/

import { prompt } from './input'

class Area {
    public circle(radius : number): number {
        return  3.14 * radius * radius
    }

    public square(length : number): number {
        return length * length
    }

    public rectangle(length: number, width: number): number {
        return length * width;
    }

    public triangle(base: number, height: number): number {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main() {
        console.log(`
            1. Circle
            2. Square
            3. Recatanlge
            4. Triangle
            `)
        const op: number = Number(prompt("Enter the option : "))

        switch (op) {
            case 1:
                this.circleInput()
                break
            case 2:
                this.squareInput()
                break
            case 3:
                this.rectangleInput()
                break
            case 4:
                this.triangleInput()
                break
            default:
                console.log("Enter a valid option number")
                this.main()
        }
    }

    private circleInput(): void {
        const radius : number = Number(prompt("Enter the radius : "))
        const area : number = this.circle(radius)
        console.log(`Area of the circle : ${area.toFixed(2)}`)
    }

    squareInput() {
        const length : number = Number(prompt("Enter the length of side : "))
        const area = this.square(length)
        console.log(`Area of the square ${area}`)
    }

    private rectangleInput(): void {
        const length: number = Number(prompt("Enter the length: "));
        const width: number = Number(prompt("Enter the width: "));
        const area = this.rectangle(length, width);
        console.log(`Area of the rectangle is: ${area.toFixed(2)}`);
    }

    private triangleInput(): void {
        const base: number = Number(prompt("Enter the base: "));
        const height: number = Number(prompt("Enter the height: "));
        const area = this.triangle(base, height);
        console.log(`Area of the triangle is: ${area.toFixed(2)}`);
    }

}

const temp = new MyClass()
temp.main()