class AnimalOne {
    speak(): void {
        console.log("Animal makes a sound");
    }
}

class DogOne extends AnimalOne {
    speak(): void {
        super.speak(); 
        console.log("Dog barks");
    }
}

class CatOne extends AnimalOne {
    speak(): void {
        console.log("Cat meows");
    }
}

const myNewDog = new DogOne();
myNewDog.speak(); 