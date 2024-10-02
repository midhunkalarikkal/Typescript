class Library {
    books: Book[] = [];    // Array of objects of type Book
    users: User[] = [];    //Array of objects of type User

    addBook(book: Book): void {
        this.books.push(book)
        console.log(`"${book.title}" added to the library.`)
    }

    removeBook(book: Book): void {
        const index = this.books.indexOf(book)
        if (index !== -1) {
            this.books.slice(index, 1)
            console.log(`\n${book.title} remove from the library.`)
        } else {
            console.log(`\n${book.title} not found in the library.`)
        }
    }

    listAvailableBooks(username: string): void {
        console.log(`\nAviable Books In The Library checking by ${username}`)
        console.log("--------------------------------------------------------")
        let noBook: boolean = true;
        this.books.forEach((book) => {
            if (book.available) {
                console.log(`${book.title} by ${book.author}`)
                noBook = false
            }
        })
        if (noBook) {
            console.log("No books available in library.")
        }
    }
}

class Book {
    title: string;
    author: string;
    ISBN: string;
    available: boolean;

    constructor(title: string, author: string, ISBN: string, available: boolean) {
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this.available = available;
    }

    checkAvailability(): boolean {
        return this.available
    }

    borrowBook(username: string): void {
        if (this.available) {
            this.available = false
            console.log(`\n${username} => ${this.title} has been borrowed.`)
        } else {
            console.log(`\n${this.title} is currently unavailable.`)
        }
    }

    returnBook(username: string): void {
        this.available = true
        console.log(`\n${username} => ${this.title} has been returned.`)
    }
}

class User {
    name: string;
    userId: number;
    librarian: boolean;

    constructor(name: string, userId: number, librarian: boolean) {
        this.name = name,
            this.userId = userId
        this.librarian = librarian
        console.log(`${name} joined as ${librarian ? "librarian" : "user"} in library`)
    }

    viewAvailableBooks(library: Library): void {
        library.listAvailableBooks(this.name)
    }
}

class Librarian extends User {
    addBook(library: Library, book: Book): void {
        library.addBook(book)
    }

    removeBook(library: Library, book: Book): void {
        library.removeBook(book)
    }
}

class Member extends User {
    borrowedBooks: Book[] = []

    borrowBook(book: Book): void {
        if (book.checkAvailability()) {
            book.borrowBook(this.name)
            this.borrowedBooks.push(book)
        }
    }

    returnBook(book: Book): void {
        const index = this.borrowedBooks.indexOf(book)
        if (index !== -1) {
            this.borrowedBooks.slice(index, 1)
            book.returnBook(this.name)
        } else {
            console.log(`\n ${this.name} has borrowed this book`)
        }
    }
}


console.log("Library management")
console.log("-------------------")
const library = new Library()

const librarian = new Librarian("john", 1, true)
const memberOne = new Member("Midhun", 2, false)
const memberTwo = new Member("Sova", 3, false)

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "12345", true);
const book2 = new Book("1984", "George Orwell", "67890", true);

console.log("\nBooks Added")
console.log("------------")
librarian.addBook(library, book1)
librarian.addBook(library, book2)

memberOne.viewAvailableBooks(library)
memberOne.borrowBook(book1)
memberTwo.viewAvailableBooks(library)
memberTwo.borrowBook(book1)
memberTwo.borrowBook(book2)
memberOne.viewAvailableBooks(library)
memberOne.returnBook(book1)
memberOne.viewAvailableBooks(library)
memberTwo.returnBook(book2)
memberTwo.viewAvailableBooks(library)


