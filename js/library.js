
function addBook(book) {
  var noBook = true;
  for(var i=0;i<bookArray.length;i++){
    if (bookArray[i].title === book.title){
      noBook = false;
    }
  }
  if (noBook){
    bookArray.push(book);
  }
  return noBook;
}

function removeBookByTitle(title) {
  var index;
  var noBook = true;
  for(var i=0;i<bookArray.length;i++){
    if (bookArray[i].title !== book.title){
      noBook = false;
    }else{
      index = i;
    }
  }
  if (noBook){
    bookArray.splice(index, 1);
  }
  return noBook;
}

function removeBookByAuthor(authorName) {
  var index;
  var hasAuthor = true;
  for(var i=0;i<bookArray.length;i++){
    if (bookArray[i].author !== book.author){
      hasAuthor = false;
    }else{
      index = i;
    }
  }
  if (hasAuthor){
    bookArray.splice(index, 1);
  }
  return hasAuthor;
  }

function getRandomBook() {
  var randomBook = bookArray[Math.floor(Math.random()*bookArray.length)];
  return randomBook;
}

function getBookByTitle(title) {

}

function getBooksByAuthor(authorName) {

}

function addBooks(books) {
  return Array.prototype.push(bookArray,books)
}

function getAuthors() {
  var authArray = [];
  var finalAuth = [];
  for(var i=0;i<bookArray.length;i++){
    if (typeof bookArray[i].author === 'string'){
      authArray.push(bookArray[i].author);
    }
  }
  for(var x=0;x<authArray.length;x++){
    if (finalAuth.indexOf(authArray[x]) < 0){
      finalAuth.push(authArray[x]);
    }
  }
  return finalAuth;
}

function getRandomAuthorName() {
  return getRandomBook().author;
}

function book(title, author, numberOfPages, publishDate){
	this.title = title;
	this.author = author;
  this.numberOfPages = numberOfPages;
  this.publishDate = publishDate;
}

var bookArray=[];
var bookArray2=[];
var book1=new book('Book1', 'Luke', 130, new Date('May 31 1985'))
var book2=new book('Book2', 'Coco', 126, new Date('July 26 1990'))
var book3=new book('Book3', 'Stryker', 109, new Date('March 15 2008'))
var book4=new book('Book4', 'Lilypuff', 102, new Date('February 4 2014'))
var book5=new book('Book5', 'Smudge', 101, new Date('July 6 2015'))
var book6=new book('Book6', 'Runway', 108, new Date('May 15 2008'))
var book7=new book('Book7', 'Lilypuff', 103, new Date('February 5 2014'))
