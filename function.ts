function sample(a: number, b : string) : void{
    console.log("number : ",a)
    console.log("string : ",b)
}

sample(1,"midhun")
// sample("hi",10)  // make an error because of the parameter order change

function sum(a : number, b : number ) : number {
    return a + b
}

console.log(sum(1,2))