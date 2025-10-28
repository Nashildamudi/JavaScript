var book1 = {
    title: "millons_leads",
    author: "alex",
    publishedYear: 2025,
    summary: "books to generate leads"
};
console.log(book1);
var book2 = {
    title: "millons_leads",
    author: "alex",
    publishedYear: 2025,
};
console.log(book2);
function printBookDetails(book) {
    console.log(book.title, book.author, book.publishedYear);
    if (book.summary) {
        console.log(book.summary);
    }
}
// printBookDetails(book1)
printBookDetails(book2);
