let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const autherName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;

    if(bookName && autherName && bookDescription && !isNaN(pagesNumber)){
        const book = {
            name: bookName,
            autherName: autherName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();   
    }else{
        alert("Please fill all the fields")
    }

}

function showBooks() {
    const bookDiv = books.map((book,index) => `<h1>Book Number: ${index + 1}</h1>
    <p><strong>Book Name: </strong> ${book.name}</p>
    <p><strong>Auther Name: </strong> ${book.autherName}</p>
    <p><strong>Book Description: </strong> ${book.bookDescription}</p>
    <p><strong>No. of Pages: </strong> ${book.pagesNumber}</p>
    <button onclick= "editbook(${index})">Edit</button>`);

    document.getElementById('books').innerHTML = bookDiv.join('');
    
}

function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.autherName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index,1);
    showBooks();
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}