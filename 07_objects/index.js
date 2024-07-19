// Activity - 1

const Book = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    year: 1997,
};

console.log(Book);
console.log(Book.title);
console.log(Book.author);

// Activity - 2

Book.returnString = function () {
    return `${this.title} by ${this.author} was published in ${this.year}`;
};

console.log(Book.returnString());

Book.updateYear = function (year) {
    this.year = year;
    return `The year of the book ${this.title} has been updated to ${this.year}`;
};
console.log(Book.updateYear(2000));

// Activity - 3

const library = {
    book1: {
        title: "Book 1",
        author: "Author 1",
    },
    book2: {
        title: "Book 2",
        author: "Author 2",
    },
    book3: {
        title: "Book 3",
        author: "Author 3",
    },
};

console.log(library);
console.log(library.book1);

// Activity - 4
for (const key in Book) {
    console.log(key);
}

const keys = Object.keys(Book);
console.log(keys);
const values = Object.values(Book);
console.log(values);
