import React, { useEffect, useState } from "react";
import { Input, Button } from "antd"; 
import DeleteBook from "../BookDelete/BookDelete";

const BookApp = () => {
  const [book, setBook] = useState(''); 
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log(books);
  }, [books]);

  const deleteBook =(index)=>{
    const newBooks=books.filter((book,i)=>i !==index);
    setBooks(newBooks);
  };

  const addBook = () => {
    if (book.trim() !== "") { 
      setBooks([...books, { title: book }]);
      console.log(books);
      setBook(""); 
    }
  };

  return (
    <div>
      <h1>Kütüphane</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Input
          value={book} 
          placeholder="Yeni Kitap Ekle"
          onChange={(e) => setBook(e.target.value)} 
        />
        <Button onClick={addBook} type="primary">
          Kitap Ekle
        </Button>
      </div>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title}
          <Button type="danger" className="red-button"onClick={()=>deleteBook(index)}>Kitabı Sil</Button></li>
        ))}
      </ul>
    </div>
  );
};

export default BookApp;
