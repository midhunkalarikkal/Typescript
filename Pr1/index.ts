class Library{
    books : Book[] = [];    // Array of objects of type Book
    users : User[] = [];    //Array of objects of type User

    addBook(book : Book) : void{
        this.books.push(book)
        console.log(`${book.title} added to the library.`)
    }

    removeBook(book : Book) : void{
        const index = this.books.indexOf(book)
        if(index !== -1){
            this.books.slice(index,1)
            console.log(`${book.title} remove from the library.`)
        }else{
            console.log(`${book.title} not found in the library.`)
        }
    }

    listAvailableBooks() : void{
        console.log("Aviable Books In The Library")
        console.log("----------------------------")
        this.books.forEach((book)=>{
            if(book.available){
                    console.log(`${book.title} by ${book.author}`)
            }
        })
    }
}