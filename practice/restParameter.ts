// Rest parameter

function addrestpara(...nums : number[]) : number {
    return nums.reduce((a : number , b : number )=> a + b , 0)
}

console.log(addrestpara(1,2,3,4,5))
console.log(addrestpara())

// Rest parameter with multiple type
// it is using the unon type

function combine(...args : (number | string)[]): [number , string] {
    let total = 0
    let str = ''

    args.forEach((arg) =>{
        if(typeof arg === "number"){
            total += arg
        }else if(typeof arg === "string"){
            str += arg
        }
    })

    return [total, str]
}

console.log(combine(1,2,3,"midhun",5,6,55,34,23,"Hi"))
