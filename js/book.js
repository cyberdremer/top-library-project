
let library = new Library();



function Book(title, author, numPages, datePublished, read){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.datePublished = datePublished;
}


Book.prototype.getTitle = function(){
    return this.title;
}

Book.prototype.getAuthor = function(){
    return this.author;
}

Book.prototype.getNumPages = function(){
    return this.numPages;
}

Book.prototype.getDatePublished = function(){
    return this.datePublished;
}


function Library(){
    this.library = [];
}

Library.prototype.addBook = function(Book){
    this.library.push(Book)
}

Library.prototype.removeBook = function(index){
    this.library.splice(index, 1);
}



const createButton = document.getElementById("create-book");
const closeFormButton = document.getElementById("cancel");
const submitBookInfo = document.getElementById("submit-book")
const submitBookForm = document.getElementById("submit-book-form");
const removeButton = document.getElementById("remove-button");
const bookContainer = document.querySelector(".books");


function openForm(){
    document.getElementById("book-registration").style.display = "block";
}

function closeForm(){
    document.getElementById("book-registration").style.display = "none";
}

createButton.addEventListener('click', openForm);


closeFormButton.addEventListener('click', closeForm);


submitBookInfo.addEventListener("click", (Event) => {
    Event.preventDefault();
    addNewBookToLibrary();
    closeForm();
})



function removeBook(book){
    const index = Array.prototype.indexOf.call(bookContainer.children, book)
    library.removeBook(index);
    book.remove();

}




function generateBookText(book){
    const author = book.getAuthor();
    const title = book.getTitle();
    const datePublished = book.getDatePublished();
    const numPages = book.getNumPages();
    const bookInformation = document.createElement("div");


    const paraOne = document.createElement("h1")
    const paraTwo = document.createElement("p")
    const paraThree = document.createElement("p")
    const paraFour = document.createElement("p")

    paraOne.textContent = `${title}`;
    paraTwo.textContent = `Author's Name: ${author}`;
    paraThree.textContent = `Date Published: ${datePublished}`;
    paraFour.textContent = `Number of Pages: ${numPages}`;


    bookInformation.appendChild(paraOne);
    bookInformation.appendChild(paraTwo);
    bookInformation.appendChild(paraThree);
    bookInformation.appendChild(paraFour);
    return bookInformation;

}


function createBookCard(bookInformation){
    const buttonDiv = document.createElement("div");
    const book = document.createElement("div");
    const removeButton = document.createElement("button");
    
    bookContainer.appendChild(book);

    removeButton.textContent = "Remove Book From Library";
    removeButton.id = "remove-button";

    removeButton.addEventListener('click', () => removeBook(book));
    book.className = "book";

    buttonDiv.className = "book-buttons";
    buttonDiv.appendChild(removeButton);
    book.appendChild(bookInformation);
    book.appendChild(buttonDiv);


}

function addNewBookToLibrary(){
    const newBook = new Book(
        submitBookForm.querySelector("#book-name").value,
        submitBookForm.querySelector("#author-name").value,
        submitBookForm.querySelector("#num-pages").value,
        submitBookForm.querySelector("#publish-date").value

    )
    library.addBook(newBook);
    const bookInformation = generateBookText(newBook);
    createBookCard(bookInformation);


    
}


