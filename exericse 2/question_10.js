var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

let sortedLibrary = library.map((book) => ({
  author: book.author,
  title: book.title,
  libraryID: book.libraryID,
}));
 
console.log(sortedLibrary);