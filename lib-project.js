const prompt = require('prompt-sync')();

let library = [
    { title: "1984", author: "George Orwell", year: 1949, isAvailable: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true },
    { title: "Moby Dick", author: "Herman Melville", year: 1851, isAvailable: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: true },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, isAvailable: true }
  ];

function addBook() {
    let book = {
        title: prompt('what is the name of the book you wold like to add: '),
        author: prompt('what is the author of the book you wold like to add: '),
        year: prompt('what is the year of the book you wold like to add: '),
        isAvailable: true
    };

    library.push(book);

    displayOptions();
}

function listAvailable() {
    for (let i=0; i<library.length; i++) {
        if (library[i].isAvailable == true)
            console.log(library[i].title);
    }

    displayOptions();
}

function borrowBook(title) {
    for (let i=0; i<library.length; i++){
        if (library[i].title == title) {
            library[i].isAvailable = false;
            displayOptions();
        }
    }
    console.log(`sorry the book ${title} is unavailable`);

    displayOptions();
}

function returnBook(title) {
    for (let i=0; i<library.length; i++){
        if (library[i].title == title) {
            library[i].isAvailable = true;
            displayOptions();
        }
    }
    console.log(`sorry ${title} is not in our system`);

    displayOptions();
}

function listAuthorBooks(author) {
    for (let i=0; i<library.length; i++) {
        if (library[i].author == author) {
            console.log(library[i].title);
        }
    }
    
    displayOptions();
}

function booksByYear(year) {
    for (let i=0; i<library.length; i++) {
        if (library[i].year < year) {
            console.log(library[i].title);
        }
    }

    displayOptions();
}

function removeBook(title) {
    for (let i=0; i<library.length; i++){
        if (library[i].title == title) {
            library.splice(i, 1);
            displayOptions();
        }
    }
    console.log(`sorry ${title} is not in our system`);

    displayOptions();
}


function displayOptions() {
    console.log('1. Add a Book');
    console.log('2. List Available Books');
    console.log('3. Borrow a Book');
    console.log('4. Return a Book');
    console.log('5. List Books by Author');
    console.log('6. Find Books Before Year');
    console.log('7. Remove a Book');
    console.log('8. Exit Program');

    choose()
}

function choose() {
    let choice = prompt('what would you like to view: ')
    while (choice != '8') {
        if (choice == '1') {
            addBook();
        } else if (choice == '2') {
            listAvailable();
        } else if (choice == '3') {
            borrowBook(prompt('what is the book\'s title: '));
        } else if (choice == '4') {
            returnBook(prompt('what is the book\'s title: '));
        } else if (choice == '5') {
            listAuthorBooks(prompt('what is the book\'s author: '))
        } else if (choice == '6') {
            booksByYear(prompt('before which year: '));
        } else if (choice == '7') {
            removeBook(prompt('what is the book\'s title: '));
        } else {
            console.log('invalid option');
            choose();
        }
    }
    process.exit(0);
}

displayOptions();