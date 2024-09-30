// Function to return a random number
function getRandomNumber(items : number[]) : number {
    let randomIndex = Math.floor(Math.random() * items.length)
    return items[randomIndex]
}

// Function to return a random string
function getRandomString(items : string[]) : string {
    let randomIndex = Math.floor(Math.random() * items.length)
    return items[randomIndex]
}

//Function to return an element using any
function getRandomAnyElement(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

// This wil leads to an issue that type specifying in the return type and leads to less type safe

// Generalising these function
function getRandomElement<T>(items : T[]) : T {
    let randomIndex = Math.floor(Math.random() * items.length)
    return items[randomIndex]
}

const numbers = [1,2,3,4,5,6]
const res = getRandomElement<number>(numbers)
console.log(res)

// Generic function with multiple types
function merge<U,V>(obj1 : U , obj2 : V){
    return {
        ...obj1,
        ...obj2
    };
}

let resOne = merge(
    { name: 'John' },
    { jobTitle: 'Frontend Developer' }
);

let resTwo = merge(
    { name: 'John' },
    25
);
console.log(resOne);
console.log(resTwo)

// Generic constraint
function mergeOb<U extends object, V extends object>(obj1 : U , obj2 : V){
    return {
        ...obj1,
        ...obj2
    };
}

let person = mergeOb(
    { name: 'John' },
    {place: "ktpm"}
    // 25
);

console.log(person)  // make an error if we pass number instead ob object  bacause the function only accept two objects

// Type parameter
// -----------------

// prop() function accepts an object and a property name. It returns the value of the property.

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let str = prop({ name: 'John' }, 'name');
console.log(str);

// Type generic class example
// -----------------------------

class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }
    pop(): T {
        const poppedElement = this.elements.pop();
        if (poppedElement === undefined) {
            throw new Error('Unexpected error: element is undefined');
        }
        return poppedElement;
    }
}

let ns = new Stack<number>(5);

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

while (!ns.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    ns.push(n);
}


// Generic interface
// --------------------

// Describe object properties
interface Pair<K, V> {
    key: K;
    value: V;
}

let month: Pair<string, number> = {
    key: 'Jan',
    value: 1
};

console.log(month);

// Describe methods
interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T>{
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}

// Describe index types
interface options<T>{
    [name : string] : T
}

let inputOptions : options<boolean> = {
    'disabled' : false,
    'visible' : true
}