const prompt = require('prompt-sync')();

class Book {
    constructor(title, author, year, isAvailable) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = isAvailable;
    }

    borrowBook1() {
        this.isAvailable = false;

        displayOptions();
    }

    returnBook1() {
        this.isAvailable = true;

        displayOptions();
    }
}

class Library {
    constructor(books) {
        this.books = [];
    }

    addBook() {
        let book = new Book (
            prompt('what is the name of the book you wold like to add: '),
            prompt('what is the author of the book you wold like to add: '),
            prompt('what is the year of the book you wold like to add: '),
            true
        );
    
        this.books.push(book);
    
        displayOptions();
    }

    listAvailable() {
        for (let i=0; i<Library.length; i++) {
            if (this.books[i].isAvailable == true)
                console.log(this.books[i].title);
        }
    
        displayOptions();
    }

    borrowBook(title) {
        for (let i=0; i<this.books.length; i++){
            if (this.books[i].title === title && this.books[i].isAvailable) {
                this.books[i].borrowBook1();
            }
        }
        console.log(`sorry the book ${title} is unavailable`);
    }

    returnBook(title) {
        for (let i=0; i<this.books.length; i++){
            if (this.books[i].title == title && !this.books[i].isAvailable) {
                this.books[i].returnBook1();
            }
        }
        console.log(`sorry ${title} is not in our system`);
    }
}
lib = new Library();


function displayOptions() {
    console.log('1. Add a Book');
    console.log('2. List Available Books');
    console.log('3. Borrow a Book');
    console.log('4. Return a Book');
    console.log('5. Exit Program');

    choose()
}

function choose() {
    let choice = prompt('what would you like to view: ')
    while (choice != '5') {
        if (choice == '1') {
            lib.addBook();
        } else if (choice == '2') {
            lib.listAvailable();
        } else if (choice == '3') {
            lib.borrowBook(prompt('what is the book\'s title: '));
        } else if (choice == '4') {
            lib.returnBook(prompt('what is the book\'s title: '));
        } else {
            console.log('invalid option');
            choose();
        }
    }
    process.exit(0);
}

displayOptions();