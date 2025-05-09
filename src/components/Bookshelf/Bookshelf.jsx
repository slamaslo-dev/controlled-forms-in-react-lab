import { useState } from "react";

function Bookshelf() {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);
  
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };  

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h2>Add a Book</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
            <label htmlFor="author">Author:</label>
            <input
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
            <button type="submit">Add Book</button>
          </form>
        </div>
        <div className="bookCardsDiv">
        {books.map((book, index) => (
              <div key={index} className="bookCard">
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Bookshelf;
