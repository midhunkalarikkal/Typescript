class calculator{
    add(a : number , b : number ): number;
    add(a : string , b : string ): string;
    add(a : number | string , b : number | string) : number | string {
        if(typeof a === "number" && typeof b === "number"){
            return a + b
        }
        if(typeof a === "string" && typeof b === "string"){
            return a + b
        }
        throw new Error("Error")
    }
}

const calc = new calculator();
console.log(calc.add(1,2))
console.log(calc.add("Midhun"," Hi"))